import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Zap, Globe, Award, Download, FileText } from "lucide-react";
import { personalInfo, certifications } from "../data/portfolio";

const stats = [
  { value: "3+", label: "Years Experience", icon: <Zap size={18} color="#a78bfa" /> },
  { value: "10+", label: "Production Systems", icon: <Globe size={18} color="#06b6d4" /> },
  { value: "5+", label: "AI/LLM Projects", icon: <Brain size={18} color="#818cf8" /> },
  { value: "GCP", label: "Cloud Certified", icon: <Award size={18} color="#10b981" /> },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: "120px 6vw",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div className="section-divider" style={{ marginBottom: 80 }} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        {/* Section label */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              color: "#7c3aed",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            01 / About
          </span>
          <div style={{ height: 1, width: 60, background: "rgba(124,58,237,0.4)" }} />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* Left — Bio */}
          <div>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 800,
                color: "#f8fafc",
                lineHeight: 1.2,
                marginBottom: 24,
                letterSpacing: "-1px",
              }}
            >
              Building AI that{" "}
              <span className="gradient-text">actually works</span>
              <br />
              in production
            </h2>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.8,
                color: "#64748b",
                marginBottom: 20,
              }}
            >
              {personalInfo.summary}
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "#64748b", marginBottom: 32 }}>
              I don't just build demos — I architect systems that handle real-world scale. From
              LLM-as-a-Judge evaluation pipelines to fintech AI credit analyzers, I focus on
              <span style={{ color: "#a78bfa" }}> the patterns and architecture</span> that make AI
              systems reliable and production-worthy.
            </p>

            {/* GCP Cert badge — clickable to open PDF */}
            {certifications.map((cert) => (
              <motion.a
                key={cert.name}
                href="/images/AssociateCloudEngineer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, borderColor: "rgba(16,185,129,0.4)" }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "14px 20px",
                  borderRadius: 12,
                  background: "rgba(16, 185, 129, 0.05)",
                  border: "1px solid rgba(16, 185, 129, 0.2)",
                  cursor: "pointer",
                  textDecoration: "none",
                  marginBottom: 12,
                }}
              >
                <div
                  style={{
                    width: 36, height: 36, borderRadius: 8,
                    background: "linear-gradient(135deg, #4285F4, #34A853, #FBBC05, #EA4335)",
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16,
                  }}
                >
                  ☁️
                </div>
                <div>
                  <div style={{ fontSize: 12, color: "#10b981", fontWeight: 700, letterSpacing: "0.5px" }}>
                    {cert.name}
                  </div>
                  <div style={{ fontSize: 13, color: "#94a3b8", fontWeight: 500 }}>{cert.level}</div>
                  <div style={{ fontSize: 11, color: "#4b5563" }}>Valid until {cert.expires} · Click to view</div>
                </div>
              </motion.a>
            ))}

            {/* Resume download */}
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 4 }}>
              <motion.a
                href="/images/YASH_RAMESH_DHARME_Resume.pdf"
                download
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "10px 18px", borderRadius: 10,
                  background: "rgba(124,58,237,0.08)",
                  border: "1px solid rgba(124,58,237,0.25)",
                  color: "#a78bfa", fontSize: 13, fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                <Download size={14} />
                Download Resume
              </motion.a>
              <motion.a
                href="/images/YASH_RAMESH_DHARME_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "10px 18px", borderRadius: 10,
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#64748b", fontSize: 13, fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                <FileText size={14} />
                View Resume
              </motion.a>
            </div>
          </div>

          {/* Right — Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
            }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                className="glass glass-hover glow-hover"
                style={{
                  padding: "28px 24px",
                  borderRadius: 16,
                  textAlign: "center",
                  cursor: "default",
                }}
              >
                <div style={{ marginBottom: 12 }}>{stat.icon}</div>
                <div
                  style={{
                    fontSize: "clamp(28px, 3vw, 40px)",
                    fontWeight: 900,
                    color: "#f8fafc",
                    lineHeight: 1,
                    marginBottom: 6,
                    letterSpacing: "-1px",
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: 12, color: "#4b5563", fontWeight: 500 }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
