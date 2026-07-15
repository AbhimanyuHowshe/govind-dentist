import { SectionHeading } from "@/components/shared/section-heading";
import { GoogleMapEmbed } from "@/components/shared/google-map-embed";
import { Reveal } from "@/components/shared/reveal";

export function MapSection() {
  return (
    <section className="bg-brand-soft-gray">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Find Us"
            title="Visit Our Clinic in Ujjain"
            className="mb-10"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <GoogleMapEmbed />
        </Reveal>
      </div>
    </section>
  );
}
