import { Children, useEffect, useState, type ReactNode } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export function MobileCardCarousel({
  label,
  children,
  always = false,
  perSlide = 1,
  onIndexChange,
  className,
}: {
  label: string;
  children: ReactNode;
  always?: boolean;
  perSlide?: number;
  onIndexChange?: (index: number) => void;
  className?: string;
}) {
  const cards = Children.toArray(children);
  const paired = perSlide > 1;
  const slides: ReactNode[][] = [];
  for (let i = 0; i < cards.length; i += paired ? 1 : perSlide) {
    slides.push(cards.slice(i, i + (paired ? 1 : perSlide)));
  }
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [snapCount, setSnapCount] = useState(slides.length);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => {
      const index = api.selectedScrollSnap();
      setCurrent(index);
      setSnapCount(api.scrollSnapList().length);
      onIndexChange?.(index);
    };
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api, onIndexChange]);

  useEffect(() => {
    if (!api) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const region = api.rootNode().parentElement;
    if (!region) return;

    let timer = 0;
    let paused = false;

    const start = () => {
      window.clearInterval(timer);
      timer = window.setInterval(() => {
        if (paused || document.hidden) return;
        const playing = [...region.querySelectorAll("video")].some(
          (video) => !video.paused && !video.ended,
        );
        if (playing) return;
        if (api.canScrollNext()) api.scrollNext();
        else api.scrollTo(0);
      }, 4000);
    };

    const pause = () => {
      paused = true;
    };
    const resume = () => {
      paused = false;
      start();
    };
    const onFocusOut = (event: FocusEvent) => {
      if (!region.contains(event.relatedTarget as Node | null)) resume();
    };
    const onVisibility = () => {
      if (document.hidden) pause();
      else resume();
    };

    region.addEventListener("pointerenter", pause);
    region.addEventListener("pointerleave", resume);
    region.addEventListener("pointerdown", pause);
    region.addEventListener("pointerup", resume);
    region.addEventListener("pointercancel", resume);
    region.addEventListener("focusin", pause);
    region.addEventListener("focusout", onFocusOut);
    document.addEventListener("visibilitychange", onVisibility);
    start();

    return () => {
      window.clearInterval(timer);
      region.removeEventListener("pointerenter", pause);
      region.removeEventListener("pointerleave", resume);
      region.removeEventListener("pointerdown", pause);
      region.removeEventListener("pointerup", resume);
      region.removeEventListener("pointercancel", resume);
      region.removeEventListener("focusin", pause);
      region.removeEventListener("focusout", onFocusOut);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        loop: true,
        slidesToScroll: 1,
        ...(paired
          ? { breakpoints: { "(min-width: 768px)": { slidesToScroll: perSlide } } }
          : {}),
      }}
      className={cn("min-w-0 w-full", !always && "md:hidden", className)}
      aria-label={label}
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index} className={paired ? "basis-full md:basis-1/2" : undefined}>
            <div className="h-full">{slide}</div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="mt-4 flex items-center justify-center gap-3">
        <div className="flex items-center gap-2">
          {Array.from({ length: snapCount }, (_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Show slide ${index + 1} of ${snapCount}`}
              aria-current={index === current ? "true" : undefined}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "size-2 rounded-full transition-colors",
                index === current ? "bg-gold" : "bg-border",
              )}
            />
          ))}
        </div>
      </div>
    </Carousel>
  );
}
