"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion, AnimatePresence } from "motion/react";

interface Sparkle {
  id: string;
  x: number;
  y: number;
}

let sparkleCounter = 0;

export function MagicCursor() {
  const shouldReduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [isPointerDown, setIsPointerDown] = useState(false);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const instanceId = useId();

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const ballX = useSpring(cursorX, { damping: 25, stiffness: 300, mass: 0.5 });
  const ballY = useSpring(cursorY, { damping: 25, stiffness: 300, mass: 0.5 });

  const lastSparkleAt = useRef(0);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer || shouldReduceMotion) return;

    document.body.classList.add("magic-cursor-active");
    setEnabled(true);

    const handleMove = (e: PointerEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target as HTMLElement;
      setIsHoveringInteractive(!!target.closest("a, button, [role='button'], input, textarea, select"));

      const now = performance.now();
      if (now - lastSparkleAt.current > 60) {
        lastSparkleAt.current = now;
        sparkleCounter += 1;
        const id = `${instanceId}-${sparkleCounter}`;
        setSparkles((prev) => [
          ...prev.slice(-12),
          { id, x: e.clientX, y: e.clientY },
        ]);
      }
    };

    const handleDown = () => setIsPointerDown(true);
    const handleUp = () => setIsPointerDown(false);
    const handleLeave = () => {
      cursorX.set(-100);
      cursorY.set(-100);
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerdown", handleDown);
    window.addEventListener("pointerup", handleUp);
    document.documentElement.addEventListener("mouseleave", handleLeave);

    return () => {
      document.body.classList.remove("magic-cursor-active");
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerdown", handleDown);
      window.removeEventListener("pointerup", handleUp);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
    };
  }, [cursorX, cursorY, instanceId, shouldReduceMotion]);

  useEffect(() => {
    if (sparkles.length === 0) return;
    const timeout = setTimeout(() => {
      setSparkles((prev) => prev.slice(1));
    }, 500);
    return () => clearTimeout(timeout);
  }, [sparkles]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-100" aria-hidden="true">
      <AnimatePresence>
        {sparkles.map((sparkle) => (
          <motion.span
            key={sparkle.id}
            className="absolute size-1 rounded-full bg-brand-accent"
            style={{ left: sparkle.x, top: sparkle.y }}
            initial={{ opacity: 0.6, scale: 1, x: -2, y: -2 }}
            animate={{ opacity: 0, scale: 0, y: 8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>

      <motion.div
        className="absolute size-2 rounded-full bg-brand-blue"
        style={{ left: cursorX, top: cursorY, x: -4, y: -4 }}
      />
      <motion.div
        id="ball"
        className="absolute rounded-full border-2 border-brand-blue/60"
        style={{
          left: ballX,
          top: ballY,
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          width: isHoveringInteractive ? 48 : 32,
          height: isHoveringInteractive ? 48 : 32,
          scale: isPointerDown ? 0.85 : 1,
          opacity: isHoveringInteractive ? 0.9 : 0.5,
        }}
        transition={{ duration: 0.2 }}
      />
    </div>
  );
}
