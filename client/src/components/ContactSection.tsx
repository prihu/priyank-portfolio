/**
 * Contact Section - VISUAL & INTERACTIVE
 * Eye-catching CTA with animated elements
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, FileText, Send, Sparkles, ArrowRight, Copy, Check, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "priyankgarg28@gmail.com",
    href: "mailto:priyankgarg28@gmail.com",
    color: "from-violet-500 to-purple-600",
    copyable: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-9755443790",
    href: "tel:+919755443790",
    color: "from-cyan-500 to-teal-600",
    copyable: true,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Gurgaon, India",
    href: null,
    color: "from-orange-500 to-amber-600",
    copyable: false,
  },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/prihu", label: "GitHub", color: "hover:bg-white/20" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/gargpriyank", label: "LinkedIn", color: "hover:bg-[#0077b5]/20" },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-violet-500/10 via-transparent to-transparent" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
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
            className="inline-flex items-center gap-2 text-primary font-mono text-sm uppercase tracking-wider mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4" />
            Let's Connect
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            Ready to{" "}
            <span className="gradient-text-primary">Build Together?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Looking for a PM who can scale products with AI? Let's talk.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Main CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 lg:p-12 mb-8 relative overflow-hidden"
          >
            {/* Animated border gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-cyan-500/20 to-violet-500/20 opacity-50" />
            
            <div className="relative">
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 }}
                className="flex items-center justify-center gap-2 mb-8"
              >
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 rounded-full bg-green-400"
                />
                <span className="text-lg font-medium text-foreground">
                  Open to MAANG & Top Tech Opportunities
                </span>
              </motion.div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold px-10 py-7 text-lg rounded-xl shadow-lg w-full sm:w-auto"
                    asChild
                  >
                    <a href="https://calendly.com/priyankgarg/mock-interview-clone" target="_blank" rel="noopener noreferrer">
                      <Calendar className="w-5 h-5 mr-2" />
                      Book a Call
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-accent to-orange-500 hover:from-accent/90 hover:to-orange-500/90 text-white font-semibold px-10 py-7 text-lg rounded-xl shadow-lg w-full sm:w-auto"
                    asChild
                  >
                    <a href="mailto:priyankgarg28@gmail.com">
                      <Send className="w-5 h-5 mr-2" />
                      Send Email
                    </a>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-primary/30 hover:bg-primary/5 px-10 py-7 text-lg rounded-xl w-full sm:w-auto"
                    asChild
                  >
                    <a href="/Priyank_Garg_CV.pdf" target="_blank" rel="noopener noreferrer">
                      <FileText className="w-5 h-5 mr-2" />
                      Download Resume
                    </a>
                  </Button>
                </motion.div>
              </div>

              {/* Contact Methods */}
              <div className="grid sm:grid-cols-3 gap-4">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="group"
                  >
                    <div 
                      className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all cursor-pointer"
                      onClick={() => {
                        if (method.copyable) {
                          handleCopy(method.value, index);
                        } else if (method.href) {
                          window.location.href = method.href;
                        }
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${method.color} flex items-center justify-center`}>
                          <method.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-muted-foreground mb-0.5">{method.label}</p>
                          <p className="text-sm font-medium text-foreground truncate">{method.value}</p>
                        </div>
                        {method.copyable && (
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                            className="text-muted-foreground hover:text-foreground"
                          >
                            {copiedIndex === index ? (
                              <Check className="w-4 h-4 text-green-400" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center gap-4"
          >
            <span className="text-muted-foreground">Connect on</span>
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className={`p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 text-foreground transition-all ${link.color}`}
              >
                <link.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
