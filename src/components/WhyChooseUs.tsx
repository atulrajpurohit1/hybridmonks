"use client";

import { useReveal } from "@/hooks/useReveal";

const features = [
  {
    icon: "🎯",
    title: "Result-Driven",
    desc: "Every decision we make is backed by data and focused on delivering measurable outcomes for your business.",
  },
  {
    icon: "⚡",
    title: "Fast Turnaround",
    desc: "Agile workflows and efficient processes mean your project goes live faster — without cutting corners.",
  },
  {
    icon: "🛡️",
    title: "Reliable Support",
    desc: "Dedicated post-launch support and maintenance to keep your solutions running smoothly, always.",
  },
  {
    icon: "💡",
    title: "Innovative Thinking",
    desc: "We stay ahead of trends to bring fresh, creative solutions that give you a competitive edge.",
  },
  {
    icon: "🤝",
    title: "True Partnership",
    desc: "We work alongside you — not just for you. Your vision is at the heart of everything we build.",
  },
  {
    icon: "📊",
    title: "Transparent Process",
    desc: "Clear communication, honest pricing, and full visibility into every stage of your project.",
  },
];

export default function WhyChooseUs() {
  const headerRef = useReveal();
  const gridRef = useReveal("reveal-stagger");

  return (
    <section className="section why-section" id="why-us">
      <div className="container">
        <div className="section-header" ref={headerRef}>
          <span className="section-label">Why Choose Us</span>
          <h2 className="section-title">Built Different, By Design</h2>
          <p className="section-subtitle">
            We combine deep expertise with genuine care to deliver work that
            stands out and makes an impact.
          </p>
        </div>

        <div className="features-grid" ref={gridRef}>
          {features.map((f, i) => (
            <div className="feature-card" key={i}>
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
