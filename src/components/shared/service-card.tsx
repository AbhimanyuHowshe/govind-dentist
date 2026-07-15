import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/types/service";
import { ServiceIcon } from "@/components/shared/service-icon";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col gap-4 rounded-xl border border-border bg-background p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-lg"
    >
      <div className="flex size-11 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue transition-colors duration-200 group-hover:bg-brand-blue group-hover:text-white">
        <ServiceIcon name={service.icon} className="size-6" />
      </div>
      <h3 className="font-heading text-lg font-semibold text-brand-navy">
        {service.shortName ?? service.name}
      </h3>
      <p className="line-clamp-2 text-sm text-muted-foreground">
        {service.overview.paragraphs[0]}
      </p>
      <span className="mt-auto flex items-center gap-1 text-sm font-medium text-brand-blue">
        Learn More
        <ArrowRight
          className="size-4 transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
