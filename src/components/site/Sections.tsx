import {
  AMENITIES,
  DEVELOPER_PILLARS,
  EXPERIENCES,
  FAQS,
  HIGHLIGHTS,
  PAYMENT_STEPS,
  PROGRESS_ITEMS,
  TESTIMONIALS,
  VERIFICATION_POINTS,
} from "./content";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, Quote, Sparkles } from "lucide-react";
import facade from "@/assets/facade.jpg";
import interior from "@/assets/interior.jpg";
import construction from "@/assets/construction.jpg";

/* ---------------- Highlights ---------------- */

export function Highlights() {
  return (
    <section id="overview" className="relative z-10 -mt-px bg-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="border-b border-border py-6 text-center text-[0.65rem] tracking-[0.24em] text-muted-foreground uppercase">
          A landmark residential address in Islamabad&rsquo;s emerging high-rise corridor
        </p>
        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((h) => (
            <div
              key={h.title}
              className="group bg-background p-8 transition-colors duration-500 hover:bg-sand/70"
            >
              <Sparkles
                className="size-4 text-gold-deep transition-transform duration-500 group-hover:scale-110"
                aria-hidden
              />
              <h3 className="mt-5 font-display text-xl">{h.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.body}</p>
            </div>
          ))}
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
        <div className="max-w-xl">
          <p className="eyebrow">Location</p>
          <h2 className="mt-3 font-display text-4xl leading-[1.08] sm:text-5xl">
            A landmark address in Islamabad&rsquo;s evolving skyline
          </h2>
          <hr className="rule-gold my-7 max-w-24" />
          <p className="text-base leading-relaxed text-muted-foreground">
            Islamabad is building upward. Goldcrest Views is positioned within the city&rsquo;s
            emerging high-rise corridor, where vertical living, everyday retail and connected roads
            meet in one place.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            The result is an address that keeps the calm of the capital close, while putting daily
            conveniences within a short journey of your front door.
          </p>
          <Button variant="goldOutline" size="xl" className="mt-9" asChild>
            <a href="#inquiry">Request the location map</a>
          </Button>
        </div>
        <figure className="relative">
          <img
            src={facade}
            alt="Curved balconies and warm stone detailing on the tower facade"
            width={1280}
            height={1600}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-md object-cover shadow-[var(--shadow-lift)]"
          />
          <figcaption className="mt-3 text-xs text-muted-foreground">
            Facade study — balcony depth and glazing across the tower elevation.
          </figcaption>
          <div
            aria-hidden
            className="absolute -top-5 -left-5 -z-10 hidden h-40 w-40 rounded-md bg-[image:var(--gradient-gold)] opacity-25 lg:block"
          />
        </figure>
      </div>
    </section>
  );
}

/* ---------------- Inspiration ---------------- */

export function Inspiration() {
  return (
    <section className="border-y border-border bg-sand/50 py-24 lg:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <p className="eyebrow">Design philosophy</p>
        <h2 className="mt-4 font-display text-4xl leading-[1.1] sm:text-5xl">
          Dubai inspiration, Islamabad perspective
        </h2>
        <hr className="rule-gold mx-auto my-8 max-w-32" />
        <p className="text-lg leading-relaxed text-muted-foreground">
          The tower borrows the discipline of Gulf high-rise design — generous glazing, shaded
          balconies, amenity floors that residents actually use — and adapts it to the light,
          climate and family rhythms of Islamabad.
        </p>
        <p className="mt-6 text-sm text-muted-foreground">
          The outcome is a building that feels international without ever feeling imported.
        </p>
      </div>
    </section>
  );
}

/* ---------------- Amenities ---------------- */

