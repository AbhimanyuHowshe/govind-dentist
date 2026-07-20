"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Direction the content travels in from as it reveals. "up" is a subtle vertical settle; "left"/"right" slide in sideways. */
  direction?: "up" | "left" | "right";
}) {
  const shouldReduceMotion = useReducedMotion();

  const initial = shouldReduceMotion
    ? { opacity: 0 }
    : direction === "left"
      ? { opacity: 0, x: -48 }
      : direction === "right"
        ? { opacity: 0, x: 48 }
        : { opacity: 0, y: 20 };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: false, margin: "-80px 0px -80px 0px", amount: 0.3 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.55, delay: shouldReduceMotion ? 0 : delay, ease: "easeOut" }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
