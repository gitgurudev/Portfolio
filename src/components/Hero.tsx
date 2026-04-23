import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowDown, Download } from "lucide-react";
import { personalInfo } from "../data/portfolio";

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const role = personalInfo.roles[roleIndex];
    let i = 0;
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      const interval = setInterval(() => {
        setDisplayed(role.slice(0, i + 1));
        i++;
        if (i === role.length) {
          clearInterval(interval);
          timeout = setTimeout(() => setTyping(false), 1800);
        }
      }, 60);
      return () => { clearInterval(interval); clearTimeout(timeout); };
    } else {
      let j = role.length;
      const interval = setInterval(() => {
        setDisplayed(role.slice(0, j - 1));
        j--;
        if (j === 0) {
          clearInterval(interval);
          setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
          setTyping(true);
        }
      }, 40);
      return () => clearInterval(interval);
    }
  }, [roleIndex, typing]);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "120px 6vw 80px",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 60, alignItems: "center" }}>
        {/* LEFT — Text content */}
        <div>
          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 16px",
              borderRadius: 100,
              background: "rgba(124,58,237,0.1)",
              border: "1px solid rgba(124,58,237,0.3)",
              marginBottom: 32,
            }}
          >
            <span style={{ fontSize: 10, color: "#10b981" }}>●</span>
            <span style={{ fontSize: 12, color: "#a78bfa", fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}>
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            style={{ fontSize: "clamp(42px, 6vw, 82px)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-2px", color: "#f8fafc", marginBottom: 8 }}
          >
            Yash
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="gradient-text"
            style={{ fontSize: "clamp(42px, 6vw, 82px)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-2px", marginBottom: 32 }}
          >
            Dharme
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}
          >
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "clamp(15px, 2vw, 22px)", fontWeight: 600, color: "#64748b" }}>
              &gt;_
            </span>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "clamp(15px, 2vw, 22px)", fontWeight: 600, color: "#e2e8f0" }}>
              {displayed}
            </span>
            <span className="terminal-cursor" style={{ fontSize: "clamp(15px, 2vw, 22px)" }} />
          </motion.div>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            style={{ maxWidth: 520, fontSize: "clamp(14px, 1.3vw, 16px)", lineHeight: 1.8, color: "#64748b", marginBottom: 32 }}
          >
            Building production-ready{" "}
            <span style={{ color: "#a78bfa" }}>AI systems</span>,{" "}
            <span style={{ color: "#06b6d4" }}>LLM-powered applications</span>, and{" "}
            <span style={{ color: "#818cf8" }}>scalable backends</span> that handle real-world scale.
          </motion.p>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 36 }}
          >
            <MapPin size={13} color="#4b5563" />
            <span style={{ fontSize: 13, color: "#4b5563" }}>Mumbai, India</span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 40 }}
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(124,58,237,0.4)" }}
              whileTap={{ scale: 0.96 }}
              style={{
                padding: "13px 28px",
                borderRadius: 10,
                background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                color: "#fff",
                fontSize: 14,
                fontWeight: 700,
                textDecoration: "none",
                border: "1px solid rgba(124,58,237,0.4)",
              }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="/images/YASH_RAMESH_DHARME_Resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              style={{
                padding: "13px 28px",
                borderRadius: 10,
                background: "transparent",
                color: "#a78bfa",
                fontSize: 14,
                fontWeight: 700,
                textDecoration: "none",
                border: "1px solid rgba(124,58,237,0.35)",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Download size={15} />
              Resume
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            style={{ display: "flex", gap: 12 }}
          >
            {[
              { icon: <GithubIcon />, href: personalInfo.github, label: "GitHub" },
              { icon: <LinkedinIcon />, href: personalInfo.linkedin, label: "LinkedIn" },
            ].map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, color: "#a78bfa" }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 42,
                  height: 42,
                  borderRadius: 10,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#4b5563",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
                title={s.label}
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="hero-photo"
          style={{ flexShrink: 0 }}
        >
          <div
            style={{
              position: "relative",
              width: 280,
              height: 280,
            }}
          >
            {/* Glow ring */}
            <div
              className="float-animation"
              style={{
                position: "absolute",
                inset: -3,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #7c3aed, #06b6d4, #818cf8)",
                padding: 3,
                animation: "spin 8s linear infinite",
              }}
            >
              <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "#030712" }} />
            </div>

            {/* Photo */}
            <img
              src="/images/my pic.jpeg"
              alt="Yash Dharme"
              style={{
                position: "absolute",
                inset: 4,
                width: "calc(100% - 8px)",
                height: "calc(100% - 8px)",
                borderRadius: "50%",
                objectFit: "cover",
                objectPosition: "center 15%",
                filter: "brightness(0.95)",
              }}
            />

            {/* Floating AI badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              style={{
                position: "absolute",
                bottom: -16,
                right: -16,
                padding: "8px 14px",
                borderRadius: 10,
                background: "rgba(3,7,18,0.95)",
                border: "1px solid rgba(124,58,237,0.4)",
                backdropFilter: "blur(10px)",
                display: "flex",
                alignItems: "center",
                gap: 8,
                boxShadow: "0 0 20px rgba(124,58,237,0.2)",
              }}
            >
              <span style={{ fontSize: 16 }}>🤖</span>
              <div>
                <div style={{ fontSize: 10, color: "#a78bfa", fontWeight: 700, lineHeight: 1 }}>AI Engineer</div>
                <div style={{ fontSize: 9, color: "#4b5563", marginTop: 2 }}>3+ yrs exp</div>
              </div>
            </motion.div>

            {/* GCP badge */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              style={{
                position: "absolute",
                top: -10,
                right: -20,
                padding: "6px 12px",
                borderRadius: 8,
                background: "rgba(3,7,18,0.95)",
                border: "1px solid rgba(16,185,129,0.3)",
                backdropFilter: "blur(10px)",
                display: "flex",
                alignItems: "center",
                gap: 6,
                boxShadow: "0 0 15px rgba(16,185,129,0.1)",
              }}
            >
              <span style={{ fontSize: 14 }}>☁️</span>
              <div style={{ fontSize: 9, color: "#10b981", fontWeight: 700 }}>GCP Certified</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          color: "#374151",
        }}
      >
        <span style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase" }}>Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>

      {/* Blob */}
      <div style={{
        position: "absolute", top: "20%", right: "-10%",
        width: "40vw", height: "40vw", maxWidth: 600, maxHeight: 600,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(124,58,237,0.07) 0%, rgba(6,182,212,0.03) 50%, transparent 70%)",
        pointerEvents: "none", zIndex: 0,
      }} />

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @media (max-width: 768px) {
          .hero-photo { display: none; }
        }
      `}</style>
    </section>
  );
}
