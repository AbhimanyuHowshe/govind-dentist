"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";
import { TestimonialCard } from "@/components/shared/testimonial-card";
import { Carousel } from "@/components/shared/carousel";
import { Reveal } from "@/components/shared/reveal";
import { testimonials } from "@/data/testimonials";

export function TestimonialsPreview() {
  return (
    <section className="bg-brand-soft-gray">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Patient Testimonials"
            title="What Our Patients Say"
            className="mb-10"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <Carousel
            items={testimonials}
            keyExtractor={(testimonial) => testimonial.id}
            ariaLabel="Patient testimonials"
            renderItem={(testimonial) => (
              <TestimonialCard testimonial={testimonial} />
            )}
          />
        </Reveal>
        <div className="mt-4 flex justify-center">
          <Button render={<Link href="/testimonials" />} variant="outline">
            Read More Reviews
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}
