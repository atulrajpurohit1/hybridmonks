"use client";

import { useReveal } from "@/hooks/useReveal";

const values = [
  { icon: "🚀", label: "Innovation" },
  { icon: "🎯", label: "Precision" },
  { icon: "💬", label: "Communication" },
  { icon: "🏆", label: "Excellence" },
];

const highlights = [
  "Experienced & skilled development team",
  "100% client satisfaction focus",
  "Agile methodology for faster delivery",
  "Dedicated post-launch support",
];

export default function About() {
  const visualRef = useReveal();
  const contentRef = useReveal();

  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Visual side */}
          <div className="about-visual" ref={visualRef}>
            <div className="about-image-wrapper">
              <div className="about-value-grid">
                {values.map((v, i) => (
                  <div className="about-value-item" key={i}>
                    <span className="icon">{v.icon}</span>
                    <span className="label">{v.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-badge">
              <span className="big">5+</span>
              <span className="small">Years Experience</span>
            </div>
          </div>

          {/* Content side */}
          <div className="about-content" ref={contentRef}>
            <span className="section-label">About Us</span>
            <h2>
              A Team of <span className="accent">Passionate Experts</span>{" "}
              Building What Matters
            </h2>
            <p>
              At HybridMonks, we believe great technology should feel effortless.
              Our team brings together creativity, deep technical expertise, and
              a genuine passion for solving real problems.
            </p>
            <p>
              Founded with a mission to make premium digital solutions
              accessible, we've grown into a trusted partner for businesses
              that refuse to settle for ordinary.
            </p>

            <ul className="about-list">
              {highlights.map((h, i) => (
                <li key={i}>
                  <span className="about-list-check">✓</span>
                  {h}
                </li>
              ))}
            </ul>

            <a href="#contact" className="btn btn-primary" id="about-cta">
              Work With Us
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
