"use client";

import { useEffect, useState } from "react";

interface CountUpProps {
  target: string;
  duration?: number;
  className?: string;
}

export function CountUp({ target, className = "" }: CountUpProps) {
  const [display, setDisplay] = useState(() =>
    target.replace(/[0-9]/g, "0")
  );

  useEffect(() => {
    // Reset to initial state when target changes
    setDisplay(target.replace(/[0-9]/g, "0"));

    const interval = setInterval(() => {
      setDisplay((current) => {
        const currentArr = current.split("");
        const targetArr = target.split("");
        let allReached = true;

        const next = currentArr.map((char, i) => {
          const targetChar = targetArr[i];
          
          // Only increment if both are digits
          if (/[0-9]/.test(char) && /[0-9]/.test(targetChar)) {
            const currentVal = parseInt(char);
            const targetVal = parseInt(targetChar);

            if (currentVal < targetVal) {
              allReached = false;
              return (currentVal + 1).toString();
            }
          }
          return char;
        });

        if (allReached) {
          clearInterval(interval);
          return target;
        }

        return next.join("");
      });
    }, 70); // Balanced speed (70ms)

    return () => clearInterval(interval);
  }, [target]);

  return <span className={className}>{display}</span>;
}
