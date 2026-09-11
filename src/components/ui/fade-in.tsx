"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  immediate?: boolean;
  yOffset?: number;
  duration?: number;
}

export function FadeIn({ 
  children, 
  delay = 0, 
  className = "",
  immediate = false,
  yOffset = 8,
  duration = 0.35
}: FadeInProps) {
  const prefersReduced = useReducedMotion();

  if (immediate || prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px", amount: 0.05 }}
      transition={{ 
        duration, 
        delay, 
        ease: [0.23, 1, 0.32, 1] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
