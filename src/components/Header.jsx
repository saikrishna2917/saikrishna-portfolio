import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Twitter, Mail, Star, User, Code, LayoutGrid, Briefcase, GraduationCap, Heart } from "lucide-react";

export default function Header({
  activeSection,
  mobileMenuOpen,
  setMobileMenuOpen,
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerStyle = {
    position: "sticky",
    top: 0,
    zIndex: 50,
    backgroundColor: "rgba(248, 246, 240, 0.95)",
    backdropFilter: "blur(4px)",
    borderBottom: "var(--border-medium)",
  };

  const navWrapperStyle = {
    display: "flex",
    alignItems: "stretch",
    justifyContent: "space-between",
    padding: "0 1rem",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const logoStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.5rem 1rem",
  };

  const navMenuStyle = {
    display: "flex",
    alignItems: "stretch",
    listStyle: "none",
    margin: 0,
    padding: 0,
  };

  const iconShadow = { filter: "drop-shadow(1px 1px 0px #ccc)" };

  const getLinkStyle = (sectionId) => {
    const isActive = activeSection === sectionId;
    return {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.5rem",
      padding: "1rem 1.25rem",
      color: "var(--ca-ink)",
      textDecoration: "none",
      fontWeight: "bold",
      fontSize: "0.85rem",
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      transition: "background-color 0.2s",
      backgroundColor: isActive ? "var(--ca-yellow)" : "transparent",
      height: "100%",
    };
  };

  const socialContainerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.5rem 0",
  };

  const getSocialStyle = (bgColor) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    border: "2px solid #fff",
    color: "var(--ca-ink)",
    backgroundColor: bgColor,
    boxShadow: "1.5px 1.5px 0 rgba(25, 21, 16, 0.25)",
    transition: "transform 0.2s",
    cursor: "pointer",
  });

  return (
    <header style={headerStyle}>
      <div style={navWrapperStyle}>
        <div style={{ display: "flex", alignItems: "stretch", gap: "0.5rem" }}>
          <a href="#home" style={logoStyle}>
            <img src="/sk-favicon.svg" alt="Logo" style={{ width: "36px", height: "36px" }} />
          </a>

          <nav
            style={{ display: "flex", alignItems: "stretch" }}
            className="hide-mobile"
          >
            <ul style={navMenuStyle}>
              <li>
                <a
                  href="#home"
                  className="ca-mono"
                  style={getLinkStyle("home")}
                  onMouseOver={(e) => {
                    if (activeSection !== "home")
                      e.currentTarget.style.backgroundColor =
                        "var(--ca-chrome)";
                  }}
                  onMouseOut={(e) => {
                    if (activeSection !== "home")
                      e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  <Star size={16} fill="currentColor" style={iconShadow} /> HOME
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="ca-mono"
                  style={getLinkStyle("about")}
                  onMouseOver={(e) => {
                    if (activeSection !== "about")
                      e.currentTarget.style.backgroundColor =
                        "var(--ca-chrome)";
                  }}
                  onMouseOut={(e) => {
                    if (activeSection !== "about")
                      e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  <User size={16} fill="currentColor" style={iconShadow} /> ABOUT
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="ca-mono"
                  style={getLinkStyle("projects")}
                  onMouseOver={(e) => {
                    if (activeSection !== "projects")
                      e.currentTarget.style.backgroundColor =
                        "var(--ca-chrome)";
                  }}
                  onMouseOut={(e) => {
                    if (activeSection !== "projects")
                      e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  <LayoutGrid size={16} fill="currentColor" style={iconShadow} /> PROJECTS
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="ca-mono"
                  style={getLinkStyle("experience")}
                  onMouseOver={(e) => {
                    if (activeSection !== "experience")
                      e.currentTarget.style.backgroundColor =
                        "var(--ca-chrome)";
                  }}
                  onMouseOut={(e) => {
                    if (activeSection !== "experience")
                      e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  <Briefcase size={16} fill="currentColor" style={iconShadow} /> EXPERIENCE
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="ca-mono"
                  style={getLinkStyle("skills")}
                  onMouseOver={(e) => {
                    if (activeSection !== "skills")
                      e.currentTarget.style.backgroundColor =
                        "var(--ca-chrome)";
                  }}
                  onMouseOut={(e) => {
                    if (activeSection !== "skills")
                      e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  <Code size={16} style={iconShadow} /> SKILLS
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="ca-mono"
                  style={getLinkStyle("education")}
                  onMouseOver={(e) => {
                    if (activeSection !== "education")
                      e.currentTarget.style.backgroundColor =
                        "var(--ca-chrome)";
                  }}
                  onMouseOut={(e) => {
                    if (activeSection !== "education")
                      e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  <GraduationCap size={16} fill="currentColor" style={iconShadow} /> EDUCATION
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div style={socialContainerStyle}>
          <a
            href="https://www.linkedin.com/in/saikrishna-mateti"
            target="_blank"
            rel="noopener noreferrer"
            style={getSocialStyle("var(--ca-yellow)")}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "translateY(-2px)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "none")}
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com/saikrishna2917"
            target="_blank"
            rel="noopener noreferrer"
            style={getSocialStyle("var(--ca-green)")}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "translateY(-2px)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "none")}
          >
            <Github size={18} />
          </a>
          <a
            href="#contact"
            className="ca-mono hide-mobile"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.5rem 1.25rem",
              border: "2px solid var(--ca-ink)",
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--ca-ink)",
              textDecoration: "none",
              fontSize: "0.85rem",
              marginLeft: "1rem",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "var(--ca-ink)";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "var(--ca-ink)";
            }}
          >
            <Heart size={16} fill="currentColor" style={{ ...iconShadow, color: "inherit" }} /> CONTACT
          </a>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}
