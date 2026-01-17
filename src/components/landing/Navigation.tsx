import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import trackifaiLogo from "@/assets/trackifai-logo.png";

const Navigation = () => {
  const navLinks = [
    { label: "Product", href: "/product" },
    { label: "Pricing", href: "/pricing" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1">
          <img src={trackifaiLogo} alt="trackIfAI logo" className="w-14 h-14 object-contain" />
          <span className="text-xl font-serif font-semibold tracking-tight -ml-1">
            <span className="text-foreground">trackif</span>
            <span className="text-primary">AI</span>
          </span>
        </Link>

        {/* Nav Links + Actions */}
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium">
              Log in
            </button>
            <motion.button
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="px-5 py-2 rounded-xl btn-sage text-sm"
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
