/**
 * Testimonials Section
 * Displays testimonials from colleagues and managers
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Priyank's ability to translate complex technical requirements into product strategy is exceptional. His work on Voice AI saved us months of development time.",
    author: "Rajesh Kumar",
    role: "CTO, IndusInd Bank",
    company: "IndusInd Bank",
  },
  {
    quote: "One of the best product minds I've worked with. Priyank combines deep technical understanding with business acumen. His impact on our lending platform was transformational.",
    author: "Arun Sharma",
    role: "VP Product, Prefr",
    company: "CRED",
  },
  {
    quote: "Priyank's structured approach to problem-solving and data-driven decision making elevated our entire product team. He's a natural leader.",
    author: "Priya Menon",
    role: "Product Manager, NeoGrowth",
    company: "NeoGrowth Credit",
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
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
            What Others Say
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            Trusted by{" "}
            <span className="gradient-text-primary">Leaders & Teams</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Testimonials from colleagues and managers I've worked with
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ translateY: -8 }}
              className="group"
            >
              <div className="glass-card p-8 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: index * 0.15 + i * 0.05 }}
                    >
                      <Star className="w-5 h-5 fill-accent text-accent" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote Icon */}
                <div className="mb-4 text-primary/30 group-hover:text-primary/50 transition-colors">
                  <Quote className="w-8 h-8" />
                </div>

                {/* Quote */}
                <p className="text-foreground mb-6 flex-grow leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-primary font-medium mt-1">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
