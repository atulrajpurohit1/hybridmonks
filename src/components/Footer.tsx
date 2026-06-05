const footerLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="container">
        {/* Top row */}
        <div className="footer-inner">
          <div className="footer-brand">
            <img src="/logo.png" alt="HybridMonks Logo" />
            <span>HybridMonks</span>
          </div>

          <nav className="footer-nav">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom row */}
        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {year} HybridMonks. All rights reserved.
          </p>

          <div className="footer-contact-row">
            <a href="tel:+91XXXXXXXXXX">+91 XXXXX XXXXX</a>
            <a href="mailto:info@example.com">info@example.com</a>
            <span>Purohitvas Gangadham Wasada</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
