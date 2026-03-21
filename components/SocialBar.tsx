"use client";
import { Linkedin, Github, Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const socials = [
  {
    id: "linkedin",
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/kartavya-baluja-214ba1256",
    color: "#0A66C2",
  },
  {
    id: "github",
    label: "GitHub",
    icon: Github,
    href: "https://github.com/kartavya4874",
    color: "#F0F0FA",
  },
  {
    id: "email",
    label: "Email",
    icon: Mail,
    href: "mailto:kartavyabaluja453@gmail.com",
    color: "#00E5FF",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    icon: MessageCircle,
    href: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917988467579"}`,
    color: "#25D366",
  },
];

interface SocialBarProps {
  labeled?: boolean; // true = show label text (contact page), false = icon only (hero)
}

export default function SocialBar({ labeled = false }: SocialBarProps) {
  return (
    <div className={`flex items-center ${labeled ? "flex-wrap gap-3" : "gap-2"}`}>
      {socials.map((s, i) => (
        <motion.a
          key={s.id}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08 }}
          whileHover={{ scale: 1.08, y: -2 }}
          className={`flex items-center gap-2 transition-all ${
            labeled
              ? "px-5 py-3 rounded-xl text-sm font-medium"
              : "p-2.5 rounded-xl"
          }`}
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            color: labeled ? "var(--text)" : s.color,
          }}
          aria-label={s.label}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = s.color;
            (e.currentTarget as HTMLElement).style.boxShadow = `0 0 16px ${s.color}40`;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
            (e.currentTarget as HTMLElement).style.boxShadow = "none";
          }}
        >
          <s.icon size={labeled ? 18 : 16} style={{ color: s.color }} />
          {labeled && <span>{s.label}</span>}
        </motion.a>
      ))}
    </div>
  );
}
