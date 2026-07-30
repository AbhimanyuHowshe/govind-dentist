import type { SiteConfig } from "@/types/site-config";

const fullAddress =
  "First Floor, Mahakal Sampanna Complex, Near Tower, Freeganj, Madhav Nagar, Ujjain, Madhya Pradesh 456010";

export const siteConfig: SiteConfig = {
  clinicName: "Dr. Singh Dental Clinic",
  shortName: "Dr. Singh Dental Clinic",
  tagline: "Healthy Smiles Begin Here",
  description:
    "Trusted dental care by Dr. Govind Singh & Dr. Preeti Singh in Ujjain — general dentistry, cosmetic dentistry, root canal, braces, and emergency dental care.",
  url: "https://www.drgovindsingh.com",
  address: {
    line1: "First Floor",
    line2: "Mahakal Sampanna Complex, Near Tower",
    line3: "Freeganj, Madhav Nagar",
    locality: "Ujjain",
    region: "Madhya Pradesh",
    postalCode: "456010",
    country: "IN",
  },
  // PLACEHOLDER: approximate Ujjain city-center coordinates — replace with the clinic's exact geocoded lat/lng.
  geo: {
    latitude: 23.1765,
    longitude: 75.7885,
  },
  phone: "+917771818143",
  phoneDisplay: "7771818143",
  email: "drgovindsingh@rediffmail.com",
  whatsappNumber: "917771818143",
  hours: [
    { day: "Monday – Saturday", hours: "11:00 AM – 7:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ],
  socials: {
    // PLACEHOLDER: add real social/Google Business profile URLs once available.
  },
  mapEmbedSrc: `https://maps.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`,
};

export const fullAddressString = fullAddress;
