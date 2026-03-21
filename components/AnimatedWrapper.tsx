"use client";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";

interface AnimatedWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedWrapper({ children, className = "", delay = 0 }: AnimatedWrapperProps) {
  return (
    <motion.div
      className={className}
      variants={{ ...staggerContainer, show: { ...staggerContainer.show, transition: { staggerChildren: 0.08, delayChildren: delay } } }}
      initial="hidden"
      animate="show"
    >
      {children}
    </motion.div>
  );
}

export function AnimatedItem({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div variants={fadeUp} className={className}>
      {children}
    </motion.div>
  );
}
