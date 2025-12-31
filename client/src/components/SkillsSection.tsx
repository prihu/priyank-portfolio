/**
 * Skills Section - VISUAL SKILL CLOUD
 * Interactive floating skills with category filters
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Brain, Code, Database, LineChart, Users, Wrench, Sparkles } from "lucide-react";

const skillCategories = [
  {
    id: "ai",
    title: "AI & ML",
    icon: Brain,
    color: "from-violet-500 to-purple-600",
    skills: [
      { name: "Agentic AI", level: "expert" },
      { name: "LLMs", level: "expert" },
      { name: "Voice AI", level: "expert" },
      { name: "Gen-AI", level: "expert" },
      { name: "Machine Learning", level: "advanced" },
      { name: "Speech Analytics", level: "expert" },
      { name: "NLP", level: "advanced" },
    ],
  },
  {
    id: "product",
    title: "Product",
    icon: Users,
    color: "from-cyan-500 to-teal-600",
    skills: [
      { name: "Product Strategy", level: "expert" },
      { name: "Roadmap", level: "expert" },
      { name: "Agile", level: "expert" },
      { name: "A/B Testing", level: "advanced" },
      { name: "User Research", level: "advanced" },
      { name: "PRDs", level: "expert" },
    ],
  },
  {
    id: "analytics",
    title: "Analytics",
    icon: LineChart,
    color: "from-orange-500 to-amber-600",
    skills: [
      { name: "SQL", level: "expert" },
      { name: "Mixpanel", level: "advanced" },
      { name: "Firebase", level: "advanced" },
      { name: "Cohort Analysis", level: "expert" },
      { name: "Funnel Analysis", level: "expert" },
    ],
  },
  {
    id: "tech",
    title: "Technical",
    icon: Code,
    color: "from-pink-500 to-rose-600",
    skills: [
      { name: "TypeScript", level: "advanced" },
      { name: "React", level: "advanced" },
      { name: "Python", level: "intermediate" },
      { name: "API Design", level: "expert" },
      { name: "System Design", level: "advanced" },
    ],
  },
];

const allSkills = skillCategories.flatMap(cat => 
  cat.skills.map(skill => ({ ...skill, category: cat.id, color: cat.color }))
);

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filteredSkills = activeCategory 
    ? allSkills.filter(s => s.category === activeCategory)
    : allSkills;

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
          className="text-center mb-12"
        >
          <motion.span 
            className="inline-block text-primary font-mono text-sm uppercase tracking-wider mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
            whileHover={{ scale: 1.05 }}
          >
            Expertise
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            Skills &{" "}
            <span className="gradient-text-primary">Technologies</span>
          </h2>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(null)}
            className={`px-5 py-2.5 rounded-xl font-medium transition-all ${
              activeCategory === null
                ? "bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-lg shadow-violet-500/25"
                : "bg-white/5 text-muted-foreground hover:text-foreground border border-white/10"
            }`}
          >
            <Sparkles className="w-4 h-4 inline mr-2" />
            All
          </motion.button>
          {skillCategories.map((cat) => (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl font-medium transition-all ${
                activeCategory === cat.id
                  ? `bg-gradient-to-r ${cat.color} text-white shadow-lg`
                  : "bg-white/5 text-muted-foreground hover:text-foreground border border-white/10"
              }`}
            >
              <cat.icon className="w-4 h-4 inline mr-2" />
              {cat.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Skill Cloud */}
        <motion.div
          layout
          className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <motion.div
                whileHover={{ scale: 1.15, y: -5 }}
                className={`relative px-5 py-3 rounded-xl cursor-pointer transition-all ${
                  skill.level === "expert"
                    ? "text-lg font-semibold"
                    : skill.level === "advanced"
                    ? "text-base font-medium"
                    : "text-sm"
                } ${
                  hoveredSkill === skill.name
                    ? `bg-gradient-to-r ${skill.color} text-white shadow-lg`
                    : "bg-white/5 text-foreground border border-white/10 hover:border-primary/30"
                }`}
              >
                {skill.name}
                
                {/* Level indicator */}
                {hoveredSkill === skill.name && (
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-background/90 text-xs text-primary whitespace-nowrap"
                  >
                    {skill.level === "expert" ? "⭐ Expert" : skill.level === "advanced" ? "🚀 Advanced" : "📚 Intermediate"}
                  </motion.span>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Category Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16"
        >
          {skillCategories.map((cat, index) => (
            <motion.div
              key={cat.id}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
              className={`glass-card p-5 cursor-pointer group transition-all ${
                activeCategory === cat.id ? "ring-2 ring-primary" : ""
              }`}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-3 shadow-lg`}
              >
                <cat.icon className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="font-display font-bold text-foreground mb-1">{cat.title}</h3>
              <p className="text-sm text-muted-foreground">{cat.skills.length} skills</p>
              
              {/* Mini skill preview */}
              <div className="flex flex-wrap gap-1 mt-3">
                {cat.skills.slice(0, 3).map((skill) => (
                  <span
                    key={skill.name}
                    className="px-2 py-0.5 text-xs bg-white/5 rounded-full text-muted-foreground"
                  >
                    {skill.name}
                  </span>
                ))}
                {cat.skills.length > 3 && (
                  <span className="px-2 py-0.5 text-xs bg-white/5 rounded-full text-muted-foreground">
                    +{cat.skills.length - 3}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
