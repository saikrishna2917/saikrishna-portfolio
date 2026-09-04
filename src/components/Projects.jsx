import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: "01",
      title: "Ciana Health",
      // date: "Nov 24, 2021",
      badges: ["BACKEND ECOSYSTEM", "HEALTH TECH"],
      summary:
        "Comprehensive health and wellness app leveraging genetic insights for personalized care. Features seamless management of health journeys and medical records.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      bg: "var(--ca-blue)",
      textColor: "#ffffff",
      borderColor: "#ffffff",
      tabMargin: "0%",
    },
    {
      id: "02",
      title: "CianaCare",
      // date: "DEC 12, 2025",
      badges: ["API SERVICE", "CLINICAL"],
      summary:
        "Robust platform for healthcare professionals to streamline patient management. Features AI-driven clinical notes, teleconsultation, and calendar management.",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
      bg: "var(--ca-ink)",
      textColor: "#ffffff",
      borderColor: "#ffffff",
      tabMargin: "18%",
    },
    {
      id: "03",
      title: "Ciana Labs",
      // date: "OCT 05, 2025",
      badges: ["INTEGRATION LAYER", "B2B"],
      summary:
        "Cutting-edge web application for laboratories to enhance operations and patient care. Enables doctors to create lab networks and order tests directly.",
      image:
        "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",
      bg: "var(--ca-yellow)",
      textColor: "var(--ca-ink)",
      borderColor: "var(--ca-ink)",
      tabMargin: "36%",
    },
    {
      id: "04",
      title: "CianaArex",
      // date: "MAY 15, 2025",
      badges: ["MICROSERVICE", "PHARMACY"],
      summary:
        "Innovative web application for pharmacies to optimize operations. Features comprehensive stock management, point of sale, digital payments, and 24x7 ordering. Connects pharmacies with doctors for live stock visibility.",
      image:
        "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=800&q=80",
      bg: "var(--ca-green)",
      textColor: "#ffffff",
      borderColor: "#ffffff",
      tabMargin: "54%",
    },
    {
      id: "05",
      title: "Dexa AI",
      // date: "AUG 22, 2025",
      badges: ["AI & ANALYTICS", "DATA"],
      summary:
        "High-performance AI and analytics layer. Developed scalable data processing pipelines and integrations for advanced medical insights and reporting.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      bg: "var(--ca-magenta)",
      textColor: "#ffffff",
      borderColor: "#ffffff",
      tabMargin: "72%",
    },
  ];

  return (
    <section
      id="projects"
      style={{ padding: "4rem 1rem 8rem 1rem", position: "relative" }}
    >
      {/* Header Area */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
          paddingBottom: "4rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p
            className="ca-hand"
            style={{ fontSize: "2rem", color: "var(--ca-ink)", margin: 0 }}
          >
            explore my work!
          </p>
          <svg
            viewBox="0 0 64 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            style={{ height: "12px", width: "96px", marginTop: "4px" }}
            aria-hidden="true"
          >
            <path d="M3 4c18-3 40-3 58 0"></path>
            <path d="M9 9c14-2.5 32-2.5 46 0"></path>
          </svg>
        </div>

        <div style={{ marginTop: "1.5rem" }}>
          <h2
            className="ca-display"
            style={{
              fontSize: "clamp(4rem, 12vw, 8rem)",
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
              color: "var(--ca-ink)",
              margin: 0,
            }}
          >
            FEATURED WORKS
          </h2>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <div style={{ transform: "rotate(-3deg)" }}>
            <span
              className="ca-tape"
              style={{
                display: "inline-block",
                padding: "0.5rem 1.5rem",
                fontSize: "1.1rem",
                fontWeight: 500,
                backgroundColor: "var(--ca-yellow-soft)",
                color: "var(--ca-ink)",
              }}
            >
              A few backend systems I helped make scalable and secure.
            </span>
          </div>
        </div>
      </div>

      {/* Projects Stack */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8rem",
          maxWidth: "1200px",
          margin: "0 auto",
          paddingBottom: "80vh",
        }}
      >
        {projects.map((project, idx) => {
          return (
            <article
              id={`project-${project.id}`}
              key={project.id}
              className="reveal animate-fade-up"
              style={{
                position: "sticky",
                top: "120px",
                zIndex: idx + 1,
              }}
            >
              {/* Slanted Tab */}
              <div style={{ display: "flex", marginLeft: `${idx * 180}px` }}>
                <span
                  className="ca-mono"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.75rem",
                    width: "220px",
                    padding: "1rem",
                    fontSize: "1rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    backgroundColor: project.bg,
                    color: project.textColor,
                    clipPath:
                      idx === 0
                        ? "polygon(0 0, calc(100% - 40px) 0, 100% 100%, 0 100%)"
                        : "polygon(0 0, calc(100% - 40px) 0, 100% 100%, 40px 100%)",
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    style={{ height: "16px", width: "16px", flexShrink: 0 }}
                    aria-hidden="true"
                  >
                    <path d="M12 2c1 5 4 8 9 9-5 1-8 4-9 9-1-5-4-8-9-9 5-1 8-4 9-9Z"></path>
                  </svg>
                  Project {project.id}
                </span>
              </div>

              {/* Main Card Body */}
              <div
                className="project-main-card"
                style={{
                  backgroundColor: project.bg,
                  padding: "3.5rem",
                  display: "grid",
                  gridTemplateColumns: "1fr 1.1fr",
                  gap: "3rem",
                  minHeight: "65vh",
                  boxShadow: "0 -10px 30px rgba(0,0,0,0.1)",
                }}
              >
                {/* Left Column: Text & Meta */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {/* <span
                    className="ca-mono"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: project.textColor,
                    }}
                  >
                    <span
                      style={{
                        height: "12px",
                        width: "12px",
                        borderRadius: "50%",
                        backgroundColor: project.textColor,
                      }}
                    ></span>
                    {project.date}
                  </span> */}

                  <h3
                    style={{
                      fontSize: "clamp(3rem, 5vw, 4.5rem)",
                      fontWeight: 600,
                      letterSpacing: "-0.02em",
                      color: project.textColor,
                      marginTop: "1.5rem",
                      marginBottom: "1.25rem",
                      lineHeight: 1.1,
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "1.25rem",
                      lineHeight: 1.6,
                      color: project.textColor,
                      opacity: 0.9,
                      maxWidth: "500px",
                      margin: 0,
                    }}
                  >
                    {project.summary}
                  </p>

                  <a
                    href="#"
                    className="ca-mono"
                    style={{
                      marginTop: "2rem",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      color: project.textColor,
                      textDecoration: "none",
                      borderBottom: `2px solid ${project.textColor}`,
                      paddingBottom: "4px",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      alignSelf: "flex-start",
                    }}
                  >
                    VIEW PROJECT <ArrowUpRight size={18} />
                  </a>

                  {/* Badges Area */}
                  <div
                    style={{
                      marginTop: "auto",
                      paddingTop: "3rem",
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.75rem",
                    }}
                  >
                    {project.badges.map((badge) => (
                      <span
                        key={badge}
                        className="ca-mono"
                        style={{
                          backgroundColor: project.textColor,
                          color: project.bg,
                          padding: "0.6rem 1rem 0.5rem 1rem",
                          fontWeight: 700,
                          fontSize: "0.85rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                          clipPath:
                            "polygon(0 28%, 12% 0, 100% 0, 100% 100%, 0 100%)",
                        }}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column: Image with Tape */}
                <div style={{ alignSelf: "center", position: "relative" }}>
                  {/* Top Left Tape */}
                  <div
                    style={{
                      position: "absolute",
                      top: "-12px",
                      left: "-20px",
                      width: "100px",
                      height: "24px",
                      backgroundColor: "rgba(255,255,255,0.55)",
                      transform: "rotate(-9deg)",
                      zIndex: 10,
                      boxShadow: "0 1px 3px rgba(17,18,18,0.15)",
                    }}
                  ></div>

                  {/* Top Right Tape */}
                  <div
                    style={{
                      position: "absolute",
                      top: "-12px",
                      right: "-20px",
                      width: "100px",
                      height: "24px",
                      backgroundColor: "rgba(255,255,255,0.55)",
                      transform: "rotate(9deg)",
                      zIndex: 10,
                      boxShadow: "0 1px 3px rgba(17,18,18,0.15)",
                    }}
                  ></div>

                  <div
                    style={{
                      border: `4px solid ${project.borderColor}`,
                      overflow: "hidden",
                      backgroundColor: "var(--ca-surface)",
                      aspectRatio: "4/3",
                      width: "100%",
                    }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .project-main-card {
            grid-template-columns: 1fr !important;
            padding: 2rem !important;
            gap: 2.5rem !important;
          }
          .project-main-card > div:last-child {
            order: -1;
          }
        }
      `}</style>
    </section>
  );
}
