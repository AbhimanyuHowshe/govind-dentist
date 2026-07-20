import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { GoogleMapEmbed } from "@/components/shared/google-map-embed";
import { AppointmentForm } from "@/components/shared/appointment-form";
import { JsonLd } from "@/components/shared/json-ld";
import { Reveal } from "@/components/shared/reveal";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema/breadcrumb-schema";
import { siteConfig, fullAddressString } from "@/data/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Contact Dr. Govind Singh & Dr. Preeti Singh Dental Clinic in Ujjain — address, phone, working hours, and online appointment booking.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHero
        title="Contact Us"
        description="We'd love to hear from you. Reach out to book an appointment or ask a question."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal className="flex flex-col gap-8">
            <address className="flex flex-col gap-4 not-italic">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-brand-blue" aria-hidden="true" />
                <span className="text-muted-foreground">{fullAddressString}</span>
              </div>
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-brand-blue"
              >
                <Phone className="size-5 shrink-0 text-brand-blue" aria-hidden="true" />
                {siteConfig.phoneDisplay}
              </a>
              <a
                href={`tel:${siteConfig.landline}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-brand-blue"
              >
                <Phone className="size-5 shrink-0 text-brand-blue" aria-hidden="true" />
                {siteConfig.landlineDisplay}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-brand-blue"
              >
                <Mail className="size-5 shrink-0 text-brand-blue" aria-hidden="true" />
                {siteConfig.email}
              </a>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 size-5 shrink-0 text-brand-blue" aria-hidden="true" />
                <div className="flex flex-col text-muted-foreground">
                  {siteConfig.hours.map((h) => (
                    <span key={h.day}>
                      {h.day}: {h.hours}
                    </span>
                  ))}
                </div>
              </div>
              {siteConfig.whatsappNumber && (
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-brand-emerald"
                >
                  <MessageCircle className="size-5 shrink-0 text-brand-emerald" aria-hidden="true" />
                  Chat with us on WhatsApp
                </a>
              )}
            </address>

            <GoogleMapEmbed />
          </Reveal>

          <Reveal delay={0.1}>
            <div id="appointment-form">
              <AppointmentForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
