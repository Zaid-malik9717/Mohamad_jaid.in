"use client";
import { motion } from "framer-motion";

interface SkillPillProps {
  label: string;
  gold?: boolean;
}

export default function SkillPill({ label, gold = false }: SkillPillProps) {
  return (
    <motion.span
      whileHover={{ scale: 1.07 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={gold ? "gold-pill" : "skill-pill"}
    >
      {label}
    </motion.span>
  );
}
