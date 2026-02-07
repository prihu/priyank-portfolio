/**
 * Contact Section - Direct CTA with Calendly
 * Clean, professional, light theme
 */

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Calendar,
  Mail,
  Linkedin,
  Github,
  ArrowRight,
  MapPin,
  FileText,
  Copy,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const RESUME_URL =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663269140862/jNqoIdznxFjlrNUT.pdf";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("priyankgarg28@gmail.com");
    setCopied(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.span className="inline-block text-primary font-mono text-sm uppercase tracking-wider mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              Let's Connect
            </motion.span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 text-foreground">
              Interested?{" "}
              <span className="gradient-text">Let's Talk.</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              I'm always open to conversations about product, AI, fintech, or
              the next big thing. The best way to reach me is to book a call.
            </p>
          </motion.div>

          {/* Primary CTA - Calendly */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 font-semibold px-10 py-7 text-lg rounded-2xl shadow-xl"
                asChild
              >
                <a
                  href="https://calendly.com/priyankgarg/mock-interview-clone"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="w-5 h-5 mr-3" />
                  Book a 30-Min Call
                  <ArrowRight className="w-5 h-5 ml-3" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Secondary Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-2xl mx-auto"
          >
            {/* Email - Copyable */}
            <motion.div
              whileHover={{ translateY: -4 }}
              onClick={handleCopyEmail}
              className="glass-card p-4 text-center hover:border-primary/30 transition-all cursor-pointer group"
            >
              <Mail className="w-5 h-5 mx-auto mb-2 text-primary" />
              <p className="text-xs text-muted-foreground mb-1">Email</p>
              <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate flex items-center justify-center gap-1">
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-green-500" /> Copied!
                  </>
                ) : (
                  <>
                    priyankgarg28
                    <Copy className="w-3 h-3 text-muted-foreground" />
                  </>
                )}
              </p>
            </motion.div>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/gargpriyank"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ translateY: -4 }}
              className="glass-card p-4 text-center hover:border-primary/30 transition-all group"
            >
              <Linkedin className="w-5 h-5 mx-auto mb-2 text-primary" />
              <p className="text-xs text-muted-foreground mb-1">LinkedIn</p>
              <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                Connect
              </p>
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com/prihu"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ translateY: -4 }}
              className="glass-card p-4 text-center hover:border-primary/30 transition-all group"
            >
              <Github className="w-5 h-5 mx-auto mb-2 text-primary" />
              <p className="text-xs text-muted-foreground mb-1">GitHub</p>
              <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                View Code
              </p>
            </motion.a>

            {/* Resume */}
            <motion.a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ translateY: -4 }}
              className="glass-card p-4 text-center hover:border-primary/30 transition-all group"
            >
              <FileText className="w-5 h-5 mx-auto mb-2 text-primary" />
              <p className="text-xs text-muted-foreground mb-1">Resume</p>
              <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                Download PDF
              </p>
            </motion.a>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground"
          >
            <MapPin className="w-4 h-4" />
            <span>Mumbai, India · Open to remote & hybrid roles</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
