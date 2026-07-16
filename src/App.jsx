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
  Mail,
  MapPin,
  MessageSquare,
  Send,
  Brain,
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Contact Form & Simulated Transmission Terminal
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [sendLogs, setSendLogs] = useState([]);
  const [sendSuccess, setSendSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSending(true);
    setSendLogs([]);
    setSendSuccess(false);

    const startTime = Date.now();
    const getElapsed = () => ((Date.now() - startTime) / 1000).toFixed(1) + "s";

    // Play simulated handshakes
    setTimeout(() => {
      setSendLogs((prev) => [
        ...prev,
        {
          time: getElapsed(),
          msg: "Initializing Mail Dispatch Service...",
          type: "system",
        },
      ]);
    }, 0);

    setTimeout(() => {
      setSendLogs((prev) => [
        ...prev,
        {
          time: getElapsed(),
          msg: "Establishing secure TLS 1.3 socket...",
          type: "auth",
        },
      ]);
    }, 500);

    setTimeout(() => {
      setSendLogs((prev) => [
        ...prev,
        {
          time: getElapsed(),
          msg: "Serializing message payload...",
          type: "payload",
        },
      ]);
    }, 1100);

    setTimeout(() => {
      setSendLogs((prev) => [
        ...prev,
        {
          time: getElapsed(),
          msg: "Sending HTTP POST request to mail delivery pool...",
          type: "network",
        },
      ]);
    }, 1700);

    // Run the actual API request to Web3Forms
    setTimeout(async () => {
      const accessKey =
        import.meta.env.VITE_WEB3FORMS_KEY ||
        "7edebbfb-448e-462a-a775-bb4d4f82c34c";
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: formData.name,
            email: formData.email,
            message: formData.message,
            subject: `New message from your Portfolio`,
          }),
        });

        const data = await response.json();

        if (response.ok && data.success) {
          setSendLogs((prev) => [
            ...prev,
            {
              time: getElapsed(),
              msg: "Transmission successful! API response: 200 OK.",
              type: "success",
            },
          ]);
          setIsSending(false);
          setSendSuccess(true);
          setFormData({ name: "", email: "", message: "" });
        } else {
          const errMsg = data.message || `HTTP ${response.status}`;
          setSendLogs((prev) => [
            ...prev,
            {
              time: getElapsed(),
              msg: `Transmission failed! Error: ${errMsg}`,
              type: "error",
            },
          ]);
          setIsSending(false);
          setSendSuccess(false);
        }
      } catch (err) {
        setSendLogs((prev) => [
          ...prev,
          {
            time: getElapsed(),
            msg: `Transmission failed! Network error: ${err.message}`,
            type: "error",
          },
        ]);
        setIsSending(false);
        setSendSuccess(false);
      }
    }, 2300);
  };

  useEffect(() => {
    let timeoutId;
    if (sendSuccess) {
      timeoutId = setTimeout(() => {
        setSendLogs([]);
        setSendSuccess(false);
      }, 1500);
    }
    return () => clearTimeout(timeoutId);
  }, [sendSuccess]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "experience",
        "projects",
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

      // Header shadow on scroll
      const header = document.querySelector(".header");
      if (header) {
        if (window.scrollY > 20) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    // Scroll reveal observer — handles all reveal variants
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    document
      .querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale")
      .forEach((el) => {
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
      contact: "Contact",
    };
    const currentName = sectionNames[activeSection] || "Home";
    document.title = `${currentName} | Sai Krishna Mateti`;
  }, [activeSection]);

  return (
    <div className="container" style={{ position: "relative" }}>
      <Analytics />

      {/* Premium Background Orbs */}
      <div className="bg-orb bg-orb-1" aria-hidden="true"></div>
      <div className="bg-orb bg-orb-2" aria-hidden="true"></div>
      <div className="bg-orb bg-orb-3" aria-hidden="true"></div>

      {/* Header */}
      <header className="header flex justify-between items-center reveal delay-1">
        <div className="logo">
          <div className="logo-badge">SK</div>
          <span className="logo-text">Sai Krishna Mateti</span>
        </div>
        <button
          className={`mobile-nav-toggle ${mobileMenuOpen ? "open" : ""}`}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation"
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`nav-links ${mobileMenuOpen ? "open" : ""}`}>
          <a
            href="#home"
            className={activeSection === "home" ? "active" : ""}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#experience"
            className={activeSection === "experience" ? "active" : ""}
            onClick={() => setMobileMenuOpen(false)}
          >
            Experience
          </a>
          <a
            href="#projects"
            className={activeSection === "projects" ? "active" : ""}
            onClick={() => setMobileMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#skills"
            className={activeSection === "skills" ? "active" : ""}
            onClick={() => setMobileMenuOpen(false)}
          >
            Skills
          </a>
          <a
            href="#education"
            className={activeSection === "education" ? "active" : ""}
            onClick={() => setMobileMenuOpen(false)}
          >
            Education
          </a>
          <a
            href="#contact"
            className={activeSection === "contact" ? "active" : ""}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
        </nav>
        <a
          href="/Mateti_Sai_Krishna_NodeJS_Developer.pdf"
          download="Sai_Krishna_Mateti_Resume.pdf"
          className="btn btn-secondary"
          style={{ padding: "0.5rem 1rem", marginRight: "25px" }}
        >
          Download CV
          <Download size={16} className="ml-2" style={{ marginLeft: "8px" }} />
        </a>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          {/* <div className="badge badge-green mb-4 animate-fade-up">
            <span style={{ marginRight: "6px", fontSize: "10px" }}>●</span>{" "}
            AVAILABLE FOR ARCHITECTURE CONSULTING
          </div> */}
          <h1 className="animate-fade-up delay-1">
            Sai Krishna Mateti |{" "}
            <span className="text-cyan">Backend Engineer</span>
          </h1>
          <p className="animate-fade-up delay-2">
            Backend Engineer with{" "}
            <strong style={{ color: "var(--accent-cyan)" }}>4.9+ years</strong>{" "}
            of experience designing scalable RESTful APIs and microservices in
            the{" "}
            <strong style={{ color: "var(--accent-cyan)" }}>
              healthcare domain
            </strong>{" "}
            using Node.js, Express.js, MongoDB, Redis &amp; Docker. Strong
            expertise in API security (JWT, OAuth2), cloud integrations,
            performance optimization, and event-driven architectures — with a
            proven track record in OCR, NLP, payments, scheduling, and
            notifications.
          </p>
          <div className="flex gap-4 animate-fade-up delay-3">
            <a
              href="/Mateti_Sai_Krishna_NodeJS_Developer.pdf"
              download="Sai_Krishna_Mateti_Resume.pdf"
              className="btn btn-primary"
            >
              Download CV{" "}
              <Download
                size={16}
                className="ml-2"
                style={{ marginLeft: "8px" }}
              />
            </a>
            <a href="#projects" className="btn btn-secondary">
              View Projects
            </a>
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
                {/* <div className="terminal-header">_ system.logs</div> */}
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
        {/* API Optimization */}
        <div className="feature-card reveal-scale delay-1">
          <div className="feature-icon-wrap">
            <Zap size={20} color="var(--accent-cyan)" />
          </div>
          <h3 className="feature-title">API Optimization</h3>
          <p className="feature-desc">
            Improved average API response time using Redis caching, query
            optimization, and compound database indexing.
          </p>
          <div>
            <div className="feature-stat">~50%</div>
            <div className="feature-stat-label">FASTER RESPONSE TIMES</div>
          </div>
        </div>

        {/* Core Tech Stack — spans 2 cols */}
        <div className="feature-card tech-stack-card reveal-scale delay-2">
          <div
            className="feature-icon-wrap"
            style={{
              background: "rgba(0,229,255,0.12)",
              borderColor: "rgba(0,229,255,0.35)",
            }}
          >
            <Server size={20} color="var(--accent-cyan)" />
          </div>
          <h3 className="feature-title">Core Tech Stack</h3>
          <p className="feature-desc">
            Industrial-grade technologies powering cloud-native healthcare
            microservices, secure multi-tenant portals, and real-time
            processing.
          </p>
          <div className="tech-tags">
            <span className="tech-tag tech-nodejs">
              <Server size={13} color="#68a063" /> Node.js
            </span>
            <span className="tech-tag tech-mongodb">
              <Database size={13} color="#47A248" /> MongoDB
            </span>
            <span className="tech-tag tech-redis">
              <Box size={13} color="#DC382D" /> Redis
            </span>
            <span className="tech-tag tech-docker">
              <LayoutTemplate size={13} color="#2496ED" /> Docker
            </span>
            <span className="tech-tag tech-cicd">
              <Workflow size={13} color="#ab58f6" /> CI/CD
            </span>
            <span className="tech-tag tech-azure">
              <Cloud size={13} color="#0089D6" /> Azure
            </span>
            <span className="tech-tag tech-express">
              <Cpu size={13} color="#18cce0" /> Express JS
            </span>
            <span className="tech-tag tech-swagger">
              <FileJson size={13} color="#85EA2D" /> Swagger
            </span>
          </div>
          {/* Decorative background icon */}
          <div
            style={{
              position: "absolute",
              right: "-20px",
              bottom: "-20px",
              opacity: 0.04,
              transform: "rotate(-15deg)",
              pointerEvents: "none",
            }}
          >
            <Server size={160} />
          </div>
        </div>

        {/* Environment Parity */}
        <div className="feature-card reveal-scale delay-3">
          <div
            className="feature-icon-wrap"
            style={{
              background: "rgba(63,185,80,0.08)",
              borderColor: "rgba(63,185,80,0.25)",
            }}
          >
            <ShieldCheck size={20} color="var(--accent-green)" />
          </div>
          <h3 className="feature-title">Environment Parity</h3>
          <p className="feature-desc">
            Standardized deployment workflows by containerizing microservices
            with Docker, eliminating environment-related issues.
          </p>
          <div>
            <div
              className="feature-stat"
              style={{
                background: "linear-gradient(135deg, #e6edf3, #00e5ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              99.9%
            </div>
            <div className="feature-stat-label">
              PARITY ACROSS QA, STAGE &amp; PROD
            </div>
          </div>
        </div>

        {/* Security & Access Boundaries */}
        <div className="feature-card reveal-scale delay-4">
          <div
            className="feature-icon-wrap"
            style={{
              background: "rgba(0,229,255,0.06)",
              borderColor: "rgba(0,229,255,0.18)",
            }}
          >
            <TerminalSquare size={20} color="var(--accent-cyan)" />
          </div>
          <h3 className="feature-title" style={{ color: "var(--accent-cyan)" }}>
            Security &amp; Boundaries
          </h3>
          <p className="feature-desc">
            Implemented JWT/OAuth2 authentication, role-based access control
            (RBAC), and data boundaries to secure patient and doctor medical
            records.
          </p>
        </div>

        {/* Experience Trail */}
        <div className="feature-card reveal-scale delay-5">
          <div
            className="feature-icon-wrap"
            style={{
              background: "rgba(255,189,46,0.08)",
              borderColor: "rgba(255,189,46,0.25)",
            }}
          >
            <Award size={20} color="#ffbd2e" />
          </div>
          <h3 className="feature-title" style={{ color: "#ffbd2e" }}>
            Experience Trail
          </h3>
          <p className="feature-desc">
            Software Engineer L3 at Archents IT Pvt Ltd. Focused on designing
            robust, high-performance APIs, integrations (OCR, NLP, payments),
            and event-driven healthcare workflows.
          </p>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section className="experience-section" id="experience">
        <div className="exp-header">
          <h2 className="exp-title">Professional Experience</h2>
          {/* <div className="exp-status">
            <div className="exp-status-label">LATEST STATUS</div>
            <div className="exp-status-value">ACTIVE_DEPLOYMENT</div>
          </div> */}
        </div>

        <div className="timeline">
          {/* Main Job */}
          <div className="timeline-item reveal-left delay-1">
            <div className="exp-card">
              <div className="exp-card-header">
                <div>
                  <div className="exp-date">2021 — PRESENT</div>
                  <h3 className="exp-role">Software Engineer</h3>
                  <div className="exp-company">Archents IT Pvt Ltd</div>
                </div>
              </div>

              <div className="exp-grid">
                <div className="exp-grid-item">
                  <div className="exp-grid-title">
                    <Target size={14} color="var(--accent-cyan)" /> Scalable
                    RESTful APIs
                  </div>
                  <p className="exp-grid-desc">
                    Designed and implemented high-performance endpoints using
                    Node.js and Express.js for a cloud-native healthcare
                    platform serving patients, doctors, pharmacies, and labs.
                  </p>
                </div>

                <div className="exp-grid-item">
                  <div className="exp-grid-title">
                    <Network size={14} color="var(--accent-cyan)" /> Secure
                    Microservices
                  </div>
                  <p className="exp-grid-desc">
                    Developed microservices and modular backend components with
                    secure inter-service communication and high-throughput
                    reliability.
                  </p>
                </div>

                <div className="exp-grid-item">
                  <div className="exp-grid-title">
                    <Database size={14} color="var(--accent-cyan)" /> MongoDB
                    Pipelines
                  </div>
                  <p className="exp-grid-desc">
                    Modeled high-performance schemas, created compound indexes,
                    and built multi-stage aggregation pipelines to support
                    transactional workflows.
                  </p>
                </div>

                <div className="exp-grid-item">
                  <div className="exp-grid-title">
                    <Lock size={14} color="var(--accent-cyan)" /> Identity &amp;
                    Auth
                  </div>
                  <p className="exp-grid-desc">
                    Implemented stateless JWT/OAuth2 authentication, role-based
                    access control (RBAC), and API versioning to secure
                    multi-tenant healthcare applications.
                  </p>
                </div>

                {/* Full-width inner block */}
                <div
                  className="exp-grid-item full-width-exp-card"
                  style={{
                    gridColumn: "span 2",
                  }}
                >
                  <div className="exp-grid-title">
                    <Cloud size={14} color="var(--accent-cyan)" /> Cloud &amp;
                    Asynchronous Workflows
                  </div>
                  <p
                    className="exp-grid-desc"
                    style={{ marginBottom: "0.75rem" }}
                  >
                    Built event-driven workflows using Azure Service Bus for
                    asynchronous processing, notification dispatch, and
                    background jobs. Integrated Azure Blob Storage for secure
                    medical document storage and Azure NLP for entity
                    extraction.
                  </p>
                  <div className="flex gap-2" style={{ flexWrap: "wrap" }}>
                    <span className="badge badge-custom badge-service-bus">
                      <MessageSquare size={13} />
                      Azure Service Bus
                    </span>
                    <span className="badge badge-custom badge-blob">
                      <Database size={13} />
                      Blob Storage
                    </span>
                    <span className="badge badge-custom badge-nlp">
                      <Brain size={13} />
                      Azure Cognitive NLP
                    </span>
                    <span className="badge badge-custom badge-docker-custom">
                      <LayoutTemplate size={13} />
                      Docker Containerization
                    </span>
                    <span className="badge badge-custom badge-github">
                      <Workflow size={13} />
                      GitHub Actions CI/CD
                    </span>
                  </div>
                </div>
              </div>

              <div className="exp-achievements">
                <h4 className="achievements-title">
                  <Trophy size={18} color="var(--accent-green)" /> Key
                  Achievements
                </h4>
                <div className="achievement-list">
                  <div className="achievement-item">
                    <div className="achievement-badge">~50%</div>
                    <div className="achievement-text">
                      Improved average API response time by{" "}
                      <strong>~50%</strong> using Redis caching, query
                      optimization, and compound database indexing.
                    </div>
                  </div>
                  <div className="achievement-item">
                    <div className="achievement-badge">Docker</div>
                    <div className="achievement-text">
                      Standardized deployments by{" "}
                      <strong>Dockerizing microservices</strong>, achieving
                      environment consistency and eliminating deployment issues.
                    </div>
                  </div>
                  <div className="achievement-item">
                    <div className="achievement-badge">99.9%</div>
                    <div className="achievement-text">
                      Implemented automated backup, logging, and monitoring
                      pipelines, enhancing <strong>system reliability</strong>{" "}
                      and incident response.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Spotlight (ciana Healthcare Platform) */}
      <section
        className="project-spotlight reveal delay-1"
        id="projects"
        style={{ marginBottom: "3rem" }}
      >
        <div className="project-spotlight-card">
          {/* Case Study Hero */}
          <div className="case-study-hero">
            <div className="case-study-left">
              <div className="section-label case-study-label">
                FEATURED BACKEND CASE STUDY
              </div>
              <h1 className="case-study-title">Ciana Healthcare Platform</h1>
              <p className="case-study-desc">
                Designed and built secure, modular backend microservices for a
                multi-role healthcare ecosystem. Developed features for
                patients, doctors, pharmacies, and labs with secure Azure Blob
                Storage uploads, Face Scan AI vitals monitoring, PhonePe
                integrations, and end-to-end RBAC and JWT authentication layers.
              </p>
              <div className="case-study-tags">
                <span className="badge badge-outline tag-microservices">
                  Microservices Architecture
                </span>
                <span className="badge badge-outline tag-compliance">
                  HIPAA Compliant Data Boundaries
                </span>
                <span className="badge badge-outline tag-cloud">
                  Azure Cloud Integrations
                </span>
              </div>
            </div>

            <div className="case-study-right">
              <div className="dashboard-frame">
                <div className="dashboard-visual dashboard-curved">
                  <img
                    src="/images/ciana-spotlight.png"
                    alt="Ciana Healthcare Dashboard Analytics"
                    className="dashboard-image"
                  />
                </div>

                {/* Floating Uptime Card */}
                <div className="uptime-card animate-float">
                  <div className="uptime-value text-green">99.9%</div>
                  <div className="uptime-label">SYSTEM UPTIME</div>
                </div>
              </div>
            </div>
          </div>

          {/* Platform Modules Header */}
          <div className="modules-header">
            <div>
              <h2 className="modules-title">Service Domain Architecture</h2>
              <p className="modules-subtitle">
                Modular microservices powering patient, doctor, pharmacy, and
                laboratory workflows.
              </p>
            </div>
            <div className="modules-path font-mono text-cyan"></div>
          </div>

          {/* Modules Grid */}
          <div className="modules-grid">
            {/* Card 1: Patient Services */}
            <div className="module-card module-card-cyan-p">
              <div className="module-card-header">
                <div className="module-icon-container">
                  <Users size={20} className="text-cyan" />
                </div>
              </div>

              <div className="module-card-body">
                <h3 className="module-name">Patient Services</h3>
                <p className="module-desc">
                  Core service layer managing registrations, wellness tracking,
                  and secure document uploads.
                </p>

                <ul className="module-bullets">
                  <li className="module-bullet-item">
                    <CheckCircle2
                      size={16}
                      className="bullet-icon text-green"
                    />
                    <span className="bullet-text">
                      Registration, profile management, appointment booking, and
                      wellness logs.
                    </span>
                  </li>
                  <li className="module-bullet-item">
                    <CheckCircle2
                      size={16}
                      className="bullet-icon text-green"
                    />
                    <span className="bullet-text">
                      Integrated Face Scan AI module for touchless health vitals
                      monitoring.
                    </span>
                  </li>
                  <li className="module-bullet-item">
                    <CheckCircle2
                      size={16}
                      className="bullet-icon text-green"
                    />
                    <span className="bullet-text">
                      Secure prescription uploads stored safely in Azure Blob
                      Storage.
                    </span>
                  </li>
                  <li className="module-bullet-item">
                    <CheckCircle2
                      size={16}
                      className="bullet-icon text-green"
                    />
                    <span className="bullet-text">
                      PhonePe & RazorPay payment gateway integration for
                      packages and consultation fees.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2: Doctor Workflows */}
            <div className="module-card module-card-green">
              <div className="module-card-header">
                <div className="module-icon-container">
                  <Activity size={20} className="text-green" />
                </div>
              </div>

              <div className="module-card-body">
                <h3 className="module-name">Doctor Workflows</h3>
                <p className="module-desc">
                  Comprehensive digital workspaces for clinical consultations
                  and secure record handling.
                </p>

                <ul className="module-bullets">
                  <li className="module-bullet-item">
                    <CheckCircle2
                      size={16}
                      className="bullet-icon text-green"
                    />
                    <span className="bullet-text">
                      End-to-end appointment lifecycle management and video
                      consultations.
                    </span>
                  </li>
                  <li className="module-bullet-item">
                    <CheckCircle2
                      size={16}
                      className="bullet-icon text-green"
                    />
                    <span className="bullet-text">
                      Electronic Medical Record (EMR) generation and digital
                      prescriptions.
                    </span>
                  </li>
                  <li className="module-bullet-item">
                    <CheckCircle2
                      size={16}
                      className="bullet-icon text-green"
                    />
                    <span className="bullet-text">
                      Secure data access boundaries based on JWT and role-based
                      access control (RBAC).
                    </span>
                  </li>
                </ul>

                <div className="efficiency-footer">
                  <span
                    style={{
                      fontSize: "0.6875rem",
                      color: "var(--text-secondary)",
                      fontWeight: "600",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    ACCESS CONTROL
                  </span>
                  <span
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: "800",
                      color: "var(--accent-green)",
                    }}
                  >
                    SECURE RBAC
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3: Pharmacy Module */}
            <div className="module-card module-card-cyan">
              <div className="module-card-header">
                <div className="module-icon-container">
                  <PlusSquare size={20} className="text-cyan" />
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
                  <h3 className="module-name">Pharmacy Module</h3>
                  <ul className="module-bullets">
                    <li className="module-bullet-item">
                      <CheckCircle2
                        size={16}
                        className="bullet-icon text-green"
                      />
                      <span className="bullet-text">
                        Inventory tracking, real-time medicine search, and
                        billing systems.
                      </span>
                    </li>
                    <li className="module-bullet-item">
                      <CheckCircle2
                        size={16}
                        className="bullet-icon text-green"
                      />
                      <span className="bullet-text">
                        Automated low-stock detection and purchase order (PO)
                        generation.
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
                  <div className="db-visual">
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
            <div className="module-card module-card-orange">
              <div className="module-card-header">
                <div className="module-icon-container">
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
                  <h3 className="module-name">Lab Management</h3>
                  <ul className="module-bullets">
                    <li className="module-bullet-item">
                      <CheckCircle2
                        size={16}
                        className="bullet-icon text-green"
                      />
                      <span className="bullet-text">
                        Test scheduling, technician workflows, and real-time
                        status alerts.
                      </span>
                    </li>
                    <li className="module-bullet-item">
                      <CheckCircle2
                        size={16}
                        className="bullet-icon text-green"
                      />
                      <span className="bullet-text">
                        Secure PDF report uploads and signed URL downloads.
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
                  <div className="equalizer">
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
          <div className="integration-architecture">
            <div className="integration-left">
              <h2 className="integration-title">Integration Architecture</h2>

              <div className="integration-steps">
                <div className="integration-step">
                  <div className="step-num font-mono text-cyan">01</div>
                  <div className="step-content">
                    <h4 className="step-title">Face Scan AI Module</h4>
                    <p className="step-desc">
                      Integrated Face Scan AI vitals monitoring module for
                      touchless tracking of patient health metrics.
                    </p>
                  </div>
                </div>

                <div className="integration-step">
                  <div className="step-num font-mono text-cyan">02</div>
                  <div className="step-content">
                    <h4 className="step-title">
                      PhonePe & RazorPay Payment Gateway
                    </h4>
                    <p className="step-desc">
                      Integrated PhonePe & RazorPay payment gateway to
                      facilitate seamless transactions for healthcare packages
                      and consultations.
                    </p>
                  </div>
                </div>

                <div className="integration-step">
                  <div className="step-num font-mono text-cyan">03</div>
                  <div className="step-content">
                    <h4 className="step-title">
                      Azure Blob Storage & Secure Downloads
                    </h4>
                    <p className="step-desc">
                      Configured secure prescription uploads using Azure Blob
                      Storage and generated secure signed URLs for lab report
                      downloads.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="integration-right">
              <div className="network-visual">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
                  alt="Server network cables and integration architecture"
                  className="network-image"
                />
                <div className="network-overlay-dot dot-1"></div>
                <div className="network-overlay-dot dot-2"></div>
                <div className="network-overlay-dot dot-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section reveal delay-1" id="skills">
        <div className="section-label">TECHNICAL CAPABILITIES</div>
        <div className="project-header" style={{ marginBottom: "1.25rem" }}>
          <h2
            className="project-title"
            style={{ fontSize: "2.5rem", fontWeight: "800" }}
          >
            Skills & Shards
            <span
              className="cursor-blink"
              style={{
                color: "var(--accent-cyan)",
                animation: "blink 1s step-end infinite",
              }}
            >
              _
            </span>
          </h2>
        </div>
        <p
          style={{
            color: "var(--text-secondary)",
            marginBottom: "3.5rem",
            maxWidth: "600px",
            fontSize: "0.9375rem",
            lineHeight: "1.6",
          }}
        >
          Systematic breakdown of technical proficiency across the backend
          stack. Each shard represents a core pillar of architectural integrity
          and operational excellence.
        </p>

        <div className="skills-grid">
          {/* Languages & Runtimes */}
          <div className="skills-card skills-card-01 reveal-left delay-1">
            {/* <span className="skills-card-number">01</span> */}
            <h3 className="skills-card-title">
              <TerminalSquare size={18} style={{ marginRight: "8px" }} />{" "}
              Languages & Runtimes
            </h3>
            <div className="skill-list">
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">Node.js / Express</span>
                  <span className="skill-level-text">90%</span>
                </div>
                <div className="skill-progress-container">
                  <div
                    className="skill-progress-bar-fill"
                    style={{ "--bar-width": "90%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">JavaScript ES6+</span>
                  <span className="skill-level-text">95%</span>
                </div>
                <div className="skill-progress-container">
                  <div
                    className="skill-progress-bar-fill"
                    style={{ "--bar-width": "95%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">HTML5 / CSS3</span>
                  <span className="skill-level-text">85%</span>
                </div>
                <div className="skill-progress-container">
                  <div
                    className="skill-progress-bar-fill"
                    style={{ "--bar-width": "85%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Cloud & DevOps */}
          <div className="skills-card skills-card-02 reveal-right delay-2">
            {/* <span className="skills-card-number">02</span> */}
            <h3 className="skills-card-title">
              <Cloud size={18} style={{ marginRight: "8px" }} /> Cloud & DevOps
            </h3>
            <div className="skill-list">
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">Azure Infrastructure</span>
                  <span className="skill-level-text">85%</span>
                </div>
                <div className="skill-progress-container">
                  <div
                    className="skill-progress-bar-fill"
                    style={{ "--bar-width": "85%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">Docker</span>
                  <span className="skill-level-text">90%</span>
                </div>
                <div className="skill-progress-container">
                  <div
                    className="skill-progress-bar-fill"
                    style={{ "--bar-width": "90%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">CI / CD Pipelines</span>
                  <span className="skill-level-text">80%</span>
                </div>
                <div className="skill-progress-container">
                  <div
                    className="skill-progress-bar-fill"
                    style={{ "--bar-width": "80%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Databases & Caching */}
          <div className="skills-card skills-card-03 reveal-left delay-3">
            {/* <span className="skills-card-number">03</span> */}
            <h3 className="skills-card-title">
              <Database size={18} style={{ marginRight: "8px" }} /> Databases &
              Caching
            </h3>
            <div className="skill-list">
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">MongoDB / NoSQL</span>
                  <span className="skill-level-text">90%</span>
                </div>
                <div className="skill-progress-container">
                  <div
                    className="skill-progress-bar-fill"
                    style={{ "--bar-width": "90%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">Redis / Memory Cache</span>
                  <span className="skill-level-text">85%</span>
                </div>
                <div className="skill-progress-container">
                  <div
                    className="skill-progress-bar-fill"
                    style={{ "--bar-width": "85%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">Query Optimization</span>
                  <span className="skill-level-text">90%</span>
                </div>
                <div className="skill-progress-container">
                  <div
                    className="skill-progress-bar-fill"
                    style={{ "--bar-width": "90%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Architecture & APIs */}
          <div className="skills-card skills-card-04 reveal-right delay-4">
            {/* <span className="skills-card-number">04</span> */}
            <h3 className="skills-card-title">
              <Network size={18} style={{ marginRight: "8px" }} /> Architecture
              & APIs
            </h3>
            <div className="skill-list">
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">Microservices Architecture</span>
                  <span className="skill-level-text">95%</span>
                </div>
                <div className="skill-progress-container">
                  <div
                    className="skill-progress-bar-fill"
                    style={{ "--bar-width": "95%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">RESTful API Design</span>
                  <span className="skill-level-text">90%</span>
                </div>
                <div className="skill-progress-container">
                  <div
                    className="skill-progress-bar-fill"
                    style={{ "--bar-width": "90%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">System Observability</span>
                  <span className="skill-level-text">85%</span>
                </div>
                <div className="skill-progress-container">
                  <div
                    className="skill-progress-bar-fill"
                    style={{ "--bar-width": "85%" }}
                  ></div>
                </div>
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
          {/* B.Tech */}
          <div className="education-card">
            <div className="education-details">
              <h3 className="education-degree">
                Bachelor of Technology in Computer Science
              </h3>
              <div className="education-school">
                SVS Group of Institutes, Hanamkonda, Telangana
              </div>
              <div className="education-meta">
                <span>TERM: 2017 — 2020</span>
                <span>MAJOR: COMPUTER SCIENCE & ENGINEERING</span>
              </div>
            </div>
            <div className="education-stats-panel">
              <div className="education-stat-item">
                <span className="education-stat-label">GPA</span>
                <span className="education-stat-value">7.0 / 10.0</span>
              </div>
              <div className="education-stat-divider"></div>
              <div className="education-stat-item">
                <span className="education-stat-label">LOCATION</span>
                <span className="education-stat-value">Hanamkonda, TS</span>
              </div>
            </div>
          </div>

          {/* Diploma */}
          <div className="education-card">
            <div className="education-details">
              <h3 className="education-degree">
                Diploma in Computer Engineering
              </h3>
              <div className="education-school">
                Government Polytechnic College, Warangal, Telangana
              </div>
              <div className="education-meta">
                <span>TERM: 2014 — 2017</span>
                <span>MAJOR: COMPUTER ENGINEERING</span>
              </div>
            </div>
            <div className="education-stats-panel">
              <div className="education-stat-item">
                <span className="education-stat-label">PERCENTAGE</span>
                <span className="education-stat-value">70.5 %</span>
              </div>
              <div className="education-stat-divider"></div>
              <div className="education-stat-item">
                <span className="education-stat-label">LOCATION</span>
                <span className="education-stat-value">Warangal, TS</span>
              </div>
            </div>
          </div>

          {/* SSC */}
          <div className="education-card">
            <div className="education-details">
              <h3 className="education-degree">
                Secondary School Certificate (SSC)
              </h3>
              <div className="education-school">
                Sujatha Vidyanikethan High School, Hasanparthy, Hanamkonda,
                Telangana
              </div>
              <div className="education-meta">
                <span>TERM: 2004 — 2014</span>
                <span>FOCUS: GENERAL ACADEMICS</span>
              </div>
            </div>
            <div className="education-stats-panel">
              <div className="education-stat-item">
                <span className="education-stat-label">GPA</span>
                <span className="education-stat-value">9.5 / 10.0</span>
              </div>
              <div className="education-stat-divider"></div>
              <div className="education-stat-item">
                <span className="education-stat-label">LOCATION</span>
                <span className="education-stat-value">Hasanparthy, TS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section reveal delay-1" id="contact">
        <div className="project-header" style={{ marginBottom: "2.5rem" }}>
          <h2 className="project-title">GET IN TOUCH</h2>
        </div>

        <div className="contact-grid">
          {/* Contact Details Card */}
          <div className="contact-info-card">
            <div className="contact-method">
              <div className="contact-icon-wrap">
                <Network size={20} color="var(--accent-cyan)" />
              </div>
              <div className="contact-text">
                <span className="contact-label">Contact</span>
                +91 9948262033
              </div>
            </div>
            <div className="contact-method">
              <div className="contact-icon-wrap">
                <Mail size={20} color="var(--accent-cyan)" />
              </div>
              <div className="contact-text">
                <span className="contact-label">Email</span>
                <a
                  href="mailto:saikrishna6800@gmail.com"
                  className="contact-value"
                >
                  saikrishna6800@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-icon-wrap">
                <Users size={20} color="var(--accent-cyan)" />
              </div>
              <div className="contact-text">
                <span className="contact-label">LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/saikrishna-mateti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-value"
                >
                  linkedin.com/in/saikrishna-mateti
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form or Transmission Terminal Card */}
          <div className="contact-form-container">
            {!isSending && !sendLogs.length ? (
              <form onSubmit={handleFormSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="form-name">Sender Name</label>
                  <input
                    type="text"
                    id="form-name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="form-email">Sender Email</label>
                  <input
                    type="email"
                    id="form-email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="form-message">Message Payload</label>
                  <textarea
                    id="form-message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Type your message here..."
                    className="form-input"
                    required
                  />
                </div>

                <button type="submit" className="btn-submit">
                  Dispatch Message
                  <Send size={14} />
                </button>
              </form>
            ) : (
              <div className="contact-terminal-overlay">
                <div className="contact-terminal-logs">
                  <div className="contact-terminal-line">
                    <span className="log-time">[system]</span>
                    <span style={{ color: "var(--accent-cyan)" }}>
                      DISPATCHING CORRESPONDENCE PAYLOAD...
                    </span>
                  </div>
                  {sendLogs.map((log, index) => (
                    <div
                      key={index}
                      className={`contact-terminal-line ${
                        log.type === "success"
                          ? "success-msg"
                          : log.type === "error"
                            ? "error-msg"
                            : ""
                      }`}
                    >
                      <span className="log-time">[{log.time}]</span>
                      <span>{log.msg}</span>
                    </div>
                  ))}
                  {isSending && (
                    <div className="contact-terminal-line mt-2 flex items-center">
                      <span className="text-cyan">gateway@skm:~$</span>
                      <span
                        className="cursor-blink"
                        style={{
                          width: "6px",
                          height: "12px",
                          backgroundColor: "var(--accent-cyan)",
                          display: "inline-block",
                          marginLeft: "6px",
                          animation: "blink 1s step-end infinite",
                        }}
                      ></span>
                    </div>
                  )}
                </div>
                {!isSending && sendLogs.length > 0 && (
                  <div className="contact-terminal-footer">
                    <span
                      style={{
                        color: sendSuccess
                          ? "var(--accent-green)"
                          : "var(--accent-orange)",
                        fontSize: "0.75rem",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      STATUS:{" "}
                      {sendSuccess ? "TRANSMITTED_OK" : "TRANSMISSION_FAILED"}
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        setSendLogs([]);
                        setSendSuccess(false);
                      }}
                      className="btn-submit"
                      style={{
                        padding: "0.4rem 0.8rem",
                        fontSize: "0.7rem",
                        marginTop: 0,
                      }}
                    >
                      Reset Console
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer reveal delay-2">
        <div>
          <div
            className="text-cyan mb-2"
            style={{ fontWeight: 450, fontSize: "20px" }}
          >
            Sai Krishna Mateti · Backend Engineer · Hyderabad, India
          </div>
          <div style={{ fontSize: "16px" }}>© 2026 All rights reserved.</div>
        </div>
        <div
          className="footer-links"
          style={{ fontSize: "16px", fontWeight: 300, color: "#00e5ff" }}
        >
          <a href="https://www.linkedin.com/in/saikrishna-mateti">LinkedIn</a>
          <a href="https://github.com/saikrishna2917">GitHub</a>
        </div>
      </footer>
      <Analytics />
    </div>
  );
}
export default App;
