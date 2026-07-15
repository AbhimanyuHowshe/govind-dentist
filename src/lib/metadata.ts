import type { Metadata } from "next";
import { siteConfig } from "@/data/site-config";

interface BuildMetadataOptions {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  keywords?: string[];
}

export function buildMetadata({
  title,
  description,
  path,
  ogImage,
  keywords,
}: BuildMetadataOptions): Metadata {
  const url = `${siteConfig.url}${path}`;
  const images = ogImage ? [{ url: ogImage }] : undefined;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.clinicName,
      locale: "en_IN",
      type: "website",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
  };
}
