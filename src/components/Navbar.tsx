import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Thoughts", href: "#thoughts" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          padding: "14px 48px",
          background: scrolled ? "rgba(3, 7, 18, 0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(124, 58, 237, 0.15)" : "none",
          transition: "background 0.3s ease, border-bottom 0.3s ease",
        }}
      >
        {/* Logo — profile photo (left) */}
        <motion.a
          href="#hero"
          whileHover={{ scale: 1.05 }}
          style={{ textDecoration: "none", flexShrink: 0 }}
        >
          <div
            style={{
              width: 36, height: 36, borderRadius: "50%",
              background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
              padding: 2, flexShrink: 0,
            }}
          >
            <img
              src="/images/my pic.jpeg"
              alt="Yash"
              style={{
                width: "100%", height: "100%", borderRadius: "50%",
                objectFit: "cover", objectPosition: "center 20%", display: "block",
              }}
            />
          </div>
        </motion.a>

        {/* Desktop Links — absolutely centered */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "center",
            gap: 36,
          }}
          className="hidden-mobile"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActive(link.href)}
              style={{
                color: active === link.href ? "#a78bfa" : "#94a3b8",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "1.5px",
                textDecoration: "none",
                transition: "color 0.2s ease",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#a78bfa")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = active === link.href ? "#a78bfa" : "#94a3b8")
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Spacer — keeps photo left, links centered */}
        <div style={{ flex: 1 }} />

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: "#a78bfa", background: "none", border: "none", cursor: "pointer", display: "none" }}
          className="show-mobile"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: "fixed",
              top: 64,
              left: 0,
              right: 0,
              zIndex: 49,
              background: "rgba(3,7,18,0.97)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(124,58,237,0.15)",
              padding: "20px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: "#94a3b8",
                  fontSize: 15,
                  fontWeight: 500,
                  textDecoration: "none",
                  padding: "8px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
