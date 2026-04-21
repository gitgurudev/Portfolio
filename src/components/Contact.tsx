import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

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
import { personalInfo } from "../data/portfolio";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const links = [
    {
      icon: <Mail size={18} />,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "#a78bfa",
    },
    {
      icon: <Phone size={18} />,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: "#06b6d4",
    },
    {
      icon: <MapPin size={18} />,
      label: "Location",
      value: personalInfo.location,
      href: "#",
      color: "#818cf8",
    },
    {
      icon: <GithubIcon />,
      label: "GitHub",
      value: "github.com/gitgurudev",
      href: personalInfo.github,
      color: "#10b981",
    },
    {
      icon: <LinkedinIcon />,
      label: "LinkedIn",
      value: "yash-dharme-2b784b160",
      href: personalInfo.linkedin,
      color: "#60a5fa",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      style={{ padding: "100px 6vw 80px", position: "relative", zIndex: 1 }}
    >
      <div className="section-divider" style={{ marginBottom: 80 }} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            marginBottom: 12,
          }}
        >
          <div style={{ height: 1, width: 60, background: "rgba(124,58,237,0.4)" }} />
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              color: "#7c3aed",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            06 / Contact
          </span>
          <div style={{ height: 1, width: 60, background: "rgba(124,58,237,0.4)" }} />
        </div>

        <h2
          style={{
            fontSize: "clamp(32px, 5vw, 60px)",
            fontWeight: 900,
            color: "#f8fafc",
            letterSpacing: "-2px",
            lineHeight: 1.1,
            marginBottom: 20,
          }}
        >
          Let's build something{" "}
          <span className="gradient-text">remarkable</span>
        </h2>

        <p
          style={{
            fontSize: 16,
            color: "#4b5563",
            lineHeight: 1.7,
            marginBottom: 60,
            maxWidth: 500,
            margin: "0 auto 60px",
          }}
        >
          Open to AI engineering roles, GenAI product development, and interesting
          full-stack challenges. Let's talk.
        </p>

        {/* Primary CTA — WhatsApp */}
        <motion.a
          href="https://wa.me/919730871339?text=Hi%20Yash!%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect%20%F0%9F%91%8B"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.06, boxShadow: "0 0 50px rgba(37,211,102,0.35)" }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "16px 40px",
            borderRadius: 12,
            background: "linear-gradient(135deg, #25d366, #128c7e)",
            color: "#fff",
            fontSize: 15,
            fontWeight: 700,
            textDecoration: "none",
            border: "1px solid rgba(37,211,102,0.4)",
            marginBottom: 60,
            letterSpacing: "0.3px",
          }}
        >
          <WhatsAppIcon />
          Say Hello on WhatsApp
        </motion.a>

        {/* Contact grid */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08 }}
              whileHover={{ scale: 1.05, borderColor: `${link.color}50` }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "12px 18px",
                borderRadius: 10,
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
                textDecoration: "none",
                color: "#94a3b8",
                fontSize: 13,
                fontWeight: 500,
                transition: "all 0.2s ease",
              }}
            >
              <span style={{ color: link.color }}>{link.icon}</span>
              <span>{link.value}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Footer */}
      <div
        style={{
          marginTop: 80,
          paddingTop: 30,
          borderTop: "1px solid rgba(255,255,255,0.05)",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: 12,
            color: "#1f2937",
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          Designed & built by{" "}
          <span style={{ color: "#7c3aed" }}>Yash Dharme</span> — Mumbai, India
        </p>
      </div>

      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "80vw",
          height: "40vh",
          background:
            "radial-gradient(ellipse, rgba(124,58,237,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
    </section>
  );
}
