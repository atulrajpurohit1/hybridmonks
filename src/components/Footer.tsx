const footerLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const address = "Chand Colony, Sadri, 306702, Pali, Rajasthan (India)";
const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  address,
)}`;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden border-t border-ink/15 bg-paperAccent/80 px-5 py-12 md:px-8"
      id="footer"
    >
      <div className="absolute inset-x-[-8%] bottom-0 h-48 temple-silhouette opacity-[0.08]" />
      <div className="pointer-events-none absolute inset-0 paper-grain opacity-20" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 border-b border-ink/10 pb-10 md:flex-row md:items-center md:justify-between">
          <a href="#hero" className="flex items-center gap-3" aria-label="HybridMonks home">
            <img
              src="/logo.png"
              alt=""
              className="h-14 w-14 object-contain md:h-16 md:w-16"
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

          <div className="flex flex-col gap-3 font-jp tracking-[0.08em] sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3">
            <a href="tel:+918799001675" className="transition-colors hover:text-ink">
              +91 87990 01675
            </a>
            <a href="tel:+918955535787" className="transition-colors hover:text-ink">
              +91 89555 35787
            </a>
            <a href="mailto:info@hybridmonks.com" className="transition-colors hover:text-ink">
              info@hybridmonks.com
            </a>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-ink"
            >
              {address}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
