/**
 * Blogs Section
 * Displays blog posts and thought leadership content
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, ArrowRight, ExternalLink } from "lucide-react";

const blogs = [
  {
    title: "Building Scalable Lending Platforms with AI",
    excerpt: "How we scaled from $10M to $250M in loan transactions using intelligent routing and ML-based fraud detection.",
    date: "Jan 15, 2025",
    readTime: "8 min read",
    link: "https://substack.com",
    category: "Product Strategy",
  },
  {
    title: "Voice AI in Banking: The Future of Customer Service",
    excerpt: "Lessons learned from implementing Agentic Voice AI serving 2M+ customers at IndusInd Bank.",
    date: "Jan 10, 2025",
    readTime: "6 min read",
    link: "https://substack.com",
    category: "AI/LLM",
  },
  {
    title: "Product-Led Growth in Fintech",
    excerpt: "How we achieved 70% month-over-month growth through strategic product decisions and user-centric design.",
    date: "Jan 5, 2025",
    readTime: "10 min read",
    link: "https://substack.com",
    category: "Growth",
  },
];

export default function BlogsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="blogs"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
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
            Thought Leadership
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            Latest Articles &{" "}
            <span className="gradient-text-primary">Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deep dives into product strategy, AI/LLM, and fintech scaling
          </p>
        </motion.div>

        {/* Blogs Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ translateY: -8 }}
              className="group"
            >
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-8 h-full flex flex-col hover:border-primary/50 transition-colors block"
              >
                {/* Category Badge */}
                <div className="inline-flex w-fit mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                  <span className="text-xs font-medium text-primary">
                    {blog.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                  {blog.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{blog.date}</span>
                  </div>
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="text-primary"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.div>
                </div>

                {/* Read Time */}
                <p className="text-xs text-muted-foreground mt-2">
                  {blog.readTime}
                </p>
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-colors font-medium"
          >
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
