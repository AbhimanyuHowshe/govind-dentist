"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ArrowUp } from "lucide-react";
import { useKeyboardLikelyOpen } from "@/lib/use-keyboard-open";

export function BackToTop() {
  const shouldReduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const keyboardOpen = useKeyboardLikelyOpen();

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    setIsMobile(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <AnimatePresence>
      {visible && !(keyboardOpen && isMobile) && (
        <motion.button
          type="button"
          onClick={() =>
            window.scrollTo({ top: 0, behavior: shouldReduceMotion ? "auto" : "smooth" })
          }
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-20 left-4 z-40 flex size-11 items-center justify-center rounded-full border border-border bg-background text-brand-navy shadow-lg transition-colors hover:bg-brand-blue hover:text-white sm:left-6 md:bottom-6"
          aria-label="Back to top"
        >
          <ArrowUp className="size-5" aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
