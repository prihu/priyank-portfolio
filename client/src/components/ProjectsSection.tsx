/**
 * Projects Section - PM LENS
 * Reframed with Problem → Solution → Impact and leadership context
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, ExternalLink, Mic, ShoppingCart, Layout, Code2, Star, Users, Target, Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Recruit Voice",
    tagline: "AI Phone Screening Platform",
    problem: "Recruiters spend 60% of time on initial phone screens that could be automated",
    solution: "Built voice-first AI recruiter using ElevenLabs that conducts natural screening calls",
    impact: "Reduces screening time by 80%, enables 24/7 candidate engagement",
    pmDecisions: [
      "Chose voice over chat for higher candidate completion rates",
      "Designed fallback to human for complex scenarios",
      "Prioritized latency optimization for natural conversation flow",
    ],
    technologies: ["TypeScript", "React", "ElevenLabs", "Supabase"],
    icon: Mic,
    github: "https://github.com/prihu/recruit-voice",
    color: "from-violet-500 to-purple-600",
    gradient: "bg-gradient-to-br from-violet-500/20 to-purple-600/20",
    featured: true,
  },
  {
    title: "Fresh Produce Focus",
    tagline: "AI-Powered Inventory Management",
    problem: "Grocery stores lose 30% of produce to spoilage due to poor inventory tracking",
    solution: "Vision AI system that predicts freshness and optimizes stock rotation",
    impact: "Reduces waste by 40%, improves margin through dynamic pricing",
    pmDecisions: [
      "Integrated with existing POS systems for seamless adoption",
      "Designed for store staff with minimal tech training",
      "Built offline-first for unreliable store connectivity",
    ],
    technologies: ["TypeScript", "React", "OpenAI Vision", "Supabase"],
    icon: ShoppingCart,
    github: "https://github.com/prihu/fresh-produce-focus",
    color: "from-cyan-500 to-teal-600",
    gradient: "bg-gradient-to-br from-cyan-500/20 to-teal-600/20",
    featured: true,
  },
  {
    title: "Portfolio Cursor",
    tagline: "No-Code Website Builder",
    problem: "Non-technical professionals struggle to create portfolio websites",
    solution: "Drag-and-drop builder with pre-designed sections and CMS integration",
    impact: "Enables portfolio creation in under 30 minutes, no coding required",
    pmDecisions: [
      "Focused on portfolio use case vs. general website builder",
      "Integrated Sanity CMS for easy content updates",
      "Designed mobile-first templates for modern browsing",
    ],
    technologies: ["Next.js", "Prisma", "Sanity", "TypeScript"],
    icon: Layout,
    github: "https://github.com/prihu/PortfolioCursor",
    demo: "https://portfolio-cursor-lovat.vercel.app",
    color: "from-orange-500 to-amber-600",
    gradient: "bg-gradient-to-br from-orange-500/20 to-amber-600/20",
    featured: true,
  },
  {
    title: "Data Science Coursera",
    tagline: "ML & Analytics Portfolio",
    problem: "Wanted to build hands-on ML skills beyond theoretical knowledge",
    solution: "Completed Johns Hopkins Data Science specialization with practical projects",
    impact: "Applied learnings to build ML-based credit scoring at NeoGrowth",
    pmDecisions: [
      "Chose R for statistical rigor, Python for production ML",
      "Focused on interpretable models for regulated industries",
      "Built reproducible analysis pipelines",
    ],
    technologies: ["R", "Python", "Statistics", "Machine Learning"],
    icon: Code2,
    github: "https://github.com/prihu/datasciencecoursera",
    color: "from-pink-500 to-rose-600",
    gradient: "bg-gradient-to-br from-pink-500/20 to-rose-600/20",
    featured: false,
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/projects-bg.png"
          alt=""
          className="w-full h-full object-cover opacity-15"
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
            Side Projects
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            Building to{" "}
            <span className="gradient-text-primary">Learn</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Personal projects where I explore new technologies and validate product ideas.
            <span className="text-foreground font-medium"> Each project starts with a problem worth solving.</span>
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group"
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="glass-card h-full overflow-hidden"
              >
                {/* Header */}
                <div className={`p-6 ${project.gradient} relative`}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg`}
                      >
                        <project.icon className="w-7 h-7 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-display font-bold text-foreground">
                          {project.title}
                        </h3>
                        <p className={`text-sm font-medium bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                          {project.tagline}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-foreground transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-foreground transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                  
                  {project.featured && (
                    <div className="absolute top-4 right-4 px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-medium text-white flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Featured
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Problem → Solution → Impact */}
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Target className="w-3 h-3 text-red-400" />
                      </div>
                      <div>
                        <span className="text-xs font-medium text-red-400 uppercase tracking-wider">Problem</span>
                        <p className="text-sm text-muted-foreground">{project.problem}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Lightbulb className="w-3 h-3 text-yellow-400" />
                      </div>
                      <div>
                        <span className="text-xs font-medium text-yellow-400 uppercase tracking-wider">Solution</span>
                        <p className="text-sm text-muted-foreground">{project.solution}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
                        <ArrowRight className="w-3 h-3 text-green-400" />
                      </div>
                      <div>
                        <span className="text-xs font-medium text-green-400 uppercase tracking-wider">Impact</span>
                        <p className="text-sm text-muted-foreground">{project.impact}</p>
                      </div>
                    </div>
                  </div>

                  {/* PM Decisions - Expandable */}
                  <motion.div
                    initial={false}
                    animate={{ height: expandedProject === index ? "auto" : 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-border/50">
                      <div className="flex items-center gap-2 mb-3">
                        <Users className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">Key PM Decisions</span>
                      </div>
                      <ul className="space-y-2">
                        {project.pmDecisions.map((decision, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            {decision}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                  {/* Toggle Button */}
                  <button
                    onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                    className="text-sm text-primary hover:text-primary/80 font-medium flex items-center gap-1"
                  >
                    {expandedProject === index ? "Show less" : "Show PM decisions"}
                    <motion.span
                      animate={{ rotate: expandedProject === index ? 180 : 0 }}
                    >
                      <ArrowRight className="w-4 h-4 rotate-90" />
                    </motion.span>
                  </button>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono bg-white/5 border border-white/10 rounded-full text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover indicator */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredProject === index ? 1 : 0 }}
                  className={`h-1 bg-gradient-to-r ${project.color}`}
                  style={{ originX: 0 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg shadow-violet-500/25"
              asChild
            >
              <a
                href="https://github.com/prihu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-2" />
                View All on GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
