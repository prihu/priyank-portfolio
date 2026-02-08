/**
 * About Section - The "Lens" Story
 * Focuses on how each career phase added a new mental model (Engineering -> Finance -> Product).
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, TrendingUp, Users } from "lucide-react";

const journeySteps = [
  {
    phase: "The Engineer's Lens",
    period: "BITS Pilani",
    icon: Cpu,
    narrative: "It started with circuits and code. This phase wired my brain for systems thinking. I learned that every complex problem can be broken down into composable parts, and if you optimize the subsystems, the whole machine runs faster.",
    highlight: "System Architecture & Logic",
    color: "text-blue-600 bg-blue-50 border-blue-200",
  },
  {
    phase: "The Investor's Lens",
    period: "IMT Ghaziabad",
    icon: TrendingUp,
    narrative: "Engineering taught me *how* to build, but Finance taught me *what* creates value. I learned to look at products not just as code, but as cash flow engines. CAC, LTV, and Margins aren't just metrics—they are design constraints.",
    highlight: "Unit Economics & Risk",
    color: "text-emerald-600 bg-emerald-50 border-emerald-200",
  },
  {
    phase: "The Product Lens",
    period: "The Builder Years",
    icon: Users,
    narrative: "This is where the lenses converged. I don't just write specs; I build systems that are technically sound (Engineering) and commercially viable (Finance). Whether it's lending APIs or Voice AI, the goal is always the same: scalable value.",
    highlight: "Empathy & Execution",
    color: "text-violet-600 bg-violet-50 border-violet-200",
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="relative py-24 lg:py-32">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-mono tracking-wider text-muted-foreground uppercase mb-3">
            The Evolution
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            How My <span className="gradient-text">Lens Evolved</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            My career isn't a linear path. It's a stacking of different mental models.
            Each phase added a new layer to how I see product problems.
          </p>
        </motion.div>

        {/* Journey Options - Cards instead of Timeline */}
        <div className="grid md:grid-cols-3 gap-6">
          {journeySteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="h-full"
              >
                <div className="p-6 h-full rounded-2xl border border-border bg-card/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col">
                  {/* Icon & Phase */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg ${step.color} border`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{step.phase}</h3>
                      <p className="text-xs text-muted-foreground">{step.period}</p>
                    </div>
                  </div>

                  {/* Narrative */}
                  <p className="text-sm text-foreground/80 leading-relaxed mb-6 flex-grow">
                    {step.narrative}
                  </p>

                  {/* Highlight */}
                  <div className="pt-4 border-t border-border/50">
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">
                      Key Takeaway
                    </p>
                    <div className="font-medium text-foreground text-sm">
                      {step.highlight}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
