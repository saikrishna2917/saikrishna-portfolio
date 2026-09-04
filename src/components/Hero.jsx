import React from "react";
import { ArrowRight, Mail, Download } from "lucide-react";

export default function Hero() {
  const heroWrapperStyle = {
    padding: "8rem 1rem 6rem 1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    minHeight: "100vh",
    justifyContent: "center",
    position: "relative",
    // Notebook paper background
    backgroundImage:
      "repeating-linear-gradient(transparent, transparent 39px, rgba(0,0,0,0.06) 39px, rgba(0,0,0,0.06) 40px)",
    backgroundSize: "100% 40px",
    backgroundColor: "#f9f8f4",
    overflow: "hidden",
  };

  const nameWrapperStyle = {
    position: "relative",
    display: "inline-block",
    marginTop: "4rem",
    marginBottom: "5rem",
    zIndex: 10,
  };

  return (
    <section id="home" style={heroWrapperStyle}>
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "900px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Name Group Wrapper - this holds all the stickers relative to the name */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "2rem",
            marginBottom: "3rem",
          }}
        >
          {/* "my name is" label */}
          <div
            style={{
              position: "relative",
              display: "inline-block",
              marginBottom: "1rem",
            }}
          >
            <p
              className="ca-hand"
              style={{
                fontSize: "2.5rem",
                color: "var(--ca-ink)",
                margin: 0,
                lineHeight: 1,
              }}
            >
              my name is
            </p>
            <svg
              width="80"
              height="15"
              viewBox="0 0 100 20"
              style={{
                position: "absolute",
                bottom: "-10px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <path
                d="M5,10 Q50,0 95,12 M10,18 Q50,12 90,18"
                fill="none"
                stroke="var(--ca-ink)"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Main Name Box with Hand-drawn CSS Border */}
          <div className="ca-hand-box reveal" style={{ zIndex: 10 }}>
            <h1 className="ca-pixel" style={{ 
              fontSize: "clamp(4rem, 12vw, 10rem)", 
              lineHeight: 0.8, 
              margin: 0, 
              color: "var(--ca-ink)", 
              letterSpacing: "4px",
              whiteSpace: "nowrap",
              fontWeight: 900
            }}>
              SAI KRISHNA
            </h1>
          </div>

          {/* Floating Pill - Top Left */}
          <div
            className="ca-mono hide-mobile reveal"
            style={{
              position: "absolute",
              top: "-20px",
              left: "-140px",
              backgroundColor: "#bbf7d0",
              border: "3px solid #fff",
              borderRadius: "999px",
              padding: "0.5rem 1.5rem",
              fontWeight: 700,
              transform: "rotate(-12deg)",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              zIndex: 20,
              color: "var(--ca-ink)",
              whiteSpace: "nowrap",
              textTransform: "uppercase",
            }}
          >
            Built APIs
          </div>

          {/* Floating Pill - Top Right */}
          <div
            className="ca-mono hide-mobile reveal"
            style={{
              position: "absolute",
              top: "-30px",
              right: "-140px",
              backgroundColor: "#fef08a",
              border: "3px solid #fff",
              borderRadius: "999px",
              padding: "0.5rem 1.5rem",
              fontWeight: 700,
              transform: "rotate(10deg)",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              zIndex: 20,
              color: "var(--ca-ink)",
              whiteSpace: "nowrap",
              textTransform: "uppercase",
            }}
          >
            Sweat the details
          </div>

          {/* Floating Sticky Note - Bottom Left */}
          <div
            className="ca-hand hide-mobile reveal"
            style={{
              position: "absolute",
              bottom: "-40px",
              left: "-120px",
              backgroundColor: "var(--ca-yellow)",
              padding: "0.5rem 1.2rem",
              fontSize: "1.75rem",
              transform: "rotate(-6deg)",
              boxShadow: "2px 3px 8px rgba(17,18,18,0.18)",
              zIndex: 20,
              whiteSpace: "nowrap",
              color: "var(--ca-ink)",
            }}
          >
            Backend Developer
            {/* Arrow pointing up and right toward name */}
            <svg
              viewBox="0 0 40 40"
              fill="none"
              stroke="var(--ca-ink)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                position: "absolute",
                top: "-25px",
                right: "-30px",
                width: "32px",
                height: "32px",
                transform: "scaleX(-1) rotate(15deg)",
              }}
            >
              <path d="M34 33 C 25 24, 15 21, 9 9"></path>
              <path d="M8 21 L 7 7 L 21 11"></path>
            </svg>
          </div>

          {/* Floating Sticky Note - Bottom Right */}
          <div
            className="ca-hand hide-mobile reveal"
            style={{
              position: "absolute",
              bottom: "-40px",
              right: "-100px",
              backgroundColor: "var(--ca-mint)",
              padding: "0.5rem 1.2rem",
              fontSize: "1.75rem",
              transform: "rotate(4deg)",
              boxShadow: "2px 3px 8px rgba(17,18,18,0.18)",
              zIndex: 20,
              whiteSpace: "nowrap",
              color: "var(--ca-ink)",
            }}
          >
            Hyderabad, IN
            {/* Arrow pointing up and left toward name */}
            <svg
              viewBox="0 0 40 40"
              fill="none"
              stroke="var(--ca-ink)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                position: "absolute",
                top: "-25px",
                left: "-30px",
                width: "32px",
                height: "32px",
                transform: "rotate(-30deg)",
              }}
            >
              <path d="M34 33 C 25 24, 15 21, 9 9"></path>
              <path d="M8 21 L 7 7 L 21 11"></path>
            </svg>
          </div>
        </div>

        {/* Subtitle / Availability */}
        <div
          className="ca-mono"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.75rem",
            fontSize: "0.9rem",
            fontWeight: 700,
            letterSpacing: "1px",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              backgroundColor: "#2563eb",
              borderRadius: "50%",
            }}
          ></div>
          OPEN TO NEW WORK AND GOOD PROBLEMS
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem",
            marginTop: "4rem",
            flexWrap: "wrap",
            position: "relative",
            zIndex: 10,
          }}
        >
          <a
            href="#projects"
            className="btn btn-primary"
            style={{ transform: "rotate(-2deg)" }}
          >
            <span>View Projects</span>
            <ArrowRight size={20} />
          </a>
          <a
            href="#contact"
            className="btn btn-secondary"
            style={{ transform: "rotate(2deg)" }}
          >
            <span>Get in Touch</span>
            <Mail size={20} />
          </a>
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
