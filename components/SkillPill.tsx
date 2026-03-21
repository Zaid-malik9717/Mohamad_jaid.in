"use client";
import { motion } from "framer-motion";

interface SkillPillProps {
  label: string;
  gold?: boolean;
}

export default function SkillPill({ label, gold = false }: SkillPillProps) {
  return (
    <motion.span
      whileHover={{
        scale: 1.08,
        boxShadow: gold
          ? "0 0 14px rgba(255,183,0,0.3)"
          : "0 0 14px rgba(0,245,255,0.3)",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={gold ? "gold-pill" : "skill-pill"}
    >
      {label}
    </motion.span>
  );
}
