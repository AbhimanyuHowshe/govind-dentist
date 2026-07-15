import type { Testimonial } from "@/types/testimonial";
import { siteConfig } from "@/data/site-config";

export function reviewSchema(testimonials: Testimonial[]) {
  const ratings = testimonials.map((t) => t.rating);
  const average =
    ratings.reduce((sum, r) => sum + r, 0) / (ratings.length || 1);

  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `${siteConfig.url}/#clinic`,
    name: siteConfig.clinicName,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: Number(average.toFixed(1)),
      reviewCount: testimonials.length,
    },
    review: testimonials.map((t) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: t.patientName,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating,
        bestRating: 5,
      },
      reviewBody: t.text,
    })),
  };
}
