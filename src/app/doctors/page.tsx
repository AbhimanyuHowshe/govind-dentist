import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { DoctorCard } from "@/components/shared/doctor-card";
import { CtaBanner } from "@/components/shared/cta-banner";
import { Reveal } from "@/components/shared/reveal";
import { JsonLd } from "@/components/shared/json-ld";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb-schema";
import { doctors } from "@/data/doctors";

export const metadata: Metadata = buildMetadata({
  title: "Our Doctors",
  description:
    "Meet Dr. Govind Singh and Dr. Preeti Singh — experienced, caring dentists serving Ujjain with a patient-first approach to dental care.",
  path: "/doctors",
});

export default function DoctorsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Doctors", path: "/doctors" },
        ])}
      />
      <PageHero
        title="Meet Our Doctors"
        description="Experienced, dedicated dentists committed to your comfort and long-term oral health."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Doctors", path: "/doctors" },
        ]}
      />

      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {doctors.map((doctor, i) => (
              <Reveal key={doctor.slug} direction={i % 2 === 0 ? "left" : "right"}>
                <DoctorCard doctor={doctor} variant="full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
