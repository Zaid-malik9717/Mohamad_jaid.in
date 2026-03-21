"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import SkillPill from "./SkillPill";

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

  return (
    <motion.div
      whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(0,229,255,0.2)" }}
      transition={{ duration: 0.2 }}
      className={`glass-card p-6 flex flex-col gap-4 ${is_featured ? "md:col-span-2" : ""}`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-1">
          {is_featured && (
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: "var(--accent)", fontFamily: "var(--font-fira-code)" }}
            >
              ★ Featured
            </span>
          )}
          <h3
            className="font-syne font-bold text-lg leading-tight"
            style={{ color: "var(--text)" }}
          >
            {title}
          </h3>
        </div>
        <span
          className="text-xs shrink-0 mt-1"
          style={{ color: "var(--muted)", fontFamily: "var(--font-fira-code)" }}
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
