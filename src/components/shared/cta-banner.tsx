import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/shared/magnetic";
import { siteConfig } from "@/data/site-config";

interface CtaBannerProps {
  title?: string;
  description?: string;
}

export function CtaBanner({
  title = "Ready to Book Your Appointment?",
  description = "Take the first step towards a healthier smile. Our team is ready to help.",
}: CtaBannerProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-navy via-brand-navy to-[#1e1b4b] py-16 text-white">
      <div
        className="pointer-events-none absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-brand-blue/15 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
        <h2 className="gradient-text-light text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h2>
        <p className="max-w-2xl text-white/70">{description}</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
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
    </section>
  );
}
