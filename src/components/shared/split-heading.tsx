"use client";

import { motion, useReducedMotion } from "motion/react";
import { createElement, Fragment } from "react";

export function SplitHeading({
  text,
  as = "h2",
  className,
  delay = 0,
  trigger = "inView",
}: {
  text: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  delay?: number;
  /**
   * "mount" reveals immediately on hydration — required for above-the-fold
   * headings (e.g. Hero h1), since whileInView can leave already-visible
   * content stuck at opacity:0 if hydration/IntersectionObserver is slow.
   * "inView" (default) reveals on scroll for below-the-fold headings.
   */
  trigger?: "inView" | "mount";
}) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(" ");

  if (shouldReduceMotion) {
    return createElement(as, { className }, text);
  }

  const viewProps =
    trigger === "mount"
      ? { animate: { opacity: 1, y: 0 } }
      : {
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-80px 0px -80px 0px" },
        };

  return createElement(
    as,
    { className, "aria-label": text },
    <span aria-hidden="true">
      {words.map((word, wi) => (
        <Fragment key={wi}>
          <span className="inline-block whitespace-nowrap">
            {word.split("").map((char, ci) => (
              <motion.span
                key={ci}
                className="inline-block"
                initial={{ opacity: 0, y: 20 }}
                {...viewProps}
                transition={{
                  duration: 0.4,
                  delay: delay + (wi * 6 + ci) * 0.018,
                  ease: "easeOut",
                }}
              >
                {char}
              </motion.span>
            ))}
          </span>
          {wi < words.length - 1 ? " " : ""}
        </Fragment>
      ))}
    </span>
  );
}
