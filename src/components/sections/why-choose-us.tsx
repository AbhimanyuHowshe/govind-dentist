import {
  Award,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
  HeartHandshake,
  BadgeIndianRupee,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { TrustBadges, type TrustBadge } from "@/components/shared/trust-badges";
import { Reveal } from "@/components/shared/reveal";

const items: TrustBadge[] = [
  {
    icon: Award,
    title: "Experienced Dentists",
    description:
      "Decades of combined experience across general and cosmetic dentistry.",
  },
  {
    icon: ShieldCheck,
    title: "Advanced Equipment",
    description:
      "Modern diagnostic and treatment technology for accurate, comfortable care.",
  },
  {
    icon: Sparkles,
    title: "Hygienic Clinic",
    description:
      "Strict sterilization protocols and a clean environment for every patient.",
  },
  {
    icon: UserRoundCheck,
    title: "Personalized Treatment Plans",
    description:
      "Every plan is tailored to your needs, comfort, and long-term oral health.",
  },
  {
    icon: HeartHandshake,
    title: "Comfortable Experience",
    description:
      "A gentle, reassuring approach designed to ease dental anxiety.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Transparent Pricing",
    description:
      "Clear, upfront costs with no surprises — every option explained in detail.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Care You Can Trust"
            description="From the moment you walk in, we focus on your comfort, safety, and long-term oral health."
            className="mb-10"
          />
        </Reveal>
        <TrustBadges items={items} />
      </div>
    </section>
  );
}
