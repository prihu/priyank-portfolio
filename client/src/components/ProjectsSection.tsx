/**
 * Projects Section - VISUAL & INTERACTIVE
 * Stunning project cards with 3D hover effects
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, ExternalLink, Mic, ShoppingCart, Layout, Code2, Star, GitFork } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Recruit Voice",
    tagline: "AI Phone Screening",
    description: "Voice-first AI recruiting with ElevenLabs integration",
    technologies: ["TypeScript", "React", "ElevenLabs", "Supabase"],
    icon: Mic,
    github: "https://github.com/prihu/recruit-voice",
    color: "from-violet-500 to-purple-600",
    gradient: "bg-gradient-to-br from-violet-500/20 to-purple-600/20",
    featured: true,
  },
  {
    title: "Fresh Produce Focus",
    tagline: "AI Produce Management",
    description: "Smart freshness tracking with OpenAI integration",
    technologies: ["TypeScript", "React", "OpenAI", "Supabase"],
    icon: ShoppingCart,
    github: "https://github.com/prihu/fresh-produce-focus",
    color: "from-cyan-500 to-teal-600",
    gradient: "bg-gradient-to-br from-cyan-500/20 to-teal-600/20",
    featured: true,
  },
  {
    title: "Portfolio Cursor",
    tagline: "Visual Website Builder",
    description: "Drag-and-drop website builder with Sanity CMS",
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
    tagline: "ML & Analytics",
    description: "Data science coursework and implementations",
    technologies: ["R", "Python", "Statistics", "ML"],
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
            Featured Work
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            GitHub{" "}
            <span className="gradient-text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building AI-powered solutions that solve real problems
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative"
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="glass-card h-full overflow-hidden"
              >
                {/* Gradient Header */}
                <div className={`h-32 ${project.gradient} relative overflow-hidden`}>
                  {/* Animated background pattern */}
                  <motion.div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px)`,
                      backgroundSize: '20px 20px',
                    }}
                    animate={{ 
                      backgroundPosition: hoveredProject === index ? ['0% 0%', '100% 100%'] : '0% 0%' 
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Icon */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    animate={{ 
                      scale: hoveredProject === index ? 1.2 : 1,
                      rotate: hoveredProject === index ? 10 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-2xl`}>
                      <project.icon className="w-10 h-10 text-white" />
                    </div>
                  </motion.div>

                  {/* Featured badge */}
                  {project.featured && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-medium text-white flex items-center gap-1"
                    >
                      <Star className="w-3 h-3" />
                      Featured
                    </motion.div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className={`text-sm font-medium bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                        {project.tagline}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2, rotate: -10 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 text-xs font-mono bg-white/5 border border-white/10 rounded-full text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Hover indicator */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredProject === index ? 1 : 0 }}
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color}`}
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
