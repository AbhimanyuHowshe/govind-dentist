import type { SiteConfig } from "@/types/site-config";

const fullAddress =
  "First Floor, Mahakal Sampanna Complex, Near Tower, Freeganj, Madhav Nagar, Ujjain, Madhya Pradesh 456010";

export const siteConfig: SiteConfig = {
  clinicName: "Dr. Govind Singh & Dr. Preeti Singh Dental Clinic",
  shortName: "Dr. Govind & Dr. Preeti Dental Clinic",
  tagline: "Healthy Smiles Begin Here",
  description:
    "Trusted dental care by Dr. Govind Singh & Dr. Preeti Singh in Ujjain — general dentistry, cosmetic dentistry, implants, root canal, braces, and emergency dental care.",
  url: "https://www.govindpreetidental.com",
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
  // PLACEHOLDER: replace with the clinic's real phone number.
  phone: "+910000000000",
  phoneDisplay: "0000000000",
  // PLACEHOLDER: replace with the clinic's real contact email.
  email: "info@govindpreetidental.com",
  // PLACEHOLDER: set to a real WhatsApp number (e.g. "910000000000") once available. WhatsAppButton renders nothing while null.
  whatsappNumber: null,
  hours: [
    { day: "Monday – Saturday", hours: "9:00 AM – 8:00 PM" },
    { day: "Sunday", hours: "10:00 AM – 2:00 PM (Emergency only)" },
  ],
  socials: {
    // PLACEHOLDER: add real social/Google Business profile URLs once available.
  },
  mapEmbedSrc: `https://maps.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`,
};

export const fullAddressString = fullAddress;
