import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, Sparkles, ChevronLeft, ChevronRight, Play, X } from "lucide-react";

const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

interface Project {
  id: number;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  github?: string;
  accent: string;
  icon: string;
  video?: string;
  screenshots?: string[];
}

function MediaCarousel({ project }: { project: Project }) {
  const [idx, setIdx] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);

  const media: { type: "video" | "image"; src: string }[] = [
    ...(project.video ? [{ type: "video" as const, src: project.video }] : []),
    ...(project.screenshots || []).map((s) => ({ type: "image" as const, src: s })),
  ];

  if (media.length === 0) return null;

  const current = media[idx];
  const prev = () => setIdx((i) => (i - 1 + media.length) % media.length);
  const next = () => setIdx((i) => (i + 1) % media.length);

  return (
    <>
      <div style={{ position: "relative", borderRadius: 12, overflow: "hidden", marginBottom: 20, background: "#0a0a0f", aspectRatio: "16/9" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            style={{ width: "100%", height: "100%" }}
          >
            {current.type === "video" ? (
              <video
                src={current.src}
                controls
                autoPlay={false}
                muted
                style={{ width: "100%", height: "100%", objectFit: "cover", cursor: "pointer" }}
              />
            ) : (
              <img
                src={current.src}
                alt={project.name}
                onClick={() => setLightbox(current.src)}
                style={{ width: "100%", height: "100%", objectFit: "cover", cursor: "zoom-in" }}
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Type indicator */}
        <div style={{ position: "absolute", top: 8, left: 8, display: "flex", alignItems: "center", gap: 4, padding: "3px 8px", borderRadius: 6, background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)" }}>
          {current.type === "video" ? <Play size={10} color={project.accent} /> : <span style={{ fontSize: 10 }}>🖼</span>}
          <span style={{ fontSize: 10, color: "#94a3b8", fontFamily: "'JetBrains Mono', monospace" }}>
            {current.type === "video" ? "Demo" : `${idx + (project.video ? 0 : 1)}/${media.filter(m => m.type === "image").length}`}
          </span>
        </div>

        {/* Nav arrows */}
        {media.length > 1 && (
          <>
            <button
              onClick={prev}
              style={{ position: "absolute", left: 8, top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,0.6)", border: "none", borderRadius: "50%", width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#fff" }}
            >
              <ChevronLeft size={14} />
            </button>
            <button
              onClick={next}
              style={{ position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,0.6)", border: "none", borderRadius: "50%", width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#fff" }}
            >
              <ChevronRight size={14} />
            </button>
          </>
        )}

        {/* Dots */}
        {media.length > 1 && (
          <div style={{ position: "absolute", bottom: 8, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 4 }}>
            {media.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                style={{ width: i === idx ? 16 : 6, height: 6, borderRadius: 3, background: i === idx ? project.accent : "rgba(255,255,255,0.3)", border: "none", cursor: "pointer", transition: "all 0.2s ease", padding: 0 }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Thumbnail strip */}
      {media.length > 1 && (
        <div style={{ display: "flex", gap: 6, marginBottom: 16, overflowX: "auto" }}>
          {media.map((m, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              style={{
                flexShrink: 0, width: 52, height: 36, borderRadius: 6, overflow: "hidden",
                border: `2px solid ${i === idx ? project.accent : "transparent"}`,
                padding: 0, cursor: "pointer", background: "#0a0a0f",
                transition: "border-color 0.2s ease",
              }}
            >
              {m.type === "video" ? (
                <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#111" }}>
                  <Play size={12} color={project.accent} />
                </div>
              ) : (
                <img src={m.src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              )}
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            style={{
              position: "fixed", inset: 0, zIndex: 1000,
              background: "rgba(0,0,0,0.92)", backdropFilter: "blur(10px)",
              display: "flex", alignItems: "center", justifyContent: "center", padding: 24,
            }}
          >
            <button
              onClick={() => setLightbox(null)}
              style={{ position: "absolute", top: 20, right: 20, background: "rgba(255,255,255,0.1)", border: "none", borderRadius: "50%", width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#fff" }}
            >
              <X size={18} />
            </button>
            <motion.img
              src={lightbox}
              alt=""
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
              style={{ maxWidth: "90vw", maxHeight: "85vh", objectFit: "contain", borderRadius: 12 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import { projects } from "../data/portfolio";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} style={{ padding: "100px 6vw", position: "relative", zIndex: 1 }}>
      <div className="section-divider" style={{ marginBottom: 80 }} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "#7c3aed", letterSpacing: "3px", textTransform: "uppercase" }}>
            03 / Projects
          </span>
          <div style={{ height: 1, width: 60, background: "rgba(124,58,237,0.4)" }} />
        </div>

        <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, color: "#f8fafc", letterSpacing: "-1px", marginBottom: 60 }}>
          Things I've <span className="gradient-text">built & shipped</span>
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 24 }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.13, duration: 0.55, ease: [0.34, 1.56, 0.64, 1] }}
              whileHover={{ y: -8, scale: 1.015, transition: { duration: 0.2 } }}
              className="tilt-card gradient-border"
              style={{
                borderRadius: 20, overflow: "hidden", position: "relative",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                transition: "box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 24px 64px ${project.accent}20, 0 0 0 1px ${project.accent}30`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Animated top accent bar */}
              <motion.div
                style={{ height: 3, background: `linear-gradient(90deg, ${project.accent}, transparent)` }}
                whileHover={{ scaleX: 1.05 }}
              />

              <div style={{ padding: 24 }}>
                {/* Header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                  <div>
                    <div style={{ fontSize: 26, marginBottom: 6 }}>{project.icon}</div>
                    <h3 style={{ fontSize: 17, fontWeight: 800, color: "#f8fafc", marginBottom: 3, letterSpacing: "-0.3px" }}>
                      {project.name}
                    </h3>
                    <div style={{ fontSize: 11, color: project.accent, fontWeight: 600 }}>{project.tagline}</div>
                  </div>
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15 }}
                      style={{ color: "#374151", textDecoration: "none", display: "flex", alignItems: "center", gap: 4, fontSize: 11, fontWeight: 500 }}
                    >
                      <GithubIcon size={15} />
                      <ExternalLink size={10} />
                    </motion.a>
                  )}
                </div>

                {/* Media carousel */}
                <MediaCarousel project={project} />

                {/* Description */}
                <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.7, marginBottom: 16 }}>
                  {project.description}
                </p>

                {/* Highlights */}
                <div style={{ marginBottom: 16 }}>
                  {project.highlights.slice(0, 3).map((h, hi) => (
                    <div key={hi} style={{ display: "flex", alignItems: "flex-start", gap: 7, marginBottom: 5 }}>
                      <Sparkles size={11} color={project.accent} style={{ marginTop: 2, flexShrink: 0 }} />
                      <span style={{ fontSize: 12, color: "#94a3b8", lineHeight: 1.5 }}>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Stack */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontSize: 10, fontFamily: "'JetBrains Mono', monospace", fontWeight: 600,
                        padding: "3px 8px", borderRadius: 20,
                        border: `1px solid ${project.accent}30`,
                        background: `${project.accent}0d`,
                        color: project.accent, letterSpacing: "0.3px",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
