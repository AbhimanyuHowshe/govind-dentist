import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/shared/magnetic";
import { siteConfig, fullAddressString } from "@/data/site-config";

export function ContactCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-navy via-brand-navy to-[#1e1b4b] text-white">
      <div
        className="pointer-events-none absolute -top-32 right-0 size-96 rounded-full bg-brand-blue/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 left-0 size-80 rounded-full bg-brand-accent/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="flex flex-col gap-6">
          <h2 className="gradient-text-light text-3xl font-semibold sm:text-4xl">
            Ready to Book Your Visit?
          </h2>
          <p className="max-w-md text-white/70">
            Reach out today and take the first step towards a healthier,
            more confident smile.
          </p>
          <div className="flex flex-wrap gap-4">
            <Magnetic>
              <Button
                render={<Link href="/contact#appointment-form" />}
                size="lg"
                className="shadow-lg shadow-black/20"
              >
                Book an Appointment
              </Button>
            </Magnetic>
            <Magnetic>
              <Button
                render={<a href={`tel:${siteConfig.phone}`} />}
                size="lg"
                variant="outline"
                className="shadow-lg shadow-black/20 ring-1 ring-white/15 hover:ring-white/25"
              >
                <Phone className="size-4" aria-hidden="true" />
                Call Now
              </Button>
            </Magnetic>
          </div>
        </div>

        <address className="flex flex-col gap-4 not-italic">
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 size-5 shrink-0 text-brand-accent" aria-hidden="true" />
            <span className="text-white/80">{fullAddressString}</span>
          </div>
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex items-center gap-3 text-white/80 hover:text-brand-accent"
          >
            <Phone className="size-5 shrink-0 text-brand-accent" aria-hidden="true" />
            {siteConfig.phoneDisplay}
          </a>
          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 size-5 shrink-0 text-brand-accent" aria-hidden="true" />
            <div className="flex flex-col text-white/80">
              {siteConfig.hours.map((h) => (
                <span key={h.day}>
                  {h.day}: {h.hours}
                </span>
              ))}
            </div>
          </div>
        </address>
      </div>
    </section>
  );
}
