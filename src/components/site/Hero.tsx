import { Button } from "@/components/ui/button";
import { InquiryForm } from "./InquiryForm";

export function Hero() {

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
          <div className="reveal-up hidden lg:block lg:self-center">
            <p className="eyebrow text-gold-light lg:text-sm">In progress · Giga City</p>
            <h1 className="mt-2 whitespace-nowrap font-display text-[clamp(1.35rem,4.2vw,2.6rem)] leading-none text-on-dark lg:text-[clamp(2.6rem,3.8vw,4.75rem)]">
            The <span className="text-gold-gradient">Goldcrest Views</span>
            </h1>
            <p className="mt-2 max-w-xl text-base leading-snug text-on-dark-muted/85 sm:text-lg lg:mt-4 lg:text-xl lg:leading-relaxed">
              Seven 40-storey towers in the heart of Giga City, from studios to duplexes beside Giga Mall.
            </p>

            <div className="mt-3 lg:mt-4">
              <Button
                variant="goldOutline"
                size="lg"
                className="border-on-dark/40 text-on-dark hover:bg-on-dark/10 lg:h-12 lg:text-base"
                asChild
              >
                <a href="#gallery">Explore the gallery</a>
              </Button>
            </div>
          </div>

          <h1 className="hero-mobile-title reveal-up text-center font-display text-[clamp(2.15rem,10vw,3rem)] leading-none text-on-dark lg:hidden">
            The <span className="text-gold-gradient">Goldcrest Views</span>
          </h1>

          <div
            id="inquiry"
            className="hero-inquiry reveal-up scroll-mt-28 rounded-lg border p-3 sm:p-5 lg:self-center lg:p-6"
          >
            <p className="eyebrow hidden lg:block">Private consultation</p>
            <h2 className="mb-4 font-display text-2xl text-on-dark sm:text-3xl lg:mt-1">
              Request current pricing
            </h2>
            <InquiryForm tone="onImage" compact />
          </div>
        </div>
      </div>
    </section>
  );
}
