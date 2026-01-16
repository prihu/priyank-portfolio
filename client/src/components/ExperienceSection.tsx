/**
 * Experience Section - WITH LEADERSHIP CONTEXT
 * Team size, stakeholders, cross-functional collaboration
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Building2, Calendar, MapPin, Users, Briefcase, TrendingUp, Zap, Target, ArrowRight } from "lucide-react";

const experiences = [
  {
    company: "IndusInd Bank",
    role: "DVP Product - Consumer Banking",
    location: "Gurgaon",
    period: "2024 - Present",
    type: "current",
    color: "from-violet-500 to-purple-600",
    logo: "🏦",
    leadership: {
      teamSize: "Cross-functional team of 15+",
      stakeholders: "CXO, Tech, Operations, Compliance",
      scope: "10M+ customers, 400+ agent infrastructure",
    },
    highlights: [
      { 
        icon: Users, 
        text: "Piloted Agentic Voice AI serving 2M+ customers",
        context: "Led vendor selection, architecture design, and rollout strategy"
      },
      { 
        icon: TrendingUp, 
        text: "25% conversion lift with Gen-AI speech analytics",
        context: "Partnered with data science team to identify winning call patterns"
      },
      { 
        icon: Zap, 
        text: "30% reduction in agent idle time",
        context: "Redesigned dialer workflow with intelligent call routing"
      },
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
    leadership: {
      teamSize: "8 engineers, 2 data scientists",
      stakeholders: "Enterprise clients (Google, Cars24), Lender partners",
      scope: "$250M monthly transactions, 3M+ applicants",
    },
    highlights: [
      { 
        icon: TrendingUp, 
        text: "$250M monthly loan transaction value",
        context: "Scaled from $10M through product-led growth and enterprise sales"
      },
      { 
        icon: Zap, 
        text: "70% fraud review effort eliminated",
        context: "Built ML-based fraud detection with risk team, saved 100+ hrs/week"
      },
      { 
        icon: Target, 
        text: "99% bureau fetch success rate",
        context: "Designed fallback architecture with 3 bureau providers"
      },
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
    leadership: {
      teamSize: "5 engineers, 3 operations staff",
      stakeholders: "Sales, Credit, Collections, Tech",
      scope: "MSME lending, 150+ merchant interviews",
    },
    highlights: [
      { 
        icon: TrendingUp, 
        text: "6x MSME loan volume growth",
        context: "Led end-to-end onboarding redesign based on merchant research"
      },
      { 
        icon: Zap, 
        text: "30 min → 5 min approval time",
        context: "Built NeoScore ML model with data science team"
      },
      { 
        icon: Target, 
        text: "$10M+ incremental loans in 3 months",
        context: "Launched merchant referral program with sales team"
      },
    ],
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [expandedCard, setExpandedCard] = useState<number | null>(0);

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
            <span className="gradient-text-primary">Led & Delivered</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            7+ years of building products, leading teams, and driving measurable business outcomes
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="glass-card overflow-hidden"
              >
                {/* Header - Always Visible */}
                <div 
                  className="p-6 cursor-pointer"
                  onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                >
                  <div className="flex items-start gap-5">
                    {/* Company Logo */}
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-2xl shadow-lg shrink-0`}
                    >
                      {exp.logo}
                    </motion.div>

                    {/* Main Info */}
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
                      <p className={`font-medium bg-gradient-to-r ${exp.color} bg-clip-text text-transparent mb-2`}>
                        {exp.role}
                      </p>
                      
                      {/* Meta */}
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Expand Arrow */}
                    <motion.div
                      animate={{ rotate: expandedCard === index ? 90 : 0 }}
                      className="text-muted-foreground group-hover:text-primary transition-colors"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </div>

                  {/* Leadership Context - Always Visible */}
                  <div className="mt-4 flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-sm text-foreground">{exp.leadership.teamSize}</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                      <Briefcase className="w-4 h-4 text-secondary" />
                      <span className="text-sm text-foreground">{exp.leadership.stakeholders}</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                      <Target className="w-4 h-4 text-accent" />
                      <span className="text-sm text-foreground">{exp.leadership.scope}</span>
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedCard === index ? "auto" : 0,
                    opacity: expandedCard === index ? 1 : 0,
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 border-t border-border/50">
                    <div className="pt-5 space-y-4">
                      <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                        Key Achievements & Context
                      </h4>
                      {exp.highlights.map((highlight, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + i * 0.1 }}
                          className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
                        >
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${exp.color} flex items-center justify-center shrink-0`}>
                            <highlight.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground mb-1">{highlight.text}</p>
                            <p className="text-sm text-muted-foreground">{highlight.context}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Hover indicator */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: activeCard === index ? 1 : 0 }}
                  className={`h-1 bg-gradient-to-r ${exp.color}`}
                  style={{ originX: 0 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
