import React from "react";
import { Award, BookOpen, CheckCircle } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="container reveal" style={{ paddingTop: '6rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <div className="ca-tape" style={{ transform: 'rotate(2deg)', marginBottom: '1rem', backgroundColor: 'var(--ca-purple)', color: '#fff' }}>
          <Award size={16} style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: '0.5rem' }} />
          Qualifications
        </div>
        <h2 className="section-title">Education & Credentials</h2>
        <p className="ca-hand" style={{ fontSize: '2rem', maxWidth: '600px', margin: '0 auto', color: 'var(--ca-ink)', transform: 'rotate(-1deg)' }}>
          Academic foundation and specialized professional certifications.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
        
        {/* Education Card */}
        <div className="reveal-left delay-1 ca-doodle-box" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '2rem', backgroundColor: 'var(--ca-yellow-soft)' }}>
          <h3 className="ca-display" style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--ca-ink)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '40px', height: '40px', border: '3px solid var(--ca-ink)', backgroundColor: 'var(--ca-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-5deg)' }}>
              <BookOpen size={20} color="#fff" />
            </div>
            Education
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '4px solid var(--ca-ink)' }}>
              <div style={{ position: 'absolute', left: '-12px', top: '5px', width: '20px', height: '20px', borderRadius: '50%', border: '4px solid var(--ca-ink)', background: 'var(--ca-yellow)' }}></div>
              <div className="ca-tape" style={{ padding: '0.2rem 0.6rem', fontSize: '0.85rem', fontWeight: 700, color: '#fff', backgroundColor: 'var(--ca-magenta)', marginBottom: '0.5rem', display: 'inline-block', transform: 'rotate(-2deg)' }}>2017 — 2020</div>
              <h4 className="ca-display" style={{ fontSize: '1.5rem', color: 'var(--ca-ink)', margin: '0 0 0.5rem 0' }}>B.Tech in Computer Science</h4>
              <div className="ca-serif" style={{ color: 'var(--ca-ink)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>SVS Group of Institutes, Hanamkonda</div>
              <div className="ca-mono" style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--ca-ink)', border: '2px solid var(--ca-ink)', display: 'inline-block', padding: '0.2rem 0.5rem', backgroundColor: '#fff' }}>GPA: 7.0 / 10.0</div>
            </div>

            <div style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '4px solid var(--ca-ink)' }}>
              <div style={{ position: 'absolute', left: '-12px', top: '5px', width: '20px', height: '20px', borderRadius: '50%', border: '4px solid var(--ca-ink)', background: 'var(--ca-yellow)' }}></div>
              <div className="ca-tape" style={{ padding: '0.2rem 0.6rem', fontSize: '0.85rem', fontWeight: 700, color: '#fff', backgroundColor: 'var(--ca-blue)', marginBottom: '0.5rem', display: 'inline-block', transform: 'rotate(1deg)' }}>2014 — 2017</div>
              <h4 className="ca-display" style={{ fontSize: '1.5rem', color: 'var(--ca-ink)', margin: '0 0 0.5rem 0' }}>Diploma in Computer Engineering</h4>
              <div className="ca-serif" style={{ color: 'var(--ca-ink)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Government Polytechnic College, Warangal</div>
              <div className="ca-mono" style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--ca-ink)', border: '2px solid var(--ca-ink)', display: 'inline-block', padding: '0.2rem 0.5rem', backgroundColor: '#fff' }}>PERCENTAGE: 70.5%</div>
            </div>

            <div style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '4px solid var(--ca-ink)' }}>
              <div style={{ position: 'absolute', left: '-12px', top: '5px', width: '20px', height: '20px', borderRadius: '50%', border: '4px solid var(--ca-ink)', background: 'var(--ca-yellow)' }}></div>
              <div className="ca-tape" style={{ padding: '0.2rem 0.6rem', fontSize: '0.85rem', fontWeight: 700, color: '#fff', backgroundColor: 'var(--ca-green)', marginBottom: '0.5rem', display: 'inline-block', transform: 'rotate(-1deg)' }}>2004 — 2014</div>
              <h4 className="ca-display" style={{ fontSize: '1.5rem', color: 'var(--ca-ink)', margin: '0 0 0.5rem 0' }}>Secondary School Certificate (SSC)</h4>
              <div className="ca-serif" style={{ color: 'var(--ca-ink)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Sujatha Vidyanikethan High School, Hasanparthy</div>
              <div className="ca-mono" style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--ca-ink)', border: '2px solid var(--ca-ink)', display: 'inline-block', padding: '0.2rem 0.5rem', backgroundColor: '#fff' }}>GPA: 9.5 / 10.0</div>
            </div>
          </div>
        </div>

        {/* Certifications Card */}
        <div className="reveal-left delay-2 ca-doodle-box" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', backgroundColor: '#fff', transform: 'rotate(1deg)' }}>
          <h3 className="ca-display" style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--ca-ink)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '40px', height: '40px', border: '3px solid var(--ca-ink)', backgroundColor: 'var(--ca-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(5deg)' }}>
              <CheckCircle size={20} color="var(--ca-ink)" />
            </div>
            Professional Competencies
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <li className="ca-serif" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--ca-ink)', fontSize: '1.25rem' }}>
              <CheckCircle size={24} color="var(--ca-cyan)" style={{ backgroundColor: 'var(--ca-ink)', borderRadius: '50%' }} /> 
              Azure Cloud Fundamentals
            </li>
            <li className="ca-serif" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--ca-ink)', fontSize: '1.25rem' }}>
              <CheckCircle size={24} color="var(--ca-cyan)" style={{ backgroundColor: 'var(--ca-ink)', borderRadius: '50%' }} /> 
              MongoDB Data Modeling
            </li>
            <li className="ca-serif" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--ca-ink)', fontSize: '1.25rem' }}>
              <CheckCircle size={24} color="var(--ca-cyan)" style={{ backgroundColor: 'var(--ca-ink)', borderRadius: '50%' }} /> 
              Docker & Containerization
            </li>
            <li className="ca-serif" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--ca-ink)', fontSize: '1.25rem' }}>
              <CheckCircle size={24} color="var(--ca-cyan)" style={{ backgroundColor: 'var(--ca-ink)', borderRadius: '50%' }} /> 
              REST API Security Standards
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}
