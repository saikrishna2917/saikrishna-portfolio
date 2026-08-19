import React from "react";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const timelineStyle = {
    position: 'relative',
    maxWidth: '850px',
    margin: '0 auto'
  };

  const timelineLineStyle = {
    content: '""',
    position: 'absolute',
    left: '20px',
    top: '0',
    bottom: '0',
    width: '2px',
    background: 'var(--border-color)'
  };

  const timelineItemStyle = {
    position: 'relative',
    paddingLeft: '60px',
    marginBottom: '3rem'
  };

  const timelineDotStyle = {
    position: 'absolute',
    left: '12px',
    top: '5px',
    width: '18px',
    height: '18px',
    borderRadius: '50%',
    background: 'var(--accent-primary)',
    border: '4px solid var(--bg-primary)',
    boxShadow: '0 0 10px rgba(99, 102, 241, 0.5)',
    zIndex: 1
  };

  return (
    <section id="experience" className="container reveal">
      <div className="section-tag animate-fade-up">
        <Briefcase size={16} />
        <span>Career Journey</span>
      </div>
      <h2 className="section-title animate-fade-up delay-1">Work Experience</h2>
      <p className="section-subtitle animate-fade-up delay-2">
        Proven track record of designing robust API architectures and optimizing cloud infrastructure.
      </p>

      <div style={timelineStyle}>
        <div style={timelineLineStyle}></div>
        
        <div style={timelineItemStyle} className="animate-slide-left delay-1">
          <div style={timelineDotStyle}></div>
          <div className="glass-card" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <div>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', margin: '0 0 0.25rem 0' }}>Software Engineer</h3>
                <div style={{ color: 'var(--accent-primary)', fontWeight: 600, fontSize: '0.95rem' }}>Archents IT Pvt Ltd</div>
              </div>
              <div style={{ padding: '0.25rem 0.75rem', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                2021 — PRESENT
              </div>
            </div>
            
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Leading backend development for a high-traffic, multi-tenant healthcare SaaS platform serving hospitals and clinics. Focused on cloud-native patterns and API optimization.
            </p>
            
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: 0, margin: 0 }}>
              <li style={{ position: 'relative', paddingLeft: '1.25rem', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>▹</span>
                <strong>Scalable RESTful APIs:</strong> Designed high-performance endpoints using Node.js and Express.js, reducing latency by 50% via Redis caching.
              </li>
              <li style={{ position: 'relative', paddingLeft: '1.25rem', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>▹</span>
                <strong>MongoDB Pipelines:</strong> Modeled high-performance schemas, created compound indexes, and built multi-stage aggregation pipelines for complex reporting.
              </li>
              <li style={{ position: 'relative', paddingLeft: '1.25rem', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>▹</span>
                <strong>Cloud & Asynchronous Workflows:</strong> Built event-driven workflows using Azure Service Bus for asynchronous processing, notification dispatch, and background jobs.
              </li>
              <li style={{ position: 'relative', paddingLeft: '1.25rem', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>▹</span>
                <strong>Identity & Auth:</strong> Implemented stateless JWT/OAuth2 authentication, strict RBAC, and API versioning.
              </li>
              <li style={{ position: 'relative', paddingLeft: '1.25rem', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>▹</span>
                <strong>Environment Parity:</strong> Standardized deployments by containerizing microservices with Docker, achieving 99.9% environment parity across stages.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
