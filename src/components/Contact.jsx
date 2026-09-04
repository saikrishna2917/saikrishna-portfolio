import React, { useState } from "react";
import { Send, MapPin, Mail, Phone } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("IDLE");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("SENDING");
    const accessKey =
      import.meta.env.VITE_WEB3FORMS_KEY ||
      "7edebbfb-448e-462a-a775-bb4d4f82c34c";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New message from your Portfolio`,
        }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setStatus("SUCCESS");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("ERROR");
      }
    } catch (err) {
      setStatus("ERROR");
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "1rem",
    background: "#fff",
    border: "3px solid var(--ca-ink)",
    borderRadius: "0",
    color: "var(--ca-ink)",
    fontFamily: "var(--font-mono)",
    fontSize: "1rem",
    transition: "all 0.2s",
    marginBottom: "1.5rem",
    outline: "none",
    boxShadow: "4px 4px 0 var(--ca-ink)",
  };

  return (
    <section id="contact" className="container reveal" style={{ paddingTop: '6rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <div className="ca-tape" style={{ transform: 'rotate(-2deg)', marginBottom: '1rem', backgroundColor: 'var(--ca-orange)', color: 'var(--ca-ink)' }}>
          <Send size={16} style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: '0.5rem' }} />
          Get in Touch
        </div>
        <h2 className="section-title">Let's Connect</h2>
        <p className="ca-hand" style={{ fontSize: '2rem', maxWidth: '600px', margin: '0 auto', color: 'var(--ca-ink)', transform: 'rotate(1deg)' }}>
          Looking for a backend specialist to build scalable APIs or optimize your cloud infrastructure? Let's discuss.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "0.9fr 1.1fr",
          gap: "3rem",
        }}
        className="reveal delay-3"
      >
        <div style={{ padding: "3rem", backgroundColor: "var(--ca-yellow-soft)", border: "3px solid var(--ca-ink)", boxShadow: "8px 8px 0 var(--ca-ink)", transform: "rotate(-1deg)" }}>
          <h3
            className="ca-display"
            style={{
              marginBottom: "3rem",
              fontSize: "2.5rem",
              color: "var(--ca-ink)",
            }}
          >
            Contact Details
          </h3>

          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "1.5rem",
              marginBottom: "2.5rem",
            }}
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                border: "3px solid var(--ca-ink)",
                background: "var(--ca-magenta)",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                transform: "rotate(4deg)",
                boxShadow: "3px 3px 0 var(--ca-ink)"
              }}
            >
              <Mail size={24} />
            </div>
            <div>
              <div
                className="ca-mono"
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "var(--ca-ink)",
                  marginBottom: "0.2rem",
                  textTransform: "uppercase"
                }}
              >
                Email
              </div>
              <a
                href="mailto:saikrishna6800@gmail.com"
                className="ca-serif"
                style={{
                  fontWeight: 600,
                  fontSize: "1.25rem",
                  color: "var(--ca-ink)",
                  textDecoration: "underline",
                  textDecorationThickness: "2px",
                  textUnderlineOffset: "4px"
                }}
              >
                saikrishna6800@gmail.com
              </a>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "1.5rem",
              marginBottom: "2.5rem",
            }}
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                border: "3px solid var(--ca-ink)",
                background: "var(--ca-blue)",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                transform: "rotate(-3deg)",
                boxShadow: "3px 3px 0 var(--ca-ink)"
              }}
            >
              <Phone size={24} />
            </div>
            <div>
              <div
                className="ca-mono"
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "var(--ca-ink)",
                  marginBottom: "0.2rem",
                  textTransform: "uppercase"
                }}
              >
                Phone
              </div>
              <a
                href="tel:+919948262033"
                className="ca-serif"
                style={{
                  fontWeight: 600,
                  fontSize: "1.25rem",
                  color: "var(--ca-ink)",
                  textDecoration: "underline",
                  textDecorationThickness: "2px",
                  textUnderlineOffset: "4px"
                }}
              >
                +91 99482 62033
              </a>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "1.5rem",
              marginBottom: "2.5rem",
            }}
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                border: "3px solid var(--ca-ink)",
                background: "var(--ca-green)",
                color: "var(--ca-ink)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                transform: "rotate(5deg)",
                boxShadow: "3px 3px 0 var(--ca-ink)"
              }}
            >
              <MapPin size={24} />
            </div>
            <div>
              <div
                className="ca-mono"
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "var(--ca-ink)",
                  marginBottom: "0.2rem",
                  textTransform: "uppercase"
                }}
              >
                Location
              </div>
              <span
                className="ca-serif"
                style={{
                  fontWeight: 600,
                  fontSize: "1.25rem",
                  color: "var(--ca-ink)",
                }}
              >
                Hyderabad, India
              </span>
            </div>
          </div>
        </div>

        <div style={{ padding: "3rem", backgroundColor: "#fff", border: "3px solid var(--ca-ink)", boxShadow: "8px 8px 0 var(--ca-ink)", transform: "rotate(1deg)" }}>
          <form onSubmit={handleFormSubmit}>
            <div>
              <label
                className="ca-mono"
                style={{
                  display: "block",
                  fontSize: "1rem",
                  fontWeight: 700,
                  marginBottom: "0.5rem",
                  color: "var(--ca-ink)",
                  textTransform: "uppercase"
                }}
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleInputChange}
                style={inputStyle}
                required
                onFocus={(e) => {
                  e.target.style.boxShadow = "6px 6px 0 var(--ca-blue)";
                  e.target.style.transform = "translate(-2px, -2px)";
                }}
                onBlur={(e) => {
                  e.target.style.boxShadow = "4px 4px 0 var(--ca-ink)";
                  e.target.style.transform = "none";
                }}
              />
            </div>

            <div>
              <label
                className="ca-mono"
                style={{
                  display: "block",
                  fontSize: "1rem",
                  fontWeight: 700,
                  marginBottom: "0.5rem",
                  color: "var(--ca-ink)",
                  textTransform: "uppercase"
                }}
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleInputChange}
                style={inputStyle}
                required
                onFocus={(e) => {
                  e.target.style.boxShadow = "6px 6px 0 var(--ca-magenta)";
                  e.target.style.transform = "translate(-2px, -2px)";
                }}
                onBlur={(e) => {
                  e.target.style.boxShadow = "4px 4px 0 var(--ca-ink)";
                  e.target.style.transform = "none";
                }}
              />
            </div>

            <div>
              <label
                className="ca-mono"
                style={{
                  display: "block",
                  fontSize: "1rem",
                  fontWeight: 700,
                  marginBottom: "0.5rem",
                  color: "var(--ca-ink)",
                  textTransform: "uppercase"
                }}
              >
                Message
              </label>
              <textarea
                name="message"
                placeholder="Hi Sai Krishna, I'd like to discuss an API project..."
                value={formData.message}
                onChange={handleInputChange}
                style={{ ...inputStyle, minHeight: "150px", resize: "vertical" }}
                required
                onFocus={(e) => {
                  e.target.style.boxShadow = "6px 6px 0 var(--ca-green)";
                  e.target.style.transform = "translate(-2px, -2px)";
                }}
                onBlur={(e) => {
                  e.target.style.boxShadow = "4px 4px 0 var(--ca-ink)";
                  e.target.style.transform = "none";
                }}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: "100%", padding: "1.2rem", fontSize: "1.2rem" }}
              disabled={status === "SENDING"}
            >
              <span>
                {status === "SENDING" ? "Sending..." : "Send Message"}
              </span>
              {status !== "SENDING" && <Send size={20} />}
            </button>

            {status === "SUCCESS" && (
              <div
                className="ca-mono"
                style={{
                  display: "block",
                  background: "var(--ca-green)",
                  color: "var(--ca-ink)",
                  border: "3px solid var(--ca-ink)",
                  padding: "1rem",
                  marginTop: "1.5rem",
                  fontSize: "1rem",
                  fontWeight: 700,
                  textAlign: "center",
                  boxShadow: "4px 4px 0 var(--ca-ink)",
                  transform: "rotate(1deg)"
                }}
              >
                Thank you! Your message has been sent successfully.
              </div>
            )}
            {status === "ERROR" && (
              <div
                className="ca-mono"
                style={{
                  display: "block",
                  background: "var(--ca-orange)",
                  color: "var(--ca-ink)",
                  border: "3px solid var(--ca-ink)",
                  padding: "1rem",
                  marginTop: "1.5rem",
                  fontSize: "1rem",
                  fontWeight: 700,
                  textAlign: "center",
                  boxShadow: "4px 4px 0 var(--ca-ink)",
                  transform: "rotate(-1deg)"
                }}
              >
                Failed to send message. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          #contact > div.reveal {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
