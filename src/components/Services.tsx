"use client";

import { useReveal } from "@/hooks/useReveal";

const services = [
  {
    num: "01",
    icon: "🌐",
    title: "Web Development",
    desc: "High-performance, responsive websites built with modern frameworks. From landing pages to complex web applications.",
  },
  {
    num: "02",
    icon: "📱",
    title: "App Development",
    desc: "Native and cross-platform mobile apps that deliver seamless experiences across iOS and Android devices.",
  },
  {
    num: "03",
    icon: "🎨",
    title: "UI/UX Design",
    desc: "Research-driven interface design that balances aesthetics with usability to create memorable user journeys.",
  },
  {
    num: "04",
    icon: "📈",
    title: "Digital Marketing",
    desc: "Strategic campaigns across SEO, social media, and paid channels to amplify your reach and drive conversions.",
  },
  {
    num: "05",
    icon: "☁️",
    title: "Cloud Solutions",
    desc: "Scalable, secure cloud infrastructure design, migration, and management for modern business operations.",
  },
  {
    num: "06",
    icon: "🔒",
    title: "Cyber Security",
    desc: "End-to-end security audits, penetration testing, and compliance solutions to protect your digital assets.",
  },
];

export default function Services() {
  const headerRef = useReveal();
  const gridRef = useReveal("reveal-stagger");

  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-header" ref={headerRef}>
          <span className="section-label">Our Services</span>
          <h2 className="section-title">What We Bring to the Table</h2>
          <p className="section-subtitle">
            End-to-end services designed to take your business from concept to
            launch — and beyond.
          </p>
        </div>

        <div className="services-grid" ref={gridRef}>
          {services.map((s, i) => (
            <div className="service-card" key={i}>
              <div className="service-number">{s.num}</div>
              <div className="service-icon-wrapper">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <a href="#contact" className="service-link">
                Learn More
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
