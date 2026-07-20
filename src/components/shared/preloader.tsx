"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

export function Preloader() {
  const shouldReduceMotion = useReducedMotion();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (shouldReduceMotion) {
      setLoading(false);
      return;
    }
    if (document.readyState === "complete") {
      const timeout = setTimeout(() => setLoading(false), 300);
      return () => clearTimeout(timeout);
    }
    const handleLoad = () => setTimeout(() => setLoading(false), 300);
    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-200 flex items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          role="status"
          aria-label="Loading"
        >
          <motion.div
            className="size-10 rounded-full border-3 border-brand-blue/20 border-t-brand-blue"
            animate={{ rotate: 360 }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
