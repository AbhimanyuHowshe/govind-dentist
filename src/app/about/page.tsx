import type { Metadata } from "next";
import { ShieldCheck, Sparkles, HeartHandshake, Target, Eye, Cpu } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { TrustBadges, type TrustBadge } from "@/components/shared/trust-badges";
import { CtaBanner } from "@/components/shared/cta-banner";
import { JsonLd } from "@/components/shared/json-ld";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb-schema";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn about Dr. Govind Singh & Dr. Preeti Singh Dental Clinic in Ujjain — our story, mission, patient care philosophy, and sterilization standards.",
  path: "/about",
});

const philosophyItems: TrustBadge[] = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide accessible, high-quality dental care that improves the health and confidence of every patient we treat in Ujjain.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be Ujjain's most trusted dental clinic, known for compassionate care, modern technology, and lasting patient relationships.",
  },
  {
    icon: HeartHandshake,
    title: "Patient Care Philosophy",
    description:
      "Every treatment plan starts with listening. We explain your options clearly so you can make informed decisions about your care.",
  },
];

const standardsItems: TrustBadge[] = [
  {
    icon: ShieldCheck,
    title: "Sterilization Standards",
    description:
      "All instruments are sterilized following strict clinical protocols, with single-use disposables wherever applicable.",
  },
  {
    icon: Cpu,
    title: "Technology Used",
    description:
      "Digital X-rays, modern dental chairs, and up-to-date equipment help us diagnose accurately and treat comfortably.",
  },
  {
    icon: Sparkles,
    title: "Hygienic Environment",
    description:
      "A clean, well-maintained clinic environment from the reception area to every treatment room.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <PageHero
        title="About Our Clinic"
        description="Get to know the story, mission, and standards behind Dr. Govind Singh & Dr. Preeti Singh Dental Clinic."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Story"
          title="A Clinic Built on Trust"
          align="left"
          className="mb-6"
        />
        <div className="flex flex-col gap-4 text-muted-foreground">
          <p>
            Dr. Govind Singh & Dr. Preeti Singh Dental Clinic was founded
            with a simple goal: to bring modern, patient-centered dental
            care to the people of Ujjain. What started as a small practice
            has grown into a full-service dental clinic trusted by families
            across the city.
          </p>
          <p>
            Today, our clinic combines the expertise of two experienced
            dentists with modern equipment and a genuinely caring team —
            so every patient, from young children to senior citizens,
            receives care tailored to their needs.
          </p>
        </div>
      </section>

      <section className="bg-brand-soft-gray py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <TrustBadges items={philosophyItems} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Standards"
          title="Hygiene & Technology You Can Rely On"
          description="We hold ourselves to strict clinical standards so you can feel confident and comfortable at every visit."
          className="mb-10"
        />
        <TrustBadges items={standardsItems} />
      </section>

      <CtaBanner />
    </>
  );
}
