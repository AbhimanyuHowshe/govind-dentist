import type { Doctor } from "@/types/doctor";

export const doctors: Doctor[] = [
  {
    slug: "dr-govind-singh",
    name: "Dr. Govind Singh",
    title: "BDS, MDS (Prosthodontics & Implantology)",
    // PLACEHOLDER: stock photo stand-in — replace with a real professional photograph before public launch.
    photoUrl: "https://images.unsplash.com/photo-1758691463384-771db2f192b3?w=800&q=80",
    photoAlt: "Portrait of Dr. Govind Singh",
    qualifications: [
      "Bachelor of Dental Surgery (BDS)",
      "Master of Dental Surgery (MDS) — Prosthodontics & Implantology",
    ],
    experienceYears: 15,
    expertiseAreas: [
      "Dental Implants",
      "Full Mouth Rehabilitation",
      "Crowns & Bridges",
      "Smile Makeovers",
    ],
    memberships: [
      "Indian Dental Association (IDA)",
      "Indian Prosthodontic Society (IPS)",
    ],
    philosophy:
      "Every patient deserves a treatment plan built around their comfort, budget, and long-term oral health — not a one-size-fits-all approach. Dr. Govind believes in explaining every option clearly so patients can make informed decisions about their care.",
  },
  {
    slug: "dr-preeti-singh",
    name: "Dr. Preeti Singh",
    title: "BDS, MDS (Periodontics & Pedodontics)",
    // PLACEHOLDER: stock photo stand-in — replace with a real professional photograph before public launch.
    photoUrl: "https://images.unsplash.com/photo-1713865467253-ce0ac8477d34?w=800&q=80",
    photoAlt: "Portrait of Dr. Preeti Singh",
    qualifications: [
      "Bachelor of Dental Surgery (BDS)",
      "Master of Dental Surgery (MDS) — Periodontics & Pedodontics",
    ],
    experienceYears: 12,
    specialInterests: [
      "Pediatric Dentistry",
      "Gum Treatment",
      "Root Canal Treatment",
      "Preventive Dental Care",
    ],
    memberships: [
      "Indian Dental Association (IDA)",
      "Indian Society of Pedodontics and Preventive Dentistry (ISPPD)",
    ],
    philosophy:
      "Dr. Preeti has a special interest in making dental visits comfortable for children and anxious patients, using a gentle, reassuring approach paired with modern, minimally invasive techniques.",
  },
];

export function getDoctorBySlug(slug: string) {
  return doctors.find((doctor) => doctor.slug === slug);
}
