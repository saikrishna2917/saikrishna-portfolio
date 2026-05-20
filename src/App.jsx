import React, { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import {
  Download,
  ArrowRight,
  Zap,
  ShieldCheck,
  TerminalSquare,
  Award,
  Box,
  Database,
  Server,
  Cloud,
  LayoutTemplate,
  Cpu,
  FileJson,
  Workflow,
  Target,
  Network,
  Lock,
  Trophy,
  Users,
  Activity,
  PlusSquare,
  FlaskConical,
  CheckCircle2,
} from "lucide-react";

const allLogs = [
  { time: "10:01", msg: "Connection established to Redis:6379", type: "info" },
  { time: "10:01", msg: "Initializing Docker container pool...", type: "info" },
  {
    time: "10:02",
    msg: "Latency threshold detected in shard-04",
    type: "warn",
  },
  {
    time: "10:02",
    msg: "Auto-scaling event triggered (+2 nodes)",
    type: "info",
  },
  { time: "10:03", msg: "Microservice cluster operational", type: "success" },
];

function App() {
  const [uptime, setUptime] = useState("99.99%");
  const [throughput, setThroughput] = useState("12.5k");

  // Terminal logs state
  const [terminalLogs, setTerminalLogs] = useState([]);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < allLogs.length) {
        setTerminalLogs((prev) => [...prev, allLogs[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 800);
    return () => clearInterval(interval);
  }, []);

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "experience",
        "projects",
        "skills",
        "education",
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

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    // Scroll reveal observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target); // Only animate once
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll(".reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const sectionNames = {
      home: "Home",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      education: "Education",
    };
    const currentName = sectionNames[activeSection] || "Home";
    document.title = `${currentName} | Sai Krishna Mateti`;
  }, [activeSection]);

  return (
    <div className="container" style={{ position: "relative" }}>
      <Analytics />
      {/* Background Glowing Dots */}
      <div
        className="bg-dot"
        style={{
          top: "15%",
          left: "5%",
          animation: "floatDot 8s ease-in-out infinite",
        }}
      ></div>
      <div
        className="bg-dot"
        style={{
          top: "45%",
          right: "10%",
          animation: "floatDot 12s ease-in-out infinite 2s",
        }}
      ></div>
      <div
        className="bg-dot"
        style={{
          top: "75%",
          left: "15%",
          animation: "floatDot 9s ease-in-out infinite 1s",
        }}
      ></div>
      <div
        className="bg-dot"
        style={{
          top: "85%",
          right: "25%",
          animation: "floatDot 10s ease-in-out infinite 4s",
        }}
      ></div>

      {/* Header */}
      <header className="header flex justify-between items-center">
        <div
          className="logo"
          style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "28px",
              height: "28px",
              background:
                "linear-gradient(135deg, rgba(0, 229, 255, 0.2), rgba(0, 229, 255, 0.05))",
              border: "1px solid var(--accent-cyan)",
              borderRadius: "6px",
              color: "var(--accent-cyan)",
              fontWeight: "700",
              fontSize: "12px",
              fontFamily: "var(--font-mono)",
              boxShadow: "0 0 10px rgba(0, 229, 255, 0.2)",
              letterSpacing: "0.5px",
            }}
          >
            SK
          </div>
          Sai Krishna Mateti
        </div>
        <nav className="nav-links">
          <a href="#home" className={activeSection === "home" ? "active" : ""}>
            Home
          </a>
          <a
            href="#experience"
            className={activeSection === "experience" ? "active" : ""}
          >
            Experience
          </a>
          <a
            href="#projects"
            className={activeSection === "projects" ? "active" : ""}
          >
            Projects
          </a>
          <a
            href="#skills"
            className={activeSection === "skills" ? "active" : ""}
          >
            Skills
          </a>
          <a
            href="#education"
            className={activeSection === "education" ? "active" : ""}
          >
            Education
          </a>
        </nav>
        <button
          className="btn btn-secondary"
          style={{ padding: "0.5rem 1rem" }}
        >
          Download CV
        </button>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="badge badge-green mb-4 animate-fade-up">
            <span style={{ marginRight: "6px", fontSize: "10px" }}>●</span>{" "}
            AVAILABLE FOR ARCHITECTURE CONSULTING
          </div>
          <h1 className="animate-fade-up delay-1">
            Sai Krishna Mateti |{" "}
            <span className="text-cyan">Backend Engineer</span>
          </h1>
          <p className="animate-fade-up delay-2">
            Architecting high-throughput microservices and robust cloud
            infrastructures. I specialize in turning complex system requirements
            into scalable, maintainable codebases using Kernel-level precision
            and Craft-driven implementation.
          </p>
          <div className="flex gap-4 animate-fade-up delay-3">
            <button className="btn btn-primary">
              Download CV{" "}
              <Download
                size={16}
                className="ml-2"
                style={{ marginLeft: "8px" }}
              />
            </button>
            <button className="btn btn-secondary">View Projects</button>
          </div>
        </div>

        <div className="hero-visual animate-float delay-4">
          <div className="system-health">
            <div className="system-header">
              <span>SYSTEM HEALTH</span>
              <div className="window-controls">
                <div className="control-dot dot-red"></div>
                <div className="control-dot dot-yellow"></div>
                <div className="control-dot dot-green"></div>
              </div>
            </div>

            <div className="system-body">
              <div className="metric">
                <div className="metric-header">
                  <span>API Uptime</span>
                  <span className="text-green">{uptime}</span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill fill-green"
                    style={{ width: "99.99%" }}
                  ></div>
                </div>
              </div>

              <div className="metric">
                <div className="metric-header">
                  <span>Throughput</span>
                  <span>{throughput} req/s</span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill fill-cyan"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>

              <div className="terminal">
                <div className="terminal-header">_ system.logs</div>
                {terminalLogs.map((log, index) => {
                  if (!log) return null;
                  return (
                    <div key={index} className="terminal-line">
                      <span className="terminal-time">[{log.time}]</span>
                      <span
                        style={{
                          color:
                            log.type === "warn"
                              ? "#ffbd2e"
                              : log.type === "success"
                                ? "#27c93f"
                                : "#8b949e",
                        }}
                      >
                        {log.msg}
                      </span>
                    </div>
                  );
                })}
                <div className="terminal-line mt-2 flex items-center">
                  <span className="text-cyan">admin@skm:~$</span>
                  <span
                    className="cursor-blink"
                    style={{
                      width: "8px",
                      height: "15px",
                      backgroundColor: "var(--accent-cyan)",
                      display: "inline-block",
                      marginLeft: "6px",
                      animation: "blink 1s step-end infinite",
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Tech Stack */}
      <section className="features-grid">
        <div className="card feature-card reveal delay-1">
          <Zap className="feature-icon" size={24} />
          <h3 className="feature-title">API Optimization</h3>
          <p className="feature-desc">
            Reduced backend latency across legacy microservices by implementing
            advanced caching strategies.
          </p>
          <div>
            <div className="feature-stat">50%</div>
            <div className="feature-stat-label">FASTER RESPONSE TIMES</div>
          </div>
        </div>

        <div className="card feature-card tech-stack-card reveal delay-2">
          <h3 className="feature-title">Core Tech Stack</h3>
          <p className="feature-desc">
            Industrial-grade tools utilized for building enterprise systems.
          </p>
          <div className="tech-tags">
            <span className="tech-tag" style={{ borderColor: "#666666" }}>
              <Server size={14} color="#68a063" /> Node.js
            </span>
            <span className="tech-tag" style={{ borderColor: "#666666" }}>
              <Database size={14} color="#47A248" /> MongoDB
            </span>
            <span className="tech-tag" style={{ borderColor: "#666666" }}>
              <Box size={14} color="#DC382D" /> Redis
            </span>
            <span className="tech-tag" style={{ borderColor: "#666666" }}>
              <LayoutTemplate size={14} color="#2496ED" /> Docker
            </span>
            <span className="tech-tag" style={{ borderColor: "#666666" }}>
              <Workflow size={14} color="#F05032" /> CI/CD
            </span>
            <span className="tech-tag" style={{ borderColor: "#666666" }}>
              <Cloud size={14} color="#0089D6" /> Azure
            </span>
            <span className="tech-tag" style={{ borderColor: "#666666" }}>
              <Cpu size={14} color="#aaaaaa" /> Express JS
            </span>
            <span className="tech-tag" style={{ borderColor: "#666666" }}>
              <FileJson size={14} color="#85EA2D" /> Swagger
            </span>
          </div>
          {/* Decorative faint icon in background */}
          <div
            style={{
              position: "absolute",
              right: "-20px",
              bottom: "-20px",
              opacity: 0.05,
              transform: "rotate(-15deg)",
            }}
          >
            <Server size={180} />
          </div>
        </div>

        <div className="card feature-card reveal delay-3">
          <ShieldCheck className="feature-icon" size={24} />
          <h3 className="feature-title">Data Integrity</h3>
          <p className="feature-desc">
            Engineered a zero-data-loss migration pipeline for 2TB+ of
            production databases.
          </p>
          <div>
            <div
              className="feature-stat text-cyan"
              style={{ color: "var(--text-primary)" }}
            >
              100%
            </div>
            <div className="feature-stat-label">UPTIME DURING MIGRATION</div>
          </div>
        </div>

        <div className="card feature-card reveal delay-4">
          <h3
            className="feature-title"
            style={{
              fontSize: "1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "var(--accent-cyan)",
            }}
          >
            <TerminalSquare size={16} /> Technical Philosophy
          </h3>
          <p className="feature-desc" style={{ marginTop: "0.5rem" }}>
            Writing code is 20% of the job; designing systems that can fail
            gracefully and recover autonomously is the other 80%. I prioritize
            observability and decoupled logic.
          </p>
        </div>

        <div className="card feature-card reveal delay-5">
          <h3
            className="feature-title"
            style={{
              fontSize: "1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "#ffbd2e",
            }}
          >
            <Award size={16} /> Experience Trail
          </h3>
          <p className="feature-desc" style={{ marginTop: "0.5rem" }}>
            Currently lead backend efforts for enterprise-scale Fintech
            solutions, focusing on transactional consistency and low-latency
            auditing systems.
          </p>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section className="experience-section" id="experience">
        <div className="exp-header">
          <h2 className="exp-title">Professional Experience</h2>
          <div className="exp-status">
            <div className="exp-status-label">LATEST STATUS</div>
            <div className="exp-status-value">ACTIVE_DEPLOYMENT</div>
          </div>
        </div>

        <div className="timeline">
          {/* Main Job */}
          <div className="timeline-item reveal delay-1">
            <div className="exp-card">
              <div className="exp-card-header">
                <div>
                  <div className="exp-date">2021 — PRESENT</div>
                  <h3 className="exp-role">Software Engineer L3</h3>
                  <div className="exp-company">Archents IT</div>
                </div>
              </div>

              <div className="exp-grid">
                <div className="exp-grid-item">
                  <div className="exp-grid-title">
                    <Target size={14} color="var(--accent-cyan)" /> RESTful APIs
                  </div>
                  <p className="exp-grid-desc">
                    Engineered high-throughput endpoints using Node.js/Express
                    with schema validation and error-handling middleware.
                  </p>
                </div>

                <div className="exp-grid-item">
                  <div className="exp-grid-title">
                    <Network size={14} color="var(--accent-cyan)" />{" "}
                    Microservices
                  </div>
                  <p className="exp-grid-desc">
                    Decoupled monolithic logic into event-driven services,
                    reducing deployment cycles by 40%.
                  </p>
                </div>

                <div className="exp-grid-item">
                  <div className="exp-grid-title">
                    <Database size={14} color="var(--accent-cyan)" /> MongoDB
                    Aggregation
                  </div>
                  <p className="exp-grid-desc">
                    Optimized complex data lookups using multi-stage pipelines
                    and compound indexing for real-time reporting.
                  </p>
                </div>

                <div className="exp-grid-item">
                  <div className="exp-grid-title">
                    <Lock size={14} color="var(--accent-cyan)" /> JWT / OAuth2
                  </div>
                  <p className="exp-grid-desc">
                    Implemented stateless authentication and RBAC, securing
                    enterprise-grade resources across cloud environments.
                  </p>
                </div>

                {/* Full-width inner block */}
                <div
                  className="exp-grid-item"
                  style={{
                    gridColumn: "span 1 / span 2",
                    padding: "1rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                    backgroundColor: "var(--bg-darker)",
                  }}
                >
                  <div
                    className="exp-grid-title"
                    style={{
                      margin: 0,
                      fontSize: "0.75rem",
                      textTransform: "uppercase",
                    }}
                  >
                    <Cloud size={12} /> Azure Cloud Infrastructure
                  </div>
                  <div className="flex gap-2" style={{ flexWrap: "wrap" }}>
                    <span
                      className="badge badge-outline"
                      style={{ backgroundColor: "#111827" }}
                    >
                      Blob Storage Integration
                    </span>
                    <span
                      className="badge badge-outline"
                      style={{ backgroundColor: "#111827" }}
                    >
                      NLP Cognitive Services
                    </span>
                    <span
                      className="badge badge-outline"
                      style={{ backgroundColor: "#111827" }}
                    >
                      App Service Orchestration
                    </span>
                  </div>
                </div>
              </div>

              <div className="exp-achievements">
                <h4 className="achievements-title">
                  <Trophy size={16} /> Key Achievements
                </h4>
                <div className="achievement-list">
                  <div className="achievement-item">
                    <div className="achievement-badge">99%</div>
                    <div className="achievement-text">
                      Standardized containerization workflows using{" "}
                      <strong>Docker</strong>, achieving 99.9% environment
                      parity across Development/Staging/Production.
                    </div>
                  </div>
                  <div className="achievement-item">
                    <div className="achievement-badge">35%</div>
                    <div className="achievement-text">
                      Refactored legacy data migration scripts, improving
                      processing speed by <strong>35%</strong> for
                      multi-terabyte datasets.
                    </div>
                  </div>
                  <div className="achievement-item">
                    <div className="achievement-badge">
                      <Box size={14} />
                    </div>
                    <div className="achievement-text">
                      Led the migration of on-prem NLP processing to{" "}
                      <strong>Azure Cognitive Services</strong>, enhancing
                      entity extraction accuracy.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Spotlight (Ciana Healthcare Platform) */}
      <section
        className="project-spotlight reveal delay-1"
        id="projects"
        style={{ marginBottom: "6rem" }}
      >
        <div className="section-label">SYSTEM ARCHITECTURE CASE STUDY</div>

        {/* Case Study Hero */}
        <div
          className="case-study-hero"
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "3rem",
            marginBottom: "5rem",
            alignItems: "center",
          }}
        >
          <div className="hero-left">
            <h1
              className="case-study-title"
              style={{
                fontSize: "3rem",
                fontWeight: "800",
                lineHeight: "1.1",
                marginBottom: "1.5rem",
                color: "#fff",
              }}
            >
              Ciana Healthcare Platform
            </h1>
            <p
              className="case-study-desc"
              style={{
                fontSize: "1.125rem",
                lineHeight: "1.6",
                color: "var(--text-secondary)",
                marginBottom: "2rem",
              }}
            >
              A robust, distributed microservices ecosystem designed to
              modernize patient-doctor interactions, pharmacy logistics, and
              laboratory workflows through secure, real-time data orchestration.
            </p>
            <div
              className="case-study-tags"
              style={{ display: "flex", gap: "0.75rem" }}
            >
              <span
                className="badge badge-outline"
                style={{
                  borderColor: "var(--border-color)",
                  color: "var(--text-secondary)",
                }}
              >
                Microservices
              </span>
              <span
                className="badge badge-outline text-green"
                style={{
                  borderColor: "var(--accent-green-dim)",
                  backgroundColor: "rgba(63, 185, 80, 0.05)",
                  color: "var(--accent-green)",
                }}
              >
                HIPAA Compliant
              </span>
              <span
                className="badge badge-outline text-cyan"
                style={{
                  borderColor: "var(--accent-cyan-dim)",
                  backgroundColor: "rgba(0, 229, 255, 0.05)",
                  color: "var(--accent-cyan)",
                }}
              >
                Event-Driven
              </span>
            </div>
          </div>

          <div className="hero-right" style={{ position: "relative" }}>
            <div
              className="dashboard-visual"
              style={{
                position: "relative",
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid var(--border-color)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
                alt="Ciana Healthcare Dashboard Analytics"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  opacity: 0.75,
                }}
              />
              <div
                className="uptime-card animate-float"
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "-20px",
                  backgroundColor: "rgba(13, 17, 23, 0.9)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid var(--border-color)",
                  borderRadius: "8px",
                  padding: "1rem 1.5rem",
                  boxShadow: "0 10px 25px rgba(0,255,123,0.1)",
                }}
              >
                <div
                  className="uptime-value text-green"
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: "800",
                    color: "var(--accent-green)",
                    lineHeight: "1.2",
                  }}
                >
                  99.9%
                </div>
                <div
                  className="uptime-label"
                  style={{
                    fontSize: "0.625rem",
                    color: "var(--text-secondary)",
                    fontWeight: "600",
                    letterSpacing: "0.1em",
                    marginTop: "2px",
                  }}
                >
                  UPTIME PERFORMANCE
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Platform Modules Header */}
        <div
          className="modules-header flex justify-between items-end"
          style={{
            marginBottom: "2.5rem",
            borderBottom: "1px solid var(--border-color)",
            paddingBottom: "1.5rem",
          }}
        >
          <div>
            <h2
              className="modules-title"
              style={{
                fontSize: "2rem",
                fontWeight: "700",
                color: "#fff",
                marginBottom: "0.5rem",
              }}
            >
              Platform Modules
            </h2>
            <p
              className="modules-subtitle"
              style={{ color: "var(--text-secondary)" }}
            >
              Core service layers architected for high throughput and low
              latency.
            </p>
          </div>
          <div
            className="modules-path font-mono text-cyan"
            style={{
              fontSize: "0.8125rem",
              color: "var(--accent-cyan)",
              opacity: 0.8,
            }}
          >
            _ROOT/CIANA_PLATFORM/SRC
          </div>
        </div>

        {/* Modules Grid */}
        <div
          className="modules-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            marginBottom: "5rem",
          }}
        >
          {/* Card 1: Patient Services */}
          <div
            className="module-card module-card-cyan"
            style={{ position: "relative" }}
          >
            <div
              className="module-card-header"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1.5rem",
              }}
            >
              <div
                className="module-icon-container"
                style={{
                  padding: "0.75rem",
                  borderRadius: "8px",
                  backgroundColor: "rgba(0, 229, 255, 0.05)",
                  border: "1px solid var(--accent-cyan-dim)",
                }}
              >
                <Users
                  size={20}
                  className="text-cyan"
                  style={{ color: "var(--accent-cyan)" }}
                />
              </div>
              <div
                className="module-version font-mono text-xs"
                style={{ color: "var(--text-secondary)" }}
              >
                v2.4.0
              </div>
            </div>

            <div className="module-card-body">
              <h3
                className="module-name"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  marginBottom: "0.75rem",
                  color: "#fff",
                }}
              >
                Patient Services
              </h3>
              <p
                className="module-desc"
                style={{
                  fontSize: "0.9375rem",
                  color: "var(--text-secondary)",
                  marginBottom: "1.5rem",
                  lineHeight: "1.5",
                }}
              >
                Omnichannel patient engagement portal prioritizing accessibility
                and rapid medical intervention.
              </p>

              <ul
                className="module-bullets"
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 2rem 0",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                <li
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    alignItems: "flex-start",
                  }}
                >
                  <CheckCircle2
                    size={16}
                    className="bullet-icon text-green"
                    style={{
                      color: "var(--accent-green)",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    Face Scan AI for touchless check-ins and identity
                    verification.
                  </span>
                </li>
                <li
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    alignItems: "flex-start",
                  }}
                >
                  <CheckCircle2
                    size={16}
                    className="bullet-icon text-green"
                    style={{
                      color: "var(--accent-green)",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    PhonePe integration for seamless automated billing and
                    insurance claims.
                  </span>
                </li>
                <li
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    alignItems: "flex-start",
                  }}
                >
                  <CheckCircle2
                    size={16}
                    className="bullet-icon text-green"
                    style={{
                      color: "var(--accent-green)",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    Unified health timeline with multi-hospital history syncing.
                  </span>
                </li>
              </ul>

              {/* <div className="module-terminal" style={{ backgroundColor: '#05080f', border: '1px solid var(--border-color)', borderRadius: '6px', padding: '1rem 1.25rem', boxShadow: 'inset 0 0 10px rgba(0,0,0,0.5)' }}>
                <div className="terminal-bar flex justify-between items-center mb-2" style={{ borderBottom: '1px solid #161b22', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
                  <span className="flex items-center gap-1 font-mono text-xs" style={{ color: 'var(--accent-cyan)' }}><Lock size={12} style={{ color: 'var(--accent-cyan)' }} /> auth_service.logs</span>
                </div>
                <div className="terminal-body font-mono text-xs" style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <div style={{ color: 'var(--text-secondary)' }}>[INFO] Request: POST /api/v1/patient/checkin</div>
                  <div style={{ color: 'var(--text-secondary)' }}>[INFO] Identity Verified: biometric_ai_scan</div>
                  <div style={{ color: 'var(--text-secondary)' }}>[INFO] Payment Gateway: PHONEPE_TXN_8823</div>
                  <div style={{ color: 'var(--accent-green)' }}>[SUCCESS] EMR link established.</div>
                </div>
              </div> */}
            </div>
          </div>

          {/* Card 2: Doctor Workflows */}
          <div
            className="module-card module-card-green"
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              className="module-card-header"
              style={{ marginBottom: "1.5rem" }}
            >
              <div
                className="module-icon-container"
                style={{
                  display: "inline-block",
                  padding: "0.75rem",
                  borderRadius: "8px",
                  backgroundColor: "rgba(63, 185, 80, 0.05)",
                  border: "1px solid var(--accent-green-dim)",
                }}
              >
                <Activity
                  size={20}
                  className="text-green"
                  style={{ color: "var(--accent-green)" }}
                />
              </div>
            </div>

            <div
              className="module-card-body"
              style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
            >
              <h3
                className="module-name"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  marginBottom: "0.75rem",
                  color: "#fff",
                }}
              >
                Doctor Workflows
              </h3>
              <p
                className="module-desc"
                style={{
                  fontSize: "0.9375rem",
                  color: "var(--text-secondary)",
                  marginBottom: "1.5rem",
                  lineHeight: "1.5",
                }}
              >
                Streamlined clinical environment focused on patient outcomes
                over administrative overhead.
              </p>

              <ul
                className="module-bullets"
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                <li
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    alignItems: "flex-start",
                  }}
                >
                  <CheckCircle2
                    size={16}
                    className="bullet-icon text-green"
                    style={{
                      color: "var(--accent-green)",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    One-click EMR generation using NLP transcription.
                  </span>
                </li>
                <li
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    alignItems: "flex-start",
                  }}
                >
                  <CheckCircle2
                    size={16}
                    className="bullet-icon text-green"
                    style={{
                      color: "var(--accent-green)",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    Digital prescriptions with drug interaction alerts.
                  </span>
                </li>
              </ul>

              <div
                className="efficiency-footer"
                style={{
                  marginTop: "auto",
                  paddingTop: "2.5rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderTop: "1px solid var(--border-color)",
                }}
              >
                <span
                  style={{
                    fontSize: "0.6875rem",
                    color: "var(--text-secondary)",
                    fontWeight: "600",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  EFFICIENCY GAIN
                </span>
                <span
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "800",
                    color: "var(--accent-green)",
                  }}
                >
                  +40%
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: Pharmacy Module */}
          <div
            className="module-card module-card-cyan"
            style={{ position: "relative" }}
          >
            <div
              className="module-card-header"
              style={{ marginBottom: "1.5rem" }}
            >
              <div
                className="module-icon-container"
                style={{
                  display: "inline-block",
                  padding: "0.75rem",
                  borderRadius: "8px",
                  backgroundColor: "rgba(0, 229, 255, 0.05)",
                  border: "1px solid var(--accent-cyan-dim)",
                }}
              >
                <PlusSquare
                  size={20}
                  className="text-cyan"
                  style={{ color: "var(--accent-cyan)" }}
                />
              </div>
            </div>

            <div
              className="module-card-body flex-row"
              style={{
                display: "flex",
                gap: "1.5rem",
                height: "calc(100% - 68px)",
              }}
            >
              <div className="module-info-left" style={{ flexGrow: 1 }}>
                <h3
                  className="module-name"
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    marginBottom: "0.75rem",
                    color: "#fff",
                  }}
                >
                  Pharmacy Module
                </h3>
                <ul
                  className="module-bullets"
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  <li
                    style={{
                      display: "flex",
                      gap: "0.75rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <CheckCircle2
                      size={16}
                      className="bullet-icon text-green"
                      style={{
                        color: "var(--accent-green)",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    />
                    <span
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--text-secondary)",
                      }}
                    >
                      Inventory tracking with low-stock predictive ordering.
                    </span>
                  </li>
                  <li
                    style={{
                      display: "flex",
                      gap: "0.75rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <CheckCircle2
                      size={16}
                      className="bullet-icon text-green"
                      style={{
                        color: "var(--accent-green)",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    />
                    <span
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--text-secondary)",
                      }}
                    >
                      QR-based dispensing to eliminate medication errors.
                    </span>
                  </li>
                </ul>
              </div>
              <div
                className="module-visual-right flex items-center justify-center"
                style={{
                  flexShrink: 0,
                  width: "120px",
                  height: "120px",
                  borderRadius: "8px",
                  backgroundColor: "#05080f",
                  border: "1px solid var(--border-color)",
                  position: "relative",
                }}
              >
                <div className="db-visual" style={{ position: "relative" }}>
                  <Database
                    size={44}
                    style={{
                      color: "var(--accent-cyan)",
                      filter: "drop-shadow(0 0 10px rgba(0,229,255,0.3))",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Lab Management */}
          <div
            className="module-card module-card-orange"
            style={{ position: "relative" }}
          >
            <div
              className="module-card-header"
              style={{ marginBottom: "1.5rem" }}
            >
              <div
                className="module-icon-container"
                style={{
                  display: "inline-block",
                  padding: "0.75rem",
                  borderRadius: "8px",
                  backgroundColor: "rgba(255, 123, 114, 0.05)",
                  border: "1px solid var(--accent-orange-dim)",
                }}
              >
                <FlaskConical
                  size={20}
                  style={{ color: "var(--accent-orange)" }}
                />
              </div>
            </div>

            <div
              className="module-card-body flex-row"
              style={{
                display: "flex",
                gap: "1.5rem",
                height: "calc(100% - 68px)",
              }}
            >
              <div className="module-info-left" style={{ flexGrow: 1 }}>
                <h3
                  className="module-name"
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    marginBottom: "0.75rem",
                    color: "#fff",
                  }}
                >
                  Lab Management
                </h3>
                <ul
                  className="module-bullets"
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  <li
                    style={{
                      display: "flex",
                      gap: "0.75rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <CheckCircle2
                      size={16}
                      className="bullet-icon text-green"
                      style={{
                        color: "var(--accent-green)",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    />
                    <span
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--text-secondary)",
                      }}
                    >
                      Automated LIS (Lab Information System) integration.
                    </span>
                  </li>
                  <li
                    style={{
                      display: "flex",
                      gap: "0.75rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <CheckCircle2
                      size={16}
                      className="bullet-icon text-green"
                      style={{
                        color: "var(--accent-green)",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    />
                    <span
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--text-secondary)",
                      }}
                    >
                      DICOM image hosting for imaging centers.
                    </span>
                  </li>
                </ul>
              </div>
              <div
                className="module-visual-right flex items-center justify-center"
                style={{
                  flexShrink: 0,
                  width: "120px",
                  height: "120px",
                  borderRadius: "8px",
                  backgroundColor: "#05080f",
                  border: "1px solid var(--border-color)",
                  overflow: "hidden",
                }}
              >
                <div
                  className="equalizer"
                  style={{
                    display: "flex",
                    gap: "4px",
                    alignItems: "flex-end",
                    height: "40px",
                  }}
                >
                  <div className="bar bar-1"></div>
                  <div className="bar bar-2"></div>
                  <div className="bar bar-3"></div>
                  <div className="bar bar-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integration Architecture */}
        <div
          className="integration-architecture"
          style={{
            display: "grid",
            gridTemplateColumns: "1.12fr 0.88fr",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          <div className="integration-left">
            <h2
              className="integration-title"
              style={{
                fontSize: "2.5rem",
                fontWeight: "800",
                color: "#fff",
                marginBottom: "2.5rem",
              }}
            >
              Integration Architecture
            </h2>

            <div
              className="integration-step"
              style={{ display: "flex", gap: "1.5rem", marginBottom: "2rem" }}
            >
              <div
                className="step-num font-mono text-cyan"
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "700",
                  color: "var(--accent-cyan)",
                  marginTop: "2px",
                }}
              >
                01
              </div>
              <div className="step-content">
                <h4
                  className="step-title"
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: "600",
                    color: "#fff",
                    marginBottom: "0.5rem",
                  }}
                >
                  Secure Data Pipelines
                </h4>
                <p
                  className="step-desc"
                  style={{
                    fontSize: "0.9375rem",
                    color: "var(--text-secondary)",
                    lineHeight: "1.5",
                  }}
                >
                  End-to-end encrypted tunnels for sensitive medical records
                  (EMR) using AES-256 standards.
                </p>
              </div>
            </div>

            <div
              className="integration-step"
              style={{ display: "flex", gap: "1.5rem" }}
            >
              <div
                className="step-num font-mono text-cyan"
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "700",
                  color: "var(--accent-cyan)",
                  marginTop: "2px",
                }}
              >
                02
              </div>
              <div className="step-content">
                <h4
                  className="step-title"
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: "600",
                    color: "#fff",
                    marginBottom: "0.5rem",
                  }}
                >
                  API Mesh Orchestration
                </h4>
                <p
                  className="step-desc"
                  style={{
                    fontSize: "0.9375rem",
                    color: "var(--text-secondary)",
                    lineHeight: "1.5",
                  }}
                >
                  Standardized RESTful and gRPC interfaces connecting Pharmacy,
                  Lab, and Patient services.
                </p>
              </div>
            </div>
          </div>

          <div className="integration-right" style={{ position: "relative" }}>
            <div
              className="network-visual"
              style={{
                position: "relative",
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid var(--border-color)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
                alt="Server network cables"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  opacity: 0.75,
                }}
              />
              <div
                className="network-overlay-dot animate-pulse"
                style={{
                  position: "absolute",
                  top: "55%",
                  left: "50%",
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: "var(--accent-cyan)",
                  boxShadow: "0 0 15px var(--accent-cyan)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section reveal delay-1" id="skills">
        <div className="section-label">TECHNICAL CAPABILITIES</div>
        <div className="project-header">
          <h2 className="project-title">Skills & Shards</h2>
        </div>

        <div className="skills-grid">
          {/* Languages & Runtimes */}
          <div className="skills-card">
            <h3 className="skills-card-title">
              <Cpu
                size={18}
                className="text-cyan"
                style={{ marginRight: "8px" }}
              />{" "}
              Languages & Runtimes
            </h3>
            <div className="skill-list">
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">Node.js / Express</span>
                  <span className="skill-level-text">90%</span>
                </div>
                <div className="skill-progress-terminal">[█████████░]</div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">JavaScript (ES6+)</span>
                  <span className="skill-level-text">95%</span>
                </div>
                <div className="skill-progress-terminal">[██████████]</div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">HTML5 / CSS3</span>
                  <span className="skill-level-text">85%</span>
                </div>
                <div className="skill-progress-terminal">[████████░░]</div>
              </div>
            </div>
          </div>

          {/* Cloud & DevOps */}
          <div className="skills-card">
            <h3 className="skills-card-title">
              <Cloud
                size={18}
                className="text-cyan"
                style={{ marginRight: "8px" }}
              />{" "}
              Cloud & DevOps
            </h3>
            <div className="skill-list">
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">Azure Cloud Services</span>
                  <span className="skill-level-text">85%</span>
                </div>
                <div className="skill-progress-terminal">[████████░░]</div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">Docker Containerization</span>
                  <span className="skill-level-text">90%</span>
                </div>
                <div className="skill-progress-terminal">[█████████░]</div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">CI/CD Pipelines (Git)</span>
                  <span className="skill-level-text">80%</span>
                </div>
                <div className="skill-progress-terminal">[████████░░]</div>
              </div>
            </div>
          </div>

          {/* Databases & Caching */}
          <div className="skills-card">
            <h3 className="skills-card-title">
              <Database
                size={18}
                className="text-cyan"
                style={{ marginRight: "8px" }}
              />{" "}
              Databases & Caching
            </h3>
            <div className="skill-list">
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">MongoDB (NoSQL)</span>
                  <span className="skill-level-text">90%</span>
                </div>
                <div className="skill-progress-terminal">[█████████░]</div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">Redis (Caching Layer)</span>
                  <span className="skill-level-text">85%</span>
                </div>
                <div className="skill-progress-terminal">[████████░░]</div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">Query Optimization</span>
                  <span className="skill-level-text">90%</span>
                </div>
                <div className="skill-progress-terminal">[█████████░]</div>
              </div>
            </div>
          </div>

          {/* Architecture & APIs */}
          <div className="skills-card">
            <h3 className="skills-card-title">
              <Server
                size={18}
                className="text-cyan"
                style={{ marginRight: "8px" }}
              />{" "}
              Architecture & APIs
            </h3>
            <div className="skill-list">
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">Microservices Architecture</span>
                  <span className="skill-level-text">95%</span>
                </div>
                <div className="skill-progress-terminal">[██████████]</div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">RESTful API Design</span>
                  <span className="skill-level-text">90%</span>
                </div>
                <div className="skill-progress-terminal">[█████████░]</div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">
                    System Observability (Logs)
                  </span>
                  <span className="skill-level-text">85%</span>
                </div>
                <div className="skill-progress-terminal">[████████░░]</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="education-section reveal delay-1" id="education">
        <div className="section-label">ACADEMIC & CERTIFICATIONS</div>
        <div className="project-header">
          <h2 className="project-title">Education & Credentials</h2>
        </div>

        <div className="education-list">
          {/* Degree */}
          <div className="education-card">
            <div className="education-details">
              <h3 className="education-degree">
                Bachelor of Technology in Computer Science
              </h3>
              <div className="education-school">
                Jawaharlal Nehru Technological University
              </div>
              <div className="education-meta">
                <span>TERM: 2017 — 2021</span>
                <span>MAJOR: COMPUTER SCIENCE & ENGINEERING</span>
              </div>
            </div>
            <div className="education-card-terminal">
              <div className="terminal-line">
                <span className="text-cyan">&gt; FETCH</span> degree_data
              </div>
              <div className="terminal-line">
                <span className="text-green">STATUS</span>:
                COMPLETED_SUCCESSFULLY
              </div>
              <div className="terminal-line">
                <span className="text-green">GPA</span>: 8.2 / 10.0
              </div>
              <div className="terminal-line">
                <span className="text-green">CREDENTIAL</span>: SKM-BTECH-2021
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="education-card">
            <div className="education-details">
              <h3 className="education-degree">
                Azure Solutions Architect & Developer
              </h3>
              <div className="education-school">Microsoft Certification</div>
              <div className="education-meta">
                <span>TERM: 2022</span>
                <span>FOCUS: ENTERPRISE CLOUD ARCHITECTURE</span>
              </div>
            </div>
            <div className="education-card-terminal">
              <div className="terminal-line">
                <span className="text-cyan">&gt; VERIFY</span> microsoft_certs
              </div>
              <div className="terminal-line">
                <span className="text-green">STATUS</span>: ACTIVE
              </div>
              <div className="terminal-line">
                <span className="text-green">EXAMS</span>: AZ-204, AZ-305
              </div>
              <div className="terminal-line">
                <span className="text-green">PROVIDER</span>: MICROSOFT_CORP
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div>
          <div className="text-cyan mb-2" style={{ fontWeight: 600 }}>
            Sai Krishna Mateti
          </div>
          <div>© 2026 SAI KRISHNA MATETI | SYSTEM ARCHITECTED FOR SCALE</div>
        </div>
        <div className="footer-links">
          <a href="#">LinkedIn</a>
          <a href="#">Email</a>
          <a href="#">GitHub</a>
          <a href="#">Documentation</a>
        </div>
      </footer>
      <Analytics />
    </div>
  );
}

export default App;
