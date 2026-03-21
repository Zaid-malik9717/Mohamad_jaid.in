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

  const inner = (
    <div className="glass-card p-6 flex flex-col gap-3 h-full relative overflow-hidden">
      {/* Gold top accent for featured */}
      {is_featured && (
        <div
          className="absolute top-0 left-0 right-0 h-0.5"
          style={{ background: "var(--gold)" }}
        />
      )}

      <div className="flex items-start justify-between gap-2">
        <span
          className="text-xs font-medium"
          style={{ color: is_featured ? "var(--gold)" : "var(--muted)", fontFamily: "var(--font-fira-code)" }}
        >
          {issuer}
        </span>
        <span
          className="text-xs shrink-0"
          style={{ color: "var(--muted)", fontFamily: "var(--font-fira-code)" }}
        >
          {year}
        </span>
      </div>

      <h3
        className="font-syne font-semibold text-base leading-snug flex-1"
        style={{ color: is_featured ? "var(--gold)" : "var(--text)" }}
      >
        {title}
      </h3>

      {credential_url && (
        <a
          href={credential_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs mt-auto"
          style={{ color: is_featured ? "var(--gold)" : "var(--accent)" }}
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
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className="shimmer-border h-full"
      >
        {inner}
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(0,229,255,0.12)" }}
      transition={{ duration: 0.2 }}
      className="h-full"
    >
      {inner}
    </motion.div>
  );
}
