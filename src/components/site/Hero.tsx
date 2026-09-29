import { ArrowDown, MapPin, Building2, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InquiryForm } from "./InquiryForm";
import { useInquiryModal } from "./InquiryModal";

const STATS = [
  { icon: Building2, label: "Towers", value: "Seven · 40 storeys" },
  { icon: Layers, label: "Layouts", value: "Studio – duplex" },
  { icon: MapPin, label: "Location", value: "Giga City" },
];

export function Hero() {
  const { openInquiry } = useInquiryModal();

  return (
    <section id="top" className="relative isolate flex h-svh flex-col overflow-hidden">
      <img
        src="/AwardBGWebsite1920x1080.jpg.jpeg"
        alt="Luxury Lifestyle Awards 2026 trophy for Giga Group of Companies"
        width={1920}
        height={1080}
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,oklch(0.12_0.02_70/0.9)_0%,oklch(0.12_0.02_70/0.78)_100%)] lg:bg-[linear-gradient(105deg,oklch(0.12_0.02_70/0.82)_0%,oklch(0.12_0.02_70/0.42)_38%,oklch(0.12_0.02_70/0.22)_100%)]"
      />

      <div className="mx-auto flex min-h-0 w-full max-w-7xl flex-1 flex-col px-5 pt-[4.75rem] pb-2 sm:px-8 xl:pt-20">
        <div className="hero-stack grid min-h-0 flex-1 content-center items-center gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:gap-10">
          <div className="reveal-up max-w-2xl lg:self-center">
            <p className="eyebrow text-gold-light lg:text-[0.8rem]">In progress · Giga City</p>
            <h1 className="mt-2 font-display text-[clamp(1.7rem,4.6vh,3.35rem)] leading-[1.05] text-on-dark lg:text-[clamp(2.6rem,6vh,4.35rem)]">
              Elevate your life
              <span className="block text-gold-gradient">at Goldcrest Views</span>
            </h1>
            <p className="mt-2 max-w-xl text-sm leading-snug text-on-dark-muted/85 sm:text-base lg:mt-4 lg:text-lg lg:leading-relaxed">
              Seven 40-storey towers in Giga City — studios, 1–4 bedroom apartments, penthouses and
              duplexes, with smart-home technology and world-class amenities.
            </p>

            <div className="mt-4 grid w-full max-w-md grid-cols-1 gap-2 min-[420px]:grid-cols-2">
              <Button variant="gold" size="lg" type="button" className="w-full lg:h-12 lg:text-sm" onClick={openInquiry}>
                Book a viewing
              </Button>
              <Button
                variant="goldOutline"
                size="lg"
                className="w-full border-on-dark/40 text-on-dark hover:bg-on-dark/10 lg:h-12 lg:text-sm"
                asChild
              >
                <a href="#gallery">Explore the gallery</a>
              </Button>
            </div>

            <dl className="mt-4 grid max-w-lg grid-cols-3 gap-x-3 border-t border-on-dark/20 pt-3">
              {STATS.map(({ icon: Icon, label, value }) => (
                <div key={label} className="min-w-0">
                  <Icon className="size-3.5 text-gold-light" aria-hidden />
                  <dt className="mt-1.5 text-[0.6rem] tracking-[0.14em] text-on-dark-muted/65 uppercase lg:text-xs">
                    {label}
                  </dt>
                  <dd className="mt-0.5 font-display text-sm leading-tight text-on-dark sm:text-base lg:text-xl">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div
            id="inquiry"
            className="hero-inquiry reveal-up scroll-mt-28 rounded-lg border border-border/60 bg-card/95 p-3 shadow-[var(--shadow-lift)] backdrop-blur-xl sm:p-5 lg:self-center lg:p-6"
          >
            <p className="eyebrow">Private consultation</p>
            <h2 className="mt-1 mb-2 font-display text-xl sm:text-2xl">Request current pricing</h2>
            <InquiryForm tone="onImage" compact />
          </div>
        </div>

        <a
          href="#overview"
          className="mx-auto mt-1 flex w-fit shrink-0 flex-col items-center gap-0.5 text-[0.65rem] tracking-[0.2em] text-on-dark-muted/70 uppercase transition-colors hover:text-on-dark"
        >
          Scroll
          <ArrowDown className="size-3.5 animate-bounce" aria-hidden />
        </a>
      </div>
    </section>
  );
}
