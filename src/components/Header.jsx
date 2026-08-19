import React, { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Header({
  activeSection,
  mobileMenuOpen,
  setMobileMenuOpen,
  theme,
  toggleTheme,
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
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "var(--header-height)",
    zIndex: 1000,
    transition:
      "background var(--transition-normal), backdrop-filter var(--transition-normal), border-color var(--transition-normal)",
    background: scrolled ? "var(--glass-bg)" : "transparent",
    backdropFilter: scrolled ? "blur(16px)" : "none",
    WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
    borderBottom: scrolled
      ? "1px solid var(--glass-border)"
      : "1px solid transparent",
    boxShadow: scrolled ? "var(--glass-shadow)" : "none",
  };

  const navWrapperStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "var(--header-height)",
  };

  const logoStyle = {
    fontFamily: "var(--font-heading)",
    fontSize: "1.4rem",
    fontWeight: 800,
    color: "var(--text-primary)",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "0.4rem",
  };

  const logoDotStyle = {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: "var(--accent-primary)",
  };

  const navMenuStyle = {
    display: "flex",
    alignItems: "center",
    gap: "2rem",
    listStyle: "none",
  };

  const getLinkStyle = (sectionId) => ({
    color:
      activeSection === sectionId
        ? "var(--text-primary)"
        : "var(--text-secondary)",
    textDecoration: "none",
    fontWeight: 500,
    fontSize: "0.95rem",
    transition: "color var(--transition-fast)",
    position: "relative",
    padding: "0.5rem 0",
  });

  const getIndicatorStyle = (sectionId) => ({
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "2px",
    background: "var(--gradient-accent)",
    borderRadius: "2px",
    display: activeSection === sectionId ? "block" : "none",
  });

  const navActionsStyle = {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  };

  const themeToggleBtnStyle = {
    background: "var(--bg-tertiary)",
    border: "1px solid var(--border-color)",
    color: "var(--text-primary)",
    width: "42px",
    height: "42px",
    borderRadius: "var(--radius-full)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all var(--transition-fast)",
  };

  return (
    <header style={headerStyle}>
      <div className="container" style={navWrapperStyle}>
        <a href="#home" style={logoStyle}>
          {/* <span style={logoDotStyle}></span> */}
          <span>Sai Krishna Mateti</span>
        </a>

        <ul style={navMenuStyle}>
          <li>
            <a href="#home" style={getLinkStyle("home")}>
              Home<span style={getIndicatorStyle("home")}></span>
            </a>
          </li>
          <li>
            <a href="#features" style={getLinkStyle("features")}>
              Skills<span style={getIndicatorStyle("features")}></span>
            </a>
          </li>
          <li>
            <a href="#projects" style={getLinkStyle("projects")}>
              Projects<span style={getIndicatorStyle("projects")}></span>
            </a>
          </li>
          <li>
            <a href="#experience" style={getLinkStyle("experience")}>
              Experience<span style={getIndicatorStyle("experience")}></span>
            </a>
          </li>
          <li>
            <a href="#education" style={getLinkStyle("education")}>
              Education<span style={getIndicatorStyle("education")}></span>
            </a>
          </li>
          <li>
            <a href="#contact" style={getLinkStyle("contact")}>
              Contact<span style={getIndicatorStyle("contact")}></span>
            </a>
          </li>
        </ul>

        <div style={navActionsStyle}>
          <button
            style={themeToggleBtnStyle}
            onClick={toggleTheme}
            aria-label="Toggle theme"
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = "var(--accent-primary)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = "var(--border-color)";
              e.currentTarget.style.transform = "none";
            }}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
}
