"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export function ImageWipeReveal({
  children,
  className,
  direction = "right",
  trigger = "inView",
}: {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right";
  /**
   * "mount" wipes away immediately on hydration — required for
   * above-the-fold images (e.g. a page's hero image), since whileInView
   * can leave an already-visible image stuck under the overlay if
   * hydration/IntersectionObserver is slow. "inView" (default) reveals
   * on scroll for below-the-fold images.
   */
  trigger?: "inView" | "mount";
}) {
  const shouldReduceMotion = useReducedMotion();
  const target = { x: direction === "right" ? "100%" : "-100%" };
  const viewProps =
    trigger === "mount"
      ? { animate: target }
      : { whileInView: target, viewport: { once: false, margin: "-100px 0px -100px 0px" } };

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {children}
      {!shouldReduceMotion && (
        <motion.div
          className="absolute inset-0 z-10 bg-gradient-to-br from-brand-blue to-brand-accent"
          initial={{ x: "0%" }}
          {...viewProps}
          transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
