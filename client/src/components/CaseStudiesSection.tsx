/**
 * Case Studies Section - STRUCTURED PM THINKING
 * Deep-dive case studies showing Problem → Hypothesis → Solution → Impact → Learnings
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Target, Lightbulb, Wrench, TrendingUp, BookOpen, 
  ChevronDown, ChevronUp, Users, Clock, DollarSign,
  Brain, Mic, CreditCard, AlertTriangle, CheckCircle2
} from "lucide-react";

const caseStudies = [
  {
    id: "voice-ai",
    title: "Scaling Customer Service with Agentic Voice AI",
    company: "IndusInd Bank",
    role: "DVP Product",
    icon: Mic,
    color: "from-violet-500 to-purple-600",
    metrics: [
      { label: "Customers Served", value: "2M+", icon: Users },
      { label: "No Headcount Increase", value: "0", icon: Users },
      { label: "NPS Improvement", value: "+30pts", icon: TrendingUp },
    ],
    sections: {
      problem: {
        title: "The Challenge",
        content: "IndusInd Bank's telesales team was hitting a ceiling. With 400+ agents making 300K daily calls, we achieved only 25% connectivity. The math was brutal: to serve 2M more customers, we'd need 200+ additional agents—a $2M+ annual cost that didn't scale.",
        painPoints: [
          "Agent capacity maxed out at 10M customers",
          "30% agent idle time due to inefficient dialing",
          "Inconsistent customer experience across agents",
          "No way to scale without linear cost increase",
        ],
      },
      hypothesis: {
        title: "My Hypothesis",
        content: "What if we could build an AI that doesn't replace agents but extends their reach? An Agentic Voice AI that handles routine interactions while seamlessly escalating complex cases to humans. The key insight: customers don't hate AI—they hate bad AI that wastes their time.",
        bets: [
          "LLM-powered voice can match human-like conversation quality",
          "Customers will accept AI for routine queries if it's fast and accurate",
          "Human-in-the-loop escalation will maintain trust",
          "Speech analytics can continuously improve AI performance",
        ],
      },
      solution: {
        title: "What I Built",
        content: "Led the development of a next-gen Agentic Voice AI system integrated with our existing dialer infrastructure. The system uses LLMs for natural conversation, real-time speech analytics for quality monitoring, and intelligent routing for human escalation.",
        components: [
          { name: "LLM Voice Engine", desc: "Natural language understanding with context retention" },
          { name: "Speech Analytics", desc: "Real-time sentiment and intent detection" },
          { name: "Smart Escalation", desc: "Seamless handoff to human agents when needed" },
          { name: "Feedback Loop", desc: "Continuous learning from agent corrections" },
        ],
      },
      impact: {
        title: "The Results",
        content: "The pilot exceeded expectations. We're now serving 2M additional customers without adding headcount, while actually improving customer satisfaction.",
        results: [
          { metric: "25% conversion lift", detail: "Gen-AI speech analytics identified winning patterns" },
          { metric: "30% reduced idle time", detail: "Intelligent dialing optimization" },
          { metric: "+30 NPS points", detail: "Faster resolution, consistent experience" },
          { metric: "$0 incremental headcount", detail: "AI handling 2M+ customer interactions" },
        ],
      },
      learnings: {
        title: "What I Learned",
        content: "This project taught me that AI adoption in enterprise isn't about technology—it's about trust. We spent as much time on change management as on engineering.",
        insights: [
          "Start with augmentation, not replacement—agents became AI trainers",
          "Transparency builds trust—customers knew they were talking to AI",
          "Measure what matters—NPS, not just call volume",
          "Human escalation is a feature, not a failure",
        ],
      },
    },
  },
  {
    id: "lending-platform",
    title: "Building India's Lending API Infrastructure",
    company: "Prefr (acquired by CRED)",
    role: "Product Manager",
    icon: CreditCard,
    color: "from-cyan-500 to-teal-600",
    metrics: [
      { label: "Monthly Transactions", value: "$250M", icon: DollarSign },
      { label: "Monthly Applicants", value: "3M+", icon: Users },
      { label: "Enterprise Clients", value: "Google, Cars24", icon: Target },
    ],
    sections: {
      problem: {
        title: "The Challenge",
        content: "India's lending ecosystem was fragmented. Every fintech building credit products had to integrate with 10+ lenders, each with different APIs, underwriting criteria, and documentation requirements. This meant 6-month integration cycles and massive engineering overhead.",
        painPoints: [
          "6+ months to integrate a single lender",
          "Different API specs for each lender",
          "No standardized credit decisioning",
          "High drop-off due to complex KYC flows",
        ],
      },
      hypothesis: {
        title: "My Hypothesis",
        content: "What if we built a unified lending API that abstracts away lender complexity? One integration, access to 20+ lenders, with intelligent routing based on approval probability. The insight: fintechs don't want to be lending experts—they want to offer credit as a feature.",
        bets: [
          "Standardized API can accommodate diverse lender requirements",
          "ML-based routing can improve approval rates",
          "Simplified KYC will dramatically reduce drop-offs",
          "B2B2C model can scale faster than direct lending",
        ],
      },
      solution: {
        title: "What I Built",
        content: "Led product development for Prefr's lending API platform, focusing on three pillars: seamless integration, intelligent routing, and frictionless user experience.",
        components: [
          { name: "Unified Lending API", desc: "Single integration for 20+ lender access" },
          { name: "Smart Routing Engine", desc: "ML-based lender matching for optimal approval" },
          { name: "AI-Driven KYC", desc: "Automated document processing with 99% accuracy" },
          { name: "Fraud Detection", desc: "Real-time risk scoring using transaction data" },
        ],
      },
      impact: {
        title: "The Results",
        content: "Prefr became the lending infrastructure for India's top fintechs. The platform's success led to acquisition by CRED.",
        results: [
          { metric: "$250M monthly volume", detail: "From $10M in 18 months" },
          { metric: "3M+ monthly applicants", detail: "Serving Google, Cars24, Paisabazaar" },
          { metric: "99% bureau fetch success", detail: "Up from 85% with fallback system" },
          { metric: "70% fraud review eliminated", detail: "Automated detection saved 100+ hours/week" },
        ],
      },
      learnings: {
        title: "What I Learned",
        content: "Building B2B infrastructure taught me that your customer's customer is your real user. Every API decision impacts millions of end borrowers.",
        insights: [
          "API design is product design—developer experience drives adoption",
          "In lending, milliseconds matter—latency kills conversion",
          "Fraud prevention is a product, not a feature",
          "Enterprise sales requires product-led growth proof points",
        ],
      },
    },
  },
];

export default function CaseStudiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedCase, setExpandedCase] = useState<string | null>("voice-ai");
  const [expandedSection, setExpandedSection] = useState<string | null>("problem");

  return (
    <section
      id="case-studies"
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
            className="inline-flex items-center gap-2 text-primary font-mono text-sm uppercase tracking-wider mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
            whileHover={{ scale: 1.05 }}
          >
            <BookOpen className="w-4 h-4" />
            Deep Dives
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            Case{" "}
            <span className="gradient-text-primary">Studies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Structured deep-dives into my most impactful work. 
            <span className="text-foreground font-medium"> Problem → Hypothesis → Solution → Impact → Learnings</span>
          </p>
        </motion.div>

        {/* Case Study Cards */}
        <div className="max-w-5xl mx-auto space-y-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card overflow-hidden"
            >
              {/* Header - Always Visible */}
              <div
                className="p-6 lg:p-8 cursor-pointer"
                onClick={() => setExpandedCase(expandedCase === study.id ? null : study.id)}
              >
                <div className="flex items-start gap-6">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${study.color} flex items-center justify-center shadow-lg shrink-0`}
                  >
                    <study.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm text-muted-foreground">{study.company}</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-sm text-primary">{study.role}</span>
                    </div>
                    <h3 className="text-xl lg:text-2xl font-display font-bold text-foreground mb-4">
                      {study.title}
                    </h3>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-4">
                      {study.metrics.map((metric) => (
                        <div key={metric.label} className="flex items-center gap-2">
                          <metric.icon className="w-4 h-4 text-primary" />
                          <span className="text-lg font-bold gradient-text-primary">{metric.value}</span>
                          <span className="text-sm text-muted-foreground">{metric.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <motion.div
                    animate={{ rotate: expandedCase === study.id ? 180 : 0 }}
                    className="text-muted-foreground"
                  >
                    <ChevronDown className="w-6 h-6" />
                  </motion.div>
                </div>
              </div>

              {/* Expanded Content */}
              <motion.div
                initial={false}
                animate={{
                  height: expandedCase === study.id ? "auto" : 0,
                  opacity: expandedCase === study.id ? 1 : 0,
                }}
                className="overflow-hidden"
              >
                <div className="px-6 lg:px-8 pb-8 border-t border-border/50">
                  {/* Section Tabs */}
                  <div className="flex flex-wrap gap-2 py-6">
                    {Object.entries(study.sections).map(([key, section]) => {
                      const icons: Record<string, any> = {
                        problem: AlertTriangle,
                        hypothesis: Lightbulb,
                        solution: Wrench,
                        impact: TrendingUp,
                        learnings: BookOpen,
                      };
                      const Icon = icons[key];
                      return (
                        <motion.button
                          key={key}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setExpandedSection(key)}
                          className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all ${
                            expandedSection === key
                              ? `bg-gradient-to-r ${study.color} text-white shadow-lg`
                              : "bg-white/5 text-muted-foreground hover:text-foreground border border-white/10"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                          {section.title}
                        </motion.button>
                      );
                    })}
                  </div>

                  {/* Section Content */}
                  {expandedSection && study.sections[expandedSection as keyof typeof study.sections] && (
                    <motion.div
                      key={expandedSection}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-6"
                    >
                      {(() => {
                        const section = study.sections[expandedSection as keyof typeof study.sections];
                        return (
                          <>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                              {section.content}
                            </p>

                            {/* Dynamic content based on section type */}
                            {'painPoints' in section && (
                              <div className="grid sm:grid-cols-2 gap-3">
                                {section.painPoints.map((point, i) => (
                                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                                    <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                    <span className="text-sm text-foreground">{point}</span>
                                  </div>
                                ))}
                              </div>
                            )}

                            {'bets' in section && (
                              <div className="grid sm:grid-cols-2 gap-3">
                                {section.bets.map((bet, i) => (
                                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                                    <Lightbulb className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                                    <span className="text-sm text-foreground">{bet}</span>
                                  </div>
                                ))}
                              </div>
                            )}

                            {'components' in section && (
                              <div className="grid sm:grid-cols-2 gap-3">
                                {section.components.map((comp, i) => (
                                  <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10">
                                    <h5 className="font-semibold text-foreground mb-1">{comp.name}</h5>
                                    <p className="text-sm text-muted-foreground">{comp.desc}</p>
                                  </div>
                                ))}
                              </div>
                            )}

                            {'results' in section && (
                              <div className="grid sm:grid-cols-2 gap-3">
                                {section.results.map((result, i) => (
                                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                                    <div>
                                      <span className="font-semibold text-foreground">{result.metric}</span>
                                      <p className="text-sm text-muted-foreground">{result.detail}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}

                            {'insights' in section && (
                              <div className="space-y-3">
                                {section.insights.map((insight, i) => (
                                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-primary/10 border border-primary/20">
                                    <Brain className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <span className="text-foreground">{insight}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </>
                        );
                      })()}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
