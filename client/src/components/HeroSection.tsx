/**
 * Hero Section - "Revenue Engine Builder" Narrative
 * Unique positioning: Not a PM who ships features. A builder who creates revenue engines.
 */

import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Github, Linkedin, Mail, ArrowRight, Zap, Target, TrendingUp, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const HEADSHOT_URL = "/headshot.jpg";
const RESUME_URL = "/Priyank_Garg_Resume.pdf";

const coreCompetencies = [
  { label: "Revenue Systems", icon: TrendingUp, delay: 0 },
  { label: "AI Product Strategy", icon: Brain, delay: 0.1 },
  { label: "Fintech Infrastructure", icon: Cpu, delay: 0.2 },
  { label: "0 → 1 → Scale", icon: Target, delay: 0.3 },
];

// Helper component for icons
function Brain(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
  );
}

export default function HeroSection() {
  const roles = [
    "Revenue Engine Builder",
    "Product Strategist",
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
              Beyond Features. Beyond Roadmaps.
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
                7 years at the intersection of <span className="text-foreground font-medium">Engineering, Finance, and Product.</span>
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mt-2">
                I don't just ship software. I architect systems that solve complex business problems,
                from automating lending decisions to building AI-first customer operations.
              </p>
            </motion.div>

            {/* Core Competencies - High level, not metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-8 grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {coreCompetencies.map((comp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + comp.delay }}
                  className="flex flex-col items-start gap-2 p-3 rounded-lg bg-secondary/5 border border-border/50 hover:bg-secondary/10 transition-colors"
                >
                  <comp.icon className="w-5 h-5 text-primary" />
                  <span className="text-xs font-semibold text-foreground/90 leading-tight">
                    {comp.label}
                  </span>
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
