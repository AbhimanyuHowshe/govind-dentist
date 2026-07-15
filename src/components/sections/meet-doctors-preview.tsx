import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";
import { DoctorCard } from "@/components/shared/doctor-card";
import { Reveal } from "@/components/shared/reveal";
import { doctors } from "@/data/doctors";

export function MeetDoctorsPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <Reveal>
        <SectionHeading
          eyebrow="Meet the Doctors"
          title="The Team Behind Your Smile"
          description="Experienced, caring dentists dedicated to your comfort and long-term oral health."
          className="mb-10"
        />
      </Reveal>
      <Reveal delay={0.1}>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.slug} doctor={doctor} variant="summary" />
          ))}
        </div>
      </Reveal>
      <div className="mt-10 flex justify-center">
        <Button render={<Link href="/doctors" />} variant="outline">
          Meet Our Doctors
          <ArrowRight className="size-4" aria-hidden="true" />
        </Button>
      </div>
    </section>
  );
}
