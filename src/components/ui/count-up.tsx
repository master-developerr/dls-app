"use client";

import { useEffect, useState } from "react";

interface CountUpProps {
  target: string;
  duration?: number;
  className?: string;
}

export function CountUp({ target, duration = 1.6, className = "" }: CountUpProps) {
  const [display, setDisplay] = useState(() =>
    target.replace(/[0-9]/g, "0")
  );

  useEffect(() => {
    const chars = target.split("");
    const totalFrames = Math.round((duration * 1000) / 30);
    let frame = 0;

    const interval = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;

      setDisplay(
        chars
          .map((char, i) => {
            // Non-digit characters stay as-is (K, +, %, etc.)
            if (!/[0-9]/.test(char)) return char;

            // Each digit resolves with a stagger
            const charDelay = i * 0.08;
            const charProgress = Math.min(Math.max((progress - charDelay) / (1 - charDelay), 0), 1);

            if (charProgress >= 1) return char;

            // Sequential numerical increment (0 -> target digit)
            const targetDigit = parseInt(char);
            const currentDigit = Math.floor(charProgress * targetDigit);
            return String(currentDigit);
          })
          .join("")
      );

      if (frame >= totalFrames) {
        clearInterval(interval);
        setDisplay(target);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [target, duration]);

  return <span className={className}>{display}</span>;
}
