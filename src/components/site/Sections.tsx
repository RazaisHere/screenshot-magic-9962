import { useRef, type ReactNode } from "react";
import {
  AMENITIES,
  DUBAI_TOWERS,
  EXPERIENCES,
  FAQS,
  HIGHLIGHTS,
  PAYMENT_STEPS,
  TESTIMONIALS,
} from "./content";
import { Button } from "@/components/ui/button";
import { useInquiryModal } from "./InquiryModal";
import { MobileCardCarousel } from "./MobileCardCarousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  BedDouble,
  Building2,
  ShieldCheck,
  SquareParking,
  Trees,
  Users,
  Wallet,
  Waves,
} from "lucide-react";
import interior from "@/assets/interior.jpg";

function InquiryCta({
  children,
  variant,
  size = "xl",
  className,
}: {
  children: ReactNode;
  variant: "gold" | "goldOutline";
  size?: "lg" | "xl";
  className?: string;
}) {
  const { openInquiry } = useInquiryModal();
  return (
    <Button type="button" variant={variant} size={size} className={className} onClick={openInquiry}>
      {children}
    </Button>
  );
}

/* ---------------- Highlights ---------------- */

const HIGHLIGHT_ICONS = {
  "Eight 40-storey towers": Building2,
  "Studios to duplexes": BedDouble,
  "World-class amenities": Users,
  "Three-year payment plan": Wallet,
} as const;

