import type { Service } from "@/types/service";
import { siteConfig } from "@/data/site-config";

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.name,
    description: service.metaDescription,
    url: `${siteConfig.url}/services/${service.slug}`,
    image: `${siteConfig.url}${service.heroImageUrl}`,
    provider: {
      "@id": `${siteConfig.url}/#clinic`,
    },
    procedureType: "https://schema.org/NoninvasiveProcedure",
  };
}
