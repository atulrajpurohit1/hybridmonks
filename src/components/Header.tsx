"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Why Us", href: "#why-us" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`} id="header">
      <div className="container header-inner">
        {/* Logo */}
        <a href="#" className="logo" onClick={handleNavClick}>
          <img src="/logo.png" alt="HybridMonks Logo" />
          <span className="logo-text">HybridMonks</span>
        </a>

        {/* Navigation */}
        <nav className={`nav ${mobileOpen ? "open" : ""}`} id="main-nav">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link ${activeSection === link.href.slice(1) ? "active" : ""}`}
              onClick={handleNavClick}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="nav-cta-link"
            onClick={handleNavClick}
          >
            Contact Us
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`mobile-toggle ${mobileOpen ? "open" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