export function Highlights() {
  return (
    <section id="overview" className="relative z-10 -mt-px bg-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="border-b border-border py-6 text-center text-[0.65rem] tracking-[0.24em] text-muted-foreground uppercase">
          Eight 40-storey towers by Giga Group, in the heart of Downtown Giga, DHA II Islamabad.
        </p>
        <div className="grid gap-4 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((h) => {
            const Icon = HIGHLIGHT_ICONS[h.title as keyof typeof HIGHLIGHT_ICONS];
            return (
              <article key={h.title} className="surface-card group rounded-md p-7">
                <Icon
                  className="size-5 text-gold-deep transition-transform duration-500 group-hover:scale-110"
                  aria-hidden
                />
                <hr className="rule-gold mt-5 max-w-10" />
                <h3 className="mt-4 font-display text-xl">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Location ---------------- */

export function Location() {
  return (
    <section id="location" className="py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <figure className="relative">
          <div className="group relative overflow-hidden rounded-md shadow-[var(--shadow-lift)]">
            <img
              src="/gallery/views/v2-01.jpg"
              alt="Aerial view of the Goldcrest Views towers within the Islamabad neighbourhood"
              width={1280}
              height={1600}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,oklch(0.18_0.02_70/0.28),transparent_42%)]"
            />
          </div>
  
          <div
            aria-hidden
            className="absolute -top-5 -right-5 -z-10 hidden h-40 w-40 rounded-md bg-[image:var(--gradient-gold)] opacity-25 lg:block"
          />
        </figure>
        <div className="max-w-xl lg:justify-self-end">
          <p className="eyebrow">Location</p>
          <h2 className="mt-3 font-display text-4xl leading-[1.08] sm:text-5xl">
            Islamabad&rsquo;s evolving skyline
          </h2>
          <hr className="rule-gold my-7 max-w-24" />
          <p className="text-base leading-relaxed text-muted-foreground">
            Goldcrest Views stands at the prime location of Downtown Giga DHA II Islamabad, adjacent to Giga Mall. Eight
            40-storey towers redefine Islamabad&rsquo;s skyline from this address.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Connectivity runs along Islamabad Express way and the Islamabad Highway, linking the community to the
            twin cities.
          </p>
          <InquiryCta variant="goldOutline" className="mt-9">
            Request the location map
          </InquiryCta>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Inspiration ---------------- */

export function Inspiration() {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-28 lg:py-36">
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="relative min-w-0 text-center lg:text-left">
          <div
            aria-hidden
            className="pointer-events-none absolute top-1/2 left-1/2 h-[28rem] w-[min(56rem,90vw)] -translate-x-1/2 -translate-y-[77%] bg-[radial-gradient(ellipse_at_center,oklch(0.72_0.13_72/0.34),transparent_68%)]"
          />
          <p className="eyebrow text-gold-light">History in Dubai</p>
          <h2 className="mt-6 font-display text-[clamp(2.8rem,5vw,4.75rem)] leading-[0.9] font-semibold tracking-tight text-gold-gradient">
            Delivered in Dubai
            <span className="mt-4 block font-sans text-[clamp(1.35rem,2.4vw,2rem)] leading-tight font-semibold tracking-tight text-on-dark">
              Now in Islamabad
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-on-dark-muted/75 sm:text-lg lg:mx-0">
            Goldcrest views initially delivered in Dubai at Jumeirah Lakes Towers Cluster V. The towers won best highvise development in dubai consectively back in 2008 & 2009. Considering it's huge success, Giga Group has brought the same project with improvised living & luxury now in islamabad.
          </p>
          <div aria-hidden className="mt-12 flex items-center justify-center gap-4 lg:justify-start">
            <span className="h-px w-16 bg-gold-light/80" />
            <span className="size-2 rounded-full border border-gold-light" />
            <span className="h-px w-16 bg-gold-light/80" />
          </div>
        </div>
        <MobileCardCarousel always label="Delivered in Dubai">
          {DUBAI_TOWERS.map((tower) => (
            <article key={tower.title} className="overflow-hidden rounded-md border border-white/15 bg-white/5">
              <img
                src={tower.image}
                alt={tower.title}
                width={795}
                height={530}
                className="aspect-[3/2] w-full object-cover"
              />
              <div className="p-6 sm:p-7">
                <h3 className="font-display text-2xl text-on-dark">{tower.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-on-dark-muted">{tower.body}</p>
              </div>
            </article>
          ))}
        </MobileCardCarousel>
      </div>
    </section>
  );
}

/* ---------------- Amenities ---------------- */

const AMENITY_ICONS = {
  "Infinity Pools": Waves,
  "Private Security": ShieldCheck,
  "Parking Space": SquareParking,
  "Podium Level": Trees,
} as const;

export function Amenities() {
  return (
    <section id="amenities" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow">Amenities</p>
          <h2 className="mt-3 font-display text-4xl leading-[1.08] sm:text-5xl">
            Life above the ordinary
          </h2>
          <p className="mt-4 text-muted-foreground">
            A Temperature controlled infinity pools, 24/7 AI-intelligent security, covered parking and devoted podium.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {AMENITIES.map((a) => {
            const Icon = AMENITY_ICONS[a.title as keyof typeof AMENITY_ICONS];
            return (
              <article
                key={a.title}
                className="group relative overflow-hidden rounded-md border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition-shadow duration-700 hover:shadow-[var(--shadow-lift)]"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 bg-sand/0 transition-colors duration-700 ease-out group-hover:bg-sand/80"
                />
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-[image:var(--gradient-gold)] transition-transform duration-700 ease-out group-hover:scale-x-100"
                />
                <div className="relative transition-transform duration-700 ease-out group-hover:translate-x-1">
                  <Icon className="size-5 text-gold-deep" aria-hidden />
                  <h3 className="mt-5 font-display text-xl leading-snug">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Investment ---------------- */

export function Investment() {
  return (
    <section id="investment" className="relative overflow-hidden bg-ink py-24 lg:py-32">
      <img
        src={interior}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-15"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow text-gold-light">Investment</p>
          <h2 className="mt-3 font-display text-4xl leading-[1.08] text-on-dark sm:text-5xl">
            Flexible Payment Plan
          </h2>
          <p className="mt-4 text-on-dark-muted/80">
            Flexible 3-year payment plan, with dedicated Airbnb rental management for investors.
          </p>
        </div>

        <ol className="mt-14 grid gap-px bg-on-dark/15 sm:grid-cols-2 lg:grid-cols-3">
          {PAYMENT_STEPS.map((s) => (
            <li key={s.step} className="bg-ink p-8">
              <span className="font-display text-3xl text-gold-light">{s.step}</span>
              <h3 className="mt-4 font-display text-xl text-on-dark">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-on-dark-muted/75">{s.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <InquiryCta variant="gold">Get the payment plan</InquiryCta>
         
        </div>
      </div>
    </section>
  );
}

/* ---------------- Construction progress ---------------- */

export function ConstructionProgress() {
  return (
    <section id="progress" className="py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <p className="eyebrow">Construction</p>
          <h2 className="mt-3 font-display text-4xl leading-[1.08] sm:text-5xl">
            Follow construction progress
          </h2>
          <p className="mt-4 text-muted-foreground">
            Goldcrest Views is in progress. The seven towers are rising in Downtown Giga, and the team
            shares the latest site position on request.
          </p>
          {/* <p className="mt-6 font-display text-3xl text-gold-deep">In progress</p> */}

          <InquiryCta variant="goldOutline" className="mt-10">
            Request the latest site report
          </InquiryCta>
        </div>

        <figure className="lg:sticky lg:top-28">
          <div className="group relative overflow-hidden rounded-md shadow-[var(--shadow-lift)]">
            <img
              src="/gallery/views/v1-01.jpg"
              alt="The Goldcrest Views towers under construction with tower cranes"
              width={1600}
              height={1104}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,oklch(0.18_0.02_70/0.22),transparent_46%)] transition-opacity duration-700 group-hover:opacity-80"
            />
          </div>
        </figure>
      </div>
    </section>
  );
}

/* ---------------- Experiences ---------------- */

export function Experiences() {
  return (
    <section className="py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow">Visit us</p>
          <h2 className="mt-3 font-display text-4xl leading-[1.08] sm:text-5xl">
            Experiences at Goldcrest Views
          </h2>
          <p className="mt-4 text-muted-foreground">
            Three ways to get to know the project — in person.
          </p>
        </div>
        <MobileCardCarousel label="Experiences at Goldcrest Views" className="mt-12">
          {EXPERIENCES.map((e) => (
            <article key={e.title} className="surface-card h-full rounded-md p-7">
              <h3 className="font-display text-xl">{e.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.body}</p>
            </article>
          ))}
        </MobileCardCarousel>
        <div className="mt-12 hidden gap-4 sm:grid-cols-2 md:grid lg:grid-cols-4">
          {EXPERIENCES.map((e) => (
            <article key={e.title} className="surface-card rounded-md p-7">
              <h3 className="font-display text-xl">{e.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.body}</p>
            </article>
          ))}
        </div>
        <InquiryCta variant="goldOutline" className="mt-10">
          Schedule a visit
        </InquiryCta>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */

function TestimonialCard({
  quote,
  name,
  role,
  image,
  videoUrl,
}: {
  quote: string;
  name: string;
  role: string;
  image: string;
  videoUrl: string;
}) {
  return (
    <figure className="surface-card flex h-full flex-col overflow-hidden rounded-md">
      <figcaption className="flex items-center gap-4 px-6 pt-6 pb-4 sm:px-8 sm:pt-8">
        <img
          src={image}
          alt=""
          width={64}
          height={64}
          className="size-16 shrink-0 rounded-full object-cover"
        />
        <span>
          <span className="block text-lg font-medium">{name}</span>
          <span className="mt-1 block text-xs tracking-[0.14em] text-muted-foreground uppercase">
            {role}
          </span>
        </span>
      </figcaption>
      <div className="aspect-video bg-ink">
        <video
          className="h-full w-full bg-ink object-contain"
          controls
          playsInline
          preload="metadata"
          aria-label={`${name}, ${role}`}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>
      <p className="p-6 font-display text-lg leading-snug sm:p-8">{quote}</p>
    </figure>
  );
}

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  const pauseOtherVideos = () => {
    const region = sectionRef.current?.querySelector('[aria-label="Celebrity Testimonials"]');
    if (!region) return;
    const bounds = region.getBoundingClientRect();
    region.querySelectorAll("video").forEach((video) => {
      const rect = video.getBoundingClientRect();
      const visible = rect.right > bounds.left + 8 && rect.left < bounds.right - 8;
      if (!visible) video.pause();
    });
  };

  return (
    <section ref={sectionRef} className="bg-sand/60 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow">Testimonials</p>
          <h2 className="mt-3 font-display text-4xl leading-[1.08] sm:text-5xl">
            Celebrity Testimonials
          </h2>
        </div>
        <div className="mt-12">
          <MobileCardCarousel
            always
            perSlide={2}
            label="Celebrity Testimonials"
            onIndexChange={pauseOtherVideos}
          >
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </MobileCardCarousel>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */

export function Faq() {
  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="text-center">
          <p className="eyebrow">Questions</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">Frequently asked questions</h2>
        </div>
        <Accordion type="single" collapsible className="mt-12 w-full">
          {FAQS.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left font-display text-lg hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ---------------- Closing CTA + Footer ---------------- */

export function ClosingCta() {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-24 lg:py-28">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-[image:var(--gradient-gold)]"
      />
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <h2 className="font-display text-4xl leading-[1.1] text-on-dark sm:text-5xl">
          Make the next move on your address
        </h2>
        <p className="mt-4 text-on-dark-muted/80">
          Share your details and our team will come back with availability, floor plan and pricing.
        </p>
        <InquiryCta variant="gold" className="mt-9">
          Request an appointment
        </InquiryCta>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background py-14">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/logo.svg"
              alt=""
              width={44}
              height={44}
              className="size-11 shrink-0"
            />
            <span className="font-display text-lg font-semibold">Goldcrest Views</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            A luxury residential complex by Giga Group in Downtown Giga, Islamabad. Studios to
            4-bedroom apartments with smart-home technology.
          </p>
        </div>
        <nav aria-label="Footer">
          <h3 className="eyebrow">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {["Overview", "Location", "Amenities", "Payment", "Gallery", "FAQ"].map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className="transition-colors hover:text-foreground"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h3 className="eyebrow">Enquiries</h3>
          <p className="mt-4 text-sm text-muted-foreground">
            Use the inquiry form and our sales team will respond with current availability and
            pricing.
          </p>
          <InquiryCta variant="goldOutline" size="lg" className="mt-5 text-xs">
            Contact the team
          </InquiryCta>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl px-5 sm:px-8">
        <p className="border-t border-border pt-6 text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} Goldcrest Views.
        </p>
      </div>
    </footer>
  );
}
