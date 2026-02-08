/**
 * Experience Section - The Condensed Timeline
 * High-level context only. Specifics are in Case Studies.
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Building2, Calendar } from "lucide-react";

const experiences = [
  {
    company: "IndusInd Bank",
    role: "DVP Product — Consumer Banking",
    period: "2024 — Present",
    context: "Leading the AI transformation of a legacy banking contact center.",
    win: "Deployed Voice AI that handles 2M+ calls/month.",
    lesson: "AI isn't about replacing humans; it's about removing robot work from humans.",
  },
  {
    company: "Prefr (acquired by CRED)",
    role: "Product Manager — Growth",
    period: "2021 — 2024",
    context: "Scaled a lending API from early traction to market infrastructure.",
    win: "Built the engine behind $250M+ in loans.",
    lesson: "In fintech, your product is only as good as your risk model.",
  },
  {
    company: "NeoGrowth Credit",
    role: "Associate Product Manager",
    period: "2018 — 2021",
    context: "Digitizing MSME lending for the first time.",
    win: " slashed approval times by 6x with ML.",
    lesson: "Speed is the ultimate feature in lending.",
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" ref={ref} className="relative py-24 lg:py-32 bg-secondary/5">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="sticky top-32"
          >
            <p className="text-sm font-mono tracking-wider text-muted-foreground uppercase mb-3">
              The Path
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
              Building at <span className="gradient-text">Scale</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-balance">
              I've spent my career in high-stakes environment where "move fast and break things"
              isn't an option — because it's people's money.
            </p>

            <div className="p-6 rounded-2xl border border-primary/20 bg-primary/5 inline-block">
              <p className="text-sm font-medium text-foreground mb-2">
                Looking for the deep dive?
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                I've written detailed case studies on the specific problems,
                bets, and outcomes for these roles.
              </p>
              <a
                href="#case-studies"
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
              >
                Jump to Case Studies <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative pl-8 border-l border-border hover:border-primary/50 transition-colors"
              >
                <div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-border group-hover:bg-primary transition-colors" />

                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                    {exp.company}
                  </h3>
                  <span className="text-xs font-mono text-muted-foreground flex items-center gap-1 bg-background px-2 py-1 rounded-full border border-border">
                    <Calendar className="w-3 h-3" />
                    {exp.period}
                  </span>
                </div>

                <p className="text-sm font-medium text-primary mb-3">
                  {exp.role}
                </p>

                <p className="text-base text-foreground/80 mb-3">
                  {exp.context} <span className="font-semibold text-foreground">{exp.win}</span>
                </p>

                <div className="text-sm text-muted-foreground italic pl-4 border-l-2 border-primary/20">
                  "{exp.lesson}"
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
