export interface TreatmentStep {
  step: number;
  title: string;
  description: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export type ServiceCategory =
  | "general"
  | "cosmetic"
  | "restorative"
  | "orthodontic"
  | "pediatric"
  | "surgical"
  | "emergency";

export interface Service {
  slug: string;
  name: string;
  shortName?: string;
  category: ServiceCategory;
  icon: string;
  heroImageUrl: string;
  heroImageAlt: string;

  metaTitle: string;
  metaDescription: string;
  keywords: string[];

  overview: {
    heading: string;
    paragraphs: string[];
  };
  symptoms: {
    heading: string;
    items: string[];
  };
  benefits: {
    heading: string;
    items: string[];
  };
  treatmentProcess: {
    heading: string;
    steps: TreatmentStep[];
  };
  recovery: {
    heading: string;
    paragraphs: string[];
    tips?: string[];
  };
  faqs: ServiceFaq[];

  relatedServiceSlugs?: string[];
}
