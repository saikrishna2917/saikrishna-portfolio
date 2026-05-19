import React, { useState, useEffect } from 'react';
import { 
  Download, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  TerminalSquare, 
  Award,
  Box,
  Database,
  Server,
  Cloud,
  LayoutTemplate,
  Cpu,
  FileJson,
  Workflow,
  Target,
  Network,
  Lock,
  Trophy
} from 'lucide-react';

const allLogs = [
  { time: '10:01', msg: 'Connection established to Redis:6379', type: 'info' },
  { time: '10:01', msg: 'Initializing Docker container pool...', type: 'info' },
  { time: '10:02', msg: 'Latency threshold detected in shard-04', type: 'warn' },
  { time: '10:02', msg: 'Auto-scaling event triggered (+2 nodes)', type: 'info' },
  { time: '10:03', msg: 'Microservice cluster operational', type: 'success' },
];

function App() {
  const [uptime, setUptime] = useState('99.99%');
  const [throughput, setThroughput] = useState('12.5k');
  
  // Terminal logs state
  const [terminalLogs, setTerminalLogs] = useState([]);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < allLogs.length) {
        setTerminalLogs(prev => [...prev, allLogs[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 800);
    return () => clearInterval(interval);
  }, []);

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'projects', 'skills', 'education'];
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            current = section;
          }
        }
      }
      
      if (current) {
        setActiveSection(current);
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);

    // Scroll reveal observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // Only animate once
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const sectionNames = {
      home: 'Home',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      education: 'Education'
    };
    const currentName = sectionNames[activeSection] || 'Home';
    document.title = `${currentName} | Sai Krishna Mateti`;
  }, [activeSection]);

  return (
    <div className="container" style={{ position: 'relative' }}>
      {/* Background Glowing Dots */}
      <div className="bg-dot" style={{ top: '15%', left: '5%', animation: 'floatDot 8s ease-in-out infinite' }}></div>
      <div className="bg-dot" style={{ top: '45%', right: '10%', animation: 'floatDot 12s ease-in-out infinite 2s' }}></div>
      <div className="bg-dot" style={{ top: '75%', left: '15%', animation: 'floatDot 9s ease-in-out infinite 1s' }}></div>
      <div className="bg-dot" style={{ top: '85%', right: '25%', animation: 'floatDot 10s ease-in-out infinite 4s' }}></div>

      {/* Header */}
      <header className="header flex justify-between items-center">
        <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '28px',
            height: '28px',
            background: 'linear-gradient(135deg, rgba(0, 229, 255, 0.2), rgba(0, 229, 255, 0.05))',
            border: '1px solid var(--accent-cyan)',
            borderRadius: '6px',
            color: 'var(--accent-cyan)',
            fontWeight: '700',
            fontSize: '12px',
            fontFamily: 'var(--font-mono)',
            boxShadow: '0 0 10px rgba(0, 229, 255, 0.2)',
            letterSpacing: '0.5px'
          }}>
            SK
          </div>
          Sai Krishna Mateti
        </div>
        <nav className="nav-links">
          <a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a>
          <a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>Experience</a>
          <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
          <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
          <a href="#education" className={activeSection === 'education' ? 'active' : ''}>Education</a>
        </nav>
        <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem' }}>
          Download CV
        </button>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="badge badge-green mb-4 animate-fade-up">
            <span style={{ marginRight: '6px', fontSize: '10px' }}>●</span> AVAILABLE FOR ARCHITECTURE CONSULTING
          </div>
          <h1 className="animate-fade-up delay-1">
            Sai Krishna Mateti | <span className="text-cyan">Backend Engineer</span>
          </h1>
          <p className="animate-fade-up delay-2">
            Architecting high-throughput microservices and robust cloud infrastructures. I specialize in turning complex system requirements into scalable, maintainable codebases using Kernel-level precision and Craft-driven implementation.
          </p>
          <div className="flex gap-4 animate-fade-up delay-3">
            <button className="btn btn-primary">
              Download CV <Download size={16} className="ml-2" style={{ marginLeft: '8px' }}/>
            </button>
            <button className="btn btn-secondary">
              View Projects
            </button>
          </div>
        </div>

        <div className="hero-visual animate-float delay-4">
          <div className="system-health">
            <div className="system-header">
              <span>SYSTEM HEALTH</span>
              <div className="window-controls">
                <div className="control-dot dot-red"></div>
                <div className="control-dot dot-yellow"></div>
                <div className="control-dot dot-green"></div>
              </div>
            </div>
            
            <div className="system-body">
              <div className="metric">
                <div className="metric-header">
                  <span>API Uptime</span>
                  <span className="text-green">{uptime}</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill fill-green" style={{ width: '99.99%' }}></div>
                </div>
              </div>
              
              <div className="metric">
                <div className="metric-header">
                  <span>Throughput</span>
                  <span>{throughput} req/s</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill fill-cyan" style={{ width: '75%' }}></div>
                </div>
              </div>

              <div className="terminal">
                <div className="terminal-header">_ system.logs</div>
                {terminalLogs.map((log, index) => {
                  if (!log) return null;
                  return (
                    <div key={index} className="terminal-line">
                      <span className="terminal-time">[{log.time}]</span>
                      <span style={{ 
                        color: log.type === 'warn' ? '#ffbd2e' : 
                               log.type === 'success' ? '#27c93f' : '#8b949e' 
                      }}>
                        {log.msg}
                      </span>
                    </div>
                  );
                })}
                <div className="terminal-line mt-2 flex items-center">
                  <span className="text-cyan">admin@skm:~$</span>
                  <span className="cursor-blink" style={{ width: '8px', height: '15px', backgroundColor: 'var(--accent-cyan)', display: 'inline-block', marginLeft: '6px', animation: 'blink 1s step-end infinite' }}></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Tech Stack */}
      <section className="features-grid">
        <div className="card feature-card reveal delay-1">
          <Zap className="feature-icon" size={24} />
          <h3 className="feature-title">API Optimization</h3>
          <p className="feature-desc">
            Reduced backend latency across legacy microservices by implementing advanced caching strategies.
          </p>
          <div>
            <div className="feature-stat">50%</div>
            <div className="feature-stat-label">FASTER RESPONSE TIMES</div>
          </div>
        </div>

        <div className="card feature-card tech-stack-card reveal delay-2">
          <h3 className="feature-title">Core Tech Stack</h3>
          <p className="feature-desc">
            Industrial-grade tools utilized for building enterprise systems.
          </p>
          <div className="tech-tags">
            <span className="tech-tag" style={{ borderColor: '#666666' }}><Server size={14} color="#68a063" /> Node.js</span>
            <span className="tech-tag" style={{ borderColor: '#666666' }}><Database size={14} color="#47A248" /> MongoDB</span>
            <span className="tech-tag" style={{ borderColor: '#666666' }}><Box size={14} color="#DC382D" /> Redis</span>
            <span className="tech-tag" style={{ borderColor: '#666666' }}><LayoutTemplate size={14} color="#2496ED" /> Docker</span>
            <span className="tech-tag" style={{ borderColor: '#666666' }}><Workflow size={14} color="#F05032" /> CI/CD</span>
            <span className="tech-tag" style={{ borderColor: '#666666' }}><Cloud size={14} color="#0089D6" /> Azure</span>
            <span className="tech-tag" style={{ borderColor: '#666666' }}><Cpu size={14} color="#aaaaaa" /> Express JS</span>
            <span className="tech-tag" style={{ borderColor: '#666666' }}><FileJson size={14} color="#85EA2D" /> Swagger</span>
            
          </div>
          {/* Decorative faint icon in background */}
          <div style={{ position: 'absolute', right: '-20px', bottom: '-20px', opacity: 0.05, transform: 'rotate(-15deg)' }}>
            <Server size={180} />
          </div>
        </div>

        <div className="card feature-card reveal delay-3">
          <ShieldCheck className="feature-icon" size={24} />
          <h3 className="feature-title">Data Integrity</h3>
          <p className="feature-desc">
            Engineered a zero-data-loss migration pipeline for 2TB+ of production databases.
          </p>
          <div>
            <div className="feature-stat text-cyan" style={{ color: 'var(--text-primary)' }}>100%</div>
            <div className="feature-stat-label">UPTIME DURING MIGRATION</div>
          </div>
        </div>

        <div className="card feature-card reveal delay-4">
          <h3 className="feature-title" style={{ fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-cyan)' }}>
            <TerminalSquare size={16} /> Technical Philosophy
          </h3>
          <p className="feature-desc" style={{ marginTop: '0.5rem' }}>
            Writing code is 20% of the job; designing systems that can fail gracefully and recover autonomously is the other 80%. I prioritize observability and decoupled logic.
          </p>
        </div>

        <div className="card feature-card reveal delay-5">
          <h3 className="feature-title" style={{ fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ffbd2e' }}>
            <Award size={16} /> Experience Trail
          </h3>
          <p className="feature-desc" style={{ marginTop: '0.5rem' }}>
            Currently lead backend efforts for enterprise-scale Fintech solutions, focusing on transactional consistency and low-latency auditing systems.
          </p>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section className="experience-section" id="experience">
        <div className="exp-header">
          <h2 className="exp-title">Professional Experience</h2>
          {/* <div> */}
            {/* <h2 className="exp-title">Professional Experience</h2> */}
            {/* <div className="exp-subtitle">_ &gt; path/to/career/history</div> */}
          {/* </div> */}
          <div className="exp-status">
            <div className="exp-status-label">LATEST STATUS</div>
            <div className="exp-status-value">ACTIVE_DEPLOYMENT</div>
          </div>
        </div>

        <div className="timeline">
          {/* Main Job */}
          <div className="timeline-item reveal delay-1">
            <div className="exp-card">
              <div className="exp-card-header">
                <div>
                  <div className="exp-date">2021 — PRESENT</div>
                  <h3 className="exp-role">Software Engineer L3</h3>
                  <div className="exp-company">Archents IT</div>
                </div>
                {/* <div className="exp-id-badge">ID: ARCH_SWE_03</div> */}
              </div>

              <div className="exp-grid">
                <div className="exp-grid-item">
                  <div className="exp-grid-title">
                    <Target size={14} color="var(--accent-cyan)" /> RESTful APIs
                  </div>
                  <p className="exp-grid-desc">
                    Engineered high-throughput endpoints using Node.js/Express with schema validation and error-handling middleware.
                  </p>
                </div>
                
                <div className="exp-grid-item">
                  <div className="exp-grid-title">
                    <Network size={14} color="var(--accent-cyan)" /> Microservices
                  </div>
                  <p className="exp-grid-desc">
                    Decoupled monolithic logic into event-driven services, reducing deployment cycles by 40%.
                  </p>
                </div>

                <div className="exp-grid-item">
                  <div className="exp-grid-title">
                    <Database size={14} color="var(--accent-cyan)" /> MongoDB Aggregation
                  </div>
                  <p className="exp-grid-desc">
                    Optimized complex data lookups using multi-stage pipelines and compound indexing for real-time reporting.
                  </p>
                </div>

                <div className="exp-grid-item">
                  <div className="exp-grid-title">
                    <Lock size={14} color="var(--accent-cyan)" /> JWT / OAuth2
                  </div>
                  <p className="exp-grid-desc">
                    Implemented stateless authentication and RBAC, securing enterprise-grade resources across cloud environments.
                  </p>
                </div>
                
                {/* Full-width inner block */}
                <div className="exp-grid-item" style={{ gridColumn: 'span 1 / span 2', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', backgroundColor: 'var(--bg-darker)' }}>
                  <div className="exp-grid-title" style={{ margin: 0, fontSize: '0.75rem', textTransform: 'uppercase' }}>
                    <Cloud size={12} /> Azure Cloud Infrastructure
                  </div>
                  <div className="flex gap-2" style={{ flexWrap: 'wrap' }}>
                    <span className="badge badge-outline" style={{ backgroundColor: '#111827' }}>Blob Storage Integration</span>
                    <span className="badge badge-outline" style={{ backgroundColor: '#111827' }}>NLP Cognitive Services</span>
                    <span className="badge badge-outline" style={{ backgroundColor: '#111827' }}>App Service Orchestration</span>
                  </div>
                </div>
              </div>

              <div className="exp-achievements">
                <h4 className="achievements-title">
                  <Trophy size={16} /> Key Achievements
                </h4>
                <div className="achievement-list">
                  <div className="achievement-item">
                    <div className="achievement-badge">99%</div>
                    <div className="achievement-text">
                      Standardized containerization workflows using <strong>Docker</strong>, achieving 99.9% environment parity across Development/Staging/Production.
                    </div>
                  </div>
                  <div className="achievement-item">
                    <div className="achievement-badge">35%</div>
                    <div className="achievement-text">
                      Refactored legacy data migration scripts, improving processing speed by <strong>35%</strong> for multi-terabyte datasets.
                    </div>
                  </div>
                  <div className="achievement-item">
                    <div className="achievement-badge"><Box size={14} /></div>
                    <div className="achievement-text">
                      Led the migration of on-prem NLP processing to <strong>Azure Cognitive Services</strong>, enhancing entity extraction accuracy.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Older Job */}
          {/* <div className="timeline-item">
            <div className="old-exp-card">
              <div className="old-exp-date">2019 — 2021</div>
              <h3 className="old-exp-role">Backend Developer</h3>
              <div className="old-exp-company">Previous Engineering Firm</div>
              <div className="old-exp-tags">
                <span className="old-exp-tag">Java</span>
                <span className="old-exp-tag">Spring Boot</span>
                <span className="old-exp-tag">SQL</span>
              </div>
            </div>
            <div className="timeline-dot-bottom"></div>
          </div>
        </div> */}

        {/* <div className="thumbnails-grid">
          <div className="thumbnail">
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80" alt="Circuit board" className="thumbnail-img" />
            <div className="thumbnail-tag">SYSTEM_ARCH</div>
          </div>
          <div className="thumbnail">
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=400&q=80" alt="Fiber optics" className="thumbnail-img" />
            <div className="thumbnail-tag text-green" style={{ backgroundColor: 'var(--accent-green)', color: 'var(--bg-darker)' }}>CLOUD_NATIVE</div>
          </div>
          <div className="thumbnail">
            <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80" alt="Code on monitors" className="thumbnail-img" />
            <div className="thumbnail-tag" style={{ backgroundColor: '#c5d1fa', color: '#1a202c' }}>ENGINEERING_L3</div>
          </div> */}
        </div>
      </section>

      {/* Project Spotlight */}
      {/* <section className="project-spotlight" id="projects">
        <div className="section-label">PROJECT SPOTLIGHT</div>
        <div className="project-header">
          <h2 className="project-title">Scalable Engine v2.0</h2>
          <a href="#" className="project-link">
            View Case Study <ArrowRight size={16} />
          </a>
        </div>

        <div className="project-card">
          <div className="project-image-placeholder">
            <div className="servers-bg"></div>
            
            {/* Server rack illustration CSS */}
            {/* <div style={{ display: 'flex', gap: '20px', position: 'absolute', bottom: '0', left: '10%', right: '10%', height: '80%', opacity: 0.3 }}>
               {[1,2,3,4,5].map(i => (
                 <div key={i} style={{ flex: 1, backgroundColor: '#05080f', border: '1px solid #30363d', borderBottom: 'none', display: 'flex', flexDirection: 'column', gap: '10px', padding: '10px' }}>
                    {[1,2,3,4,5,6,7,8].map(j => (
                      <div key={j} style={{ height: '20px', backgroundColor: '#161b22', border: '1px solid #30363d', position: 'relative' }}>
                        <div style={{ position: 'absolute', right: '5px', top: '5px', width: '4px', height: '4px', borderRadius: '50%', backgroundColor: Math.random() > 0.3 ? '#27c93f' : '#30363d', boxShadow: Math.random() > 0.3 ? '0 0 5px #27c93f' : 'none' }}></div>
                      </div>
                    ))}
                 </div>
               ))}
            </div> */}

            {/* <div className="project-info">
              <div className="project-details">
                <div className="project-tags">
                  <span className="badge badge-outline">Microservices</span>
                  <span className="badge badge-outline text-green" style={{ borderColor: 'var(--accent-green-dim)', backgroundColor: 'rgba(63, 185, 80, 0.05)' }}>Event-Driven</span>
                  <span className="badge badge-outline text-cyan" style={{ borderColor: 'var(--accent-cyan-dim)', backgroundColor: 'rgba(0, 229, 255, 0.05)' }}>Azure Functions</span>
                </div>
                <p className="project-desc">
                  A distributed message-processing engine capable of handling 1.2 billion events per month with guaranteed atomicity.
                </p>
              </div>
              
              <div className="project-stats">
                <div>
                  <div className="stat-value">1.2B</div>
                  <div className="stat-label">MONTHLY EVENTS</div>
                </div>
                <div>
                  <div className="stat-value text-green" style={{ color: 'var(--accent-green)' }}>45ms</div>
                  <div className="stat-label">P99 LATENCY</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="footer">
        <div>
          <div className="text-cyan mb-2" style={{ fontWeight: 600 }}>Sai Krishna Mateti</div>
          <div>© 2026 SAI KRISHNA MATETI | SYSTEM ARCHITECTED FOR SCALE</div>
        </div>
        <div className="footer-links">
          <a href="#">LinkedIn</a>
          <a href="#">Email</a>
          <a href="#">GitHub</a>
          <a href="#">Documentation</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
