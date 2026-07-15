import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight } from "lucide-react";

import { PageHero } from "@/components/shared/page-hero";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { CtaBanner } from "@/components/shared/cta-banner";
import { JsonLd } from "@/components/shared/json-ld";
import { ServiceIcon } from "@/components/shared/service-icon";
import { buildMetadata } from "@/lib/metadata";
import { services, getServiceBySlug } from "@/data/services";
import { serviceSchema } from "@/lib/schema/service-schema";
import { faqSchema } from "@/lib/schema/faq-schema";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb-schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    ogImage: service.heroImageUrl,
    keywords: service.keywords,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedServices = (service.relatedServiceSlugs ?? [])
    .map((relatedSlug) => getServiceBySlug(relatedSlug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <JsonLd data={serviceSchema(service)} />
      <JsonLd data={faqSchema(service.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.name, path: `/services/${service.slug}` },
        ])}
      />

      <PageHero
        title={service.name}
        description={service.overview.paragraphs[0]}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.name, path: `/services/${service.slug}` },
        ]}
      />

      <div className="relative h-64 w-full sm:h-80 lg:h-96">
        <Image
          src={service.heroImageUrl}
          alt={service.heroImageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="mx-auto flex max-w-4xl flex-col gap-16 px-4 py-16 sm:px-6 lg:px-8">
        <section aria-labelledby="overview-heading">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
              <ServiceIcon name={service.icon} className="size-6" />
            </div>
            <h2
              id="overview-heading"
              className="font-heading text-2xl font-semibold text-brand-navy"
            >
              {service.overview.heading}
            </h2>
          </div>
          <div className="flex flex-col gap-4 text-muted-foreground">
            {service.overview.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        <section aria-labelledby="symptoms-heading">
          <h2
            id="symptoms-heading"
            className="mb-4 font-heading text-2xl font-semibold text-brand-navy"
          >
            {service.symptoms.heading}
          </h2>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {service.symptoms.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-muted-foreground"
              >
                <CheckCircle2
                  className="mt-0.5 size-4 shrink-0 text-brand-teal"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="benefits-heading">
          <h2
            id="benefits-heading"
            className="mb-4 font-heading text-2xl font-semibold text-brand-navy"
          >
            {service.benefits.heading}
          </h2>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {service.benefits.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-muted-foreground"
              >
                <CheckCircle2
                  className="mt-0.5 size-4 shrink-0 text-brand-emerald"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="process-heading">
          <h2
            id="process-heading"
            className="mb-6 font-heading text-2xl font-semibold text-brand-navy"
          >
            {service.treatmentProcess.heading}
          </h2>
          <ol className="flex flex-col gap-6">
            {service.treatmentProcess.steps.map((step) => (
              <li key={step.step} className="flex gap-4">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-navy font-heading text-sm font-semibold text-white">
                  {step.step}
                </span>
                <div>
                  <h3 className="font-heading font-semibold text-brand-navy">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="recovery-heading">
          <h2
            id="recovery-heading"
            className="mb-4 font-heading text-2xl font-semibold text-brand-navy"
          >
            {service.recovery.heading}
          </h2>
          <div className="flex flex-col gap-4 text-muted-foreground">
            {service.recovery.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          {service.recovery.tips && (
            <ul className="mt-4 flex flex-col gap-2">
              {service.recovery.tips.map((tip) => (
                <li
                  key={tip}
                  className="flex items-start gap-2 text-muted-foreground"
                >
                  <CheckCircle2
                    className="mt-0.5 size-4 shrink-0 text-brand-blue"
                    aria-hidden="true"
                  />
                  {tip}
                </li>
              ))}
            </ul>
          )}
        </section>

        <section aria-labelledby="faq-heading">
          <h2
            id="faq-heading"
            className="mb-4 font-heading text-2xl font-semibold text-brand-navy"
          >
            Frequently Asked Questions
          </h2>
          <FaqAccordion faqs={service.faqs} />
        </section>

        {relatedServices.length > 0 && (
          <section aria-labelledby="related-heading">
            <h2
              id="related-heading"
              className="mb-4 font-heading text-2xl font-semibold text-brand-navy"
            >
              Related Services
            </h2>
            <ul className="flex flex-wrap gap-3">
              {relatedServices.map((related) => (
                <li key={related.slug}>
                  <Link
                    href={`/services/${related.slug}`}
                    className="flex items-center gap-1 rounded-full border border-border px-4 py-2 text-sm font-medium text-brand-navy transition-colors hover:border-brand-blue hover:text-brand-blue"
                  >
                    {related.name}
                    <ArrowRight className="size-3.5" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      <CtaBanner
        title={`Ready to Get Started With ${service.name}?`}
        description="Book a consultation and let our team guide you through your treatment options."
      />
    </>
  );
}
