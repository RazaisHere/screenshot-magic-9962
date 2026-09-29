import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { X } from "lucide-react";
import { InquiryForm } from "./InquiryForm";
import { cn } from "@/lib/utils";

type ModalState = "closed" | "open" | "closing";

const InquiryModalContext = createContext<{ openInquiry: () => void }>({
  openInquiry: () => {},
});

export function useInquiryModal() {
  return useContext(InquiryModalContext);
}

export function InquiryModalProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ModalState>("closed");
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const openInquiry = useCallback(() => setState("open"), []);

  const close = useCallback(() => {
    setState((s) => (s === "open" ? "closing" : s));
  }, []);

  // Scroll lock, Escape-to-close and initial focus while the modal is mounted.
  useEffect(() => {
    if (state === "closed") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [state, close]);

  useEffect(() => {
    if (state !== "closing") return;
    const t = setTimeout(() => setState("closed"), 190);
    return () => clearTimeout(t);
  }, [state]);

  const closing = state === "closing";

  return (
    <InquiryModalContext.Provider value={{ openInquiry }}>
      {children}
      {state !== "closed" && (
        <div
          className={cn(
            "fixed inset-0 z-[100] overflow-y-auto bg-ink/60 backdrop-blur-sm",
            closing ? "modal-backdrop-out" : "modal-backdrop-in",
          )}
          onClick={close}
        >
          <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Request an appointment"
              onClick={(e) => e.stopPropagation()}
              className={cn(
                "relative w-full max-w-[460px] rounded-md border border-border bg-card shadow-[var(--shadow-lift)]",
                closing ? "modal-panel-out" : "modal-panel-in",
              )}
            >
              <button
                ref={closeBtnRef}
                type="button"
                aria-label="Close inquiry form"
                onClick={close}
                className="absolute top-3 right-3 z-10 grid size-9 place-items-center rounded-full border border-border bg-background/85 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                <X className="size-4" aria-hidden />
              </button>
              <div className="max-h-[calc(100dvh-2rem)] overflow-y-auto p-6 sm:p-8">
                <p className="eyebrow">Private consultation</p>
                <h2 className="mt-2 font-display text-2xl sm:text-3xl">Request current pricing</h2>
                <p className="mt-2 mb-6 text-sm text-muted-foreground">
                  Share a few details and our team will send availability, floor plans and the
                  current payment plan.
                </p>
                <InquiryForm />
              </div>
            </div>
          </div>
        </div>
      )}
    </InquiryModalContext.Provider>
  );
}
