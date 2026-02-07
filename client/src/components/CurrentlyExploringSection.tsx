/**
 * Currently Exploring Section
 * Shows what kind of roles and environments Priyank thrives in.
 * Inspired by Lovable culture: high velocity, ownership, chaos→structure.
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Heart, X, Calendar, ArrowRight } from "lucide-react";

const thrive = [
  "High-velocity teams that ship weekly, not quarterly",
  "Ownership culture — I own the outcome, not just the roadmap",
  "Hard problems at the intersection of AI and real business impact",
  "Environments where the best idea wins, regardless of title",
  "Companies where product is the growth engine, not just a cost center",
  "Teams that are energized by ambiguity and turn chaos into structure",
];

const notFor = [
  "Feature factories where PMs are ticket writers",
  "Consensus-driven cultures where nothing ships",
  "Roles where 'strategy' means making decks, not decisions",
  "Organizations where AI is a buzzword, not a business lever",
];

export default function CurrentlyExploringSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="exploring" ref={ref} className="relative py-24 lg:py-32">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-mono tracking-wider text-muted-foreground uppercase mb-3">
            What's Next
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            Where I <span className="gradient-text">Thrive</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            I've learned that the right environment matters more than the right title. 
            Here's what I'm looking for — and what I'm not.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* What Energizes Me */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-6 sm:p-8 rounded-2xl border border-green-500/20 bg-green-500/5 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-green-500/15">
                  <Heart className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground">
                  What Energizes Me
                </h3>
              </div>
              <div className="space-y-4">
                {thrive.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <Rocket className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm text-foreground/80 leading-relaxed">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Not For Me */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="p-6 sm:p-8 rounded-2xl border border-red-500/20 bg-red-500/5 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-red-500/15">
                  <X className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground">
                  Not For Me
                </h3>
              </div>
              <div className="space-y-4">
                {notFor.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-foreground/80 leading-relaxed">{item}</span>
                  </motion.div>
                ))}
              </div>

              {/* Spacer to match height */}
              <div className="mt-8 pt-6 border-t border-red-500/10">
                <p className="text-xs text-muted-foreground italic">
                  "Life's too short to build products nobody uses in organizations that move at the speed of bureaucracy."
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-base text-muted-foreground mb-4">
            If this resonates, let's talk.
          </p>
          <motion.a
            href="https://calendly.com/priyankgarg/mock-interview-clone"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background font-semibold text-sm hover:bg-foreground/90 transition-colors"
          >
            <Calendar className="w-4 h-4" />
            Book a 30-Min Intro Call
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
