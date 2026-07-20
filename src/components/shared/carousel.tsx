"use client";

import { useRef, useState, useEffect, useCallback, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useReducedMotion } from "motion/react";

export function Carousel<T>({
  items,
  renderItem,
  keyExtractor,
  ariaLabel,
  autoPlayInterval = 4500,
}: {
  items: T[];
  renderItem: (item: T) => ReactNode;
  keyExtractor: (item: T) => string;
  ariaLabel: string;
  autoPlayInterval?: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scrollByCard = useCallback((direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-carousel-item]");
    const cardWidth = card ? card.offsetWidth + 24 : track.clientWidth;
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
    const atStart = track.scrollLeft <= 4;

    if (direction === 1 && atEnd) {
      track.scrollTo({ left: 0, behavior: "smooth" });
    } else if (direction === -1 && atStart) {
      track.scrollTo({ left: track.scrollWidth, behavior: "smooth" });
    } else {
      track.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    if (shouldReduceMotion || isPaused) return;
    const interval = setInterval(() => scrollByCard(1), autoPlayInterval);
    return () => clearInterval(interval);
  }, [shouldReduceMotion, isPaused, autoPlayInterval, scrollByCard]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <div
        ref={trackRef}
        role="region"
        aria-label={ariaLabel}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <div
            key={keyExtractor(item)}
            data-carousel-item
            className="w-[85%] shrink-0 snap-start sm:w-[45%] lg:w-[31%]"
          >
            {renderItem(item)}
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-3">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          className="flex size-10 items-center justify-center rounded-full border border-border bg-background text-brand-navy shadow-sm transition-colors hover:bg-brand-blue hover:text-white"
          aria-label={`Previous ${ariaLabel}`}
        >
          <ChevronLeft className="size-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          className="flex size-10 items-center justify-center rounded-full border border-border bg-background text-brand-navy shadow-sm transition-colors hover:bg-brand-blue hover:text-white"
          aria-label={`Next ${ariaLabel}`}
        >
          <ChevronRight className="size-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
