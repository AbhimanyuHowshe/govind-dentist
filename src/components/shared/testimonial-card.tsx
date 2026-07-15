import { Quote, Star } from "lucide-react";
import type { Testimonial } from "@/types/testimonial";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="relative flex flex-col gap-4 rounded-xl border border-border bg-background p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-lg">
      <Quote
        className="absolute top-5 right-5 size-8 text-brand-blue/10"
        aria-hidden="true"
      />
      <div
        className="flex gap-0.5"
        role="img"
        aria-label={`${testimonial.rating} out of 5 stars`}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={
              i < testimonial.rating
                ? "size-4 fill-brand-blue text-brand-blue"
                : "size-4 text-border"
            }
            aria-hidden="true"
          />
        ))}
      </div>
      <blockquote className="relative text-sm text-muted-foreground">
        &ldquo;{testimonial.text}&rdquo;
      </blockquote>
      <figcaption className="mt-auto">
        <p className="font-heading text-sm font-semibold text-brand-navy">
          {testimonial.patientName}
        </p>
        {testimonial.treatmentType && (
          <p className="text-xs text-muted-foreground">
            {testimonial.treatmentType}
          </p>
        )}
      </figcaption>
    </figure>
  );
}
