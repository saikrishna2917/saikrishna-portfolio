import React from "react";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const timelineStyle = {
    position: 'relative',
    maxWidth: '850px',
    margin: '0 auto',
    paddingTop: '2rem'
  };

  const timelineLineStyle = {
    content: '""',
    position: 'absolute',
    left: '24px',
    top: '0',
    bottom: '0',
    width: '4px',
    background: 'var(--ca-ink)'
  };

  const timelineItemStyle = {
    position: 'relative',
    paddingLeft: '70px',
    marginBottom: '4rem'
  };

  const timelineDotStyle = {
    position: 'absolute',
    left: '12px',
    top: '10px',
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    background: 'var(--ca-yellow)',
    border: '4px solid var(--ca-ink)',
    zIndex: 1
  };

  return (
    <section id="experience" className="container reveal" style={{ paddingTop: '6rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <div className="ca-tape" style={{ transform: 'rotate(-2deg)', marginBottom: '1rem', backgroundColor: 'var(--ca-cyan)', color: 'var(--ca-ink)' }}>
          <Briefcase size={16} style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: '0.5rem' }} />
          Career Journey
        </div>
        <h2 className="section-title">Work Experience</h2>
        <p className="ca-hand" style={{ fontSize: '2rem', maxWidth: '600px', margin: '0 auto', color: 'var(--ca-ink)', transform: 'rotate(1deg)' }}>
          Proven track record of designing robust API architectures and optimizing cloud infrastructure.
        </p>
      </div>

      <div style={timelineStyle}>
        <div style={timelineLineStyle}></div>
        
        <div style={timelineItemStyle} className="reveal-left delay-1">
          <div style={timelineDotStyle}></div>
          <div style={{ padding: '2rem', backgroundColor: '#fff', border: '3px solid var(--ca-ink)', boxShadow: '6px 6px 0 var(--ca-ink)', position: 'relative', transform: 'rotate(-0.5deg)' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <h3 className="ca-display" style={{ fontSize: '2rem', color: 'var(--ca-ink)', margin: '0 0 0.25rem 0', lineHeight: 1 }}>Software Engineer</h3>
                <div className="ca-mono" style={{ color: 'var(--ca-magenta)', fontWeight: 700, fontSize: '1rem', textTransform: 'uppercase' }}>Archents IT Pvt Ltd</div>
              </div>
              <div className="ca-tape" style={{ padding: '0.4rem 1rem', background: 'var(--ca-yellow-soft)', color: 'var(--ca-ink)', transform: 'rotate(2deg)' }}>
                2021 — PRESENT
              </div>
            </div>
            
            <p className="ca-serif" style={{ color: 'var(--ca-ink)', marginBottom: '1.5rem', fontSize: '1.25rem', lineHeight: 1.4 }}>
              Leading backend development for a high-traffic, multi-tenant healthcare SaaS platform serving hospitals and clinics. Focused on cloud-native patterns and API optimization.
            </p>
            
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', padding: 0, margin: 0 }}>
              <li style={{ position: 'relative', paddingLeft: '1.5rem', color: 'var(--ca-ink)', fontSize: '1rem', lineHeight: 1.5 }}>
                <span style={{ position: 'absolute', left: 0, top: '2px', color: 'var(--ca-blue)', fontWeight: 'bold' }}>→</span>
                <strong>Scalable RESTful APIs:</strong> Designed high-performance endpoints using Node.js and Express.js, reducing latency by 50% via Redis caching.
              </li>
              <li style={{ position: 'relative', paddingLeft: '1.5rem', color: 'var(--ca-ink)', fontSize: '1rem', lineHeight: 1.5 }}>
                <span style={{ position: 'absolute', left: 0, top: '2px', color: 'var(--ca-blue)', fontWeight: 'bold' }}>→</span>
                <strong>MongoDB Pipelines:</strong> Modeled high-performance schemas, created compound indexes, and built multi-stage aggregation pipelines for complex reporting.
              </li>
              <li style={{ position: 'relative', paddingLeft: '1.5rem', color: 'var(--ca-ink)', fontSize: '1rem', lineHeight: 1.5 }}>
                <span style={{ position: 'absolute', left: 0, top: '2px', color: 'var(--ca-blue)', fontWeight: 'bold' }}>→</span>
                <strong>Cloud & Asynchronous Workflows:</strong> Built event-driven workflows using Azure Service Bus for asynchronous processing, notification dispatch, and background jobs.
              </li>
              <li style={{ position: 'relative', paddingLeft: '1.5rem', color: 'var(--ca-ink)', fontSize: '1rem', lineHeight: 1.5 }}>
                <span style={{ position: 'absolute', left: 0, top: '2px', color: 'var(--ca-blue)', fontWeight: 'bold' }}>→</span>
                <strong>Identity & Auth:</strong> Implemented stateless JWT/OAuth2 authentication, strict RBAC, and API versioning.
              </li>
              <li style={{ position: 'relative', paddingLeft: '1.5rem', color: 'var(--ca-ink)', fontSize: '1rem', lineHeight: 1.5 }}>
                <span style={{ position: 'absolute', left: 0, top: '2px', color: 'var(--ca-blue)', fontWeight: 'bold' }}>→</span>
                <strong>Environment Parity:</strong> Standardized deployments by containerizing microservices with Docker, achieving 99.9% environment parity across stages.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
