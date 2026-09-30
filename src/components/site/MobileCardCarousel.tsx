import { Children, useEffect, useState, type ReactNode } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export function MobileCardCarousel({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  const slides = Children.toArray(children);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      opts={{ align: "start" }}
      className="md:hidden"
      aria-label={label}
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>{slide}</CarouselItem>
        ))}
      </CarouselContent>
      <div className="mt-4 flex items-center justify-center gap-3">
        <CarouselPrevious className="static top-auto left-auto size-8 translate-y-0 border-gold/50 bg-background/90" />
        <div className="flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Show slide ${index + 1} of ${slides.length}`}
              aria-current={index === current ? "true" : undefined}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "size-2 rounded-full transition-colors",
                index === current ? "bg-gold" : "bg-border",
              )}
            />
          ))}
        </div>
        <CarouselNext className="static top-auto right-auto size-8 translate-y-0 border-gold/50 bg-background/90" />
      </div>
    </Carousel>
  );
}
