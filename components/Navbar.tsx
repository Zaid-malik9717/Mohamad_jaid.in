"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#live-links", label: "Live" },
  { href: "#certifications", label: "Certs" },
  { href: "#education", label: "Education" },
  { href: "#publication", label: "Publication" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find all intersecting entries, sort by intersection ratio
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          // Sort by highest visible percentage
          visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActiveSection(`#${visible[0].target.id}`);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    // Observe all sections
    links.forEach((link) => {
      const id = link.href.substring(1);
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    const id = href.substring(1);
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 64; // Offset for fixed navbar
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" style={{ background: "rgba(4,4,10,0.85)", backdropFilter: "blur(20px)", borderBottom: "1px solid var(--border)" }}>
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" onClick={(e) => handleClick(e, "#hero")} className="font-syne font-bold text-lg tracking-tight hover:opacity-80 transition-opacity" style={{ color: "var(--accent)" }}>
          KB<span style={{ color: "var(--text)" }}>.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => handleClick(e, l.href)}
                className="relative px-3 py-1.5 text-sm rounded-lg transition-colors"
                style={{
                  color: activeSection === l.href ? "var(--accent)" : "var(--muted)",
                  fontWeight: activeSection === l.href ? 600 : 400,
                  background: activeSection === l.href ? "rgba(0,229,255,0.08)" : "transparent",
                }}
              >
                {l.href === "#live-links" ? (
                  <span className="flex items-center gap-1.5">
                    <span className="live-dot" style={{ width: 5, height: 5 }} />
                    {l.label}
                  </span>
                ) : (
                  l.label
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
          style={{ color: "var(--muted)", border: "1px solid var(--border)" }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden"
            style={{ borderTop: "1px solid var(--border)", background: "rgba(4,4,10,0.98)" }}
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => handleClick(e, l.href)}
                    className="block px-3 py-2 rounded-lg text-sm transition-colors"
                    style={{
                      color: activeSection === l.href ? "var(--accent)" : "var(--muted)",
                      background: activeSection === l.href ? "rgba(0,229,255,0.08)" : "transparent",
                    }}
                  >
                    {l.href === "#live-links" ? (
                      <span className="flex items-center gap-1.5">
                        <span className="live-dot" style={{ width: 6, height: 6 }} />
                        {l.label}
                      </span>
                    ) : (
                      l.label
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
