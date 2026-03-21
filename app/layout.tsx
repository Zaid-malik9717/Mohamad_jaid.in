import type { Metadata } from "next";
import { Syne, DM_Sans, Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Kartavya Baluja — AI/ML Engineer",
  description:
    "Portfolio of Kartavya Baluja, AI/ML Engineer & Python Developer specialising in LLMs, RAG, Agentic AI, and Deep Learning.",
  openGraph: {
    title: "Kartavya Baluja — AI/ML Engineer",
    description: "Building intelligent systems with LLMs, RAG, and Deep Learning.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${firaCode.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#0d0d18",
              color: "#F0F0FA",
              border: "1px solid rgba(0,229,255,0.2)",
              borderRadius: "12px",
              fontFamily: "var(--font-dm-sans)",
            },
          }}
        />
      </body>
    </html>
  );
}
