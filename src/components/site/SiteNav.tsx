import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "./content";
import { useInquiryModal } from "./InquiryModal";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { openInquiry } = useInquiryModal();
  const solid = scrolled || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1280) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b pr-(--scrollbar-comp) transition-[background-color,border-color,box-shadow] duration-300",
        solid
          ? "border-border bg-ivory/95 shadow-[0_10px_28px_-22px_oklch(0.2_0.02_70/0.55)] backdrop-blur-md"
          : "border-white/15 bg-[oklch(0.16_0.012_70/0.58)] backdrop-blur-md",
      )}
    >
      <div className="mx-auto grid h-[4.75rem] max-w-[90rem] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8 xl:h-20 xl:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] xl:px-10">
        <a href="#top" className="flex min-w-0 items-center gap-3.5 justify-self-start">
          <img
            src="/logo.svg"
            alt="Goldcrest Views"
            width={56}
            height={56}
            className="size-14 shrink-0"
          />
          <span className="min-w-0">
            <span
              className={cn(
                "block truncate font-display text-lg leading-none font-semibold tracking-[0.04em]",
                solid ? "text-foreground" : "text-on-dark",
              )}
            >
              Goldcrest Views
            </span>
            <span
              className={cn(
                "mt-1.5 block text-[0.58rem] tracking-[0.34em] uppercase",
                solid ? "text-muted-foreground" : "text-on-dark/70",
              )}
            >
              Islamabad
            </span>
          </span>
        </a>

        <nav className="hidden items-center justify-center gap-6 xl:flex 2xl:gap-9" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "text-[0.68rem] font-normal tracking-[0.18em] uppercase transition-colors duration-300 2xl:tracking-[0.22em]",
                solid
                  ? "text-ink-soft hover:text-foreground"
                  : "text-on-dark/80 hover:text-on-dark",
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-3 justify-self-end">
          <button
            type="button"
            onClick={openInquiry}
            className={cn(
              "hidden h-11 items-center px-6 text-[0.68rem] font-medium tracking-[0.2em] uppercase transition-colors duration-300 sm:inline-flex",
              solid
                ? "bg-ink text-ivory hover:bg-gold-deep hover:text-ink"
                : "border border-gold-light/80 bg-transparent text-on-dark hover:border-gold-light hover:bg-gold-light hover:text-ink",
            )}
          >
            Request a call
          </button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "grid h-10 w-10 shrink-0 place-items-center border transition-colors xl:hidden",
              solid
                ? "border-border text-foreground hover:border-gold-deep"
                : "border-white/30 text-on-dark hover:border-gold-light",
            )}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-ivory xl:hidden">
          <nav className="mx-auto flex max-w-[90rem] flex-col px-5 py-2 sm:px-8" aria-label="Mobile">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/70 py-4 text-[0.75rem] tracking-[0.18em] text-foreground uppercase"
              >
                {l.label}
              </a>
            ))}
            <button
              type="button"
              className="my-5 h-12 bg-ink text-[0.72rem] font-medium tracking-[0.2em] text-ivory uppercase transition-colors hover:bg-gold-deep hover:text-ink"
              onClick={() => {
                setOpen(false);
                openInquiry();
              }}
            >
              Request a call
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
