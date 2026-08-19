import React from "react";
import { Award, BookOpen, CheckCircle } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="container reveal">
      <div className="section-tag animate-fade-up">
        <Award size={16} />
        <span>Qualifications</span>
      </div>
      <h2 className="section-title animate-fade-up delay-1">Education & Credentials</h2>
      <p className="section-subtitle animate-fade-up delay-2">
        Academic foundation and specialized professional certifications.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
        
        {/* Education Card */}
        <div className="glass-card animate-slide-left delay-1" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <BookOpen size={20} /> Education
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ position: 'relative', paddingLeft: '1.5rem', borderLeft: '2px solid var(--border-color)' }}>
              <div style={{ position: 'absolute', left: '-6px', top: '5px', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent-primary)' }}></div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>2017 — 2020</div>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', margin: '0 0 0.25rem 0' }}>B.Tech in Computer Science</h4>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>SVS Group of Institutes, Hanamkonda</div>
              <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)' }}>GPA: 7.0 / 10.0</div>
            </div>

            <div style={{ position: 'relative', paddingLeft: '1.5rem', borderLeft: '2px solid var(--border-color)' }}>
              <div style={{ position: 'absolute', left: '-6px', top: '5px', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent-primary)' }}></div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>2014 — 2017</div>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', margin: '0 0 0.25rem 0' }}>Diploma in Computer Engineering</h4>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Government Polytechnic College, Warangal</div>
              <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)' }}>PERCENTAGE: 70.5%</div>
            </div>

            <div style={{ position: 'relative', paddingLeft: '1.5rem', borderLeft: '2px solid var(--border-color)' }}>
              <div style={{ position: 'absolute', left: '-6px', top: '5px', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent-primary)' }}></div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>2004 — 2014</div>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', margin: '0 0 0.25rem 0' }}>Secondary School Certificate (SSC)</h4>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Sujatha Vidyanikethan High School, Hasanparthy</div>
              <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)' }}>GPA: 9.5 / 10.0</div>
            </div>
          </div>
        </div>

        {/* Certifications Card Placeholder (If we want to mimic the exact layout of the reference) */}
        <div className="glass-card animate-slide-left delay-2" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <CheckCircle size={20} /> Professional Competencies
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              <CheckCircle size={16} color="var(--accent-cyan)" /> Azure Cloud Fundamentals
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              <CheckCircle size={16} color="var(--accent-cyan)" /> MongoDB Data Modeling
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              <CheckCircle size={16} color="var(--accent-cyan)" /> Docker & Containerization
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              <CheckCircle size={16} color="var(--accent-cyan)" /> REST API Security Standards
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}
