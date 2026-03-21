"use client";
import { motion } from "framer-motion";
import { HTMLAttributes } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glow?: boolean;
  className?: string;
}

export default function GlassCard({ children, glow = true, className = "", ...props }: GlassCardProps) {
  return (
    <motion.div
      whileHover={
        glow
          ? {
              boxShadow: "0 0 40px rgba(0,245,255,0.12), 0 0 80px rgba(123,47,255,0.06)",
              borderColor: "rgba(0,245,255,0.25)",
            }
          : undefined
      }
      className={`glass-card ${className}`}
      transition={{ duration: 0.3 }}
      {...(props as any)}
    >
      {children}
    </motion.div>
  );
}
