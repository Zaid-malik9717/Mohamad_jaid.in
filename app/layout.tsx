import type { Metadata } from "next";
import { Orbitron, Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import NeuralBackground from "@/components/NeuralBackground";
import CustomCursor from "@/components/CustomCursor";
import { Toaster } from "react-hot-toast";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kartavyabaluja.in"),
  title: "Kartavya Baluja — AI/ML Engineer",
  description:
    "Portfolio of Kartavya Baluja, AI/ML Engineer & Python Developer specialising in LLMs, RAG, Agentic AI, and Deep Learning.",
  keywords: ["Kartavya Baluja", "AI Engineer", "ML Engineer", "Python Developer", "Deep Learning", "LLMs", "RAG", "Agentic AI", "Next.js", "Portfolio"],
  authors: [{ name: "Kartavya Baluja", url: "https://kartavyabaluja.in" }],
  creator: "Kartavya Baluja",
  openGraph: {
    title: "Kartavya Baluja — AI/ML Engineer",
    description: "Building intelligent systems with LLMs, RAG, and Deep Learning.",
    url: "https://kartavyabaluja.in",
    siteName: "Kartavya Baluja Portfolio",
    images: [{ url: "/kartavya1.jpg", width: 750, height: 750, alt: "Kartavya Baluja Profile Picture" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kartavya Baluja — AI/ML Engineer",
    description: "Building intelligent systems with LLMs, RAG, and Deep Learning.",
    images: ["/kartavya1.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kartavya Baluja",
    jobTitle: "AI/ML Engineer",
    url: "https://kartavyabaluja.in",
    image: "https://kartavyabaluja.in/kartavya1.jpg",
    sameAs: [
      "https://github.com/kartavya4874",
      "https://linkedin.com/in/kartavya-baluja-214ba1256"
    ]
  };

  return (
    <html lang="en" className={`${orbitron.variable} ${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
