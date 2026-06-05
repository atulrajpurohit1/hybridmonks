"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, ease: "easeOut" }}
      className={`fixed left-0 right-0 top-0 z-50 border-b transition-colors duration-700 ${
        scrolled ? "border-ink/10 bg-paper/95" : "border-transparent bg-paper/70"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <a
          href="#hero"
          className="z-50 flex items-center gap-3"
          aria-label="HybridMonks home"
        >
          <img
            src="/logo.png"
            alt=""
            className="h-12 w-12 object-contain"
          />
          <span className="font-display text-2xl font-light tracking-[0.16em] text-ink">
            HybridMonks
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative font-jp text-[0.72rem] uppercase tracking-[0.34em] transition-colors duration-300 ${
                activeSection === link.href.slice(1)
                  ? "text-seal"
                  : "text-inkMuted hover:text-ink"
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-2 left-0 h-px bg-seal transition-all duration-500 ${
                  activeSection === link.href.slice(1) ? "w-full" : "w-0"
                }`}
              />
            </a>
          ))}
          <a
            href="#contact"
            className="border-b border-seal/50 pb-1 font-jp text-[0.72rem] uppercase tracking-[0.34em] text-seal transition-colors hover:text-ink"
          >
            Contact
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          className="z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span
            className={`h-px w-6 bg-ink transition-transform duration-300 ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-ink transition-opacity duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-ink transition-transform duration-300 ${
              mobileOpen ? "-translate-y-1 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="absolute inset-x-0 top-0 z-40 flex h-screen flex-col items-center justify-center gap-9 bg-paperLight text-ink"
          >
            <span className="font-jp text-7xl text-ink/[0.06]" aria-hidden="true">
              静
            </span>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-display text-4xl font-light tracking-[0.18em] text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="border-b border-seal pb-2 font-jp text-xs uppercase tracking-[0.4em] text-seal"
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
