"use client";

import { useEffect, useState } from "react";

interface CountUpProps {
  target: string;
  duration?: number;
  className?: string;
}

const CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ+%#@&";

export function CountUp({ target, duration = 1.6, className = "" }: CountUpProps) {
  const [display, setDisplay] = useState(() =>
    target.replace(/[A-Za-z0-9+%]/g, () => CHARS[Math.floor(Math.random() * CHARS.length)])
  );

  useEffect(() => {
    const chars = target.split("");
    const totalFrames = Math.round((duration * 1000) / 30); // ~30ms per frame
    let frame = 0;

    const interval = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;

      setDisplay(
        chars
          .map((char, i) => {
            // Each character resolves at a staggered time
            const charProgress = (progress - (i * 0.06)) / (1 - i * 0.06);
            if (charProgress >= 1) return char;
            // Non-alphanumeric characters (spaces, etc.) resolve immediately
            if (!/[A-Za-z0-9+%]/.test(char)) return char;
            // Show random placeholder
            return CHARS[Math.floor(Math.random() * CHARS.length)];
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
