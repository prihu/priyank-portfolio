/**
 * Hero Section - VISUALLY STUNNING & INTERACTIVE
 * Animated particles, floating elements, typing effect, and bold visuals
 */

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { ArrowDown, Github, Linkedin, Mail, FileText, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const metrics = [
  { value: "$250M+", label: "Loans Delivered", icon: "💰" },
  { value: "10M+", label: "Customers", icon: "👥" },
  { value: "7+", label: "Years", icon: "⚡" },
  { value: "80%", label: "Faster Approvals", icon: "🚀" },
];

const roles = ["Product Leader", "AI Innovator", "Fintech Builder", "Growth Driver"];

// Floating particle component
function FloatingParticle({ delay, duration, size, left, top }: { delay: number; duration: number; size: number; left: string; top: string }) {
  return (
    <motion.div
      className="absolute rounded-full bg-gradient-to-r from-violet-500/30 to-cyan-500/30 blur-sm"
      style={{ width: size, height: size, left, top }}
      animate={{
        y: [-20, 20, -20],
        x: [-10, 10, -10],
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

// Animated counter component
function AnimatedCounter({ value, duration = 2 }: { value: string; duration?: number }) {
  const [displayValue, setDisplayValue] = useState("0");
  const numericPart = value.replace(/[^0-9]/g, "");
  const prefix = value.match(/^[^0-9]*/)?.[0] || "";
  const suffix = value.match(/[^0-9]*$/)?.[0] || "";

  useEffect(() => {
    const target = parseInt(numericPart);
    const increment = target / (duration * 60);
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setDisplayValue(prefix + numericPart + suffix);
        clearInterval(timer);
      } else {
        setDisplayValue(prefix + Math.floor(current) + suffix);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [numericPart, prefix, suffix, duration]);

  return <span>{displayValue}</span>;
}

// Typing effect component
function TypingEffect({ words }: { words: string[] }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < word.length) {
          setCurrentText(word.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(word.slice(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className="gradient-text">
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="text-primary"
      >
        |
      </motion.span>
    </span>
  );
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);
  
  const springRotateX = useSpring(rotateX, { stiffness: 100, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 100, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set(e.clientX - rect.left - rect.width / 2);
      mouseY.set(e.clientY - rect.top - rect.height / 2);
    }
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-gradient-mesh.png"
          alt=""
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background" />
        
        {/* Floating Particles */}
        <FloatingParticle delay={0} duration={6} size={100} left="10%" top="20%" />
        <FloatingParticle delay={1} duration={8} size={60} left="80%" top="30%" />
        <FloatingParticle delay={2} duration={7} size={80} left="70%" top="70%" />
        <FloatingParticle delay={0.5} duration={9} size={40} left="20%" top="60%" />
        <FloatingParticle delay={1.5} duration={6} size={50} left="50%" top="10%" />
        <FloatingParticle delay={3} duration={8} size={70} left="30%" top="80%" />
      </div>

      {/* Animated Grid Lines */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-500/20 to-cyan-500/20 border border-violet-500/30 text-sm font-medium mb-8"
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-green-400"
            />
            <span className="text-foreground">Open to MAANG Opportunities</span>
            <Sparkles className="w-4 h-4 text-yellow-400" />
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-display font-bold mb-4 tracking-tight">
              <span className="text-foreground">Priyank</span>{" "}
              <span className="gradient-text-primary">Garg</span>
            </h1>
          </motion.div>

          {/* Typing Effect Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold mb-8 h-12"
          >
            <TypingEffect words={roles} />
          </motion.div>

          {/* Compact Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Transforming fintech with <span className="text-primary font-semibold">Agentic AI</span> & <span className="text-secondary font-semibold">LLMs</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg shadow-violet-500/25"
                onClick={() => {
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Mail className="w-5 h-5 mr-2" />
                Let's Connect
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/20 hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-lg rounded-xl"
                asChild
              >
                <a href="/Priyank_Garg_CV.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="w-5 h-5 mr-2" />
                  Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Metrics Cards with 3D Effect */}
          <motion.div
            style={{ rotateX: springRotateX, rotateY: springRotateY, perspective: 1000 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-4xl mx-auto"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.08, 
                  y: -8,
                  boxShadow: "0 20px 40px -10px rgba(139, 92, 246, 0.3)"
                }}
                className="glass-card p-5 lg:p-6 text-center cursor-pointer group relative overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 to-cyan-500/0 group-hover:from-violet-500/10 group-hover:to-cyan-500/10 transition-all duration-300" />
                
                <span className="text-3xl mb-2 block">{metric.icon}</span>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold gradient-text-primary mb-1">
                  <AnimatedCounter value={metric.value} />
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium">{metric.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex items-center justify-center gap-4 mt-12"
          >
            {[
              { icon: Github, href: "https://github.com/prihu", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/gargpriyank", label: "LinkedIn" },
              { icon: Mail, href: "mailto:priyankgarg28@gmail.com", label: "Email" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-4 rounded-2xl bg-white/5 hover:bg-gradient-to-br hover:from-violet-500/20 hover:to-cyan-500/20 border border-white/10 hover:border-violet-500/30 text-foreground transition-all duration-300"
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={() => {
              document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-xs uppercase tracking-widest font-medium">Explore</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
