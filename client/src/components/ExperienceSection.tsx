/**
 * Experience Section - VISUAL TIMELINE
 * Interactive cards, animated timeline, hover effects
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Building2, Calendar, MapPin, ChevronRight, Briefcase, TrendingUp, Users, Zap } from "lucide-react";

const experiences = [
  {
    company: "IndusInd Bank",
    role: "DVP Product - Consumer Banking",
    location: "Gurgaon",
    period: "2024 - Present",
    type: "current",
    color: "from-violet-500 to-purple-600",
    logo: "🏦",
    highlights: [
      { icon: Users, text: "10M+ customers through 400+ agent infrastructure" },
      { icon: TrendingUp, text: "25% conversion lift with Gen-AI speech analytics" },
      { icon: Zap, text: "Piloted Agentic Voice AI serving 2M+ customers" },
    ],
  },
  {
    company: "Prefr (CRED)",
    role: "Product Manager, Growth",
    location: "Hyderabad",
    period: "2021 - 2024",
    type: "past",
    color: "from-cyan-500 to-teal-600",
    logo: "💳",
    highlights: [
      { icon: TrendingUp, text: "$250M monthly loan transaction value" },
      { icon: Users, text: "3M+ monthly applicants on platform" },
      { icon: Zap, text: "70% fraud review effort eliminated" },
    ],
  },
  {
    company: "NeoGrowth Credit",
    role: "Associate PM, Onboarding",
    location: "Mumbai",
    period: "2018 - 2021",
    type: "past",
    color: "from-orange-500 to-amber-600",
    logo: "📈",
    highlights: [
      { icon: TrendingUp, text: "6x MSME loan volume growth" },
      { icon: Zap, text: "30 min → 5 min approval time" },
      { icon: Users, text: "$10M+ incremental loans in 3 months" },
    ],
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/experience-timeline-bg.png"
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/98 to-background" />
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
            className="inline-block text-primary font-mono text-sm uppercase tracking-wider mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
            whileHover={{ scale: 1.05 }}
          >
            Career Journey
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            Where I've{" "}
            <span className="gradient-text-primary">Made Impact</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Animated Timeline Line */}
          <motion.div 
            className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 via-cyan-500 to-orange-500"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ originY: 0 }}
          />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <motion.div
                  className={`absolute left-8 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} z-10`}
                  whileHover={{ scale: 1.5 }}
                  animate={{ 
                    boxShadow: activeCard === index 
                      ? "0 0 20px 5px rgba(139, 92, 246, 0.5)" 
                      : "0 0 0 0 rgba(139, 92, 246, 0)"
                  }}
                />

                {/* Card */}
                <motion.div
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                  whileHover={{ scale: 1.02 }}
                  className={`ml-20 lg:ml-0 lg:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "lg:mr-auto lg:pr-8" : "lg:ml-auto lg:pl-8"
                  }`}
                >
                  <div className="glass-card p-6 relative overflow-hidden group">
                    {/* Glow effect */}
                    <motion.div
                      className={`absolute -inset-1 bg-gradient-to-r ${exp.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                    />

                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4 relative">
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-2xl shadow-lg`}
                      >
                        {exp.logo}
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl font-display font-bold text-foreground">
                            {exp.company}
                          </h3>
                          {exp.type === "current" && (
                            <motion.span
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="px-2 py-0.5 text-xs font-medium bg-green-500/20 text-green-400 rounded-full"
                            >
                              Current
                            </motion.span>
                          )}
                        </div>
                        <p className={`font-medium bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                          {exp.role}
                        </p>
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Key Highlights */}
                    <div className="space-y-3">
                      {exp.highlights.map((highlight, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.5 + index * 0.2 + i * 0.1 }}
                          className="flex items-center gap-3 text-sm"
                        >
                          <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${exp.color} bg-opacity-20 flex items-center justify-center`}>
                            <highlight.icon className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-muted-foreground">{highlight.text}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Hover indicator */}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: activeCard === index ? "100%" : 0 }}
                      className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${exp.color}`}
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
