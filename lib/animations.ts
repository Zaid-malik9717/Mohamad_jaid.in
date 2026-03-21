import { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const slideInRight: Variants = {
  hidden: { x: "100%", opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", damping: 25, stiffness: 200 },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

export const scaleIn: Variants = {
  hidden: { scale: 0.95, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};
