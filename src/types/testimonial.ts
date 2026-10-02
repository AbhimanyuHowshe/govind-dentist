export interface Testimonial {
  id: string;
  patientName: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  treatmentType?: string;
  source: "google" | "clinic";
  consentGiven: boolean;
}
