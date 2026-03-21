"use client";
import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "3d" | "scale";
  staggerChildren?: boolean;
}

export default function ScrollReveal({ 
  children, 
  className = "", 
  delay = 0, 
  direction = "up",
  staggerChildren = false
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

  const getVariants = () => {
    const base = {
      hidden: { opacity: 0, filter: "blur(10px)" },
      visible: { 
        opacity: 1, 
        filter: "blur(0px)",
        transition: {
          duration: 0.8,
          delay: delay,
          ease: [0.16, 1, 0.3, 1] as const, // Custom cubic-bezier for snappy yet smooth reveal
          ...(staggerChildren && { staggerChildren: 0.1, delayChildren: delay + 0.2 })
        }
      }
    };

    switch (direction) {
      case "up":
        return {
          hidden: { ...base.hidden, y: 50, scale: 0.95 },
          visible: { ...base.visible, y: 0, scale: 1 }
        };
      case "left":
        return {
          hidden: { ...base.hidden, x: -50, scale: 0.95 },
          visible: { ...base.visible, x: 0, scale: 1 }
        };
      case "right":
        return {
          hidden: { ...base.hidden, x: 50, scale: 0.95 },
          visible: { ...base.visible, x: 0, scale: 1 }
        };
      case "scale":
        return {
          hidden: { ...base.hidden, scale: 0.8 },
          visible: { 
            ...base.visible, 
            scale: 1,
            transition: { ...base.visible.transition, type: "spring" as const, stiffness: 100, damping: 20 }
          }
        };
      case "3d":
        return {
          hidden: { 
            ...base.hidden, 
            y: 80, 
            rotateX: 45, 
            rotateY: -10,
            scale: 0.9,
            z: -100
          },
          visible: { 
            ...base.visible, 
            y: 0, 
            rotateX: 0, 
            rotateY: 0,
            scale: 1,
            z: 0
          }
        };
      default:
        return base;
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={getVariants()}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
      style={{ transformStyle: "preserve-3d", perspective: 1200 }}
    >
      {children}
    </motion.div>
  );
}

// Stagger wrapper for children
export function StaggerChildren({ children, className = "", staggerDelay = 0.1 }: {
  children: ReactNode[];
  className?: string;
  staggerDelay?: number;
}) {
  return (
    <div className={className}>
      {(Array.isArray(children) ? children : [children]).map((child, i) => (
        <ScrollReveal key={i} delay={i * staggerDelay} direction="3d">
          {child}
        </ScrollReveal>
      ))}
    </div>
  );
}
