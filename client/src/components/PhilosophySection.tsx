/**
 * Philosophy Section - PM NARRATIVE & APPROACH
 * Strategic storytelling, PM philosophy, and career journey
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Lightbulb, Target, Users, Rocket, ArrowRight, Quote, Compass, Heart } from "lucide-react";

const philosophyPillars = [
  {
    icon: Target,
    title: "Outcome Over Output",
    description: "I measure success by customer impact and business metrics, not features shipped. Every sprint should move a needle that matters.",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: Users,
    title: "Build With, Not For",
    description: "150+ merchant interviews taught me that the best products emerge from deep customer empathy, not assumptions in conference rooms.",
    color: "from-cyan-500 to-teal-600",
  },
  {
    icon: Rocket,
    title: "AI as Augmentation",
    description: "Technology should amplify human capability, not replace human judgment. My Agentic AI serves 2M customers while keeping humans in the loop.",
    color: "from-orange-500 to-amber-600",
  },
  {
    icon: Heart,
    title: "Democratize Access",
    description: "Financial inclusion drives my work. From MSME loans to consumer credit, I build products that make financial services accessible to the underserved.",
    color: "from-pink-500 to-rose-600",
  },
];

const journeyMilestones = [
  {
    year: "2018",
    title: "The Foundation",
    description: "Started at NeoGrowth with a simple question: Why do MSMEs wait 30 days for loan approval? Built NeoScore ML model that cut it to 5 minutes.",
    learning: "Learned that the best PM solutions often come from questioning 'industry standards' that everyone accepts.",
  },
  {
    year: "2021",
    title: "The Scale Challenge",
    description: "Joined Prefr to solve lending infrastructure. Grew from startup to $250M monthly transactions, serving Google and Cars24 as clients.",
    learning: "Discovered that B2B products require thinking in systems, not features. One API change affects thousands of downstream users.",
  },
  {
    year: "2024",
    title: "The AI Frontier",
    description: "At IndusInd Bank, pioneering Agentic Voice AI that serves 2M+ customers. Proving that AI can scale human connection, not replace it.",
    learning: "Understanding that enterprise AI adoption requires building trust through transparency and measurable outcomes.",
  },
];

export default function PhilosophySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeJourney, setActiveJourney] = useState<number | null>(null);

  return (
    <section
      id="philosophy"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-flex items-center gap-2 text-primary font-mono text-sm uppercase tracking-wider mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
            whileHover={{ scale: 1.05 }}
          >
            <Compass className="w-4 h-4" />
            My Approach
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            Why I Build{" "}
            <span className="gradient-text-primary">What I Build</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            After 7 years in fintech, I've developed a clear philosophy: 
            <span className="text-foreground font-medium"> Technology should make financial services more human, not less.</span>
          </p>
        </motion.div>

        {/* The Big Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="glass-card p-8 lg:p-12 relative">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/20" />
            <blockquote className="text-2xl lg:text-3xl font-display font-medium text-center text-foreground leading-relaxed pl-8">
              "The best fintech products don't just move money faster—they move people forward. 
              Every loan approved is a business funded, every second saved is trust earned."
            </blockquote>
            <div className="text-center mt-6">
              <span className="text-primary font-medium">— My North Star</span>
            </div>
          </div>
        </motion.div>

        {/* Philosophy Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {philosophyPillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div className="glass-card p-6 h-full relative overflow-hidden">
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${pillar.color} rounded-2xl opacity-0 group-hover:opacity-15 blur-xl transition-opacity duration-500`}
                />
                
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-4 shadow-lg`}
                >
                  <pillar.icon className="w-6 h-6 text-white" />
                </motion.div>

                <h3 className="text-lg font-display font-bold text-foreground mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Career Journey Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-display font-bold text-center mb-8">
            The <span className="gradient-text-primary">Journey</span> That Shaped My Thinking
          </h3>

          <div className="space-y-6">
            {journeyMilestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
                onMouseEnter={() => setActiveJourney(index)}
                onMouseLeave={() => setActiveJourney(null)}
                className="group cursor-pointer"
              >
                <div className="glass-card p-6 relative overflow-hidden">
                  <div className="flex items-start gap-6">
                    {/* Year Badge */}
                    <div className="shrink-0">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center shadow-lg"
                      >
                        <span className="text-white font-display font-bold">{milestone.year}</span>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h4 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {milestone.title}
                      </h4>
                      <p className="text-muted-foreground mb-3">
                        {milestone.description}
                      </p>
                      
                      {/* Learning - Revealed on hover */}
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: activeJourney === index ? "auto" : 0,
                          opacity: activeJourney === index ? 1 : 0
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 border-t border-border/50">
                          <div className="flex items-start gap-2">
                            <Lightbulb className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                            <p className="text-sm text-foreground font-medium">
                              <span className="text-primary">Key Learning:</span> {milestone.learning}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Arrow indicator */}
                    <motion.div
                      animate={{ x: activeJourney === index ? 5 : 0 }}
                      className="text-muted-foreground group-hover:text-primary transition-colors"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </div>

                  {/* Hover indicator */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: activeJourney === index ? 1 : 0 }}
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-cyan-500"
                    style={{ originX: 0 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
