import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "./content";
import { useInquiryModal } from "./InquiryModal";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { openInquiry } = useInquiryModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/80 bg-background/92 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 sm:px-8 lg:grid-cols-[auto_1fr_auto] lg:py-4">
        <a href="#top" className="flex min-w-0 items-center gap-3.5">
          <img
            src="/logo.svg"
            alt="Goldcrest Views"
            width={40}
            height={40}
            className="size-10 shrink-0"
          />
          <span className="min-w-0">
            <span
              className={cn(
                "block truncate font-display text-lg leading-none font-semibold tracking-[0.02em]",
                scrolled ? "text-foreground" : "text-background",
              )}
            >
              Goldcrest Views
            </span>
            <span
              className={cn(
                "mt-1.5 block text-[0.58rem] tracking-[0.34em] uppercase",
                scrolled ? "text-muted-foreground" : "text-background/70",
              )}
            >
              Islamabad
            </span>
          </span>
        </a>

        <nav className="hidden justify-center gap-9 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "relative text-[0.72rem] tracking-[0.18em] uppercase transition-colors after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-gold-deep after:transition-all after:duration-300 hover:after:w-full",
                scrolled
                  ? "text-ink-soft hover:text-foreground"
                  : "text-background/85 hover:text-background",
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2.5">
          <Button
            variant="gold"
            size="lg"
            className="hidden text-[0.68rem] tracking-[0.16em] sm:inline-flex"
            onClick={openInquiry}
          >
            Request a call
          </Button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "grid h-10 w-10 shrink-0 place-items-center rounded-sm border transition-colors lg:hidden",
              scrolled
                ? "border-border text-foreground"
                : "border-background/30 text-background backdrop-blur-sm",
            )}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-2 sm:px-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3.5 text-sm tracking-[0.1em] uppercase last:border-0"
              >
                {l.label}
              </a>
            ))}
            <Button
              variant="gold"
              size="xl"
              className="my-4"
              onClick={() => {
                setOpen(false);
                openInquiry();
              }}
            >
              Request a call
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
