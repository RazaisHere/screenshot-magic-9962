import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
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

type LightboxState = "closed" | "open" | "closing";

export function Gallery() {
  const [active, setActive] = useState<GalleryCategory>("All");
  const [selected, setSelected] = useState<Shot | null>(null);
  const [lightbox, setLightbox] = useState<LightboxState>("closed");
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const shots = active === "All" ? SHOTS : SHOTS.filter((s) => s.category === active);

  const openShot = (shot: Shot) => {
    setSelected(shot);
    setLightbox("open");
  };

  const closeShot = () => setLightbox((state) => (state === "open" ? "closing" : state));
  const lightboxLocked = lightbox !== "closed";

  useEffect(() => {
    if (!lightboxLocked) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeShot();
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
  }, [lightboxLocked]);

  useEffect(() => {
    if (lightbox !== "closing") return;
    const timer = setTimeout(() => {
      setLightbox("closed");
      setSelected(null);
    }, 260);
    return () => clearTimeout(timer);
  }, [lightbox]);

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
            <button
              key={`${s.alt}-${i}`}
              type="button"
              onClick={() => openShot(s)}
              className={cn(
                "group relative cursor-pointer overflow-hidden rounded-md bg-muted text-left",
                active === "All" ? s.span : undefined,
              )}
            >
              <img
                src={s.src}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              />
              <span className="absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,oklch(0.18_0.02_70/0.82),transparent)] p-4 text-xs text-[oklch(0.99_0.005_90)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="block text-[0.6rem] tracking-[0.2em] uppercase opacity-80">
                  {s.category}
                </span>
                {s.alt}
              </span>
              <span className="sr-only">Open image: {s.alt}</span>
            </button>
          ))}
        </div>
      </div>

      {lightbox !== "closed" && selected && (
        <div
          className={cn(
            "fixed inset-0 z-[90] overflow-y-auto bg-ink/80 pr-(--scrollbar-comp) backdrop-blur-sm",
            lightbox === "closing" ? "modal-backdrop-out" : "modal-backdrop-in",
          )}
          onClick={closeShot}
        >
          <div className="flex min-h-full items-center justify-center p-4 sm:p-8">
            <figure
              role="dialog"
              aria-modal="true"
              aria-label={selected.alt}
              onClick={(event) => event.stopPropagation()}
              className={cn(
                "relative w-full max-w-5xl",
                lightbox === "closing" ? "modal-panel-out" : "modal-panel-in",
              )}
            >
              <div className="relative mx-auto w-fit max-w-full">
                <button
                  ref={closeBtnRef}
                  type="button"
                  aria-label="Close image"
                  onClick={closeShot}
                  className="absolute top-3 right-3 z-10 grid size-9 place-items-center rounded-full bg-ink/75 text-on-dark transition-colors hover:bg-ink"
                >
                  <X className="size-4" aria-hidden />
                </button>
                <img
                  src={selected.src}
                  alt={selected.alt}
                  className="max-h-[min(82vh,900px)] w-auto max-w-full rounded-md object-contain shadow-[var(--shadow-lift)]"
                />
              </div>
              <figcaption className="mt-4 text-center text-sm text-on-dark">
                <span className="mb-1 block text-[0.65rem] tracking-[0.2em] text-gold-light uppercase">
                  {selected.category}
                </span>
                {selected.alt}
              </figcaption>
            </figure>
          </div>
        </div>
      )}
    </section>
  );
}
