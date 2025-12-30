/**
 * Education Section - Organic Tech Futurism
 * Education and certifications with glass-morphic cards
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

const education = [
  {
    institution: "Institute of Management Technology",
    degree: "MBA, Finance",
    location: "Ghaziabad, India",
    period: "Graduated Mar 2018",
    description: "Specialized in Finance with focus on financial analytics, investment management, and strategic decision-making.",
  },
  {
    institution: "Birla Institute of Technology and Science, Pilani",
    degree: "Bachelor of Engineering",
    field: "Electronics and Instrumentation",
    location: "Goa, India",
    period: "Graduated Dec 2014",
    description: "Strong foundation in engineering principles, signal processing, and control systems.",
  },
];

const certifications = [
  { name: "Data-driven Product Management Simulator", issuer: "GoPractice, Inc" },
  { name: "CutShort Certified Data Science - Basic", issuer: "CutShort" },
  { name: "Product Management", issuer: "Udemy" },
  { name: "Problem Solving with Excel", issuer: "Coursera" },
  { name: "Fundamentals of Quantitative Modeling", issuer: "Coursera" },
  { name: "Introduction to Marketing", issuer: "Coursera" },
  { name: "R Programming", issuer: "Coursera" },
  { name: "Advanced HTML 5 Training", issuer: "Infinite Skills Inc" },
];

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="education"
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
            Background
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            Education &{" "}
            <span className="gradient-text-primary">Certifications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A strong academic foundation combined with continuous learning 
            through industry certifications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Education */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 text-xl font-display font-bold mb-6"
            >
              <GraduationCap className="w-6 h-6 text-primary" />
              Education
            </motion.h3>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-6"
                >
                  <h4 className="text-lg font-display font-semibold text-foreground mb-1">
                    {edu.institution}
                  </h4>
                  <p className="text-primary font-medium mb-3">
                    {edu.degree}
                    {edu.field && <span className="text-muted-foreground"> in {edu.field}</span>}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 text-xl font-display font-bold mb-6"
            >
              <Award className="w-6 h-6 text-secondary" />
              Certifications
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card p-6"
            >
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                    className="flex items-start gap-3 pb-4 border-b border-border/50 last:border-0 last:pb-0"
                  >
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                    <div>
                      <p className="text-foreground font-medium">{cert.name}</p>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
