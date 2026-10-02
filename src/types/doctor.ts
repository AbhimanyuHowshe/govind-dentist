export interface Doctor {
  slug: string;
  name: string;
  title: string;
  qualifications: string[];
  experienceYears: number;
  expertiseAreas?: string[];
  specialInterests?: string[];
  memberships: string[];
  philosophy: string;
}
