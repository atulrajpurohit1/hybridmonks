export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Background decorations */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />
      <div className="hero-grid" />
      <div className="hero-line" />

      <div className="container">
        <div className="hero-content">
          <span className="hero-eyebrow">
            <span className="pulse-dot" />
            Welcome to HybridMonks
          </span>

          <h1 className="hero-heading">
            Crafting <span className="accent">Premium</span> Digital
            Experiences That <span className="accent">Inspire</span>
          </h1>

          <p className="hero-desc">
            We blend strategy, design, and technology to build solutions that
            elevate brands and drive measurable growth for forward-thinking
            businesses.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary" id="hero-cta">
              Start Your Project
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a href="#services" className="btn btn-outline-light" id="hero-secondary-cta">
              Explore Services
            </a>
          </div>

          <div className="hero-metrics">
            <div className="metric">
              <div className="metric-value">150+</div>
              <div className="metric-label">Projects Delivered</div>
            </div>
            <div className="metric">
              <div className="metric-value">50+</div>
              <div className="metric-label">Happy Clients</div>
            </div>
            <div className="metric">
              <div className="metric-value">5+</div>
              <div className="metric-label">Years of Expertise</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right decorative visual */}
      <div className="hero-visual" aria-hidden="true">
        <div className="hero-visual-ring">
          <div className="hero-visual-center">⬡</div>
        </div>
      </div>
    </section>
  );
}
