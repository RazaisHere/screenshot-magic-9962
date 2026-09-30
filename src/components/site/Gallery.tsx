import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { MobileCardCarousel } from "./MobileCardCarousel";
import { GALLERY_CATEGORIES, type GalleryCategory } from "./content";

type Shot = {
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "All">;
  focus?: string;
  startRow?: boolean;
};

const SHOTS: Shot[] = [
  {
    src: "/gallery/magnific_add-the-2-labors-doing-pl_fFvDrYWCDY.jpg.jpeg",
    alt: "Two workers plastering an interior wall and ceiling of the tower",
    category: "Interior",
    focus: "object-[center_28%]",
  },
  {
    src: "/gallery/interior-2.jpg",
    alt: "Interior plaster work with the neighbouring tower beyond the opening",
    category: "Interior",
  },
  {
    src: "/gallery/interior-3.jpeg",
    alt: "Workers laying block on an open floor of the tower",
    category: "Interior",
  },
  {
    src: "/gallery/views/v2-01.jpg",
    alt: "Wide aerial of the Goldcrest Views towers in the Islamabad neighbourhood",
    category: "Exteriors",
    startRow: true,
  },
  {
    src: "/gallery/views/v1-06.jpg",
    alt: "The tower elevation from the air",
    category: "Exteriors",
  },
  {
    src: "/gallery/views/v2-04.jpg",
    alt: "The tower facades from across the neighbourhood",
    category: "Exteriors",
  },
  {
    src: "/gallery/views/v2-05.jpg",
    alt: "The towers seen against the wider city",
    category: "Views",
    startRow: true,
  },
  {
    src: "/gallery/views/v2-09.jpg",
    alt: "Long view across the site and surrounding streets",
    category: "Views",
  },
  {
    src: "/gallery/views/v1-04.jpg",
    alt: "The towers rising above the surrounding neighbourhood",
    category: "Views",
  },
];

type LightboxState = "closed" | "open" | "closing";

export function Gallery() {
  const [active, setActive] = useState<GalleryCategory>("All");
  const [selected, setSelected] = useState<Shot | null>(null);
  const [lightbox, setLightbox] = useState<LightboxState>("closed");
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const shots = active === "All" ? SHOTS : SHOTS.filter((s) => s.category === active);

  const shotCard = (shot: Shot, index: number, mosaic: boolean) => (
    <button
      key={`${shot.alt}-${index}`}
      type="button"
      onClick={() => openShot(shot)}
      className={cn(
        "group relative h-[240px] w-full cursor-pointer overflow-hidden rounded-md bg-muted text-left md:h-full",
        mosaic && shot.startRow && "md:col-start-1",
      )}
    >
      <img
        src={shot.src}
        alt=""
        loading="lazy"
        className={cn(
          "h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]",
          shot.focus,
        )}
      />
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 h-3/5 bg-[linear-gradient(to_top,oklch(0.12_0.02_60/0.94),oklch(0.12_0.02_60/0.55)_46%,transparent)] transition-opacity duration-300",
          mosaic ? "opacity-0 group-hover:opacity-100" : "opacity-100",
        )}
      />
      <span
        className={cn(
          "absolute inset-x-0 bottom-0 p-4 text-xs text-[oklch(0.99_0.005_90)] transition-opacity duration-300",
          mosaic ? "opacity-0 group-hover:opacity-100" : "opacity-100",
        )}
      >
        <span className="block text-[0.6rem] tracking-[0.2em] uppercase opacity-80">
          {shot.category}
        </span>
        {shot.alt}
      </span>
      <span className="sr-only">Open image: {shot.alt}</span>
    </button>
  );

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
            Views of the towers
          </h2>
          <p className="mt-4 text-muted-foreground">
            Interiors, exteriors and neighbourhood views — filter by what you want to see.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Gallery categories"
          className="mt-10 mb-6 -mx-5 flex gap-2 overflow-x-auto px-5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 md:mb-0"
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

        <MobileCardCarousel key={active} label="Views of the towers">
          {shots.map((shot, index) => shotCard(shot, index, false))}
        </MobileCardCarousel>

        <div className="mt-8 hidden auto-rows-[240px] gap-4 md:grid md:grid-cols-3">
          {shots.map((shot, index) => shotCard(shot, index, true))}
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
