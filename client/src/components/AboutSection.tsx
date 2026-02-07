/**
 * About Section - VISUAL & INTERACTIVE
 * Animated cards, hover effects, minimal text, maximum impact
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Sparkles, TrendingUp, Users, Zap, Brain, Rocket, Target, Award } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "AI Pioneer",
    stat: "LLM & Voice AI",
    description: "Building Agentic AI systems",
    color: "from-violet-500 to-purple-600",
    bgGlow: "violet",
  },
  {
    icon: TrendingUp,
    title: "Scale Expert",
    stat: "$250M+",
    description: "Loan value delivered",
    color: "from-cyan-500 to-teal-600",
    bgGlow: "cyan",
  },
  {
    icon: Users,
    title: "Customer Focus",
    stat: "10M+",
    description: "Customers supported",
    color: "from-orange-500 to-amber-600",
    bgGlow: "orange",
  },
  {
    icon: Zap,
    title: "Efficiency",
    stat: "80%",
    description: "Faster approvals",
    color: "from-pink-500 to-rose-600",
    bgGlow: "pink",
  },
];

const expertise = [
  { label: "Agentic AI", level: 95 },
  { label: "Product Strategy", level: 92 },
  { label: "LLM Integration", level: 90 },
  { label: "Fintech Scaling", level: 95 },
  { label: "ML/Data Products", level: 88 },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/about-section-bg.png"
          alt="Abstract gradient background for About section"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
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
            About Me
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            Building the Future of{" "}
            <span className="gradient-text-primary">Fintech</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            7+ years transforming financial services with AI-powered products
          </p>
        </motion.div>

        {/* Interactive Highlight Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative group cursor-pointer"
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-card p-6 h-full relative overflow-hidden"
              >
                {/* Animated background glow */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                />
                
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg`}
                >
                  <item.icon className="w-7 h-7 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-lg font-display font-bold text-foreground mb-1">
                  {item.title}
                </h3>
                <div className={`text-3xl font-display font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-2`}>
                  {item.stat}
                </div>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>

                {/* Hover indicator */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: hoveredCard === index ? "100%" : 0 }}
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${item.color}`}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Expertise Bars */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card p-8">
            <h3 className="text-2xl font-display font-bold mb-8 text-center">
              Core <span className="gradient-text-primary">Expertise</span>
            </h3>
            <div className="space-y-6">
              {expertise.map((skill, index) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-foreground">{skill.label}</span>
                    <span className="text-primary font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.6 + index * 0.1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full relative"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Quick Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-8 mt-16"
        >
          {[
            { icon: Target, label: "Projects Shipped", value: "20+" },
            { icon: Award, label: "Companies Served", value: "5+" },
            { icon: Rocket, label: "Products Launched", value: "15+" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10"
            >
              <stat.icon className="w-5 h-5 text-primary" />
              <div>
                <div className="text-2xl font-display font-bold gradient-text-primary">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
