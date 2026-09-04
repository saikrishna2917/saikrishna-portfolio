import React from "react";

export default function About() {
  const clipPaths = [
    "polygon(2% 6%, 12% 0%, 25% 4%, 40% 1%, 55% 5%, 70% 0%, 85% 4%, 98% 1%, 96% 15%, 100% 30%, 97% 45%, 100% 60%, 96% 75%, 99% 90%, 97% 98%, 85% 96%, 70% 100%, 55% 96%, 40% 100%, 25% 95%, 12% 100%, 3% 97%, 1% 85%, 4% 70%, 0% 55%, 3% 40%, 0% 25%, 2% 12%)",
    "polygon(1% 8%, 10% 2%, 22% 6%, 35% 0%, 48% 5%, 62% 1%, 76% 6%, 90% 1%, 99% 6%, 97% 20%, 100% 35%, 98% 50%, 100% 66%, 97% 80%, 99% 94%, 88% 98%, 74% 94%, 60% 99%, 46% 95%, 32% 100%, 18% 96%, 6% 99%, 2% 88%, 5% 74%, 1% 60%, 4% 46%, 0% 32%, 3% 18%)",
    "polygon(3% 3%, 16% 1%, 28% 5%, 44% 0%, 58% 4%, 72% 1%, 84% 5%, 97% 2%, 100% 18%, 96% 32%, 100% 48%, 97% 64%, 100% 80%, 96% 94%, 98% 99%, 84% 95%, 68% 100%, 52% 96%, 38% 100%, 22% 95%, 8% 99%, 1% 92%, 4% 78%, 0% 62%, 3% 48%, 0% 34%, 4% 20%, 1% 8%)"
  ];

  return (
    <section id="about" style={{ position: 'relative', padding: '8rem 1rem', overflow: 'hidden' }}>
      {/* Separator line */}
      <svg viewBox="0 0 1440 130" fill="none" preserveAspectRatio="none" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '80px' }} aria-hidden="true">
        <path d="M-10 120C420 10 1030 4 1450 80" stroke="var(--ca-tick)" strokeWidth="1.5"></path>
      </svg>

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        <p className="ca-hand reveal" style={{ fontSize: '2.5rem', color: 'var(--ca-ink)', margin: '0 0 2rem 8%' }}>
          about me!
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '2rem', marginTop: '2rem' }}>
          
          {/* Floating Photo - Left (Hidden on mobile) */}
          <div className="hide-mobile reveal" style={{ flex: '0 0 250px', transform: 'rotate(-10deg) translateY(-20px)' }}>
            <figure style={{ backgroundColor: '#fff', padding: '10px 10px 30px 10px', boxShadow: '0 8px 24px rgba(0,0,0,0.15)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-15px', left: '-15px', width: '80px', height: '24px', backgroundColor: 'rgba(192, 132, 252, 0.7)', transform: 'rotate(-30deg)' }}></div>
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" alt="Me" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
              <figcaption className="ca-hand" style={{ textAlign: 'center', marginTop: '10px', fontSize: '1.5rem', color: 'var(--ca-ink)' }}>2026</figcaption>
            </figure>
          </div>

          {/* Central Text Content */}
          <div style={{ flex: '1 1 500px', maxWidth: '700px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            
            <div className="ca-doodle-box reveal" style={{ padding: '0.5rem 1.5rem', borderColor: 'var(--ca-ink)' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 500, color: 'var(--ca-ink)' }}>what's up</span>
            </div>

            <p className="ca-hand reveal" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.3, color: 'var(--ca-ink)', margin: '3rem 0' }}>
              I'm a backend developer who gets a little too excited about making complicated systems feel simple. ✨ 
              I care about the small details, the edge cases everyone forgets, and shipping architecture that genuinely makes a product scale seamlessly. 🚀
            </p>

            {/* Torn Paper Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
              
              <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', padding: '1rem 2rem', fontSize: '1.5rem', fontWeight: 600,
                  backgroundColor: 'var(--ca-yellow)', color: 'var(--ca-ink)', clipPath: clipPaths[0]
                }}>
                  API Architecture
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '60px', height: '60px', backgroundColor: 'var(--ca-yellow)', clipPath: clipPaths[1], fontSize: '1.8rem' }}>
                  🏗️
                </span>
              </div>

              <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', animationDelay: '0.1s' }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', padding: '1rem 2rem', fontSize: '1.5rem', fontWeight: 600,
                  backgroundColor: 'var(--ca-green)', color: '#fff', clipPath: clipPaths[1]
                }}>
                  Database Design
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '60px', height: '60px', backgroundColor: 'var(--ca-green)', clipPath: clipPaths[2], fontSize: '1.8rem' }}>
                  🗄️
                </span>
              </div>

              <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', animationDelay: '0.2s' }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', padding: '1rem 2rem', fontSize: '1.5rem', fontWeight: 600,
                  backgroundColor: 'var(--ca-magenta)', color: '#fff', clipPath: clipPaths[2]
                }}>
                  Cloud Infrastructure
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '60px', height: '60px', backgroundColor: 'var(--ca-magenta)', clipPath: clipPaths[0], fontSize: '1.8rem' }}>
                  ☁️
                </span>
              </div>

              <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', animationDelay: '0.3s' }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', padding: '1rem 2rem', fontSize: '1.5rem', fontWeight: 600,
                  backgroundColor: 'var(--ca-blue)', color: 'var(--ca-ink)', clipPath: clipPaths[0]
                }}>
                  CI/CD Pipelines
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '60px', height: '60px', backgroundColor: 'var(--ca-blue)', clipPath: clipPaths[1], fontSize: '1.8rem' }}>
                  ⚡
                </span>
              </div>

            </div>

          </div>

          {/* Floating Photo - Right (Hidden on mobile) */}
          <div className="hide-mobile reveal" style={{ flex: '0 0 280px', transform: 'rotate(12deg) translateY(-20px)' }}>
            <figure style={{ backgroundColor: '#fff', padding: '10px 10px 30px 10px', boxShadow: '0 8px 24px rgba(0,0,0,0.15)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-15px', right: '-15px', width: '80px', height: '24px', backgroundColor: 'rgba(255, 235, 184, 0.9)', transform: 'rotate(30deg)' }}></div>
              <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80" alt="Workspace" style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
              <figcaption className="ca-hand" style={{ textAlign: 'center', marginTop: '10px', fontSize: '1.5rem', color: 'var(--ca-ink)' }}>my workspace</figcaption>
            </figure>
          </div>

        </div>
      </div>
      
      <style>{`
        @media (max-width: 900px) {
          .hide-mobile { display: none !important; }
        }
      `}</style>
    </section>
  );
}
