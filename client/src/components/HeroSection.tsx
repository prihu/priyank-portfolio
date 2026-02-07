/**
 * Hero Section - "Revenue Engine Builder" Narrative
 * Unique positioning: Not a PM who ships features. A builder who creates revenue engines.
 */

import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Github, Linkedin, Mail, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const HEADSHOT_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663269140862/ZvFgfCGILBMHwDuA.jpg";
const RESUME_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663269140862/jNqoIdznxFjlrNUT.pdf";

const engineParts = [
  { label: "Voice AI that serves 2M+ customers", delay: 0 },
  { label: "Lending APIs processing $250M+", delay: 0.1 },
  { label: "ML models that cut approval from 30min → 5min", delay: 0.2 },
  { label: "Growth loops with 70% repeat usage", delay: 0.3 },
];

export default function HeroSection() {
  const roles = [
    "Revenue Engine Builder",
    "AI Product Leader",
    "Chaos → Structure Specialist",
    "Fintech Scale Architect",
  ];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Subtle geometric background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left: Content (3 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            {/* The Hook - Not a badge, a statement */}
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm font-mono tracking-wider text-muted-foreground mb-4 uppercase"
            >
              I don't just build products.
            </motion.p>

            {/* Main Statement */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-2 leading-[1.1]"
            >
              I Build{" "}
              <span className="gradient-text">Revenue Engines.</span>
            </motion.h1>

            {/* Rotating Role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="h-10 sm:h-12 mb-6 flex items-center"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRole}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="text-lg sm:text-xl font-medium text-primary flex items-center gap-2"
                >
                  <Zap className="w-4 h-4" />
                  {roles[currentRole]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            {/* The Narrative - Not a description, a story */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-8 max-w-xl"
            >
              <p className="text-lg text-foreground/80 leading-relaxed">
                <span className="font-semibold text-foreground">Priyank Garg.</span>{" "}
                7 years turning messy fintech problems into machines that print money.
                From a 30-minute loan approval that I compressed to 5 minutes,
                to an AI voice agent that serves 2 million customers without adding a single headcount.
              </p>
              <p className="text-base text-muted-foreground mt-3 italic">
                Engineering brain (BITS Pilani). Finance instinct (IMT Ghaziabad). Builder DNA.
              </p>
            </motion.div>

            {/* What I've Built - Engine Parts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-8 space-y-2"
            >
              {engineParts.map((part, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + part.delay }}
                  className="flex items-center gap-3 text-sm text-foreground/70"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {part.label}
                </motion.div>
              ))}
            </motion.div>

            {/* CTA - Direct, no fluff */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button
                  size="lg"
                  className="bg-foreground text-background hover:bg-foreground/90 font-semibold px-8 py-6 text-base rounded-xl shadow-lg"
                  asChild
                >
                  <a
                    href="https://calendly.com/priyankgarg/mock-interview-clone"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Let's Talk
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-foreground/20 hover:bg-foreground/5 px-8 py-6 text-base rounded-xl"
                  asChild
                >
                  <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                    View Resume
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Social - Minimal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex items-center gap-3"
            >
              {[
                { icon: Github, href: "https://github.com/prihu", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/gargpriyank", label: "LinkedIn" },
                { icon: Mail, href: "mailto:priyankgarg28@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="p-2.5 rounded-lg border border-border hover:border-primary/30 hover:bg-primary/5 text-muted-foreground hover:text-foreground transition-all"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Photo (2 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:flex lg:col-span-2 items-center justify-center"
          >
            <div className="relative w-full max-w-sm">
              {/* Glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/15 rounded-3xl blur-2xl" />
              
              {/* Photo */}
              <div className="relative rounded-2xl overflow-hidden border border-border shadow-xl">
                <img
                  src={HEADSHOT_URL}
                  alt="Priyank Garg - Product Leader and Revenue Engine Builder"
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
              </div>

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl px-4 py-3 shadow-lg"
              >
                <div className="text-xs text-muted-foreground">Currently building</div>
                <div className="text-sm font-semibold text-foreground">AI Contact Center @ IndusInd</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
