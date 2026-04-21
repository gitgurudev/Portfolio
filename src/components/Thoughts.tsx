import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Lightbulb } from "lucide-react";

const LinkedinIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
import { posts } from "../data/portfolio";

export default function Thoughts() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="thoughts"
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
            05 / Thoughts
          </span>
          <div style={{ height: 1, width: 60, background: "rgba(124,58,237,0.4)" }} />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 60,
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 800,
              color: "#f8fafc",
              letterSpacing: "-1px",
            }}
          >
            What I'm <span className="gradient-text">thinking about</span>
          </h2>
          <motion.a
            href="https://www.linkedin.com/in/yash-dharme-2b784b160"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 20px",
              borderRadius: 10,
              border: "1px solid rgba(10, 102, 194, 0.4)",
              background: "rgba(10, 102, 194, 0.08)",
              color: "#60a5fa",
              fontSize: 13,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            <LinkedinIcon size={14} />
            LinkedIn Posts
          </motion.a>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 20,
          }}
        >
          {posts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="glass glass-hover"
              style={{
                padding: 28,
                borderRadius: 20,
                cursor: "default",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${post.accent}40`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
              }}
            >
              {/* Accent top bar */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: `linear-gradient(90deg, ${post.accent}, transparent)`,
                }}
              />

              {/* Icon + number */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 16,
                }}
              >
                <span style={{ fontSize: 24 }}>{post.icon}</span>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    color: "#374151",
                    fontWeight: 600,
                  }}
                >
                  #{String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#e2e8f0",
                  marginBottom: 10,
                  lineHeight: 1.4,
                }}
              >
                {post.title}
              </h3>

              {/* Excerpt */}
              <p
                style={{
                  fontSize: 13,
                  color: "#64748b",
                  lineHeight: 1.7,
                  marginBottom: 20,
                }}
              >
                {post.excerpt}
              </p>

              {/* Key insight */}
              <div
                style={{
                  display: "flex",
                  gap: 10,
                  padding: "12px 14px",
                  borderRadius: 10,
                  background: `${post.accent}08`,
                  border: `1px solid ${post.accent}20`,
                  marginBottom: 18,
                }}
              >
                <Lightbulb size={14} color={post.accent} style={{ flexShrink: 0, marginTop: 1 }} />
                <p
                  style={{
                    fontSize: 12,
                    color: "#94a3b8",
                    lineHeight: 1.6,
                    fontStyle: "italic",
                  }}
                >
                  {post.insight}
                </p>
              </div>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: 10,
                      color: post.accent,
                      opacity: 0.7,
                      fontWeight: 600,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
