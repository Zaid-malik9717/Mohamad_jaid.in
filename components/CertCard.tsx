"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface Cert {
  id: number;
  title: string;
  issuer: string;
  year: number;
  credential_url: string;
  is_featured: boolean;
}

interface CertCardProps {
  cert: Cert;
}

export default function CertCard({ cert }: CertCardProps) {
  const { title, issuer, year, credential_url, is_featured } = cert;

  const domainMap: Record<string, string> = {
    "Microsoft": "microsoft.com",
    "Oracle": "oracle.com",
    "Salesforce": "salesforce.com",
    "Neo4j": "neo4j.com",
    "Infosys Springboard": "infosys.com",
    "Google": "google.com",
  };
  const logoUrl = `https://www.google.com/s2/favicons?domain=${domainMap[issuer] || "credly.com"}&sz=64`;

  const inner = (
    <div className="glass-card holo-shimmer p-6 flex flex-col gap-3 h-full relative overflow-hidden">
      {/* Accent top line */}
      {is_featured && (
        <div
          className="absolute top-0 left-0 right-0 h-0.5"
          style={{
            background: "linear-gradient(90deg, var(--accent), var(--secondary), var(--highlight))",
          }}
        />
      )}

      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-3">
          <img 
            src={logoUrl} 
            alt={`${issuer} logo`} 
            className="w-8 h-8 rounded-md bg-white/90 p-1 object-contain shrink-0" 
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <span
            className="text-xs font-medium"
            style={{
              color: is_featured ? "var(--accent)" : "var(--muted)",
              fontFamily: "var(--font-inter)",
            }}
          >
            {issuer}
          </span>
        </div>
        <span
          className="text-xs shrink-0"
          style={{ color: "var(--muted)", fontFamily: "var(--font-inter)" }}
        >
          {year}
        </span>
      </div>

      <h3
        className="font-semibold text-base leading-snug flex-1"
        style={{
          color: is_featured ? "var(--accent)" : "var(--text)",
          fontFamily: "var(--font-space)",
        }}
      >
        {title}
      </h3>

      {credential_url && (
        <a
          href={credential_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs mt-auto transition-colors"
          style={{ color: is_featured ? "var(--accent)" : "var(--secondary)" }}
        >
          <ExternalLink size={12} />
          View Credential
        </a>
      )}
    </div>
  );

  if (is_featured) {
    return (
      <motion.div
        whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(0,245,255,0.15)" }}
        transition={{ duration: 0.3 }}
        className="shimmer-border h-full"
      >
        {inner}
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.03, boxShadow: "0 0 24px rgba(123,47,255,0.15)" }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      {inner}
    </motion.div>
  );
}
