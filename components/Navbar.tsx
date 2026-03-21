"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ScrollProgress from "./ScrollProgress";

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
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActiveSection(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

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
      const y = el.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <ScrollProgress />
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(2,0,8,0.8)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        }}
      >
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleClick(e, "#hero")}
            className="relative group outline-none"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ boxShadow: ["0 0 8px rgba(0,245,255,0.3)", "0 0 16px rgba(0,245,255,0.6)", "0 0 8px rgba(0,245,255,0.3)"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-10 h-10 rounded-xl overflow-hidden border border-cyan-500/50 bg-black"
            >
              <img 
                src="/Gemini_Generated_Image_b6kttcb6kttcb6kt.png" 
                alt="Kartavya Baluja" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => {
              const isActive = activeSection === l.href;
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => handleClick(e, l.href)}
                    className="nav-link relative px-3 py-1.5 text-sm rounded-lg transition-all duration-300 group"
                    style={{
                      color: isActive ? "var(--accent)" : "var(--muted)",
                      fontWeight: isActive ? 600 : 400,
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
                    {/* Hover underline */}
                    <span
                      className="absolute bottom-0 left-3 right-3 h-px transition-transform duration-300 origin-left"
                      style={{
                        background: "var(--accent)",
                        transform: isActive ? "scaleX(1)" : "scaleX(0)",
                        boxShadow: "0 0 6px rgba(0,245,255,0.5)",
                      }}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg transition-colors"
            style={{ color: "var(--accent)", border: "1px solid rgba(0,245,255,0.2)" }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

        {/* Mobile menu - fullscreen overlay */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden fixed inset-0 top-16 z-40"
              style={{ background: "rgba(2,0,8,0.95)", backdropFilter: "blur(20px)" }}
            >
              <ul className="flex flex-col items-center justify-center h-full gap-2 px-6">
                {links.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                  >
                    <a
                      href={l.href}
                      onClick={(e) => handleClick(e, l.href)}
                      className="block px-6 py-3 rounded-xl text-lg font-medium transition-all"
                      style={{
                        color: activeSection === l.href ? "var(--accent)" : "var(--muted)",
                        background: activeSection === l.href ? "rgba(0,245,255,0.08)" : "transparent",
                        fontFamily: "var(--font-space)",
                      }}
                    >
                      {l.href === "#live-links" ? (
                        <span className="flex items-center justify-center gap-2">
                          <span className="live-dot" style={{ width: 6, height: 6 }} />
                          {l.label}
                        </span>
                      ) : (
                        l.label
                      )}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Add hover effect via CSS for nav links */}
      <style jsx global>{`
        .nav-link:hover {
          color: var(--accent) !important;
          text-shadow: 0 0 8px rgba(0,245,255,0.4);
        }
        .nav-link:hover span:last-child {
          transform: scaleX(1) !important;
        }
      `}</style>
    </>
  );
}
