/**
 * Education Section - COMPACT & VISUAL
 * Clean cards with minimal text, maximum impact
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { GraduationCap, Award, MapPin, Calendar, ExternalLink } from "lucide-react";

const education = [
  {
    institution: "IMT Ghaziabad",
    degree: "MBA Finance",
    year: "2018",
    location: "India",
    logo: "🎓",
    color: "from-violet-500 to-purple-600",
  },
  {
    institution: "BITS Pilani",
    degree: "B.E. Electronics",
    year: "2014",
    location: "Goa, India",
    logo: "🏛️",
    color: "from-cyan-500 to-teal-600",
  },
];

const certifications = [
  { name: "Data-driven PM Simulator", issuer: "GoPractice", icon: "📊" },
  { name: "Data Science - Basic", issuer: "CutShort", icon: "🔬" },
  { name: "Product Management", issuer: "Udemy", icon: "📦" },
  { name: "R Programming", issuer: "Coursera", icon: "📈" },
  { name: "Quantitative Modeling", issuer: "Coursera", icon: "🧮" },
  { name: "Marketing Fundamentals", issuer: "Coursera", icon: "📣" },
];

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCert, setHoveredCert] = useState<number | null>(null);

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
          <motion.span 
            className="inline-block text-primary font-mono text-sm uppercase tracking-wider mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
            whileHover={{ scale: 1.05 }}
          >
            Background
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold">
            Education &{" "}
            <span className="gradient-text-primary">Credentials</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Education Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {education.map((edu, index) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div className="glass-card p-6 h-full relative overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className="flex items-start gap-4 relative">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${edu.color} flex items-center justify-center text-3xl shadow-lg`}
                    >
                      {edu.logo}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-display font-bold text-foreground mb-1">
                        {edu.institution}
                      </h3>
                      <p className={`font-medium bg-gradient-to-r ${edu.color} bg-clip-text text-transparent mb-2`}>
                        {edu.degree}
                      </p>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {edu.year}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover indicator */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${edu.color}`}
                    style={{ originX: 0 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <Award className="w-5 h-5 text-secondary" />
              <h3 className="text-xl font-display font-bold">Certifications</h3>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                  onMouseEnter={() => setHoveredCert(index)}
                  onMouseLeave={() => setHoveredCert(null)}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className={`relative px-4 py-2.5 rounded-xl cursor-pointer transition-all ${
                    hoveredCert === index
                      ? "bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-lg shadow-violet-500/25"
                      : "bg-white/5 border border-white/10 text-foreground hover:border-primary/30"
                  }`}
                >
                  <span className="mr-2">{cert.icon}</span>
                  <span className="font-medium">{cert.name}</span>
                  
                  {/* Tooltip */}
                  {hoveredCert === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-background/95 border border-border text-xs text-muted-foreground whitespace-nowrap z-10"
                    >
                      {cert.issuer}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
