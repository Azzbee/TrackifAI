import { Link } from "react-router-dom";
import trackifaiLogo from "@/assets/trackifai-logo.png";

const Footer = () => {
  const links = [
    { label: "Product", href: "/product" },
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "/faq" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ];

  return (
    <footer className="py-16 px-6 section-divider">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-0.5">
            <img 
              src={trackifaiLogo} 
              alt="trackIfAI logo" 
              className="w-16 h-16 object-contain"
            />
            <span className="text-xl font-serif font-semibold tracking-tight -ml-1.5">
              <span className="text-foreground">trackif</span>
              <span className="text-primary">AI</span>
            </span>
          </Link>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-8">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-sans"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground font-sans mb-2">
            Built for the next generation of founders.
          </p>
          <p className="text-xs text-muted-foreground/60 font-sans">
            © 2024 trackifAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;