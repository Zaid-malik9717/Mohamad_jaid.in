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
      whileHover={glow ? { boxShadow: "0 0 30px rgba(0,229,255,0.15)", borderColor: "rgba(0,229,255,0.35)" } : undefined}
      className={`glass-card ${className}`}
      transition={{ duration: 0.25 }}
      {...(props as any)}
    >
      {children}
    </motion.div>
  );
}
