export interface Doctor {
  slug: string;
  name: string;
  title: string;
  photoUrl: string;
  photoAlt: string;
  qualifications: string[];
  experienceYears: number;
  expertiseAreas?: string[];
  specialInterests?: string[];
  memberships: string[];
  philosophy: string;
}
