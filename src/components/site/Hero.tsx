import { ArrowDown, MapPin, Building2, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InquiryForm } from "./InquiryForm";
import heroTower from "@/assets/hero-tower.jpg";

const STATS = [
  { icon: Building2, label: "High-rise living", value: "Tower residences" },
  { icon: Layers, label: "Layouts", value: "Studio – 3 bed" },
  { icon: MapPin, label: "Location", value: "Islamabad" },
];

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <img
        src={heroTower}
        alt="Goldcrest Views tower at golden hour above the Islamabad skyline"
        width={1920}
        height={1200}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(105deg,oklch(0.18_0.02_70/0.88)_0%,oklch(0.18_0.02_70/0.62)_45%,oklch(0.18_0.02_70/0.28)_100%)]"
      />

      <div className="mx-auto max-w-7xl px-5 pt-32 pb-16 sm:px-8 lg:pt-44 lg:pb-24">
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_minmax(0,460px)] lg:gap-16">
          <div className="reveal-up max-w-xl">
            <p className="eyebrow text-[oklch(0.86_0.13_88)]">Now selling · Islamabad</p>
            <h1 className="mt-5 font-display text-[clamp(2.5rem,6.2vw,4.5rem)] leading-[1.03] text-[oklch(0.99_0.005_90)]">
              Elevate your life
              <span className="block text-gold-gradient">at Goldcrest Views</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-[oklch(0.93_0.008_90)]/85 sm:text-lg">
              Studio, 1, 2 and 3-bedroom apartments in a landmark high-rise address — designed for
              the way Islamabad is growing upward.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button variant="gold" size="xl" asChild>
                <a href="#inquiry">Book a viewing</a>
              </Button>
              <Button
                variant="goldOutline"
                size="xl"
                className="border-[oklch(0.99_0.005_90)]/40 text-[oklch(0.99_0.005_90)] hover:bg-[oklch(0.99_0.005_90)]/10"
                asChild
              >
                <a href="#gallery">Explore the gallery</a>
              </Button>
            </div>

            <dl className="mt-12 grid max-w-lg grid-cols-2 gap-x-6 gap-y-6 border-t border-[oklch(0.99_0.005_90)]/20 pt-8 sm:grid-cols-3">
              {STATS.map(({ icon: Icon, label, value }) => (
                <div key={label} className="min-w-0">
                  <Icon className="size-4 text-[oklch(0.86_0.13_88)]" aria-hidden />
                  <dt className="mt-2 text-[0.65rem] tracking-[0.18em] text-[oklch(0.93_0.008_90)]/60 uppercase">
                    {label}
                  </dt>
                  <dd className="mt-1 font-display text-lg text-[oklch(0.99_0.005_90)]">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div
            id="inquiry"
            className="reveal-up scroll-mt-28 rounded-lg border border-border/60 bg-card/95 p-6 shadow-[var(--shadow-lift)] backdrop-blur-xl sm:p-8"
          >
            <p className="eyebrow">Private consultation</p>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl">Request current pricing</h2>
            <p className="mt-2 mb-6 text-sm text-muted-foreground">
              Share a few details and our team will send availability, floor plans and the current
              payment plan.
            </p>
            <InquiryForm tone="onImage" />
          </div>
        </div>

        <a
          href="#overview"
          className="mt-14 inline-flex items-center gap-2 text-[0.7rem] tracking-[0.2em] text-[oklch(0.93_0.008_90)]/70 uppercase transition-colors hover:text-[oklch(0.99_0.005_90)]"
        >
          <ArrowDown className="size-4 animate-bounce" aria-hidden />
          Discover the project
        </a>
      </div>
    </section>
  );
}
