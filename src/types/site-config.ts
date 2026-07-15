export interface BusinessHours {
  day: string;
  hours: string;
}

export interface SiteConfig {
  clinicName: string;
  shortName: string;
  tagline: string;
  description: string;
  url: string;
  address: {
    line1: string;
    line2: string;
    line3: string;
    locality: string;
    region: string;
    postalCode: string;
    country: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  phone: string;
  phoneDisplay: string;
  landline: string;
  landlineDisplay: string;
  email: string;
  whatsappNumber: string | null;
  hours: BusinessHours[];
  socials: {
    facebook?: string;
    instagram?: string;
    googleBusiness?: string;
  };
  mapEmbedSrc: string;
}
