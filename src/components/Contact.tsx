"use client";

import { FormEvent, useState } from "react";
import { useReveal } from "@/hooks/useReveal";

const contactInfo = [
  {
    icon: "📞",
    title: "Phone",
    value: "+91 XXXXX XXXXX",
    href: "tel:+91XXXXXXXXXX",
    isLink: true,
  },
  {
    icon: "✉️",
    title: "Email",
    value: "info@example.com",
    href: "mailto:info@example.com",
    isLink: true,
  },
  {
    icon: "📍",
    title: "Office Address",
    value: "Purohitvas Gangadham Wasada",
    href: "",
    isLink: false,
  },
];

export default function Contact() {
  const headerRef = useReveal();
  const infoRef = useReveal();
  const formRef = useReveal();

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Replace with real form handler / API call
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header" ref={headerRef}>
          <span className="section-label">Contact Us</span>
          <h2 className="section-title">Let&apos;s Start a Conversation</h2>
          <p className="section-subtitle">
            Have a project in mind? We&apos;d love to hear about it. Reach out
            and let&apos;s bring your vision to life.
          </p>
        </div>

        <div className="contact-grid">
          {/* Info */}
          <div className="contact-info" ref={infoRef}>
            <h3>Get In Touch</h3>
            <p>
              Reach out through any of the channels below, or fill out the form
              and we&apos;ll get back to you within 24 hours.
            </p>

            <div className="contact-details">
              {contactInfo.map((item, i) => (
                <div className="contact-item" key={i}>
                  <div className="contact-icon">{item.icon}</div>
                  <div className="contact-item-text">
                    <h4>{item.title}</h4>
                    {item.isLink ? (
                      <a href={item.href}>{item.value}</a>
                    ) : (
                      <p>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-card" ref={formRef}>
            <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="How can we help?"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary form-submit"
                id="form-submit-btn"
              >
                {submitted ? "Message Sent ✓" : "Send Message"}
                {!submitted && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m22 2-7 20-4-9-9-4z" /><path d="M22 2 11 13" />
                  </svg>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
