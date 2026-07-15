import type { Testimonial } from "@/types/testimonial";

// PLACEHOLDER: all entries below are placeholder/sample testimonials for layout and SEO
// purposes. Replace with real patient reviews (and real, consented before/after photos)
// before launch. See PLACEHOLDER_CONTENT.md.
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    patientName: "Anjali Sharma",
    rating: 5,
    text: "Excellent experience from start to finish. Dr. Govind explained my root canal procedure clearly and the clinic was spotless. Highly recommend!",
    treatmentType: "Root Canal Treatment",
    source: "google",
    consentGiven: false,
  },
  {
    id: "t2",
    patientName: "Rohit Patidar",
    rating: 5,
    text: "Took my daughter for a check-up and Dr. Preeti was so gentle and patient with her. She wasn't scared at all by the end of the visit.",
    treatmentType: "Pediatric Dentistry",
    source: "google",
    consentGiven: false,
  },
  {
    id: "t3",
    patientName: "Kavita Joshi",
    rating: 5,
    text: "Got my smile makeover done here and I couldn't be happier. The team walked me through every step and the results look completely natural.",
    treatmentType: "Smile Makeover",
    source: "clinic",
    // PLACEHOLDER before/after images — demo only. Do not launch with these; replace
    // with real, patient-consented photography and keep consentGiven accurate.
    beforeImageUrl: "https://placehold.co/500x500/94A3B8/FFFFFF?text=Before+%28Placeholder%29",
    afterImageUrl: "https://placehold.co/500x500/0EA5E9/FFFFFF?text=After+%28Placeholder%29",
    consentGiven: true,
  },
  {
    id: "t4",
    patientName: "Sanjay Vyas",
    rating: 4,
    text: "Very professional clinic with modern equipment. The dental implant procedure was smoother than I expected, and follow-up care was great.",
    treatmentType: "Dental Implants",
    source: "google",
    consentGiven: false,
  },
  {
    id: "t5",
    patientName: "Meera Chouhan",
    rating: 5,
    text: "I was nervous about wisdom tooth removal but the doctors made me feel comfortable throughout. Recovery was quick with the aftercare instructions they gave.",
    treatmentType: "Wisdom Tooth Removal",
    source: "google",
    consentGiven: false,
  },
  {
    id: "t6",
    patientName: "Arjun Mehta",
    rating: 5,
    text: "Been visiting this clinic for regular checkups and cleaning for two years now. Always on time, always thorough, and reasonably priced.",
    treatmentType: "Teeth Cleaning",
    source: "clinic",
    consentGiven: false,
  },
];
