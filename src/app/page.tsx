import { Hero } from "@/components/sections/hero";
import { EmergencyCta } from "@/components/sections/emergency-cta";
import { StatsStrip } from "@/components/sections/stats-strip";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { AboutClinicPreview } from "@/components/sections/about-clinic-preview";
import { MeetDoctorsPreview } from "@/components/sections/meet-doctors-preview";
import { ServicesPreview } from "@/components/sections/services-preview";
import { ModernEquipment } from "@/components/sections/modern-equipment";
import { TestimonialsPreview } from "@/components/sections/testimonials-preview";
import { FaqPreview } from "@/components/sections/faq-preview";
import { MapSection } from "@/components/sections/map-section";
import { ContactCta } from "@/components/sections/contact-cta";
import { JsonLd } from "@/components/shared/json-ld";
import { faqSchema } from "@/lib/schema/faq-schema";
import { generalFaqs } from "@/data/faqs";

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(generalFaqs)} />
      <Hero />
      <EmergencyCta />
      <StatsStrip />
      <WhyChooseUs />
      <AboutClinicPreview />
      <MeetDoctorsPreview />
      <ServicesPreview />
      <ModernEquipment />
      <TestimonialsPreview />
      <FaqPreview />
      <MapSection />
      <ContactCta />
    </>
  );
}
