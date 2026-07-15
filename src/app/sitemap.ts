import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site-config";
import { services } from "@/data/services";

const staticRoutes = [
  "",
  "/about",
  "/doctors",
  "/services",
  "/gallery",
  "/testimonials",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  const serviceEntries: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...serviceEntries];
}
