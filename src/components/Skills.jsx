import React from "react";
import { Terminal } from "lucide-react";

export default function Skills() {
  const skillsData = [
    {
      category: "Languages & Runtimes",
      bg: "var(--ca-yellow)",
      items: [
        { name: "Node.js / Express", level: "90%" },
        { name: "JavaScript ES6+", level: "95%" },
        { name: "HTML5 / CSS3", level: "85%" }
      ]
    },
    {
      category: "Cloud & DevOps",
      bg: "var(--ca-magenta)",
      items: [
        { name: "Azure Infrastructure", level: "85%" },
        { name: "Docker", level: "90%" },
        { name: "CI / CD Pipelines", level: "80%" }
      ]
    },
    {
      category: "Databases & Caching",
      bg: "var(--ca-cyan)",
      items: [
        { name: "MongoDB / NoSQL", level: "90%" },
        { name: "Redis / Memory Cache", level: "85%" },
        { name: "Query Optimization", level: "90%" }
      ]
    },
    {
      category: "Architecture & APIs",
      bg: "var(--ca-green)",
      items: [
        { name: "Microservices Architecture", level: "95%" },
        { name: "RESTful API Design", level: "90%" },
        { name: "System Observability", level: "85%" }
      ]
    }
  ];

  return (
    <section id="skills" className="container reveal" style={{ paddingTop: '4rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <div className="ca-tape" style={{ transform: 'rotate(2deg)', marginBottom: '1rem', backgroundColor: 'var(--ca-purple)', color: '#fff' }}>
          <Terminal size={16} style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: '0.5rem' }} />
          Core Competencies
        </div>
        <h2 className="section-title">Skills Breakdown</h2>
        <p className="ca-hand" style={{ fontSize: '2rem', maxWidth: '600px', margin: '0 auto', color: 'var(--ca-ink)', transform: 'rotate(-1deg)' }}>
          Systematic breakdown of technical proficiency across the backend stack.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
        {skillsData.map((group, idx) => {
           const rotation = idx % 2 === 0 ? '-1deg' : '1.5deg';
           return (
          <div key={idx} className={`reveal delay-${(idx % 4) + 1}`} style={{ 
            padding: '2.5rem', 
            backgroundColor: '#fff', 
            border: '3px solid var(--ca-ink)', 
            boxShadow: '6px 6px 0 var(--ca-ink)', 
            transform: `rotate(${rotation})` 
          }}>
            <h3 className="ca-display" style={{ fontSize: '1.75rem', color: 'var(--ca-ink)', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '40px', height: '40px', border: '2px solid var(--ca-ink)', background: group.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Terminal size={20} color={group.bg === 'var(--ca-magenta)' ? '#fff' : 'var(--ca-ink)'} />
              </div>
              {group.category}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {group.items.map((skill, sIdx) => (
                <div key={sIdx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span className="ca-mono" style={{ fontWeight: 700, color: 'var(--ca-ink)', fontSize: '0.9rem', textTransform: 'uppercase' }}>{skill.name}</span>
                    <span className="ca-hand" style={{ fontWeight: 700, color: 'var(--ca-ink)', fontSize: '1.4rem' }}>{skill.level}</span>
                  </div>
                  <div style={{ height: '12px', width: '100%', backgroundColor: 'var(--ca-chrome)', border: '2px solid var(--ca-ink)', borderRadius: '6px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: skill.level, background: group.bg, borderRight: '2px solid var(--ca-ink)' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )})}
      </div>
    </section>
  );
}
