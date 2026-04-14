import type { Metadata } from "next";
import { Orbitron, Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import NeuralBackground from "@/components/NeuralBackground";
import CustomCursor from "@/components/CustomCursor";
import JsonLd from "@/components/JsonLd";
import { Toaster } from "react-hot-toast";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mohamadjaid.in"),
  title: {
    default: "Mohamad Jaid | AI/ML Engineer & Developer",
    template: "%s | Mohamad Jaid",
  },
  description:
    "Mohamad Jaid — AI/ML engineer building intelligent, full-stack products. Explore projects, certifications, and experience.",
  keywords: [
    "Mohamad Jaid",
    "AI engineer",
    "ML engineer",
    "portfolio",
    "Next.js developer",
    "machine learning",
    "deep learning",
    "LLMs",
    "Generative AI",
    "Computer Vision",
    "Python Developer",
    "Prompt Engineer",
  ],
  authors: [{ name: "Mohamad Jaid", url: "https://www.mohamadjaid.in" }],
  creator: "Mohamad Jaid",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.mohamadjaid.in",
    title: "Mohamad Jaid | AI/ML Engineer & Developer",
    description:
      "AI/ML engineer building intelligent, full-stack products. Explore projects, certifications, and experience.",
    siteName: "Mohamad Jaid Portfolio",
    images: [
      {
        url: "/Mohamad_Jaid.webp",
        width: 1200,
        height: 630,
        alt: "Mohamad Jaid — AI/ML Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamad Jaid | AI/ML Engineer",
    description:
      "AI/ML engineer building intelligent, full-stack products.",
    images: ["/Mohamad_Jaid.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/Mohamad_Jaid.webp",
  },
  alternates: {
    canonical: "https://www.mohamadjaid.in",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body>
        <NeuralBackground />
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "rgba(2,0,8,0.9)",
              color: "#e8e8ff",
              border: "1px solid rgba(0,245,255,0.2)",
              borderRadius: "12px",
              backdropFilter: "blur(16px)",
              fontFamily: "var(--font-inter)",
            },
          }}
        />
      </body>
    </html>
  );
}
