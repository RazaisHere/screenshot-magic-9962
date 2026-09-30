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

  const locked = state !== "closed";

  // Scroll lock, Escape-to-close and initial focus while the modal is mounted.
  // Padding replaces the scrollbar so the page does not shift sideways.
  useEffect(() => {
    if (!locked) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);

    const scrollbarWidth = Math.max(0, window.innerWidth - document.documentElement.clientWidth);
    const prevOverflow = document.body.style.overflow;
    const prevPaddingRight = document.body.style.paddingRight;
    const root = document.documentElement;
    const prevComp = root.style.getPropertyValue("--scrollbar-comp");

    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    root.style.setProperty("--scrollbar-comp", `${scrollbarWidth}px`);
    closeBtnRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPaddingRight;
      if (prevComp) root.style.setProperty("--scrollbar-comp", prevComp);
      else root.style.removeProperty("--scrollbar-comp");
    };
  }, [locked, close]);

  useEffect(() => {
    if (state !== "closing") return;
    const t = setTimeout(() => setState("closed"), 260);
    return () => clearTimeout(t);
  }, [state]);

  const closing = state === "closing";

  return (
    <InquiryModalContext.Provider value={{ openInquiry }}>
      {children}
      {state !== "closed" && (
        <div
          className={cn(
            "fixed inset-0 z-[100] overflow-y-auto bg-ink/60 pr-(--scrollbar-comp) backdrop-blur-sm",
            closing ? "modal-backdrop-out" : "modal-backdrop-in",
          )}
          onClick={close}
        >
          <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Request current pricing"
              onClick={(e) => e.stopPropagation()}
              className={cn(
                "relative w-full max-w-lg overflow-hidden rounded-[1.25rem] border border-gold/35 bg-ink text-on-dark shadow-[0_28px_80px_oklch(0_0_0/0.5)]",
                closing ? "modal-panel-out" : "modal-panel-in",
              )}
            >
              <div aria-hidden className="h-px bg-[image:var(--gradient-gold)]" />
              <button
                ref={closeBtnRef}
                type="button"
                aria-label="Close inquiry form"
                onClick={close}
                className="absolute top-4 right-4 z-10 grid size-9 place-items-center rounded-full border border-gold/40 text-on-dark transition-colors hover:bg-on-dark/10"
              >
                <X className="size-4" aria-hidden />
              </button>
              <div className="max-h-[calc(100dvh-2rem)] overflow-y-auto px-5 pt-8 pb-6 sm:px-8 sm:pt-10 sm:pb-8">
                <p className="eyebrow text-center text-gold-light">Private consultation</p>
                <h2 className="mt-2 text-center font-display text-[2rem] leading-none text-on-dark sm:text-4xl">
                  Request current pricing
                </h2>
                <p className="mx-auto mt-3 max-w-sm text-center font-sans text-sm leading-relaxed text-on-dark-muted">
                  Share a few details and our team will send availability, floor plans and the
                  current payment plan.
                </p>
                <div aria-hidden className="mx-auto mt-5 mb-6 h-px w-16 bg-[image:var(--gradient-gold)]" />
                <InquiryForm tone="onImage" />
              </div>
            </div>
          </div>
        </div>
      )}
    </InquiryModalContext.Provider>
  );
}
