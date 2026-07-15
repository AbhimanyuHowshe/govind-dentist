import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { ServiceCard } from "@/components/shared/service-card";
import { CtaBanner } from "@/components/shared/cta-banner";
import { JsonLd } from "@/components/shared/json-ld";
import { services } from "@/data/services";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb-schema";

export const metadata: Metadata = buildMetadata({
  title: "Our Dental Services",
  description:
    "Explore the full range of dental services offered in Ujjain — from general checkups to implants, braces, and cosmetic dentistry.",
  path: "/services",
});

export default function ServicesIndexPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <PageHero
        title="Our Dental Services"
        description="Comprehensive dental care under one roof — from routine checkups to advanced restorative and cosmetic treatments."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
