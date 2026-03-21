import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["var(--font-orbitron)", "sans-serif"],
        space: ["var(--font-space)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        bg: "#020008",
        accent: "#00f5ff",
        secondary: "#7b2fff",
        highlight: "#ff0080",
        gold: "#FFB700",
        text: "#e8e8ff",
        muted: "#8888aa",
      },
      boxShadow: {
        "glow-accent": "0 0 20px rgba(0,245,255,0.3)",
        "glow-secondary": "0 0 20px rgba(123,47,255,0.3)",
        "glow-highlight": "0 0 20px rgba(255,0,128,0.3)",
        "glow-gold": "0 0 20px rgba(255,183,0,0.3)",
        "glow-sm": "0 0 10px rgba(0,245,255,0.2)",
      },
      animation: {
        shimmer: "shimmer 2.5s linear infinite",
        pulse_dot: "pulse_dot 2s ease-in-out infinite",
        fadeUp: "floatUp 0.6s ease-out forwards",
        borderRotate: "borderRotate 3s linear infinite",
        colorCycle: "colorCycle 6s ease infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        pulse_dot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.75)" },
        },
        floatUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        borderRotate: {
          to: { transform: "rotate(360deg)" },
        },
        colorCycle: {
          "0%": { color: "#00f5ff" },
          "33%": { color: "#7b2fff" },
          "66%": { color: "#ff0080" },
          "100%": { color: "#00f5ff" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
