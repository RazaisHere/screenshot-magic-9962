import { useState } from "react";
import { cn } from "@/lib/utils";
import { GALLERY_CATEGORIES, type GalleryCategory } from "./content";
import heroTower from "@/assets/hero-tower.jpg";
import facade from "@/assets/facade.jpg";
import interior from "@/assets/interior.jpg";
import construction from "@/assets/construction.jpg";

type Shot = {
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "All">;
  span?: string;
};

const SHOTS: Shot[] = [
  {
    src: heroTower,
    alt: "The tower rising above the city at golden hour",
    category: "Exteriors",
    span: "md:col-span-2 md:row-span-2",
  },
  { src: facade, alt: "Curved balconies and glazing detail on the facade", category: "Exteriors" },
  { src: interior, alt: "Living room with floor-to-ceiling city windows", category: "Interiors" },
  {
    src: interior,
    alt: "Warm ivory interior finishes with brass detailing",
    category: "Amenities",
    span: "md:col-span-2",
  },
  { src: heroTower, alt: "Long city and hill views from the upper floors", category: "Views" },
  { src: construction, alt: "Current structure and tower crane on site", category: "Construction" },
  {
    src: facade,
    alt: "Balcony depth and shading along the tower elevation",
    category: "Views",
  },
  {
    src: construction,
    alt: "Concrete frame progressing floor by floor",
    category: "Construction",
  },
];

export function Gallery() {
  const [active, setActive] = useState<GalleryCategory>("All");
  const shots = active === "All" ? SHOTS : SHOTS.filter((s) => s.category === active);

  return (
    <section id="gallery" className="bg-sand/60 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow">Gallery</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">
            A considered view of Goldcrest living
          </h2>
          <p className="mt-4 text-muted-foreground">
            Exteriors, interiors, shared amenities and live construction — filter by what you want
            to see.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Gallery categories"
          className="mt-10 -mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0"
        >
          {GALLERY_CATEGORIES.map((c) => (
            <button
              key={c}
              role="tab"
              type="button"
              aria-selected={active === c}
              onClick={() => setActive(c)}
              className={cn(
                "shrink-0 rounded-full border px-5 py-2 text-[0.72rem] tracking-[0.14em] uppercase transition-all duration-300",
                active === c
                  ? "border-transparent bg-[image:var(--gradient-gold)] text-primary-foreground shadow-[var(--shadow-soft)]"
                  : "border-border bg-card text-muted-foreground hover:border-gold/60 hover:text-foreground",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-8 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[240px]">
          {shots.map((s, i) => (
            <figure
              key={`${s.alt}-${i}`}
              className={cn(
                "group relative overflow-hidden rounded-md bg-muted",
                active === "All" ? s.span : undefined,
              )}
            >
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,oklch(0.18_0.02_70/0.82),transparent)] p-4 text-xs text-[oklch(0.99_0.005_90)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="block text-[0.6rem] tracking-[0.2em] uppercase opacity-80">
                  {s.category}
                </span>
                {s.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
