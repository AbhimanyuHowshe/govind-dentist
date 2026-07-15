import { SectionHeading } from "@/components/shared/section-heading";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { Reveal } from "@/components/shared/reveal";
import { generalFaqs } from "@/data/faqs";

export function FaqPreview() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <Reveal>
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          className="mb-10"
        />
      </Reveal>
      <Reveal delay={0.1}>
        <FaqAccordion faqs={generalFaqs} />
      </Reveal>
    </section>
  );
}
