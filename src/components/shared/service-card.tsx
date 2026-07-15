import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/types/service";
import { ServiceIcon } from "@/components/shared/service-icon";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col gap-4 rounded-2xl border border-border bg-background p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-xl hover:shadow-brand-blue/5"
    >
      <div className="flex size-14 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue shadow-sm transition-all duration-200 group-hover:scale-105 group-hover:bg-gradient-to-br group-hover:from-brand-blue group-hover:to-brand-blue-dark group-hover:text-white group-hover:shadow-md group-hover:shadow-brand-blue/25">
        <ServiceIcon name={service.icon} className="size-7" />
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
