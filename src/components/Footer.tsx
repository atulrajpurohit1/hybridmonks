const footerLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-ink/15 bg-paperAccent/80 px-5 py-12 md:px-8" id="footer">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 border-b border-ink/10 pb-10 md:flex-row md:items-center md:justify-between">
          <a href="#hero" className="flex items-center gap-3" aria-label="HybridMonks home">
            <img
              src="/logo.png"
              alt=""
              className="h-12 w-12 object-contain"
            />
            <span className="font-display text-2xl font-light tracking-[0.16em] text-ink">
              HybridMonks
            </span>
          </a>

          <nav className="flex flex-wrap gap-x-8 gap-y-4">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-jp text-[0.7rem] uppercase tracking-[0.34em] text-inkMuted transition-colors hover:text-seal"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-6 pt-9 text-sm text-inkFaint md:flex-row md:items-center md:justify-between">
          <p className="font-jp uppercase tracking-[0.28em]">
            &copy; {year} HybridMonks. All rights reserved.
          </p>

          <div className="flex flex-col gap-3 font-jp uppercase tracking-[0.26em] sm:flex-row sm:gap-8">
            <a href="tel:+91XXXXXXXXXX" className="transition-colors hover:text-ink">
              +91 XXXXX XXXXX
            </a>
            <a href="mailto:info@example.com" className="transition-colors hover:text-ink">
              info@example.com
            </a>
            <span>Purohitvas</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
