"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function FadeIn({ 
  children, 
  delay = 0, 
  className = "" 
}: { 
  children: ReactNode, 
  delay?: number, 
  className?: string 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }} /* Custom fluid cubic-bezier */
      className={className}
    >
      {children}
    </motion.div>
  );
}
