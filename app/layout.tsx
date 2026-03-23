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
  metadataBase: new URL("https://mohamad-jaid.in"),
  title: "Mohamad Jaid | AI & Machine Learning Engineer",
  description:
    "Portfolio of Mohamad Jaid, an AI/ML Engineer specializing in LLMs, Generative AI, Computer Vision, and Python. Open for collaboration and hiring opportunities.",
  keywords: [
    "Mohamad Jaid", "AI Engineer", "Machine Learning Engineer", "Hire AI Developer",
    "Python Developer", "Deep Learning", "LLMs", "Generative AI", "Computer Vision", "Open to Collaborate",
    "AI Freelancer", "Prompt Engineer"
  ],
  authors: [{ name: "Mohamad Jaid", url: "https://mohamad-jaid.in" }],
  creator: "Mohamad Jaid",
  icons: {
    icon: "/Mohamad_Jaid.png",
  },
  openGraph: {
    title: "Mohamad Jaid | AI & Machine Learning Engineer",
    description: "Building intelligent systems with LLMs, Generative AI, and Deep Learning. Available for hiring and collaboration.",
    url: "https://mohamad-jaid.in",
    siteName: "Mohamad Jaid Portfolio",
    images: [{ url: "/Mohamad_Jaid.png", width: 750, height: 750, alt: "Mohamad Jaid Profile Picture" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamad Jaid | AI & Machine Learning Engineer",
    description: "Building intelligent systems with LLMs, Generative AI, and Deep Learning. Available for hiring and collaboration.",
    images: ["/Mohamad_Jaid.png"],
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
    name: "Mohamad Jaid",
    jobTitle: "AI & Machine Learning Engineer",
    url: "https://mohamad-jaid.in",
    image: "https://mohamad-jaid.in/Mohamad_Jaid.png",
    alumniOf: "Geeta University",
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Python",
      "Large Language Models (LLMs)",
      "Generative AI",
      "Computer Vision",
      "Deep Learning",
      "Prompt Engineering"
    ],
    seeks: [
      "Software Engineering Roles",
      "AI Engineering Roles",
      "Machine Learning Roles",
      "Tech Collaborations"
    ],
    sameAs: [
      "https://github.com/Zaid-malik9717",
      "https://linkedin.com/in/mohamad-jaid-305797323"
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
