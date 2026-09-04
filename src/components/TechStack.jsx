import React from "react";
import { Code, Zap, Server, ShieldCheck, TerminalSquare } from "lucide-react";

export default function TechStack() {
  const cardStyle = {
    padding: '2.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    backgroundColor: '#fff',
    border: '3px solid var(--ca-ink)',
    boxShadow: '6px 6px 0 rgba(17, 18, 18, 1)',
    position: 'relative'
  };

  const iconWrapStyle = {
    width: '48px',
    height: '48px',
    border: '3px solid var(--ca-ink)',
    backgroundColor: 'var(--ca-yellow)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--ca-ink)',
    marginBottom: '0.5rem',
    boxShadow: '2px 2px 0 var(--ca-ink)',
    transform: 'rotate(-4deg)'
  };

  const titleStyle = {
    fontFamily: 'var(--font-display)',
    fontSize: '2rem',
    color: 'var(--ca-ink)',
    margin: 0,
    textTransform: 'uppercase',
    letterSpacing: '0.02em',
    lineHeight: 1
  };

  const descStyle = {
    fontFamily: 'var(--font-body)',
    color: 'var(--ca-ink)',
    lineHeight: 1.6,
    margin: 0,
    fontSize: '1rem',
    fontWeight: 500
  };

  return (
    <section id="features" className="container reveal" style={{ paddingTop: '8rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <div className="ca-tape" style={{ transform: 'rotate(-2deg)', marginBottom: '1rem' }}>
          <Code size={16} style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: '0.5rem' }} />
          Technical Architecture
        </div>
        <h2 className="section-title">Systems & Optimization</h2>
        <p className="ca-hand" style={{ fontSize: '2rem', maxWidth: '600px', margin: '0 auto', color: 'var(--ca-ink)', transform: 'rotate(1deg)' }}>
          Building high-performance, fault-tolerant backends for enterprise and healthcare sectors.
        </p>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
        
        {/* Core Tech Stack */}
        <div className="reveal delay-1" style={{ ...cardStyle, gridColumn: '1 / -1', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', gap: '3rem', backgroundColor: 'var(--ca-yellow-soft)' }}>
          <div style={{ flex: '1 1 300px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ ...iconWrapStyle, backgroundColor: 'var(--ca-blue)', transform: 'rotate(5deg)' }}><Server size={24} color="#fff" /></div>
              <h3 style={titleStyle}>Core Tech Stack</h3>
            </div>
            <p style={descStyle}>
              Industrial-grade technologies powering cloud-native healthcare microservices, reliable batch processing, and secure integrations.
            </p>
          </div>
          
          <div style={{ flex: '2 1 400px', display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {[
              { name: "Node.js", bg: "var(--ca-green)" },
              { name: "Express.js", bg: "var(--ca-chrome)" },
              { name: "MongoDB", bg: "var(--ca-mint)" },
              { name: "Redis", bg: "var(--ca-magenta)" },
              { name: "Docker", bg: "var(--ca-blue)" },
              { name: "Jenkins", bg: "var(--ca-orange)" },
              { name: "Elastic Search", bg: "var(--ca-cyan)" },
              { name: "JavaScript", bg: "var(--ca-yellow)" },
              { name: "Azure Cloud", bg: "var(--ca-blue)" },
              { name: "React.js", bg: "var(--ca-cyan)" }
            ].map((tech, i) => (
              <span 
                key={tech.name} 
                className={`reveal delay-${i % 5 + 1} ca-mono`} 
                style={{ 
                  padding: '0.5rem 1.25rem', 
                  backgroundColor: tech.bg, 
                  border: '2px solid var(--ca-ink)',
                  fontSize: '0.9rem', 
                  fontWeight: 700, 
                  textTransform: 'uppercase',
                  color: tech.bg === 'var(--ca-magenta)' || tech.bg === 'var(--ca-blue)' ? '#fff' : 'var(--ca-ink)',
                  boxShadow: '2px 2px 0 var(--ca-ink)',
                  transform: `rotate(${i % 2 === 0 ? '-2deg' : '2deg'})`,
                  cursor: 'default',
                  display: 'inline-block'
                }}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* API Optimization */}
        <div className="reveal delay-2" style={{ ...cardStyle, transform: 'rotate(-1deg)' }}>
          <div style={{ ...iconWrapStyle, backgroundColor: 'var(--ca-yellow)' }}><Zap size={24} /></div>
          <h3 style={titleStyle}>API Optimization</h3>
          <p style={descStyle}>
            Improved average API response time using Redis caching, query optimization, and compound database indexing.
          </p>
          <div style={{ marginTop: 'auto', paddingTop: '1.5rem', display: 'flex', alignItems: 'flex-end', gap: '1rem' }}>
            <div className="ca-display" style={{ fontSize: '4rem', color: 'var(--ca-magenta)', lineHeight: 0.8 }}>~50%</div>
            <div className="ca-hand" style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--ca-ink)', marginBottom: '-0.2rem' }}>Faster Responses</div>
          </div>
        </div>

        {/* Environment Parity */}
        <div className="reveal delay-3" style={{ ...cardStyle, transform: 'rotate(1deg)' }}>
          <div style={{ ...iconWrapStyle, backgroundColor: 'var(--ca-green)' }}><ShieldCheck size={24} /></div>
          <h3 style={titleStyle}>Environment Parity</h3>
          <p style={descStyle}>
            Standardized deployment workflows by containerizing microservices with Docker, eliminating environment-related issues.
          </p>
          <div style={{ marginTop: 'auto', paddingTop: '1.5rem', display: 'flex', alignItems: 'flex-end', gap: '1rem' }}>
            <div className="ca-display" style={{ fontSize: '4rem', color: 'var(--ca-blue)', lineHeight: 0.8 }}>99.9%</div>
            <div className="ca-hand" style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--ca-ink)', marginBottom: '-0.2rem' }}>Parity Across Stages</div>
          </div>
        </div>

        {/* Security */}
        <div className="reveal delay-4" style={{ ...cardStyle, transform: 'rotate(-1.5deg)' }}>
          <div style={{ ...iconWrapStyle, backgroundColor: 'var(--ca-cyan)' }}><TerminalSquare size={24} /></div>
          <h3 style={titleStyle}>Security & Boundaries</h3>
          <p style={descStyle}>
            Implemented stateless JWT/OAuth2 authentication, strict role-based access control (RBAC), and hard data boundaries to secure patient and doctor medical records.
          </p>
          <div style={{ position: 'absolute', right: '-15px', bottom: '-20px', fontSize: '3rem', transform: 'rotate(-15deg)' }}>
            🔒
          </div>
        </div>
      </div>
    </section>
  );
}
