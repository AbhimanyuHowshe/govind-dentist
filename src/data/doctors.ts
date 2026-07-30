import type { Doctor } from "@/types/doctor";

export const doctors: Doctor[] = [
  {
    slug: "dr-govind-singh",
    name: "Dr. Govind Singh",
    title: "BDS",
    photoUrl: "/images/doctors/dr-govind-singh.jpg",
    photoAlt: "Portrait of Dr. Govind Singh",
    qualifications: ["Bachelor of Dental Surgery (BDS)"],
    experienceYears: 25,
    expertiseAreas: [
      "General & Family Dentistry",
      "Root Canal Treatment",
      "Teeth Whitening",
      "Smile Makeovers",
    ],
    memberships: ["Indian Dental Association (IDA)"],
    philosophy:
      "Every patient deserves a treatment plan built around their comfort, budget, and long-term oral health — not a one-size-fits-all approach. Dr. Govind believes in explaining every option clearly so patients can make informed decisions about their care.",
  },
  {
    slug: "dr-preeti-singh",
    name: "Dr. Preeti Singh",
    title: "BDS",
    photoUrl: "/images/doctors/dr-preeti-singh.jpg",
    photoAlt: "Portrait of Dr. Preeti Singh",
    qualifications: ["Bachelor of Dental Surgery (BDS)"],
    experienceYears: 25,
    specialInterests: [
      "Root Canal Treatment",
      "Cosmetic Dentistry",
      "Preventive Dental Care",
    ],
    memberships: ["Indian Dental Association (IDA)"],
    philosophy:
      "Dr. Preeti believes every patient deserves a calm, reassuring visit, using a gentle approach paired with modern, minimally invasive techniques.",
  },
];

export function getDoctorBySlug(slug: string) {
  return doctors.find((doctor) => doctor.slug === slug);
}
