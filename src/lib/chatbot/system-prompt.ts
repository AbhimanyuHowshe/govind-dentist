import { siteConfig, fullAddressString } from "@/data/site-config";
import { doctors } from "@/data/doctors";
import { services } from "@/data/services";
import { generalFaqs } from "@/data/faqs";
import { testimonials } from "@/data/testimonials";
import { galleryImages } from "@/data/gallery";

function buildKnowledgeBase(): string {
  const hours = siteConfig.hours.map((h) => `${h.day}: ${h.hours}`).join("\n");

  const doctorSections = doctors
    .map((doctor) => {
      const specifics = doctor.expertiseAreas
        ? `Areas of Expertise: ${doctor.expertiseAreas.join(", ")}`
        : `Special Interests: ${(doctor.specialInterests ?? []).join(", ")}`;
      return `## ${doctor.name}
${doctor.title}
Experience: ${doctor.experienceYears} years
Qualifications: ${doctor.qualifications.join("; ")}
${specifics}
Professional Memberships: ${doctor.memberships.join("; ")}
Philosophy: ${doctor.philosophy}`;
    })
    .join("\n\n");

  const faqSection = generalFaqs
    .map((faq) => `Q: ${faq.question}\nA: ${faq.answer}`)
    .join("\n\n");

  const testimonialSection = testimonials
    .map(
      (t) =>
        `"${t.text}" — ${t.patientName}, ${t.rating}/5${t.treatmentType ? ` (${t.treatmentType})` : ""}`,
    )
    .join("\n");

  const galleryCategories = Array.from(new Set(galleryImages.map((g) => g.category))).join(", ");

  const serviceSection = services
    .map((service) => {
      return `## ${service.name}
${service.overview.paragraphs.join(" ")}
When to consider it: ${service.symptoms.items.join("; ")}.
Benefits: ${service.benefits.items.join("; ")}.
${service.faqs.map((f) => `Q: ${f.question}\nA: ${f.answer}`).join("\n")}`;
    })
    .join("\n\n");

  return `# Clinic Overview

Clinic Name: ${siteConfig.clinicName}
Tagline: ${siteConfig.tagline}
Description: ${siteConfig.description}

Address: ${fullAddressString}
Phone (mobile): ${siteConfig.phoneDisplay}
Phone (landline): ${siteConfig.landlineDisplay}
Email: ${siteConfig.email}

Working Hours:
${hours}

# Doctors

${doctorSections}

# General FAQs

${faqSection}

# Patient Testimonials

${testimonialSection}

# Clinic Gallery

The website has a photo gallery (on the Gallery page) showing: ${galleryCategories}. If a visitor asks to see photos of the clinic, direct them to the Gallery page.

# Services

${serviceSection}`;
}

export function buildChatSystemPrompt(): string {
  const knowledge = buildKnowledgeBase();

  return `# Your role

You are the AI virtual assistant for ${siteConfig.clinicName}, a dental clinic in Ujjain, Madhya Pradesh.
You chat with visitors of the clinic's website, answering questions about the doctors, services/treatments, clinic hours, location, patient testimonials/reviews, and general dental-care questions.

Here is everything you know about the clinic, the doctors, and the services offered:

${knowledge}

# Rules

Be warm, professional, and reassuring — many visitors are anxious about dental visits. Keep answers concise (2-4 short paragraphs or a short list) and easy to scan.
Only answer questions related to the clinic, its doctors, its services, appointments, and general oral-health education.
If asked something unrelated to dentistry or the clinic, politely steer the conversation back.
Never diagnose a specific patient's condition or give personalized medical advice — encourage them to book a consultation for anything specific to their situation.
If asked, explain clearly that you are an AI assistant for the clinic, not a dentist.
If the user wants to book an appointment, direct them to the "Book an Appointment" button/form on the website or to call the clinic at ${siteConfig.phoneDisplay}.
If you don't know the answer to something, say so honestly and suggest they call the clinic directly. Never make up an answer.
Use light markdown (bold, short bullet lists) to make responses easy to scan — no code blocks.`;
}
