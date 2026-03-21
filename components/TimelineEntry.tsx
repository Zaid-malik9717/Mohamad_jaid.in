"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  start_date: string;
  end_date: string | null;
  is_current: boolean;
  bullets: string[];
}

interface TimelineEntryProps {
  exp: Experience;
  isLast: boolean;
  index?: number;
}

function formatDate(dateStr: string | null, isCurrent: boolean) {
  if (isCurrent || !dateStr) return "Present";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export default function TimelineEntry({ exp, isLast, index = 0 }: TimelineEntryProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { role, company, location, start_date, end_date, is_current, bullets } = exp;
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="flex gap-6">
      {/* Left: dot + line */}
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, type: "spring" }}
          className="w-4 h-4 rounded-full mt-1.5 shrink-0 relative"
          style={{
            background: is_current ? "var(--accent)" : "rgba(123,47,255,0.6)",
            boxShadow: is_current
              ? "0 0 16px rgba(0,245,255,0.7), 0 0 32px rgba(0,245,255,0.3)"
              : "0 0 10px rgba(123,47,255,0.4)",
            border: `2px solid ${is_current ? "var(--accent)" : "var(--secondary)"}`,
          }}
        />
        {!isLast && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={inView ? { height: "100%", opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="w-px mt-2"
            style={{
              background: "linear-gradient(to bottom, var(--accent), var(--secondary), transparent)",
              minHeight: 40,
              boxShadow: "0 0 6px rgba(0,245,255,0.3)",
            }}
          />
        )}
      </div>

      {/* Right: content */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="pb-10 flex-1"
      >
        <div className="glass-card p-5 flex flex-col gap-3">
          {/* Role + date */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <div>
              <h3 className="font-bold text-lg" style={{ color: "var(--text)", fontFamily: "var(--font-space)" }}>
                {role}
              </h3>
              <p className="text-sm mt-0.5" style={{ color: "var(--accent)" }}>
                {company}
              </p>
            </div>
            <div className="flex flex-col items-end gap-1">
              {is_current && (
                <span className="live-badge">
                  <span className="live-dot" />
                  Current
                </span>
              )}
              <span
                className="text-xs"
                style={{ color: "var(--muted)", fontFamily: "var(--font-inter)" }}
              >
                {formatDate(start_date, false)} — {end_date ? formatDate(end_date, false) : "Present"}
              </span>
              <span className="text-xs" style={{ color: "var(--muted)" }}>{location}</span>
            </div>
          </div>

          {/* Bullets */}
          <ul className="flex flex-col gap-2 mt-1">
            {bullets?.map((b, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="flex gap-2 text-sm"
                style={{ color: "var(--muted)" }}
              >
                <span style={{ color: "var(--accent)", marginTop: 2, flexShrink: 0 }}>›</span>
                {b}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
