import { siteConfig, fullAddressString } from "@/data/site-config";
import { doctors } from "@/data/doctors";
import { services } from "@/data/services";
import { generalFaqs } from "@/data/faqs";
import { testimonials } from "@/data/testimonials";
import { galleryImages } from "@/data/gallery";
import { findRelevantServices } from "@/lib/chatbot/service-keywords";
import type { Service } from "@/types/service";

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

  const avgRating =
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;
  const testimonialSection = testimonials
    .slice(0, 3)
    .map((t) => `"${t.text}" — ${t.patientName}${t.treatmentType ? ` (${t.treatmentType})` : ""}`)
    .join("\n");

  const galleryCategories = Array.from(new Set(galleryImages.map((g) => g.category))).join(", ");

  // Kept intentionally brief (one line per service) rather than embedding each
  // service's full overview/benefits/FAQs — that bloated the prompt to ~17k
  // tokens and dominated response latency. Full detail lives on each service's
  // page; point visitors there (or to a consult) for specifics.
  const serviceSection = services
    .map(
      (service) =>
        `- **${service.name}** (/services/${service.slug}): ${service.metaDescription} Key signs: ${service.symptoms.items.slice(0, 3).join("; ")}.`,
    )
    .join("\n");

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

Average rating: ${avgRating.toFixed(1)}/5 across ${testimonials.length} reviews. A few examples:
${testimonialSection}

# Clinic Gallery

The website has a photo gallery (on the Gallery page) showing: ${galleryCategories}. If a visitor asks to see photos of the clinic, direct them to the Gallery page.

# Services

${serviceSection}`;
}

let cachedPrompt: string | null = null;

export function buildChatSystemPrompt(): string {
  if (cachedPrompt) return cachedPrompt;

  const knowledge = buildKnowledgeBase();

  cachedPrompt = `# Your role

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
The service list above gives a one-line summary and key signs for each treatment, not the full page content (treatment steps, recovery, detailed FAQs). For anything beyond that summary, point the visitor to the service's page (the link is given next to its name) or suggest booking a consultation.
Use light markdown (bold, short bullet lists) to make responses easy to scan — no code blocks.`;

  return cachedPrompt;
}

function buildServiceDetailBlock(service: Service): string {
  return `## ${service.name} — Full Detail
${service.overview.paragraphs.join(" ")}

Signs you may need this: ${service.symptoms.items.join("; ")}.
Benefits: ${service.benefits.items.join("; ")}.

FAQs:
${service.faqs.map((f) => `Q: ${f.question}\nA: ${f.answer}`).join("\n")}`;
}

/**
 * Keyword-match retrieval: scans the visitor's latest message for a known
 * service term and, if found, returns that service's full detail (overview,
 * complete symptom/benefit lists, all FAQs) plus any testimonials for that
 * treatment — content the trimmed baseline prompt deliberately omits. Called
 * per-request (not cached) since it depends on user input; returns "" when
 * nothing matches, so most messages incur no extra tokens.
 */
export function buildServiceDetailContext(userMessage: string): string {
  const matched = findRelevantServices(userMessage);
  if (matched.length === 0) return "";

  const relatedTestimonials = testimonials.filter((t) =>
    matched.some((s) => t.treatmentType === s.name),
  );

  const testimonialBlock =
    relatedTestimonials.length > 0
      ? `\n\nRelevant patient testimonials:\n${relatedTestimonials
          .map((t) => `"${t.text}" — ${t.patientName}`)
          .join("\n")}`
      : "";

  return `# Additional Detail (relevant to the visitor's current question)

${matched.map(buildServiceDetailBlock).join("\n\n")}${testimonialBlock}`;
}
