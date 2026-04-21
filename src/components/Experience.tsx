import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, ChevronDown, ChevronUp } from "lucide-react";
import { experiences } from "../data/portfolio";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  return (
    <section
      id="experience"
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
            02 / Experience
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
          Where I've <span className="gradient-text">built things</span>
        </h2>

        <div style={{ position: "relative" }}>
          {/* Timeline line */}
          <div
            style={{
              position: "absolute",
              left: 20,
              top: 0,
              bottom: 0,
              width: 1,
              background: "linear-gradient(180deg, #7c3aed, #06b6d4, transparent)",
              opacity: 0.3,
            }}
          />

          <div style={{ paddingLeft: 52, display: "flex", flexDirection: "column", gap: 48 }}>
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
              >
                {/* Timeline dot */}
                <div
                  style={{
                    position: "absolute",
                    left: 14,
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    background: i === 0 ? "linear-gradient(135deg, #7c3aed, #06b6d4)" : "#1e293b",
                    border: "2px solid",
                    borderColor: i === 0 ? "#7c3aed" : "#334155",
                    marginTop: 4,
                    boxShadow: i === 0 ? "0 0 12px rgba(124,58,237,0.5)" : "none",
                  }}
                />

                {/* Company header */}
                <div style={{ marginBottom: 16 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: 8,
                    }}
                  >
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                        <Briefcase size={14} color="#7c3aed" />
                        <h3
                          style={{
                            fontSize: 18,
                            fontWeight: 700,
                            color: "#f8fafc",
                            margin: 0,
                          }}
                        >
                          {exp.company}
                        </h3>
                        {i === 0 && (
                          <span
                            style={{
                              fontSize: 10,
                              color: "#10b981",
                              background: "rgba(16,185,129,0.1)",
                              border: "1px solid rgba(16,185,129,0.3)",
                              borderRadius: 100,
                              padding: "2px 8px",
                              fontWeight: 600,
                            }}
                          >
                            Current
                          </span>
                        )}
                      </div>
                      <div style={{ fontSize: 13, color: "#a78bfa", fontWeight: 500 }}>
                        {exp.role}
                      </div>
                      {exp.note && (
                        <div style={{ fontSize: 12, color: "#4b5563", marginTop: 2 }}>{exp.note}</div>
                      )}
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div
                        style={{
                          fontSize: 12,
                          color: "#4b5563",
                          fontFamily: "'JetBrains Mono', monospace",
                        }}
                      >
                        {exp.period}
                      </div>
                      <div style={{ fontSize: 11, color: "#374151", marginTop: 2 }}>{exp.location}</div>
                    </div>
                  </div>
                </div>

                {/* Projects under this company */}
                {exp.projects.length > 0 && (
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {exp.projects.map((project) => {
                      const key = `${exp.company}-${project.name}`;
                      const isOpen = expandedProject === key;
                      return (
                        <motion.div
                          key={project.name}
                          className="glass glass-hover"
                          style={{ borderRadius: 12, overflow: "hidden" }}
                          whileHover={{ borderColor: "rgba(124,58,237,0.3)" }}
                        >
                          <button
                            onClick={() => setExpandedProject(isOpen ? null : key)}
                            style={{
                              width: "100%",
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              padding: "16px 20px",
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                              color: "#f1f5f9",
                              textAlign: "left",
                            }}
                          >
                            <div>
                              <div style={{ fontSize: 14, fontWeight: 700, color: "#e2e8f0" }}>
                                {project.name}
                              </div>
                              <div style={{ fontSize: 12, color: "#4b5563", marginTop: 2 }}>
                                {project.description}
                              </div>
                            </div>
                            {isOpen ? (
                              <ChevronUp size={16} color="#7c3aed" />
                            ) : (
                              <ChevronDown size={16} color="#4b5563" />
                            )}
                          </button>

                          <motion.div
                            initial={false}
                            animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                            transition={{ duration: 0.3 }}
                            style={{ overflow: "hidden" }}
                          >
                            <div style={{ padding: "0 20px 20px" }}>
                              <ul style={{ paddingLeft: 16, margin: "0 0 14px" }}>
                                {project.bullets.map((b, bi) => (
                                  <li
                                    key={bi}
                                    style={{
                                      fontSize: 13,
                                      color: "#94a3b8",
                                      lineHeight: 1.7,
                                      marginBottom: 4,
                                    }}
                                  >
                                    {b}
                                  </li>
                                ))}
                              </ul>
                              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                                {project.stack.map((tech) => (
                                  <span key={tech} className="tech-badge">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        </motion.div>
                      );
                    })}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
