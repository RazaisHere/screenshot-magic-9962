import { InquiryForm } from "./InquiryForm";

const awards = [
  {
    src: "/best%20develpers.png",
    alt: "Luxury Lifestyle Awards 2026: Giga Group of Companies, Best Luxury Real Estate Developer, Pakistan",
  },
  {
    src: "/BestLuxuryLifeStyle.png",
    alt: "Luxury Lifestyle Awards 2026: Giga Group of Companies, Best Luxury High Rise Living, Pakistan",
  },
  {
    src: "/BestLuxuryCommercial.png",
    alt: "Luxury Lifestyle Awards 2026: Giga Group of Companies, Best Luxury Commercial Development, Pakistan",
  },
];

function HeroAwards({ className = "", stacked = false }: { className?: string; stacked?: boolean }) {
  const images = awards.map((award) => (
    <img
      key={award.src}
      src={award.src}
      alt={award.alt}
      width={1078}
      height={430}
      className={stacked ? "h-auto w-full object-contain" : "h-auto min-w-0 flex-1 object-contain"}
    />
  ));

  if (stacked) {
    return (
      <div className={`grid grid-cols-2 gap-2 ${className}`}>
        {images[0]}
        {images[1]}
        <div className="col-span-2 flex justify-center">
          <div className="w-[calc(50%-0.25rem)]">{images[2]}</div>
        </div>
      </div>
    );
  }

  return <div className={`flex items-center gap-2 ${className}`}>{images}</div>;
}

export function Hero() {

  return (
    <section id="top" className="relative isolate flex h-svh flex-col overflow-hidden">
      <img
        src="/WhatsApp%20Image%202026-09-30%20at%2012.59.20%20PM.jpeg"
        alt="Goldcrest Views towers lit at night above the Islamabad skyline"
        width={1600}
        height={827}
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,oklch(0.12_0.02_70/0.9)_0%,oklch(0.12_0.02_70/0.78)_100%)] lg:bg-[linear-gradient(105deg,oklch(0.12_0.02_70/0.82)_0%,oklch(0.12_0.02_70/0.42)_38%,oklch(0.12_0.02_70/0.22)_100%)]"
      />

      <div className="mx-auto flex min-h-0 w-full max-w-7xl flex-1 flex-col px-5 pt-[4.75rem] pb-2 sm:px-8 xl:pt-20">
        <div className="hero-stack grid min-h-0 flex-1 content-center items-center gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:gap-10">
          <div className="reveal-up hidden lg:block lg:self-center">
            <p className="eyebrow text-gold-light lg:text-sm">In progress · Downtown Giga</p>
            <h1 className="mt-2 whitespace-nowrap font-display text-[clamp(1.35rem,4.2vw,2.6rem)] leading-none text-on-dark lg:text-[clamp(2.6rem,3.8vw,4.75rem)]">
            Goldcrest<span className="text-gold-gradient"> Views</span>
            </h1>
            <p className="mt-2 max-w-xl text-base leading-snug text-on-dark-muted/85 sm:text-lg lg:mt-4 lg:text-xl lg:leading-relaxed">
              Eight 40-storey towers in the heart of Downtown Giga, DHA II Islamabad.
            </p>

            <HeroAwards className="mt-4 max-w-xl" />
          </div>

          <h1 className="hero-mobile-title reveal-up text-center font-display text-[clamp(2.15rem,10vw,3rem)] leading-none text-on-dark lg:hidden">
          Goldcrest<span className="text-gold-gradient"> Views</span>
          </h1>

          <div
            id="inquiry"
            className="hero-inquiry reveal-up scroll-mt-28 rounded-[0.7rem] border p-3 sm:p-5 lg:self-center lg:p-6"
          >
          
            <h2 className="mb-4 text-center font-display text-xl text-on-dark sm:text-2xl lg:mt-1">
              Request Information
            </h2>
            <InquiryForm tone="onImage" compact />
          </div>

          <HeroAwards stacked className="mx-auto w-full max-w-md lg:hidden" />
        </div>
      </div>
    </section>
  );
}
