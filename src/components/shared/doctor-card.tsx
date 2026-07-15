import Image from "next/image";
import { GraduationCap, Award } from "lucide-react";
import type { Doctor } from "@/types/doctor";

export function DoctorCard({
  doctor,
  variant = "full",
}: {
  doctor: Doctor;
  variant?: "full" | "summary";
}) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-xl hover:shadow-brand-blue/5">
      <div className="relative aspect-4/5 w-full overflow-hidden bg-brand-soft-gray">
        <Image
          src={doctor.photoUrl}
          alt={doctor.photoAlt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(min-width: 1024px) 400px, 100vw"
        />
      </div>
      <div className="flex flex-col gap-3 p-6">
        <div>
          <h3 className="font-heading text-xl font-semibold text-brand-navy">
            {doctor.name}
          </h3>
          <p className="text-sm text-brand-blue">{doctor.title}</p>
        </div>

        <p className="flex items-start gap-2 text-sm text-muted-foreground">
          <Award className="mt-0.5 size-4 shrink-0 text-brand-teal" aria-hidden="true" />
          {doctor.experienceYears}+ years of experience
        </p>

        {variant === "full" && (
          <>
            <div>
              <h4 className="mb-1.5 flex items-center gap-2 text-sm font-semibold text-brand-navy">
                <GraduationCap className="size-4 text-brand-teal" aria-hidden="true" />
                Qualifications
              </h4>
              <ul className="ml-6 list-disc text-sm text-muted-foreground">
                {doctor.qualifications.map((q) => (
                  <li key={q}>{q}</li>
                ))}
              </ul>
            </div>

            {(doctor.expertiseAreas || doctor.specialInterests) && (
              <div>
                <h4 className="mb-1.5 text-sm font-semibold text-brand-navy">
                  {doctor.expertiseAreas ? "Areas of Expertise" : "Special Interests"}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {(doctor.expertiseAreas ?? doctor.specialInterests ?? []).map(
                    (area) => (
                      <span
                        key={area}
                        className="rounded-full bg-brand-soft-gray px-3 py-1 text-xs font-medium text-brand-navy"
                      >
                        {area}
                      </span>
                    )
                  )}
                </div>
              </div>
            )}

            <div>
              <h4 className="mb-1.5 text-sm font-semibold text-brand-navy">
                Professional Memberships
              </h4>
              <ul className="ml-6 list-disc text-sm text-muted-foreground">
                {doctor.memberships.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </div>

            <p className="border-t border-border pt-3 text-sm text-muted-foreground italic">
              &ldquo;{doctor.philosophy}&rdquo;
            </p>
          </>
        )}
      </div>
    </div>
  );
}
