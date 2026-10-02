"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Phone, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/shared/magnetic";
import { SplitHeading } from "@/components/shared/split-heading";
import { siteConfig } from "@/data/site-config";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const transition = { duration: shouldReduceMotion ? 0 : 0.5 };
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 50]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#3331A5]">
      <div
        className="pointer-events-none absolute -top-24 right-0 size-96 rounded-full bg-background/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 left-0 size-96 rounded-full bg-brand-accent/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          className="flex flex-col gap-6"
        >
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-background/20 bg-background/10 px-4 py-1.5 text-sm font-semibold text-background">
            <span className="size-1.5 rounded-full bg-background" aria-hidden="true" />
            Trusted Dentist in Ujjain
          </span>
          <SplitHeading
            as="h1"
            text="Healthy Smiles Begin Here"
            trigger="mount"
            className="text-4xl font-bold tracking-tight text-background sm:text-5xl lg:text-6xl"
          />
          <p className="max-w-lg text-lg text-background/75">
            Trusted dental care by Dr. Govind Singh & Dr. Preeti Singh in
            Ujjain — general, cosmetic, and emergency dentistry for the
            whole family.
          </p>
          <div className="flex flex-wrap items-center gap-4">
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...transition, delay: shouldReduceMotion ? 0 : 0.15 }}
          className="relative"
        >
          <motion.div className="relative" style={{ y: parallaxY }}>
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl shadow-2xl shadow-black/30 ring-1 ring-background/10">
              <motion.div
                className="absolute inset-0"
                animate={
                  shouldReduceMotion
                    ? undefined
                    : { scale: [1, 1.03, 1] }
                }
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/images/clinic/treatment-hall.jpg"
                  alt="Modern treatment hall at Dr. Singh Dental Clinic, Ujjain"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 600px, 100vw"
                />
              </motion.div>
            </div>
            <div className="absolute -bottom-5 -left-5 hidden items-center gap-3 rounded-xl border card-sky px-4 py-3 shadow-lg sm:flex">
              <div className="flex size-10 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent">
                <ShieldCheck className="size-5" aria-hidden="true" />
              </div>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-brand-navy">Hygiene First</p>
                <p className="text-xs text-muted-foreground">Sterilized &amp; safe care</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
