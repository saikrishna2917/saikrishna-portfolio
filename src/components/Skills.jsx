import React from "react";
import { Terminal } from "lucide-react";

export default function Skills() {
  const skillsData = [
    {
      category: "Languages & Runtimes",
      items: [
        { name: "Node.js / Express", level: "90%" },
        { name: "JavaScript ES6+", level: "95%" },
        { name: "HTML5 / CSS3", level: "85%" }
      ]
    },
    {
      category: "Cloud & DevOps",
      items: [
        { name: "Azure Infrastructure", level: "85%" },
        { name: "Docker", level: "90%" },
        { name: "CI / CD Pipelines", level: "80%" }
      ]
    },
    {
      category: "Databases & Caching",
      items: [
        { name: "MongoDB / NoSQL", level: "90%" },
        { name: "Redis / Memory Cache", level: "85%" },
        { name: "Query Optimization", level: "90%" }
      ]
    },
    {
      category: "Architecture & APIs",
      items: [
        { name: "Microservices Architecture", level: "95%" },
        { name: "RESTful API Design", level: "90%" },
        { name: "System Observability", level: "85%" }
      ]
    }
  ];

  return (
    <section id="skills" className="container reveal">
      <div className="section-tag animate-fade-up">
        <Terminal size={16} />
        <span>Core Competencies</span>
      </div>
      <h2 className="section-title animate-fade-up delay-1">Skills Breakdown</h2>
      <p className="section-subtitle animate-fade-up delay-2">
        Systematic breakdown of technical proficiency across the backend stack.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {skillsData.map((group, idx) => (
          <div key={idx} className={`glass-card animate-fade-up delay-${(idx % 4) + 1}`} style={{ padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(99, 102, 241, 0.1)', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Terminal size={16} />
              </div>
              {group.category}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {group.items.map((skill, sIdx) => (
                <div key={sIdx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{skill.name}</span>
                    <span style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.85rem' }}>{skill.level}</span>
                  </div>
                  <div style={{ height: '8px', width: '100%', backgroundColor: 'var(--bg-tertiary)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: skill.level, background: 'var(--gradient-accent)', borderRadius: 'var(--radius-full)' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
