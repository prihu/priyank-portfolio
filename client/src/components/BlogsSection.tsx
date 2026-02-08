/**
 * Blogs / Thought Leadership Section
 * Shows database-backed blog posts, or hides if none exist
 */

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Calendar, ArrowRight, ExternalLink, Pen } from "lucide-react";
import { blogsApi, type Blog } from "@/lib/api";

export default function BlogsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    blogsApi.list().then(setBlogs).catch(() => setBlogs([]));
  }, []);

  // Don't render if no blogs exist
  if (blogs.length === 0) {
    return null;
  }

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
          <motion.span className="inline-block text-primary font-mono text-sm uppercase tracking-wider mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Pen className="w-3 h-3 inline mr-2" />
            Thought Leadership
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 text-foreground">
            Writing &{" "}
            <span className="gradient-text">Thinking Out Loud</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deep dives into product strategy, AI, and building at scale
          </p>
        </motion.div>

        {/* Blogs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
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
                className="glass-card p-8 h-full flex flex-col hover:border-primary/30 transition-colors block"
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
                    <span>
                      {blog.publishedDate
                        ? new Date(blog.publishedDate).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          }
                        )
                        : ""}
                    </span>
                    <span className="text-xs">· {blog.readTime}</span>
                  </div>
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="text-primary"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
