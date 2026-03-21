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
        syne: ["var(--font-syne)", "sans-serif"],
        dm: ["var(--font-dm-sans)", "sans-serif"],
        fira: ["var(--font-fira-code)", "monospace"],
      },
      colors: {
        bg: "#04040A",
        accent: "#00E5FF",
        gold: "#FFB700",
        text: "#F0F0FA",
        muted: "#7A7A9A",
      },
      boxShadow: {
        "glow-accent": "0 0 20px rgba(0,229,255,0.3)",
        "glow-gold": "0 0 20px rgba(255,183,0,0.3)",
        "glow-sm": "0 0 10px rgba(0,229,255,0.2)",
      },
      animation: {
        shimmer: "shimmer 2.5s linear infinite",
        pulse_dot: "pulse_dot 2s ease-in-out infinite",
        ticker: "ticker 30s linear infinite",
        fadeUp: "fadeUp 0.5s ease forwards",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        pulse_dot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(0.8)" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
