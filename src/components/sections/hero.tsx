"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Phone, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const transition = { duration: shouldReduceMotion ? 0 : 0.5 };

  return (
    <section className="relative overflow-hidden bg-brand-soft-gray">
      <div
        className="pointer-events-none absolute -top-24 -right-24 size-96 rounded-full bg-brand-blue/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-24 size-96 rounded-full bg-brand-teal/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          className="flex flex-col gap-6"
        >
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-1.5 text-sm font-semibold text-brand-blue">
            <span className="size-1.5 rounded-full bg-brand-blue" aria-hidden="true" />
            Trusted Dentist in Ujjain
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-brand-navy sm:text-5xl lg:text-6xl">
            Healthy Smiles Begin Here
          </h1>
          <p className="max-w-lg text-lg text-muted-foreground">
            Trusted dental care by Dr. Govind Singh & Dr. Preeti Singh in
            Ujjain — general, cosmetic, and emergency dentistry for the
            whole family.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button
              render={<Link href="/contact#appointment-form" />}
              size="lg"
              className="shadow-lg shadow-brand-blue/25"
            >
              Book an Appointment
            </Button>
            <Button
              render={<a href={`tel:${siteConfig.phone}`} />}
              size="lg"
              variant="outline"
              className="bg-background"
            >
              <Phone className="size-4" aria-hidden="true" />
              Call Now
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: shouldReduceMotion ? 0 : 0.15 }}
          className="relative"
        >
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl shadow-2xl shadow-brand-navy/20 ring-1 ring-black/5">
            <Image
              src="https://images.unsplash.com/photo-1704455306251-b4634215d98f?w=1600&q=80"
              alt="Bright, modern dental treatment room"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 600px, 100vw"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 shadow-lg sm:flex">
            <div className="flex size-10 items-center justify-center rounded-full bg-brand-teal/10 text-brand-teal">
              <ShieldCheck className="size-5" aria-hidden="true" />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-brand-navy">Hygiene First</p>
              <p className="text-xs text-muted-foreground">Sterilized &amp; safe care</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
