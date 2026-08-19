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
    padding: "0.85rem 1.1rem",
    background: "var(--bg-tertiary)",
    border: "1px solid var(--border-color)",
    borderRadius: "var(--radius-md)",
    color: "var(--text-primary)",
    fontFamily: "var(--font-body)",
    fontSize: "0.95rem",
    transition: "all var(--transition-fast)",
    marginBottom: "1.5rem",
    outline: "none",
  };

  return (
    <section id="contact" className="container reveal">
      <div className="section-tag animate-fade-up">
        <Send size={16} />
        <span>Get in Touch</span>
      </div>
      <h2 className="section-title animate-fade-up delay-1">Let's Connect</h2>
      <p className="section-subtitle animate-fade-up delay-2">
        Looking for a backend specialist to build scalable APIs or optimize your
        cloud infrastructure? Let's discuss.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "0.9fr 1.1fr",
          gap: "3rem",
        }}
        className="animate-fade-up delay-3"
      >
        <div className="glass-card" style={{ padding: "2.5rem" }}>
          <h3
            style={{
              marginBottom: "2rem",
              fontSize: "1.5rem",
              color: "var(--text-primary)",
            }}
          >
            Contact Details
          </h3>

          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "1.25rem",
              marginBottom: "2rem",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "var(--radius-md)",
                background: "rgba(99, 102, 241, 0.1)",
                color: "var(--accent-primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Mail size={20} />
            </div>
            <div>
              <div
                style={{
                  fontSize: "0.85rem",
                  color: "var(--text-secondary)",
                  marginBottom: "0.2rem",
                }}
              >
                Email
              </div>
              <a
                href="mailto:saikrishna2917@gmail.com"
                style={{
                  fontWeight: 600,
                  fontSize: "1.05rem",
                  color: "var(--text-primary)",
                  textDecoration: "none",
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
              gap: "1.25rem",
              marginBottom: "2rem",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "var(--radius-md)",
                background: "rgba(99, 102, 241, 0.1)",
                color: "var(--accent-primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Phone size={20} />
            </div>
            <div>
              <div
                style={{
                  fontSize: "0.85rem",
                  color: "var(--text-secondary)",
                  marginBottom: "0.2rem",
                }}
              >
                Phone
              </div>
              <a
                href="tel:+918121651811"
                style={{
                  fontWeight: 600,
                  fontSize: "1.05rem",
                  color: "var(--text-primary)",
                  textDecoration: "none",
                }}
              >
                +91 9948262033
              </a>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "1.25rem",
              marginBottom: "2rem",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "var(--radius-md)",
                background: "rgba(99, 102, 241, 0.1)",
                color: "var(--accent-primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <MapPin size={20} />
            </div>
            <div>
              <div
                style={{
                  fontSize: "0.85rem",
                  color: "var(--text-secondary)",
                  marginBottom: "0.2rem",
                }}
              >
                Location
              </div>
              <span
                style={{
                  fontWeight: 600,
                  fontSize: "1.05rem",
                  color: "var(--text-primary)",
                }}
              >
                Hyderabad, India
              </span>
            </div>
          </div>
        </div>

        <div className="glass-card" style={{ padding: "2.5rem" }}>
          <form onSubmit={handleFormSubmit}>
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  marginBottom: "0.5rem",
                  color: "var(--text-primary)",
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
                  e.target.style.borderColor = "var(--accent-primary)";
                  e.target.style.boxShadow =
                    "0 0 0 3px rgba(99, 102, 241, 0.2)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "var(--border-color)";
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  marginBottom: "0.5rem",
                  color: "var(--text-primary)",
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
                  e.target.style.borderColor = "var(--accent-primary)";
                  e.target.style.boxShadow =
                    "0 0 0 3px rgba(99, 102, 241, 0.2)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "var(--border-color)";
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  marginBottom: "0.5rem",
                  color: "var(--text-primary)",
                }}
              >
                Message
              </label>
              <textarea
                name="message"
                placeholder="Hi Sai Krishna, I'd like to discuss an API project..."
                value={formData.message}
                onChange={handleInputChange}
                style={{ ...inputStyle, minHeight: "130px" }}
                required
                onFocus={(e) => {
                  e.target.style.borderColor = "var(--accent-primary)";
                  e.target.style.boxShadow =
                    "0 0 0 3px rgba(99, 102, 241, 0.2)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "var(--border-color)";
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: "100%", padding: "0.85rem" }}
              disabled={status === "SENDING"}
            >
              <span>
                {status === "SENDING" ? "Sending..." : "Send Message"}
              </span>
              {status !== "SENDING" && <Send size={18} />}
            </button>

            {status === "SUCCESS" && (
              <div
                style={{
                  display: "block",
                  background: "rgba(16, 185, 129, 0.15)",
                  color: "var(--accent-emerald)",
                  border: "1px solid rgba(16, 185, 129, 0.3)",
                  padding: "1rem",
                  borderRadius: "var(--radius-md)",
                  marginTop: "1rem",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  textAlign: "center",
                }}
              >
                Thank you! Your message has been sent successfully.
              </div>
            )}
            {status === "ERROR" && (
              <div
                style={{
                  display: "block",
                  background: "rgba(239, 68, 68, 0.15)",
                  color: "#ef4444",
                  border: "1px solid rgba(239, 68, 68, 0.3)",
                  padding: "1rem",
                  borderRadius: "var(--radius-md)",
                  marginTop: "1rem",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  textAlign: "center",
                }}
              >
                Failed to send message. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
