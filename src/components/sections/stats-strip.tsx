import { doctors } from "@/data/doctors";
import { services } from "@/data/services";
import { Reveal } from "@/components/shared/reveal";
import { CircularStat } from "@/components/shared/circular-stat";

const stats = [
  {
    value: doctors.reduce((sum, d) => sum + d.experienceYears, 0),
    suffix: "+",
    label: "Years Combined Experience",
  },
  {
    value: services.length,
    suffix: "",
    label: "Dental Services Offered",
  },
  {
    value: doctors.length,
    suffix: "",
    label: "Specialist Dentists",
  },
  {
    value: 7,
    suffix: "",
    label: "Days a Week, Emergencies Welcome",
  },
];

export function StatsStrip() {
  return (
    <section className="border-y border-white/10 bg-brand-navy">
      <Reveal className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <CircularStat
            key={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
          />
        ))}
      </Reveal>
    </section>
  );
}
