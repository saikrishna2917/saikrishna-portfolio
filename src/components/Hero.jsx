import React from "react";
import { ArrowRight, Mail, Download, Github, Linkedin } from "lucide-react";

export default function Hero() {
  const heroGridStyle = {
    display: "grid",
    gridTemplateColumns: "1.2fr 0.8fr",
    gap: "4rem",
    alignItems: "center",
    paddingTop: "calc(var(--header-height) + 4rem)",
    paddingBottom: "6rem",
    minHeight: "90vh",
  };

  const statusBadgeStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.6rem",
    padding: "0.4rem 1rem",
    borderRadius: "var(--radius-full)",
    background: "rgba(16, 185, 129, 0.1)",
    border: "1px solid rgba(16, 185, 129, 0.3)",
    color: "var(--accent-emerald)",
    fontSize: "0.85rem",
    fontWeight: 600,
    marginBottom: "1.5rem",
  };

  const statusDotStyle = {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: "var(--accent-emerald)",
    boxShadow: "0 0 10px var(--accent-emerald)",
    animation: "pulse 2s infinite",
  };

  const avatarCardStyle = {
    position: "relative",
    width: "320px",
    height: "380px",
    borderRadius: "var(--radius-lg)",
    background: "var(--glass-bg)",
    border: "1px solid var(--glass-border)",
    boxShadow: "var(--glass-shadow)",
    padding: "1rem",
    overflow: "hidden",
    WebkitBackdropFilter: "blur(12px)",
    backdropFilter: "blur(12px)",
    transform: "rotate(2deg)",
    transition: "transform var(--transition-normal)",
  };

  const socialIconBtnStyle = {
    width: "44px",
    height: "44px",
    borderRadius: "var(--radius-full)",
    background: "var(--bg-tertiary)",
    border: "1px solid var(--border-color)",
    color: "var(--text-secondary)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    fontSize: "1.2rem",
    transition: "all var(--transition-fast)",
  };

  const pulseKeyframes = `
    @keyframes pulse {
      0% { transform: scale(0.95); opacity: 0.8; }
      50% { transform: scale(1.15); opacity: 1; }
      100% { transform: scale(0.95); opacity: 0.8; }
    }
  `;

  return (
    <section id="home" className="container reveal">
      <style>{pulseKeyframes}</style>

      <div style={heroGridStyle}>
        <div>
          <div style={statusBadgeStyle} className="animate-fade-up delay-1">
            <span style={statusDotStyle}></span>
            <span>Available for Backend & Cloud Roles</span>
          </div>

          <h1
            className="animate-fade-up delay-2"
            style={{
              fontSize: "3.5rem",
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
            }}
          >
            Hi, I'm <span className="gradient-text">Sai Krishna Mateti</span>
          </h1>

          <h2
            className="animate-fade-up delay-3"
            style={{
              fontSize: "1.25rem",
              color: "var(--accent-primary)",
              marginBottom: "1.5rem",
              fontWeight: 600,
            }}
          >
            Backend Software Engineer
          </h2>

          <p
            className="animate-fade-up delay-4"
            style={{
              fontSize: "1.25rem",
              color: "var(--text-secondary)",
              marginBottom: "2rem",
              lineHeight: 1.7,
            }}
          >
            4.9+ years of experience building scalable RESTful APIs, secure
            microservices, and high-performance cloud architectures. Specialized
            in Node.js, Express, MongoDB, Javascript, Redis, Docker and Azure
            cloud integrations.
          </p>

          <div
            className="animate-fade-up delay-5"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              marginBottom: "2.5rem",
            }}
          >
            <a href="#projects" className="btn btn-primary">
              <span>View Projects</span>
              <ArrowRight size={18} />
            </a>

            <a href="#contact" className="btn btn-secondary">
              <span>Get in Touch</span>
              <Mail size={18} />
            </a>

            <a
              href="/Mateti_Sai_Krishna_NodeJS_Developer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              download
            >
              <span>Download Resume</span>
              <Download size={18} />
            </a>
          </div>

          <div
            className="animate-fade-up delay-5"
            style={{ display: "flex", alignItems: "center", gap: "1rem" }}
          >
            <a
              href="https://github.com/saikrishna2917"
              target="_blank"
              rel="noopener noreferrer"
              style={socialIconBtnStyle}
              onMouseOver={(e) => {
                e.currentTarget.style.color = "var(--accent-primary)";
                e.currentTarget.style.borderColor = "var(--accent-primary)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = "var(--text-secondary)";
                e.currentTarget.style.borderColor = "var(--border-color)";
                e.currentTarget.style.transform = "none";
              }}
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/saikrishna-mateti"
              target="_blank"
              rel="noopener noreferrer"
              style={socialIconBtnStyle}
              onMouseOver={(e) => {
                e.currentTarget.style.color = "var(--accent-primary)";
                e.currentTarget.style.borderColor = "var(--accent-primary)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = "var(--text-secondary)";
                e.currentTarget.style.borderColor = "var(--border-color)";
                e.currentTarget.style.transform = "none";
              }}
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div
          className="animate-slide-left delay-4"
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* <div
            style={avatarCardStyle}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "rotate(0) scale(1.02)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "rotate(2deg)";
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80"
              alt="Sai Krishna Mateti"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "calc(var(--radius-lg) - 6px)",
              }}
            />
          </div> */}
        </div>
      </div>

      {/* Stats Ribbon */}
      <div
        className="animate-fade-up delay-5"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1.5rem",
          padding: "2rem",
          background: "var(--glass-bg)",
          border: "1px solid var(--glass-border)",
          borderRadius: "var(--radius-lg)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontSize: "2.2rem",
              fontWeight: 800,
              fontFamily: "var(--font-heading)",
            }}
            className="gradient-text"
          >
            4.9+
          </div>
          <div
            style={{
              color: "var(--text-secondary)",
              fontSize: "0.875rem",
              fontWeight: 500,
              marginTop: "0.2rem",
            }}
          >
            Years Experience
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontSize: "2.2rem",
              fontWeight: 800,
              fontFamily: "var(--font-heading)",
            }}
            className="gradient-text"
          >
            5+
          </div>
          <div
            style={{
              color: "var(--text-secondary)",
              fontSize: "0.875rem",
              fontWeight: 500,
              marginTop: "0.2rem",
            }}
          >
            Projects Completed
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontSize: "2.2rem",
              fontWeight: 800,
              fontFamily: "var(--font-heading)",
            }}
            className="gradient-text"
          >
            99.9%
          </div>
          <div
            style={{
              color: "var(--text-secondary)",
              fontSize: "0.875rem",
              fontWeight: 500,
              marginTop: "0.2rem",
            }}
          >
            Uptime Delivered
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontSize: "2.2rem",
              fontWeight: 800,
              fontFamily: "var(--font-heading)",
            }}
            className="gradient-text"
          >
            100%
          </div>
          <div
            style={{
              color: "var(--text-secondary)",
              fontSize: "0.875rem",
              fontWeight: 500,
              marginTop: "0.2rem",
            }}
          >
            Client Satisfaction
          </div>
        </div>
      </div>
    </section>
  );
}
