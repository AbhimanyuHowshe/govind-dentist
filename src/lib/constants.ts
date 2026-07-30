import { siteConfig } from "@/data/site-config";

export const SITE_URL = siteConfig.url;

export const TIME_SLOTS = [
  "11:00 AM - 1:00 PM",
  "1:00 PM - 3:00 PM",
  "3:00 PM - 5:00 PM",
  "5:00 PM - 7:00 PM",
] as const;
