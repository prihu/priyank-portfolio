/**
 * About Section - The Origin Story
 * Not a boring bio. A narrative arc showing how each career move built on the last.
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const journeySteps = [
  {
    phase: "The Foundation",
    period: "BITS Pilani → IMT Ghaziabad",
    narrative: "Started as an electronics engineer who could build circuits, then added the financial lens at IMT. This dual wiring — engineering precision meets financial intuition — became my unfair advantage.",
    highlight: "Engineering + Finance = Rare Dual Lens",
  },
  {
    phase: "The First Engine",
    period: "NeoGrowth Credit",
    narrative: "Cut my teeth in MSME lending. Talked to 150+ merchants. Built NeoScore — an ML model that turned 30-minute loan approvals into 5-minute decisions. Watched loan volumes jump 6x. That's when I learned: the best products eliminate friction, not add features.",
    highlight: "6x loan volumes through ML automation",
  },
  {
    phase: "The Scale Machine",
    period: "Prefr (acquired by CRED)",
    narrative: "Took a lending API from zero to $250M+ in transaction value. Built the infrastructure that powered Google, Cars24, and Paisabazaar's lending. Grew to 3M+ monthly applicants. This wasn't product management — it was building a revenue engine that ran 24/7.",
    highlight: "$250M+ lending infrastructure at scale",
  },
  {
    phase: "The AI Frontier",
    period: "IndusInd Bank",
    narrative: "Now I'm doing something that hasn't been done in Indian banking: turning a 400+ agent contact center into an AI-powered operation. Piloting voice AI that serves 2M+ additional customers without adding headcount. This is where AI meets real business impact.",
    highlight: "Pioneering AI in traditional banking",
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
            The Arc
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            Each Move, a <span className="gradient-text">Bigger Problem</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            My career isn't a list of job titles. It's a story of solving 
            progressively harder problems — each building on the last.
          </p>
        </motion.div>

        {/* Journey Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/10 via-primary/30 to-primary/10" />

          <div className="space-y-10">
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative pl-12 lg:pl-0 lg:grid lg:grid-cols-2 lg:gap-12 items-start`}
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 lg:left-1/2 lg:-translate-x-1/2 top-8 w-3 h-3 rounded-full bg-primary border-2 border-background shadow-md z-10" />

                {/* Content */}
                <div className={`${index % 2 === 0 ? "lg:text-right lg:pr-12" : "lg:col-start-2 lg:pl-12"}`}>
                  <div className="p-6 rounded-2xl border border-border bg-card/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                    {/* Phase label */}
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "lg:justify-end" : ""}`}>
                      <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {step.phase}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {step.period}
                      </span>
                    </div>

                    {/* Narrative */}
                    <p className="text-base text-foreground/80 leading-relaxed mb-4">
                      {step.narrative}
                    </p>

                    {/* Highlight */}
                    <div className={`flex items-center gap-2 text-sm font-semibold text-primary ${index % 2 === 0 ? "lg:justify-end" : ""}`}>
                      <ArrowRight className="w-4 h-4" />
                      {step.highlight}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* The Thread */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-6 sm:p-8 rounded-2xl border border-primary/20 bg-primary/5">
            <p className="text-lg sm:text-xl font-display font-semibold text-foreground mb-2">
              The Common Thread?
            </p>
            <p className="text-base text-muted-foreground max-w-lg mx-auto">
              Every role, I found a broken system, turned it into a machine, 
              and left it running at 10x the scale I found it.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