export function Amenities() {
  return (
    <section id="amenities" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow">Amenities</p>
          <h2 className="mt-3 font-display text-4xl leading-[1.08] sm:text-5xl">
            Thoughtfully composed for life above the ordinary
          </h2>
          <p className="mt-4 text-muted-foreground">
            Shared spaces are planned as part of the home, not as an afterthought — from the rooftop
            down to the podium.
          </p>
        </div>

        <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {AMENITIES.map((a, i) => (
            <div key={a.title} className="group flex gap-5 border-t border-border pt-6">
              <span className="font-display text-2xl text-gold-deep/70 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-xl leading-snug">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
              </div>
            </div>
          ))}
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
            A flexible route to premium ownership
          </h2>
          <p className="mt-4 text-on-dark-muted/80">
            Ownership is structured in four clear stages, with the full schedule issued in writing
            before you commit.
          </p>
        </div>

        <ol className="mt-14 grid gap-px bg-on-dark/15 sm:grid-cols-2 lg:grid-cols-4">
          {PAYMENT_STEPS.map((s) => (
            <li key={s.step} className="bg-ink p-8">
              <span className="font-display text-3xl text-gold-light">{s.step}</span>
              <h3 className="mt-4 font-display text-xl text-on-dark">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-on-dark-muted/75">{s.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <Button variant="gold" size="xl" asChild>
            <a href="#inquiry">Get the payment plan</a>
          </Button>
          <p className="text-sm text-on-dark-muted/70">
            Plans vary by unit type and floor. Ask us for your options.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Construction progress ---------------- */

export function ConstructionProgress() {
  return (
    <section id="progress" className="py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <p className="eyebrow">Construction</p>
          <h2 className="mt-3 font-display text-4xl leading-[1.08] sm:text-5xl">
            Follow construction progress
          </h2>
          <p className="mt-4 text-muted-foreground">
            Work advances stage by stage, and we publish where each phase stands so buyers can track
            the building as it rises.
          </p>

          <dl className="mt-10 space-y-7">
            {PROGRESS_ITEMS.map((p) => (
              <div key={p.label}>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="min-w-0 truncate text-sm font-medium">{p.label}</dt>
                  <dd className="shrink-0 font-display text-lg text-gold-deep tabular-nums">
                    {p.value}%
                  </dd>
                </div>
                <div
                  className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-sand"
                  role="progressbar"
                  aria-valuenow={p.value}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={p.label}
                >
                  <div
                    className="h-full rounded-full bg-[image:var(--gradient-gold)] transition-[width] duration-700"
                    style={{ width: `${p.value}%` }}
                  />
                </div>
              </div>
            ))}
          </dl>

          <Button variant="goldOutline" size="xl" className="mt-10" asChild>
            <a href="#inquiry">Request the latest site report</a>
          </Button>
        </div>

        <figure className="lg:sticky lg:top-28">
          <img
            src={construction}
            alt="The Goldcrest Views structure under construction with a tower crane"
            width={1600}
            height={1104}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-md object-cover shadow-[var(--shadow-lift)]"
          />
          <figcaption className="mt-3 text-xs text-muted-foreground">
            On-site progress. Updated photography is shared with buyers at each milestone.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

/* ---------------- Verification ---------------- */

export function Verification() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div className="max-w-lg">
          <p className="eyebrow">Due diligence</p>
          <h2 className="mt-3 font-display text-4xl leading-[1.08] sm:text-5xl">
            Buy with confidence. Verify before you book.
          </h2>
          <hr className="rule-gold my-7 max-w-24" />
          <p className="leading-relaxed text-muted-foreground">
            A serious purchase deserves serious checks. We encourage every buyer to confirm the
            project&rsquo;s documentation independently — and we provide what you need to do it.
          </p>
          <Button variant="gold" size="xl" className="mt-9" asChild>
            <a href="#inquiry">Request the documents</a>
          </Button>
        </div>

        <ul className="surface-card rounded-md p-8">
          <li className="eyebrow mb-6 list-none">Verification checklist</li>
          {VERIFICATION_POINTS.map((p) => (
            <li key={p} className="flex gap-3 border-b border-border/70 py-4 last:border-0">
              <Check className="mt-0.5 size-4 shrink-0 text-gold-deep" aria-hidden />
              <span className="text-sm leading-relaxed text-muted-foreground">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- Developer ---------------- */

export function Developer() {
  return (
    <section className="border-y border-border bg-sand/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow">The developer</p>
          <h2 className="mt-3 font-display text-4xl leading-[1.08] sm:text-5xl">
            Built on a cross-border legacy
          </h2>
        </div>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {DEVELOPER_PILLARS.map((d) => (
            <div key={d.title}>
              <hr className="rule-gold max-w-12" />
              <h3 className="mt-5 font-display text-xl">{d.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.body}</p>
            </div>
          ))}
        </div>
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
            Four ways to get to know the project — in person or from anywhere in the world.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {EXPERIENCES.map((e) => (
            <article key={e.title} className="surface-card rounded-md p-7">
              <h3 className="font-display text-xl">{e.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.body}</p>
            </article>
          ))}
        </div>
        <Button variant="goldOutline" size="xl" className="mt-10" asChild>
          <a href="#inquiry">Schedule a visit</a>
        </Button>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */

export function Testimonials() {
  return (
    <section className="bg-sand/60 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow">Testimonials</p>
          <h2 className="mt-3 font-display text-4xl leading-[1.08] sm:text-5xl">
            What happy customers say
          </h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="surface-card flex flex-col rounded-md p-8">
              <Quote className="size-6 text-gold" aria-hidden />
              <blockquote className="mt-5 flex-1 font-display text-xl leading-snug">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <span className="block text-sm font-medium">{t.name}</span>
                <span className="block text-xs tracking-[0.14em] text-muted-foreground uppercase">
                  {t.role}
                </span>
              </figcaption>
            </figure>
          ))}
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
          Share your details and our team will come back with availability, floor plans and pricing.
        </p>
        <Button variant="gold" size="xl" className="mt-9" asChild>
          <a href="#inquiry">Request an appointment</a>
        </Button>
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
            <span aria-hidden className="h-7 w-7 rounded-full bg-[image:var(--gradient-gold)]" />
            <span className="font-display text-lg font-semibold">Goldcrest Views</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            A high-rise residential address in Islamabad. Studio to three-bedroom apartments with
            amenity floors and structured payment plans.
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
          <Button variant="goldOutline" size="lg" className="mt-5 text-xs" asChild>
            <a href="#inquiry">Contact the team</a>
          </Button>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl px-5 sm:px-8">
        <p className="border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Goldcrest Views. Renders and imagery are indicative.
          Specifications, availability and payment terms are confirmed in writing at booking.
        </p>
      </div>
    </footer>
  );
}
