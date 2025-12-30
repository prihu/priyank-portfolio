/**
 * Projects Section - Organic Tech Futurism
 * Showcase GitHub projects with glass-morphic cards
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Code2, Mic, ShoppingCart, Layout } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Recruit Voice",
    description:
      "AI-powered phone screening application with voice integration using ElevenLabs. Features voice-first AI recruiting, transcript analysis, and comprehensive export functionality for streamlined hiring processes.",
    technologies: ["TypeScript", "React", "Supabase", "ElevenLabs", "Tailwind CSS"],
    icon: Mic,
    github: "https://github.com/prihu/recruit-voice",
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "Fresh Produce Focus",
    description:
      "AI-enhanced fresh produce management application featuring PDP freshness badges, role-based authentication, and OpenAI integration for intelligent error logging and product insights.",
    technologies: ["TypeScript", "React", "Supabase", "OpenAI", "Tailwind CSS"],
    icon: ShoppingCart,
    github: "https://github.com/prihu/fresh-produce-focus",
    color: "from-cyan-500 to-teal-600",
  },
  {
    title: "Portfolio Cursor",
    description:
      "Visual website builder with intuitive drag-and-drop interface. Built with Next.js and Sanity CMS for content management, featuring Prisma for database operations and real-time preview.",
    technologies: ["TypeScript", "Next.js", "Prisma", "Sanity CMS", "Tailwind CSS"],
    icon: Layout,
    github: "https://github.com/prihu/PortfolioCursor",
    demo: "https://portfolio-cursor-lovat.vercel.app",
    color: "from-orange-500 to-amber-600",
  },
  {
    title: "Data Science Coursera",
    description:
      "Comprehensive coursework repository for Data Science toolbox, featuring practical implementations of statistical analysis, machine learning algorithms, and data visualization techniques.",
    technologies: ["R", "Python", "Statistics", "Machine Learning"],
    icon: Code2,
    github: "https://github.com/prihu/datasciencecoursera",
    color: "from-pink-500 to-rose-600",
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
          <span className="text-primary font-mono text-sm uppercase tracking-wider mb-4 block">
            Featured Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            GitHub{" "}
            <span className="gradient-text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in AI integration, 
            full-stack development, and product thinking.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card p-6 lg:p-8 h-full flex flex-col hover:border-primary/30 transition-all duration-300">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center`}
                  >
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
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
          <Button
            variant="outline"
            size="lg"
            className="border-border hover:bg-white/5"
            asChild
          >
            <a
              href="https://github.com/prihu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
