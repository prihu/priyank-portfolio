/**
 * Skills Section - Organic Tech Futurism
 * Categorized skills with animated tags
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Code, Database, LineChart, Users, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    icon: Brain,
    color: "from-violet-500 to-purple-600",
    skills: ["Agentic AI", "LLMs", "Voice AI", "Gen-AI", "Machine Learning", "Speech Analytics", "NLP"],
  },
  {
    title: "Product Management",
    icon: Users,
    color: "from-cyan-500 to-teal-600",
    skills: ["Product Strategy", "Roadmap", "Agile", "A/B Testing", "User Research", "PRDs", "OKRs"],
  },
  {
    title: "Analytics & Data",
    icon: LineChart,
    color: "from-orange-500 to-amber-600",
    skills: ["SQL", "Google Analytics", "Mixpanel", "Firebase", "Cohort Analysis", "Funnel Analysis", "Statistical Analysis"],
  },
  {
    title: "Technical",
    icon: Code,
    color: "from-pink-500 to-rose-600",
    skills: ["API Integration", "UI/UX", "TypeScript", "React", "Python", "System Design"],
  },
  {
    title: "Cloud & Infrastructure",
    icon: Database,
    color: "from-green-500 to-emerald-600",
    skills: ["AWS", "Azure", "GCP", "Supabase", "Firebase", "Microservices"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    color: "from-blue-500 to-indigo-600",
    skills: ["JIRA", "CRM", "Dialer Systems", "KYC/AML", "Omnichannel Platforms", "Hypothesis Testing"],
  },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm uppercase tracking-wider mb-4 block">
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            Skills &{" "}
            <span className="gradient-text-primary">Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning AI/ML, product management, 
            analytics, and technical implementation.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass-card p-6 hover:border-primary/30 transition-all"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}
                >
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className="px-3 py-1.5 text-sm bg-white/5 border border-white/10 rounded-lg text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
