import React, { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "projects",
        "experience",
        "skills",
        "education",
        "contact",
      ];
      let current = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            current = section;
          }
        }
      }

      if (current) {
        setActiveSection(current);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    // Initial observe
    document
      .querySelectorAll(".reveal, .reveal-left, .reveal-scale")
      .forEach((el) => {
        observer.observe(el);
      });

    // Use MutationObserver to catch dynamically added elements or components rendering slightly later
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) {
            // Element node
            if (
              node.classList &&
              (node.classList.contains("reveal") ||
                node.classList.contains("reveal-left") ||
                node.classList.contains("reveal-scale"))
            ) {
              observer.observe(node);
            }
            // Check children
            const reveals = node.querySelectorAll
              ? node.querySelectorAll(".reveal, .reveal-left, .reveal-scale")
              : [];
            reveals.forEach((el) => observer.observe(el));
          }
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const sectionNames = {
      home: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      education: "Education",
      contact: "Contact",
    };
    const currentName = sectionNames[activeSection] || "Home";
    document.title = `${currentName} | Sai Krishna Mateti`;
  }, [activeSection]);

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Analytics />

      {/* Crayon Grain Texture Overlay */}
      <div className="ca-grain" aria-hidden="true"></div>

      <Header
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <main style={{ flex: 1, zIndex: 1, position: "relative" }}>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <footer
        style={{
          padding: "3rem 0",
          borderTop: "var(--border-thick)",
          backgroundColor: "var(--ca-surface)",
          color: "var(--ca-ink)",
          zIndex: 1,
          position: "relative",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
            fontFamily: "var(--font-mono)",
          }}
        >
          <div style={{ fontWeight: "bold" }}>
            © {new Date().getFullYear()} Sai Krishna Mateti. All rights
            reserved.
          </div>
          <div>Backend Developer & Node.Js Developer</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
