"use client";

import { motion, useReducedMotion } from "motion/react";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { SplitHeading } from "@/components/shared/split-heading";
import type { Crumb } from "@/lib/schema/breadcrumb-schema";

interface PageHeroProps {
  title: string;
  description?: string;
  crumbs: Crumb[];
}

export function PageHero({ title, description, crumbs }: PageHeroProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#3331A5]">
      <div
        className="pointer-events-none absolute -top-20 right-0 size-72 rounded-full bg-background/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 left-0 size-72 rounded-full bg-brand-accent/20 blur-3xl"
        aria-hidden="true"
      />
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
        className="relative mx-auto flex max-w-7xl flex-col gap-4 px-4 py-12 sm:px-6 lg:px-8"
      >
        <Breadcrumbs
          crumbs={crumbs}
          className="[&_[data-slot=breadcrumb-list]]:text-background/70 [&_[data-slot=breadcrumb-page]]:text-background [&_[data-slot=breadcrumb-link]]:hover:text-background"
        />
        <SplitHeading
          as="h1"
          text={title}
          trigger="mount"
          className="text-3xl font-semibold tracking-tight text-background sm:text-4xl"
        />
        {description && (
          <p className="max-w-2xl text-background/75">{description}</p>
        )}
      </motion.div>
    </section>
  );
}
