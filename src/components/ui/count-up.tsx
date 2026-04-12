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
    const targetDigits = target.split("").map(char => (/[0-9]/.test(char) ? parseInt(char) : char));
    const currentDigits = target.split("").map(char => (/[0-9]/.test(char) ? 0 : char));
    
    const interval = setInterval(() => {
      let allReached = true;
      
      for (let i = 0; i < targetDigits.length; i++) {
        const targetVal = targetDigits[i];
        const currentVal = currentDigits[i];
        
        if (typeof targetVal === "number" && typeof currentVal === "number") {
          if (currentVal < targetVal) {
            currentDigits[i] = currentVal + 1;
            allReached = false;
          }
        }
      }

      setDisplay(currentDigits.join(""));

      if (allReached) {
        clearInterval(interval);
      }
    }, 100); // 100ms per step for visible changes

    return () => clearInterval(interval);
  }, [target]);

  return <span className={className}>{display}</span>;
}
