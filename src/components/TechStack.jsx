import React from "react";
import { Code, Zap, Server, ShieldCheck, TerminalSquare, Award } from "lucide-react";

export default function TechStack() {
  const cardStyle = {
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  };

  const iconWrapStyle = {
    width: '42px',
    height: '42px',
    borderRadius: 'var(--radius-md)',
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--accent-primary)',
    marginBottom: '1rem'
  };

  const titleStyle = {
    fontSize: '1.25rem',
    fontWeight: 700,
    color: 'var(--text-primary)',
    margin: 0
  };

  const descStyle = {
    color: 'var(--text-secondary)',
    lineHeight: 1.6,
    margin: 0,
    fontSize: '0.95rem'
  };

  return (
    <section id="features" className="container reveal">
      <div className="section-tag animate-fade-up">
        <Code size={16} />
        <span>Technical Architecture</span>
      </div>
      <h2 className="section-title animate-fade-up delay-1">Systems & Optimization</h2>
      <p className="section-subtitle animate-fade-up delay-2">
        Building high-performance, fault-tolerant backends for enterprise and healthcare sectors.
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        
        {/* Core Tech Stack */}
        <div className="glass-card animate-fade-up delay-1" style={{ ...cardStyle, gridColumn: '1 / -1', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', gap: '3rem' }}>
          <div style={{ flex: '1 1 300px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ ...iconWrapStyle, marginBottom: 0 }}><Server size={24} /></div>
              <h3 style={{ ...titleStyle, fontSize: '1.5rem' }}>Core Tech Stack</h3>
            </div>
            <p style={descStyle}>
              Industrial-grade technologies powering cloud-native healthcare microservices, reliable batch processing, and secure integrations.
            </p>
          </div>
          
          <div style={{ flex: '2 1 400px', display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {[
              { name: "Node.js", bg: "rgba(34, 197, 94, 0.15)", color: "#22c55e", hoverBg: "rgba(34, 197, 94, 0.25)" },
              { name: "Express.js", bg: "rgba(156, 163, 175, 0.15)", color: "var(--text-primary)", hoverBg: "rgba(156, 163, 175, 0.25)" },
              { name: "MongoDB", bg: "rgba(16, 185, 129, 0.15)", color: "#10b981", hoverBg: "rgba(16, 185, 129, 0.25)" },
              { name: "Redis", bg: "rgba(239, 68, 68, 0.15)", color: "#ef4444", hoverBg: "rgba(239, 68, 68, 0.25)" },
              { name: "Docker", bg: "rgba(59, 130, 246, 0.15)", color: "#3b82f6", hoverBg: "rgba(59, 130, 246, 0.25)" },
              { name: "Jenkins", bg: "rgba(220, 38, 38, 0.15)", color: "#ef4444", hoverBg: "rgba(220, 38, 38, 0.25)" },
              { name: "Elastic Search", bg: "rgba(20, 184, 166, 0.15)", color: "#14b8a6", hoverBg: "rgba(20, 184, 166, 0.25)" },
              { name: "JavaScript", bg: "rgba(234, 179, 8, 0.15)", color: "#eab308", hoverBg: "rgba(234, 179, 8, 0.25)" },
              { name: "Azure Cloud", bg: "rgba(14, 165, 233, 0.15)", color: "#0ea5e9", hoverBg: "rgba(14, 165, 233, 0.25)" },
              { name: "React.js", bg: "rgba(56, 189, 248, 0.15)", color: "#38bdf8", hoverBg: "rgba(56, 189, 248, 0.25)" }
            ].map((tech, i) => (
              <span 
                key={tech.name} 
                className={`animate-fade-up delay-${i % 5 + 1}`} 
                style={{ 
                  padding: '0.5rem 1.25rem', 
                  backgroundColor: tech.bg, 
                  border: '1px solid',
                  borderColor: tech.color,
                  borderRadius: 'var(--radius-full)', 
                  fontSize: '0.9rem', 
                  fontWeight: 600, 
                  color: tech.color,
                  transition: 'all var(--transition-fast)',
                  cursor: 'default'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = tech.hoverBg;
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = `0 4px 12px ${tech.bg}`;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = tech.bg;
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* API Optimization */}
        <div className="glass-card animate-fade-up delay-2" style={cardStyle}>
          <div style={iconWrapStyle}><Zap size={20} /></div>
          <h3 style={titleStyle}>API Optimization</h3>
          <p style={descStyle}>
            Improved average API response time using Redis caching, query optimization, and compound database indexing.
          </p>
          <div style={{ marginTop: 'auto', paddingTop: '1.5rem' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--text-primary)', lineHeight: 1 }} className="gradient-text">~50%</div>
            <div style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.05em', color: 'var(--text-secondary)', marginTop: '0.5rem', textTransform: 'uppercase' }}>Faster Response Times</div>
          </div>
        </div>

        {/* Environment Parity */}
        <div className="glass-card animate-fade-up delay-3" style={cardStyle}>
          <div style={{ ...iconWrapStyle, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent-emerald)' }}><ShieldCheck size={20} /></div>
          <h3 style={titleStyle}>Environment Parity</h3>
          <p style={descStyle}>
            Standardized deployment workflows by containerizing microservices with Docker, eliminating environment-related issues.
          </p>
          <div style={{ marginTop: 'auto', paddingTop: '1.5rem' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--accent-emerald)', lineHeight: 1 }}>99.9%</div>
            <div style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.05em', color: 'var(--text-secondary)', marginTop: '0.5rem', textTransform: 'uppercase' }}>Parity Across Stages</div>
          </div>
        </div>

        {/* Security */}
        <div className="glass-card animate-fade-up delay-4" style={cardStyle}>
          <div style={{ ...iconWrapStyle, backgroundColor: 'rgba(6, 182, 212, 0.1)', color: 'var(--accent-cyan)' }}><TerminalSquare size={20} /></div>
          <h3 style={titleStyle}>Security & Boundaries</h3>
          <p style={descStyle}>
            Implemented stateless JWT/OAuth2 authentication, strict role-based access control (RBAC), and hard data boundaries to secure patient and doctor medical records.
          </p>
        </div>
      </div>
    </section>
  );
}
