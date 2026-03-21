"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import SkillPill from "./SkillPill";
import { useRef } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  year: number;
  tech_stack: string[];
  github_url: string;
  live_url: string;
  thumbnail_url: string;
  is_featured: boolean;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, year, tech_stack, github_url, live_url, is_featured } = project;
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  function handleMouse(e: React.MouseEvent) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, perspective: 800 }}
      className={`neon-border-card glass-card p-6 flex flex-col gap-4 ${is_featured ? "md:col-span-2" : ""}`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-1">
          {is_featured && (
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: "var(--gold)", fontFamily: "var(--font-inter)", textShadow: "0 0 10px rgba(255,183,0,0.4)" }}
            >
              ★ Featured
            </span>
          )}
          <h3
            className="font-space font-bold text-lg leading-tight"
            style={{ color: "var(--text)", fontFamily: "var(--font-space)" }}
          >
            {title}
          </h3>
        </div>
        <span
          className="text-xs shrink-0 mt-1"
          style={{ color: "var(--muted)", fontFamily: "var(--font-inter)" }}
        >
          {year}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--muted)" }}>
        {description}
      </p>

      {/* Tech stack pills */}
      <div className="flex flex-wrap gap-2">
        {tech_stack?.map((t) => (
          <SkillPill key={t} label={t} />
        ))}
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-3 pt-1">
        {github_url && (
          <a
            href={github_url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost flex items-center gap-2 text-sm py-2 px-4"
          >
            <Github size={14} />
            GitHub
          </a>
        )}
        {live_url && (
          <a
            href={live_url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2 text-sm py-2 px-4"
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}
