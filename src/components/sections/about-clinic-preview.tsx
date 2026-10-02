import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { ImageWipeReveal } from "@/components/shared/image-wipe-reveal";

export function AboutClinicPreview() {
  return (
    <section className="bg-brand-soft-gray">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal className="relative aspect-4/3 w-full overflow-hidden rounded-2xl shadow-xl shadow-brand-navy/10 ring-1 ring-black/5">
          <ImageWipeReveal className="absolute inset-0">
            <Image
              src="/images/clinic/reception-waiting-area.png"
              alt="Reception and waiting area of Dr. Singh Dental Clinic"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 500px, 100vw"
            />
          </ImageWipeReveal>
        </Reveal>
        <Reveal delay={0.1} className="flex flex-col gap-4">
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-blue/10 px-3.5 py-1 text-xs font-semibold tracking-wide text-brand-blue uppercase">
            <span className="size-1.5 rounded-full bg-brand-blue" aria-hidden="true" />
            About Our Clinic
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-brand-navy sm:text-4xl">
            A Modern, Hygienic Clinic Built Around You
          </h2>
          <p className="text-muted-foreground">
            Located in the heart of Ujjain, our clinic combines modern
            dental technology with a warm, patient-first approach. Dr.
            Govind Singh and Dr. Preeti Singh lead a team dedicated to
            making every visit comfortable, transparent, and effective —
            from routine checkups to advanced treatments.
          </p>
          <Button
            render={<Link href="/about" />}
            variant="outline"
            className="w-fit"
          >
            Learn More About Us
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
