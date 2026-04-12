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
            const charProgress = Math.min((progress - charDelay) / (1 - charDelay), 1);

            if (charProgress >= 1) return char;
            if (charProgress < 0) return "0";

            // Cycle through numbers 0-9 rapidly
            const targetDigit = parseInt(char);
            const cycleSpeed = 10;
            const cycled = Math.floor(charProgress * cycleSpeed * targetDigit) % 10;
            return String(cycled);
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
