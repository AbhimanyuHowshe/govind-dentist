"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion, animate } from "motion/react";

export function CircularStat({
  value,
  suffix = "",
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-80px 0px -80px 0px" });
  const [display, setDisplay] = useState(shouldReduceMotion ? value : 0);
  const [progress, setProgress] = useState(shouldReduceMotion ? 1 : 0);

  useEffect(() => {
    if (shouldReduceMotion) return;
    if (!isInView) {
      setProgress(0);
      setDisplay(0);
      return;
    }
    const controls = animate(0, 1, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (p) => {
        setProgress(p);
        setDisplay(Math.round(p * value));
      },
    });
    return () => controls.stop();
  }, [isInView, shouldReduceMotion, value]);

  const size = 96;
  const strokeWidth = 6;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - progress);

  return (
    <div ref={ref} className="flex flex-col items-center gap-2 text-center">
      <div
        className="relative flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            className="text-white/10"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            className="text-brand-accent"
          />
        </svg>
        <span className="absolute font-heading text-xl font-bold text-white sm:text-2xl">
          {display}
          {suffix}
        </span>
      </div>
      <p className="text-sm text-white/60">{label}</p>
    </div>
  );
}
