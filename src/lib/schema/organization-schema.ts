import { siteConfig } from "@/data/site-config";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Dentist", "LocalBusiness"],
    "@id": `${siteConfig.url}/#clinic`,
    name: siteConfig.clinicName,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    priceRange: "$$",
    image: `${siteConfig.url}/og-image.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}, ${siteConfig.address.line3}`,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: siteConfig.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.day,
      description: h.hours,
    })),
    sameAs: Object.values(siteConfig.socials).filter(Boolean),
  };
}
