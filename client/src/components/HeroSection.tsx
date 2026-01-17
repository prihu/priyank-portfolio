/**
 * Hero Section - LIGHT THEME WITH PHOTO
 * Professional appearance with headshot and Calendly CTA
 */

import { motion } from "framer-motion";
import { Calendar, Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const words = ["Product Leader", "AI Innovator", "Fintech Builder", "Growth Driver"];
  const [displayWord, setDisplayWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayWord((prev) => (prev + 1) % words.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/30"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-green-500"
              />
              <span className="text-sm font-medium text-primary">
                Open to MAANG Opportunities
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-4">
                Priyank{" "}
                <span className="gradient-text-primary">Garg</span>
              </h1>
              <motion.div
                key={displayWord}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="text-2xl sm:text-3xl font-semibold gradient-text-primary h-12"
              >
                {words[displayWord]}
              </motion.div>
            </motion.div>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground mb-8 max-w-xl"
            >
              Transforming fintech with{" "}
              <span className="font-semibold text-primary">Agentic AI & LLMs</span>
              . 7+ years scaling products from $10M to $250M+.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg"
                  asChild
                >
                  <a
                    href="https://calendly.com/priyankgarg/mock-interview-clone"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book a Call
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary/30 hover:bg-primary/5 px-8 py-6 text-lg rounded-xl"
                  asChild
                >
                  <a href="/Priyank_Garg_CV.pdf" target="_blank" rel="noopener noreferrer">
                    Download Resume
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-4"
            >
              <motion.a
                href="https://github.com/prihu"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-lg bg-muted hover:bg-muted/80 text-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/gargpriyank"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-lg bg-muted hover:bg-muted/80 text-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:priyankgarg28@gmail.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-lg bg-muted hover:bg-muted/80 text-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:flex items-center justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative w-full max-w-md"
            >
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-2xl opacity-20" />
              
              {/* Photo container */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-primary/20 shadow-2xl">
                <img
                  src="/images/priyank-headshot.jpg"
                  alt="Priyank Garg"
                  className="w-full h-auto object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Metrics Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 pt-12 border-t border-border"
        >
          {[
            { value: "$250M+", label: "Loan Value" },
            { value: "10M+", label: "Customers" },
            { value: "7+", label: "Years" },
            { value: "80%", label: "Faster Approvals" },
          ].map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl sm:text-3xl font-display font-bold gradient-text-primary mb-1">
                {metric.value}
              </div>
              <div className="text-sm text-muted-foreground">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
