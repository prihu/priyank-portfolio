/**
 * Footer Component - MINIMAL & ELEGANT
 */

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/prihu", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/gargpriyank", label: "LinkedIn" },
  { icon: Mail, href: "mailto:priyankgarg28@gmail.com", label: "Email" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 border-t border-border/30">
      {/* Gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-primary/30 text-muted-foreground hover:text-foreground transition-all"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>

          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-3xl font-display font-bold gradient-text-primary"
          >
            Priyank Garg
          </motion.div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/30 text-muted-foreground hover:text-foreground transition-all"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} Priyank Garg. Crafted with{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="inline-block text-red-500"
            >
              ❤️
            </motion.span>{" "}
            for innovation.
          </p>
        </div>
      </div>
    </footer>
  );
}
