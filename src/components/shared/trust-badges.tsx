import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/shared/reveal";

export interface TrustBadge {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function TrustBadges({
  items,
  className,
}: {
  items: TrustBadge[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {items.map((item, i) => (
        <Reveal key={item.title} direction={i % 2 === 0 ? "left" : "right"} delay={(i % 3) * 0.08}>
          <div className="group flex h-full flex-col gap-4 rounded-2xl border border-border bg-background p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-xl hover:shadow-brand-blue/5">
            <div className="relative flex size-14 items-center justify-center overflow-hidden rounded-2xl bg-brand-blue/10 text-brand-blue shadow-sm transition-shadow duration-300 group-hover:shadow-md group-hover:shadow-brand-blue/25">
              <span
                className="absolute inset-0 origin-bottom scale-y-0 bg-gradient-to-br from-brand-blue to-brand-blue-dark transition-transform duration-300 ease-out group-hover:scale-y-100"
                aria-hidden="true"
              />
              <item.icon
                className="relative z-10 size-7 transition-colors duration-300 group-hover:text-white"
                aria-hidden="true"
              />
            </div>
            <h3 className="font-heading text-lg font-semibold text-brand-navy">
              {item.title}
            </h3>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
