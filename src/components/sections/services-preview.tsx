import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceCard } from "@/components/shared/service-card";
import { Reveal } from "@/components/shared/reveal";
import { services } from "@/data/services";

const featuredSlugs = [
  "general-dentistry",
  "root-canal-treatment",
  "dental-implants",
  "teeth-whitening",
  "braces",
  "pediatric-dentistry",
  "smile-makeover",
  "emergency-dental-care",
];

export function ServicesPreview() {
  const featured = featuredSlugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <section className="bg-brand-soft-gray">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Our Services"
            title="Comprehensive Dental Care"
            description="From routine checkups to advanced restorative and cosmetic treatments, all under one roof."
            className="mb-10"
          />
        </Reveal>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((service, i) => (
            <Reveal key={service.slug} direction={i % 2 === 0 ? "left" : "right"} delay={(i % 4) * 0.08}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button render={<Link href="/services" />} variant="outline">
            View All Services
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}
