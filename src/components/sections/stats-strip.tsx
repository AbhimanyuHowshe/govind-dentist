import { doctors } from "@/data/doctors";
import { services } from "@/data/services";
import { Reveal } from "@/components/shared/reveal";

const stats = [
  {
    value: `${doctors.reduce((sum, d) => sum + d.experienceYears, 0)}+`,
    label: "Years Combined Experience",
  },
  {
    value: String(services.length),
    label: "Dental Services Offered",
  },
  {
    value: String(doctors.length),
    label: "Specialist Dentists",
  },
  {
    value: "7",
    label: "Days a Week, Emergencies Welcome",
  },
];

export function StatsStrip() {
  return (
    <section className="border-y border-white/10 bg-brand-navy">
      <Reveal className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1 text-center">
            <p className="font-heading text-4xl font-bold text-white sm:text-5xl">
              {stat.value}
            </p>
            <p className="text-sm text-white/60">{stat.label}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
