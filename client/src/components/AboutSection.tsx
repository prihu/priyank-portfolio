/**
 * About Section - Organic Tech Futurism
 * Glass-morphic card with executive summary
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, TrendingUp, Users, Zap } from "lucide-react";

const highlights = [
  {
    icon: Sparkles,
    title: "AI & LLM Expertise",
    description: "Pioneering Agentic Voice AI and Gen-AI driven speech analytics in consumer banking",
  },
  {
    icon: TrendingUp,
    title: "Scale & Growth",
    description: "Scaled platforms to 3M+ monthly applicants and $250M loan transaction value",
  },
  {
    icon: Users,
    title: "Customer Impact",
    description: "Supporting 10M+ customers through omnichannel engagement platforms",
  },
  {
    icon: Zap,
    title: "Efficiency Gains",
    description: "Reduced loan approval time by 80% with ML-driven underwriting",
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/about-section-bg.png"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
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
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            Building the Future of{" "}
            <span className="gradient-text-primary">Fintech</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Product Manager with 7+ years of experience scaling fintech products across lending, 
            telesales, and customer service platforms, with a focus on LLM-based Agentic AI 
            & Generative AI-powered solutions.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Executive Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 lg:p-10"
          >
            <h3 className="text-2xl font-display font-bold mb-6 gradient-text-primary">
              Executive Summary
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a Product Manager passionate about leveraging cutting-edge AI technologies 
                to transform financial services. My journey spans from building ML-powered 
                underwriting systems to deploying Agentic Voice AI that serves millions of customers.
              </p>
              <p>
                At <span className="text-foreground font-medium">IndusInd Bank</span>, I'm currently 
                leading the development of next-generation consumer banking products, integrating 
                Gen-AI/LLM driven speech analytics that have lifted conversions by 25% and enhanced 
                customer NPS by 30 points.
              </p>
              <p>
                Previously at <span className="text-foreground font-medium">Prefr (acquired by CRED)</span>, 
                I grew the platform to serve Google, Cars24, and Paisabazaar as primary lending API 
                infrastructure, processing $250M+ in loan transactions monthly.
              </p>
              <p>
                I believe in building products that are not just technically sophisticated but 
                genuinely improve people's financial lives—making credit accessible, processes 
                efficient, and experiences delightful.
              </p>
            </div>
          </motion.div>

          {/* Right - Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-card p-6 group hover:border-primary/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <highlight.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-display font-semibold mb-2 text-foreground">
                  {highlight.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
