import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { TestimonialCard } from "@/components/shared/testimonial-card";
import { CtaBanner } from "@/components/shared/cta-banner";
import { JsonLd } from "@/components/shared/json-ld";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb-schema";
import { reviewSchema } from "@/lib/schema/review-schema";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = buildMetadata({
  title: "Patient Testimonials",
  description:
    "Read what patients say about Dr. Govind Singh & Dr. Preeti Singh Dental Clinic in Ujjain — real reviews and success stories.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  const beforeAfterCases = testimonials.filter(
    (t) => t.consentGiven && t.beforeImageUrl && t.afterImageUrl
  );

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Testimonials", path: "/testimonials" },
        ])}
      />
      <JsonLd data={reviewSchema(testimonials)} />

      <PageHero
        title="Patient Testimonials"
        description="Real stories from patients who trusted us with their smiles."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Testimonials", path: "/testimonials" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </section>

      {beforeAfterCases.length > 0 && (
        <section className="bg-brand-soft-gray py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Success Stories"
              title="Before & After"
              description="Shared with patient consent."
              className="mb-10"
            />
            <div className="flex flex-col gap-10">
              {beforeAfterCases.map((testimonial) => (
                <div key={testimonial.id}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative aspect-square overflow-hidden rounded-xl">
                      <Image
                        src={testimonial.beforeImageUrl!}
                        alt={`Before treatment photo of ${testimonial.patientName}`}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 400px, 45vw"
                      />
                    </div>
                    <div className="relative aspect-square overflow-hidden rounded-xl">
                      <Image
                        src={testimonial.afterImageUrl!}
                        alt={`After treatment photo of ${testimonial.patientName}`}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 400px, 45vw"
                      />
                    </div>
                  </div>
                  <p className="mt-3 text-center text-sm font-medium text-brand-navy">
                    {testimonial.patientName} — {testimonial.treatmentType}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner />
    </>
  );
}
