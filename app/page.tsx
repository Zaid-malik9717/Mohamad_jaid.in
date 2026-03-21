import {
  heroData,
  aboutData,
  statsData,
  skillsData,
  projectsData,
  experienceData,
  certificationsData,
  educationData,
  publicationData,
  contactData,
  liveLinksData,
} from "@/lib/data";
import AnimatedText from "@/components/AnimatedText";
import SocialBar from "@/components/SocialBar";
import GlassCard from "@/components/GlassCard";
import SkillPill from "@/components/SkillPill";
import ProjectCard from "@/components/ProjectCard";
import TimelineEntry from "@/components/TimelineEntry";
import CertCard from "@/components/CertCard";
import { ArrowRight, Download, GraduationCap, MapPin, Calendar, Mail, Phone, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const groupedSkills: Record<string, string[]> = {};
  skillsData.forEach((s: any) => {
    if (!groupedSkills[s.category]) groupedSkills[s.category] = [];
    groupedSkills[s.category].push(s.label);
  });

  return (
    <main className="flex flex-col min-h-screen">
      
      {/* ───────────────────────────────────────────────────────────────── */}
      {/* 1. HERO SECTION */}
      {/* ───────────────────────────────────────────────────────────────── */}
      <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.03) 0%, transparent 70%)" }} />
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 w-full flex flex-col gap-8">
          
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--surface)', color: 'var(--muted)' }}>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Available for opportunities
            </span>
          </div>

          <h1 className="heading-xl text-5xl sm:text-7xl md:text-8xl leading-[1.1] tracking-tight">
            <AnimatedText text={heroData.name} delay={0.1} />
          </h1>

          <p className="text-xl sm:text-3xl font-medium max-w-3xl leading-snug" style={{ color: "var(--muted)" }}>
            {heroData.tagline}. <br className="hidden sm:block" />
            <span style={{ color: "var(--text)" }}>{heroData.subheading}</span>
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6">
            <a href="#projects" className="btn-primary flex items-center gap-2">
              {heroData.cta_primary} <ArrowRight size={16} />
            </a>
            <a href="/kartavya_ai_eng (1).pdf" download className="btn-ghost flex items-center gap-2">
              <Download size={16} /> {heroData.cta_secondary}
            </a>
          </div>

          <div className="mt-8 pt-8 border-t" style={{ borderColor: "var(--border)" }}>
            <p className="text-sm mb-4 font-medium" style={{ color: "var(--muted)" }}>Connect with me</p>
            <SocialBar labeled={false} />
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────── */}
      {/* 2. ABOUT & SKILLS SECTION */}
      {/* ───────────────────────────────────────────────────────────────── */}
      <section id="about" className="py-24 sm:py-32 border-t" style={{ borderColor: "var(--border)", backgroundColor: "var(--surface)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-16 md:mb-24">
            <h2 className="heading-xl text-3xl sm:text-4xl mb-6">About Me</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-2 text-lg leading-relaxed space-y-6" style={{ color: "var(--muted)" }}>
                <p>{aboutData.bio}</p>
                {statsData.length > 0 && (
                  <div className="grid grid-cols-2 gap-6 pt-8 mt-8 border-t" style={{ borderColor: "var(--border)" }}>
                    {statsData.map((s: any) => (
                      <div key={s.id}>
                        <p className="heading-xl text-4xl mb-1" style={{ color: "var(--text)" }}>{s.value}</p>
                        <p className="text-sm uppercase tracking-wider font-semibold" style={{ color: "var(--muted)" }}>{s.label}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex justify-center md:justify-end">
                <div className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden bg-neutral-900 border" style={{ borderColor: "var(--border)" }}>
                  {aboutData.photo_url ? (
                    <Image src={aboutData.photo_url} alt={heroData.name} fill className="object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="heading-xl text-8xl text-neutral-800">KB</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="heading-xl text-2xl mb-8">Technical Expertise</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(groupedSkills).map(([category, skillList]) => (
                <div key={category} className="p-6 rounded-2xl bg-black border" style={{ borderColor: "var(--border)" }}>
                  <h4 className="font-syne font-semibold text-sm mb-4 uppercase tracking-wider" style={{ color: "var(--muted)" }}>{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((s: string) => <SkillPill key={s} label={s} />)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────── */}
      {/* 3. EXPERIENCE SECTION */}
      {/* ───────────────────────────────────────────────────────────────── */}
      <section id="experience" className="py-24 sm:py-32 border-t" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="heading-xl text-3xl sm:text-4xl">Experience</h2>
          </div>
          <div className="space-y-12">
            {experienceData.map((exp: any, i: number) => (
              <TimelineEntry key={exp.id} exp={exp} isLast={i === experienceData.length - 1} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────── */}
      {/* 4. PROJECTS SECTION */}
      {/* ───────────────────────────────────────────────────────────────── */}
      <section id="projects" className="py-24 sm:py-32 border-t" style={{ borderColor: "var(--border)", backgroundColor: "var(--surface)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-16 md:flex md:items-end justify-between gap-6">
            <div>
              <h2 className="heading-xl text-3xl sm:text-4xl mb-4">Selected Work</h2>
              <p className="text-lg max-w-xl" style={{ color: "var(--muted)" }}>
                A showcase of AI/ML platforms, deep learning models, and real-time intelligent applications.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {projectsData.map((p: any) => <ProjectCard key={p.id} project={p} />)}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────── */}
      {/* 5. LIVE LINKS SECTION */}
      {/* ───────────────────────────────────────────────────────────────── */}
      {liveLinksData.length > 0 && (
        <section id="live-links" className="py-24 sm:py-32 border-t" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-4xl mx-auto px-6">
            <div className="mb-12 flex items-center gap-4">
              <h2 className="heading-xl text-3xl sm:text-4xl">Live Projects</h2>
              <span className="live-badge"><span className="live-dot" />PRODUCTION</span>
            </div>
            <div className="flex flex-col gap-6">
              {liveLinksData.map((link: any) => (
                <GlassCard key={link.id} className="p-6 sm:p-8 flex flex-col sm:flex-row gap-6 hover:border-white/20 transition-colors">
                  <div className="flex flex-col gap-4 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-syne font-bold text-xl sm:text-2xl">{link.title}</h3>
                      <span className="live-badge shrink-0 mt-1"><span className="live-dot" />LIVE</span>
                    </div>
                    {link.description && <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{link.description}</p>}
                    <p className="text-sm truncate font-medium flex items-center gap-2" style={{ color: "var(--text)" }}>
                      <ExternalLink size={14} /> {link.url}
                    </p>
                    {link.tech_stack?.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {link.tech_stack.map((t: string) => <SkillPill key={t} label={t} />)}
                      </div>
                    )}
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="btn-primary self-start flex items-center gap-2 text-sm mt-4">
                      Visit Application
                    </a>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ───────────────────────────────────────────────────────────────── */}
      {/* 6. CERTIFICATIONS SECTION */}
      {/* ───────────────────────────────────────────────────────────────── */}
      <section id="certifications" className="py-24 sm:py-32 border-t" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="heading-xl text-3xl sm:text-4xl mb-4">Certifications</h2>
            <p className="text-lg" style={{ color: "var(--muted)" }}>Professional credentials in AI, cloud, and data platforms.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationsData.map((c: any) => <CertCard key={c.id} cert={c} />)}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────── */}
      {/* 7. EDUCATION & PUBLICATION SECTION */}
      {/* ───────────────────────────────────────────────────────────────── */}
      <section id="education" className="py-24 sm:py-32 border-t" style={{ borderColor: "var(--border)", backgroundColor: "var(--surface)" }}>
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          
          {/* Education */}
          <div>
            <h2 className="heading-xl text-3xl sm:text-4xl mb-12">Education</h2>
            <div className="flex flex-col gap-8">
              {educationData.map((edu: any) => {
                const year = edu.expected_date ? new Date(edu.expected_date).getFullYear() : "";
                return (
                  <GlassCard key={edu.id} className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border" style={{ borderColor: 'var(--border)' }}>
                        <GraduationCap size={24} />
                      </div>
                      <span className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full border bg-white/5" style={{ borderColor: 'var(--border)' }}>
                        {edu.status}
                      </span>
                    </div>
                    <h3 className="heading-xl text-xl mb-2">{edu.degree}</h3>
                    <p className="text-lg font-medium mb-4" style={{ color: "var(--muted)" }}>{edu.university}</p>
                    <div className="flex flex-wrap items-center gap-6 text-sm" style={{ color: "var(--muted)" }}>
                      <span className="flex items-center gap-2"><MapPin size={16} />{edu.location}</span>
                      <span className="flex items-center gap-2"><Calendar size={16} />Expected {year}</span>
                    </div>
                  </GlassCard>
                );
              })}
            </div>
          </div>

          {/* Publication */}
          <div id="publication">
            <h2 className="heading-xl text-3xl sm:text-4xl mb-12">Publication</h2>
            <GlassCard className="p-8 relative overflow-hidden">
              <div className="absolute -top-4 -left-2 text-[8rem] leading-none select-none pointer-events-none opacity-5 font-syne font-bold">"</div>
              <div className="relative z-10 flex flex-col gap-6">
                <h3 className="heading-xl text-xl leading-snug">{publicationData.title}</h3>
                <div className="flex flex-col gap-2 border-l-2 pl-4" style={{ borderColor: "var(--border)" }}>
                  <p className="font-medium text-white">{publicationData.journal}</p>
                  <p className="text-sm" style={{ color: "var(--muted)" }}>
                    Vol. {publicationData.volume}, No. {publicationData.issue}, pp. {publicationData.pages} · {publicationData.year}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4">
                  {publicationData.tags?.map((t: string) => <SkillPill key={t} label={t} />)}
                </div>
                {publicationData.url && (
                  <a href={publicationData.url} target="_blank" rel="noopener noreferrer" className="btn-ghost self-start flex items-center gap-2 text-sm mt-2">
                    Read Paper &rarr;
                  </a>
                )}
              </div>
            </GlassCard>
          </div>

        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────── */}
      {/* 8. CONTACT SECTION */}
      {/* ───────────────────────────────────────────────────────────────── */}
      <section id="contact" className="py-32 sm:py-40 border-t" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center">
          <h2 className="heading-xl text-5xl sm:text-7xl mb-8">Let's Talk.</h2>
          <p className="text-xl max-w-xl mx-auto mb-16" style={{ color: "var(--muted)" }}>
            Open to collaborations, opportunities, and interesting conversations in AI/ML engineering.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-20 w-full">
            <a href={`mailto:${contactData.email}`} className="flex items-center gap-4 px-8 py-4 rounded-2xl w-full sm:w-auto bg-white text-black hover:opacity-90 transition-opacity font-medium text-lg">
              <Mail size={20} /> Email Me
            </a>
            <a href={`tel:${contactData.phone}`} className="flex items-center justify-center gap-4 px-8 py-4 rounded-2xl w-full sm:w-auto border hover:bg-white/5 transition-colors font-medium text-lg" style={{ borderColor: 'var(--border)' }}>
              <Phone size={20} /> {contactData.phone}
            </a>
          </div>

          <SocialBar labeled={true} />
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────── */}
      {/* FOOTER */}
      {/* ───────────────────────────────────────────────────────────────── */}
      <footer className="py-8 text-center border-t text-sm font-medium" style={{ borderColor: "var(--border)", color: "var(--muted)" }}>
        {contactData.footer_tagline}
      </footer>

    </main>
  );
}
