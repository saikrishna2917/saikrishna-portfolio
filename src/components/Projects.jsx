import React, { useRef } from "react";
import { Layers, ChevronLeft, ChevronRight } from "lucide-react";

export default function Projects() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === "left" ? -382 : 382;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const projects = [
    {
      title: "Ciana Health (Patient)",
      badge: "Backend Ecosystem",
      summary:
        "Comprehensive health and wellness app leveraging genetic insights for personalized care. Features seamless management of health journeys, appointment scheduling, medical records access, and AI tools for continuous health optimization.",
      tags: [
        "Node.js",
        "Express JS",
        "MongoDB",
        "Azure Blob",
        "JWT/RBAC",
        "PhonePe API",
        "Microservices",
      ],
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "CianaCare (Doctors)",
      badge: "API Service",
      summary:
        "Robust platform for healthcare professionals to streamline patient management. Features AI-driven clinical notes, teleconsultation, calendar management, and drug interaction checks, integrated with labs and real-time analytics.",
      tags: ["Node.js", "Express.js", "Redis Caching", "Docker", "Socket.io"],
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Ciana Labs",
      badge: "Integration Layer",
      summary:
        "Cutting-edge web application for laboratories to enhance operations and patient care. Enables doctors to create lab networks and order tests directly. Features comprehensive order and sample management, instrument integration, customizable panels, and detailed analytics.",
      tags: ["API Integration", "Data Aggregation", "MongoDB", "Jenkins"],
      image:
        "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "CianaArex",
      badge: "Microservice",
      summary:
        "Innovative web application for pharmacies to optimize operations. Features comprehensive stock management, point of sale, digital payments, and 24x7 ordering. Connects pharmacies with doctors for live stock visibility and real-time prescription generation.",
      tags: ["Express.js", "Elastic Search", "Docker", "Azure Cloud"],
      image:
        "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Dexa",
      badge: "AI & Analytics",
      summary:
        "High-performance AI and analytics layer. Developed scalable data processing pipelines and integrations for advanced medical insights and reporting.",
      tags: ["Python", "FastAPI", "MongoDB", "Data Processing"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section id="projects" className="container reveal">
      <div className="section-tag animate-fade-up">
        <Layers size={16} />
        <span>Featured Portfolio</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "1rem",
          marginBottom: "3rem",
        }}
      >
        <div>
          <h2
            className="section-title animate-fade-up delay-1"
            style={{ marginBottom: "0.5rem" }}
          >
            Projects & Architecture
          </h2>
          <p
            className="section-subtitle animate-fade-up delay-2"
            style={{ marginBottom: 0 }}
          >
            Key production backend systems and cloud-native integrations built
            for scale and security.
          </p>
        </div>
        <div
          style={{ display: "flex", gap: "1rem", paddingBottom: "0.5rem" }}
          className="animate-fade-up delay-2"
        >
          <button
            onClick={() => scroll("left")}
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: "var(--bg-tertiary)",
              border: "1px solid var(--border-color)",
              color: "var(--text-primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all var(--transition-fast)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = "var(--accent-primary)";
              e.currentTarget.style.color = "var(--accent-primary)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = "var(--border-color)";
              e.currentTarget.style.color = "var(--text-primary)";
              e.currentTarget.style.transform = "none";
            }}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll("right")}
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: "var(--bg-tertiary)",
              border: "1px solid var(--border-color)",
              color: "var(--text-primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all var(--transition-fast)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = "var(--accent-primary)";
              e.currentTarget.style.color = "var(--accent-primary)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = "var(--border-color)";
              e.currentTarget.style.color = "var(--text-primary)";
              e.currentTarget.style.transform = "none";
            }}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="projects-slider"
        style={{
          display: "flex",
          gap: "2rem",
          overflowX: "auto",
          paddingBottom: "2rem",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none" /* Firefox */,
        }}
      >
        <style>
          {`
            .projects-slider::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="glass-card"
            style={{
              flex: "0 0 350px",
              scrollSnapAlign: "start",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "200px",
                overflow: "hidden",
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform var(--transition-slow)",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.08)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
              <div
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  padding: "0.25rem 0.75rem",
                  background: "rgba(10, 13, 20, 0.75)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "var(--radius-full)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "#f3f4f6",
                }}
              >
                {project.badge}
              </div>
            </div>

            <div
              style={{
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
              }}
            >
              <h3
                style={{
                  fontSize: "1.25rem",
                  marginBottom: "0.5rem",
                  transition: "color var(--transition-fast)",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = "var(--accent-primary)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = "var(--text-primary)")
                }
              >
                {project.title}
              </h3>

              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.9rem",
                  marginBottom: "1.25rem",
                  lineHeight: 1.6,
                  flexGrow: 1,
                }}
              >
                {project.summary}
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  marginTop: "auto",
                }}
              >
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid var(--border-color)",
                      color: "var(--text-secondary)",
                      fontSize: "0.75rem",
                      padding: "0.2rem 0.6rem",
                      borderRadius: "var(--radius-sm)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
