"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "motion/react";

export function ScrollProgressBar() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
    restDelta: 0.001,
  });

  if (shouldReduceMotion) return null;

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-brand-blue"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}
