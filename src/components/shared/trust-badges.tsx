import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

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
      {items.map((item) => (
        <div
          key={item.title}
          className="flex flex-col gap-3 rounded-xl border border-border bg-background p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-lg"
        >
          <div className="flex size-11 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
            <item.icon className="size-6" aria-hidden="true" />
          </div>
          <h3 className="font-heading text-lg font-semibold text-brand-navy">
            {item.title}
          </h3>
          <p className="text-sm text-muted-foreground">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
