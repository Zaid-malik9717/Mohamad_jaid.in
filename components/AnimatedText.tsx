"use client";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  glitch?: boolean;
}

export default function AnimatedText({ text, className = "", delay = 0, glitch = false }: AnimatedTextProps) {
  const words = text.split(" ");

  return (
    <motion.span
      className={`${className} ${glitch ? "glitch-text" : ""}`}
      data-text={glitch ? text : undefined}
      initial="hidden"
      animate="show"
      variants={{
        show: { transition: { staggerChildren: 0.06, delayChildren: delay } },
        hidden: {},
      }}
      aria-label={text}
    >
      {words.map((word, wi) => (
        <motion.span
          key={wi}
          className="inline-block mr-[0.3em]"
          variants={{
            hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
            show: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
