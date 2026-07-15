import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import type { Crumb } from "@/lib/schema/breadcrumb-schema";

interface PageHeroProps {
  title: string;
  description?: string;
  crumbs: Crumb[];
}

export function PageHero({ title, description, crumbs }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-brand-soft-gray">
      <div
        className="pointer-events-none absolute -top-20 -right-20 size-72 rounded-full bg-brand-blue/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-4 px-4 py-12 sm:px-6 lg:px-8">
        <Breadcrumbs crumbs={crumbs} />
        <h1 className="text-3xl font-semibold tracking-tight text-brand-navy sm:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="max-w-2xl text-muted-foreground">{description}</p>
        )}
      </div>
    </section>
  );
}
