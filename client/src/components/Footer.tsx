/**
 * Footer - Clean, professional, light theme
 */

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Calendar, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 border-t border-border bg-muted/30">
      {/* Gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full bg-muted/50 border border-border hover:border-primary/30 text-muted-foreground hover:text-foreground transition-all"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full">
            {/* Left - Brand */}
            <div className="text-center md:text-left">
              <p className="text-lg font-display font-bold text-foreground">
                Priyank<span className="text-primary">.</span>
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Building revenue engines with AI & product thinking
              </p>
            </div>

            {/* Center - Social */}
            <div className="flex items-center gap-3">
              {[
                { icon: Github, href: "https://github.com/prihu", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/gargpriyank", label: "LinkedIn" },
                { icon: Mail, href: "mailto:priyankgarg28@gmail.com", label: "Email" },
                { icon: Calendar, href: "https://calendly.com/priyankgarg/mock-interview-clone", label: "Book a Call" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2.5 rounded-lg border border-border hover:border-primary/30 hover:bg-primary/5 text-muted-foreground hover:text-foreground transition-all"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>

            {/* Right - Copyright */}
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground flex items-center gap-1 justify-center md:justify-end">
                Built with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> and strong opinions
              </p>
              <p className="text-xs text-muted-foreground/60 mt-1">
                © {new Date().getFullYear()} Priyank Garg
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
