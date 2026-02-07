/**
 * How I Think Section
 * Mirrors Lovable's evaluation criteria with real stories from Priyank's career
 * Shows HOW he thinks, not just WHAT he knows
 */

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  Brain,
  Zap,
  Compass,
  MessageSquare,
  Flame,
  Target,
  Wrench,
  ChevronRight,
} from "lucide-react";

const operatingPrinciples = [
  {
    icon: Flame,
    title: "I Turn Chaos Into Structure",
    tagline: "Give me a mess. I'll give you a system.",
    story:
      "When I joined IndusInd Bank, the contact center was a black box. 2M+ calls, no data on why people called, no routing logic, just humans answering phones. Within 8 weeks, I mapped every call intent, built a classification taxonomy, and designed an AI routing system. The team went from 'we're drowning' to 'we know exactly what's happening and why.'",
    proof: "Built intent classification for 2M+ monthly calls in 8 weeks",
    color: "from-blue-500 to-indigo-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    textColor: "text-blue-700",
  },
  {
    icon: Zap,
    title: "I Move Fast and Ship",
    tagline: "Bias for action. Perfect is the enemy of shipped.",
    story:
      "At Prefr, we had a 30-minute loan approval process. Leadership wanted a 6-month roadmap to fix it. I said: 'Give me 6 weeks and 3 engineers.' We shipped an ML-based instant pre-qualification in 5 weeks. It wasn't perfect — the model initially underperformed for self-employed applicants — but it was live, learning, and converting 35% better than the old flow. We iterated from there.",
    proof: "Shipped ML pre-qualification in 5 weeks, not 6 months",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    textColor: "text-amber-700",
  },
  {
    icon: Compass,
    title: "I'm Comfortable With Ambiguity",
    tagline: "I don't need a map. I need a compass.",
    story:
      "NeoGrowth had no product team when I joined. No PRDs, no user research, no data pipeline. Just a lending business that needed to go digital. Instead of waiting for clarity, I started with the highest-friction point — the merchant onboarding flow — and built backwards from there. Within a quarter, we had a digital lending stack processing $10M/month.",
    proof: "Built digital lending from zero to $10M/month with no existing product infrastructure",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    textColor: "text-emerald-700",
  },
  {
    icon: MessageSquare,
    title: "Strong Opinions, Loosely Held",
    tagline: "I'll argue for my position. Then change my mind with data.",
    story:
      "I was convinced that voice AI needed to sound perfectly human to succeed. I pushed hard for premium voice synthesis, spent weeks on quality. Then our data showed something unexpected: customers actually preferred a slightly formal tone for banking queries — it felt more 'official' and trustworthy. I killed my own feature direction, switched approach, and NPS jumped 15 points. The lesson: fall in love with the problem, not your solution.",
    proof: "Killed my own feature when data proved me wrong — NPS improved 15 points",
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-50",
    borderColor: "border-violet-200",
    textColor: "text-violet-700",
  },
  {
    icon: Brain,
    title: "Energized by Hard Problems",
    tagline: "Easy problems don't need me. The impossible ones do.",
    story:
      "Everyone told me AI voice agents couldn't handle Indian accents and multilingual switching. 'Too many languages, too many dialects, it'll never work.' That's exactly the kind of problem I live for. We built a context-aware system that handles Hindi-English code-switching mid-sentence. It now serves 2M+ customers monthly. The 'impossible' problem became our biggest competitive advantage.",
    proof: "Solved multilingual voice AI that 'couldn't be done' — now serves 2M+ customers",
    color: "from-rose-500 to-pink-500",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-200",
    textColor: "text-rose-700",
  },
  {
    icon: Wrench,
    title: "I Take Ownership End-to-End",
    tagline: "I don't throw specs over the wall. I ship with the team.",
    story:
      "At Prefr, I didn't just write PRDs and hand them to engineering. I sat in code reviews, understood the ML model architecture, debugged data pipeline issues at 2am, and was the first person to test every release. When the credit scoring model had a bias issue with self-employed applicants, I didn't file a ticket — I worked with the data science team to retrain the model with better features. Product managers who can't read code are bringing a knife to a gunfight.",
    proof: "Debugged ML bias issues hands-on, retrained credit model with data science team",
    color: "from-cyan-500 to-blue-500",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-200",
    textColor: "text-cyan-700",
  },
];

export default function HowIThinkSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section
      id="how-i-think"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span className="inline-block text-primary font-mono text-sm uppercase tracking-wider mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            Operating System
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 text-foreground">
            How My{" "}
            <span className="gradient-text">Brain Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every PM claims to be "data-driven" and "customer-obsessed."
            Here's how I actually operate — with real stories, not buzzwords.
          </p>
        </motion.div>

        {/* Principles - Expandable Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {operatingPrinciples.map((principle, index) => {
            const Icon = principle.icon;
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="glass-card overflow-hidden"
              >
                {/* Header - Always Visible */}
                <div
                  className={`p-6 cursor-pointer transition-all ${
                    isExpanded
                      ? `${principle.bgColor} ${principle.borderColor}`
                      : "hover:bg-muted/30"
                  }`}
                  onClick={() =>
                    setExpandedIndex(isExpanded ? null : index)
                  }
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${principle.color} flex items-center justify-center flex-shrink-0`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-display font-bold text-foreground">
                        {principle.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {principle.tagline}
                      </p>
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 90 : 0 }}
                      className="text-muted-foreground flex-shrink-0"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                </div>

                {/* Expanded Story */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 border-t border-border">
                        <div className="pt-4 space-y-4">
                          <p className="text-muted-foreground leading-relaxed">
                            {principle.story}
                          </p>
                          <div
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${principle.bgColor} ${principle.borderColor} border`}
                          >
                            <Target className="w-4 h-4 text-foreground" />
                            <span
                              className={`text-sm font-semibold ${principle.textColor}`}
                            >
                              {principle.proof}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <blockquote className="text-xl italic text-muted-foreground max-w-2xl mx-auto">
            "Show how you think, not just what you know."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
