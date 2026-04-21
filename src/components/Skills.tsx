import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "../data/portfolio";

const categoryColors: Record<string, string> = {
  "AI / LLM": "#a78bfa",
  "Frontend": "#06b6d4",
  "Backend": "#818cf8",
  "Databases": "#10b981",
  "Cloud & DevOps": "#f59e0b",
  "APIs & Integrations": "#f472b6",
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={ref}
      style={{ padding: "100px 6vw", position: "relative", zIndex: 1 }}
    >
      <div className="section-divider" style={{ marginBottom: 80 }} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              color: "#7c3aed",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            04 / Skills
          </span>
          <div style={{ height: 1, width: 60, background: "rgba(124,58,237,0.4)" }} />
        </div>

        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 800,
            color: "#f8fafc",
            letterSpacing: "-1px",
            marginBottom: 60,
          }}
        >
          Tech I <span className="gradient-text">work with</span>
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {Object.entries(skills).map(([category, techs], ci) => {
            const color = categoryColors[category] || "#a78bfa";
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: ci * 0.1, duration: 0.5 }}
                className="glass glass-hover"
                style={{
                  padding: 24,
                  borderRadius: 16,
                  cursor: "default",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 16,
                  }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: color,
                      boxShadow: `0 0 8px ${color}`,
                    }}
                  />
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: color,
                      letterSpacing: "0.3px",
                    }}
                  >
                    {category}
                  </span>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {techs.map((tech, ti) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: ci * 0.1 + ti * 0.04 }}
                      whileHover={{
                        scale: 1.08,
                        borderColor: color,
                        background: `${color}15`,
                      }}
                      style={{
                        fontSize: 11,
                        fontFamily: "'JetBrains Mono', monospace",
                        fontWeight: 600,
                        padding: "5px 10px",
                        borderRadius: 6,
                        border: "1px solid rgba(255,255,255,0.08)",
                        background: "rgba(255,255,255,0.03)",
                        color: "#94a3b8",
                        cursor: "default",
                        transition: "all 0.2s ease",
                        letterSpacing: "0.3px",
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
