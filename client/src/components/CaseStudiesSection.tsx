/**
 * Case Studies Section - Deep Dives
 * Structured storytelling: What was broken → What I bet on → What I built → What happened
 */

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  AlertTriangle,
  Lightbulb,
  Wrench,
  TrendingUp,
  BookOpen,
  ChevronDown,
  Brain,
  CheckCircle2,
} from "lucide-react";


const caseStudies = [
  {
    id: 1,
    title: "From Call Center Chaos to AI-Powered Conversations",
    subtitle: "IndusInd Bank — Voice AI Contact Center",
    tagline: "2M+ customers served. 65% deflection. Zero headcount added.",
    color: "from-blue-600 to-indigo-600",
    lightColor: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-600",
    sections: {
      problem: {
        title: "The Reality",
        content:
          "IndusInd Bank's contact center was drowning. 2M+ customers calling monthly, average wait time of 8 minutes, and agent turnover at 40% annually. The cost per interaction was $4.50 and climbing. Leadership wanted to cut costs. I saw a different problem: customers weren't getting answers fast enough.",
        painPoints: [
          "8-minute average wait time driving customer churn",
          "40% annual agent turnover creating knowledge gaps",
          "$4.50 per interaction, 3x industry benchmark",
          "No self-service for routine queries (balance, EMI, payments)",
        ],
      },
      hypothesis: {
        title: "The Bet",
        content:
          "I didn't pitch 'let's add a chatbot.' I pitched: 'What if 60% of calls never needed a human?' The hypothesis was that most calls were routine — balance checks, EMI schedules, payment confirmations. If we could handle those with voice AI that actually understood context, we'd free agents for complex cases.",
        bets: [
          "60% of calls are routine and automatable with voice AI",
          "Customers prefer instant AI answers over waiting for humans",
          "Voice AI with context awareness can match human satisfaction scores",
        ],
      },
      solution: {
        title: "The System",
        content:
          "I designed an Agentic Voice AI system using ElevenLabs for natural speech synthesis, integrated with the bank's core systems. The key insight: don't make it sound like a bot. Make it sound like the best agent you've ever spoken to.",
        components: [
          {
            name: "Context Engine",
            desc: "Pulls customer history, recent transactions, and open tickets before the call even connects",
          },
          {
            name: "Intent Router",
            desc: "Classifies call intent in <2 seconds and routes to AI or human based on complexity score",
          },
          {
            name: "Voice Synthesis",
            desc: "ElevenLabs integration with bank-specific terminology training for natural conversations",
          },
        ],
      },
      outcome: {
        title: "The Evidence",
        content:
          "Within 6 months of launch, the numbers told the story. But the real win wasn't the cost savings — it was that customer satisfaction actually went up. People preferred the AI for routine queries because it was faster.",
        results: [
          {
            metric: "65% call deflection",
            detail: "Exceeded the 60% hypothesis — routine calls handled end-to-end by AI",
          },
          {
            metric: "$1.20 per interaction",
            detail: "Down from $4.50 — a 73% reduction in cost per interaction",
          },
          {
            metric: "12-second average response",
            detail: "Down from 8-minute wait time — customers get answers instantly",
          },
        ],
      },
      tradeoffs: {
        title: "The Trade-offs",
        content:
          "To move fast, we had to make hard choices. We de-prioritized multi-lingual support in the MVP to focus on perfect English/Hindi handling. We also chose to use a more expensive voice model (ElevenLabs) over cheaper alternatives because trust was our primary metric, not just cost.",
        insights: [
          "Quality > Cost: Cheap voice AI sounds robotic and kills trust immediately.",
          "Depth > Breadth: Perfecting 3 intents is better than failing at 30.",
          "Speed > Features: We skipped the fancy dashboard to ship the core engine 2 months early.",
        ],
      },
    },
  },
  {
    id: 2,
    title: "Turning a Manual Lending Process into a Revenue Machine",
    subtitle: "Prefr (CRED) — Digital Lending Platform",
    tagline: "$250M+ in loans. 5-minute approvals. 70% repeat rate.",
    color: "from-emerald-600 to-teal-600",
    lightColor: "bg-emerald-50 border-emerald-200",
    iconColor: "text-emerald-600",
    sections: {
      problem: {
        title: "The Reality",
        content:
          "When I joined Prefr (acquired by CRED), the lending process was a Frankenstein of spreadsheets, manual credit checks, and phone calls. A single loan took 30 minutes to approve. The conversion funnel leaked at every step — 70% of applicants dropped off before completion.",
        painPoints: [
          "30-minute average loan approval time",
          "70% application drop-off rate",
          "Manual credit scoring with inconsistent criteria",
          "No real-time risk assessment",
        ],
      },
      hypothesis: {
        title: "The Bet",
        content:
          "The problem wasn't that we needed better salespeople. The problem was friction. Every manual step was a chance for the customer to leave. My bet: if we could get approval time under 5 minutes with ML-based scoring, conversion would double.",
        bets: [
          "Speed is the #1 driver of conversion in digital lending",
          "ML models can match or exceed human credit analysts for standard profiles",
          "Real-time bureau integration eliminates the biggest bottleneck",
        ],
      },
      solution: {
        title: "The System",
        content:
          "I designed a three-layer lending engine: instant pre-qualification, ML-based credit scoring, and automated disbursement. The key architectural decision was to make bureau pulls asynchronous — start the UX flow while data loads in the background.",
        components: [
          {
            name: "Instant Pre-Qual",
            desc: "30-second soft check using phone number + PAN, giving users a range before they commit",
          },
          {
            name: "ML Credit Engine",
            desc: "Gradient-boosted model trained on 500K+ historical loans, scoring in <3 seconds",
          },
          {
            name: "Auto-Disbursement",
            desc: "Straight-through processing for approved loans — money in account within 2 hours",
          },
        ],
      },
      outcome: {
        title: "The Evidence",
        content:
          "The platform went from processing $10M/month to $40M/month within a quarter. But the metric I'm most proud of: repeat borrower rate hit 70%. People came back because the experience was that good.",
        results: [
          {
            metric: "5-minute approval",
            detail: "Down from 30 minutes — an 83% reduction in time-to-decision",
          },
          {
            metric: "$250M+ total disbursed",
            detail: "Scaled from $10M/month to $40M/month in one quarter",
          },
          {
            metric: "70% repeat borrower rate",
            detail: "Customers returned because the experience was frictionless",
          },
        ],
      },
      tradeoffs: {
        title: "The Trade-offs",
        content:
          "We purposely introduced friction for 'thin-file' customers. If the ML model wasn't 90% confident, we forced a manual review. This hurt our instant approval rate but saved us from massive default risk in the early days. Growth at all costs is a trap in lending.",
        insights: [
          "Risk > Growth: In lending, bad growth kills you faster than no growth.",
          "Friction can be a feature: Adding friction for high-risk users is a safety valve.",
          "Buy vs Build: We bought the KYC solution to speed up launch, even though it cost more margin.",
        ],
      },
    },
  },
];

export default function CaseStudiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedCase, setExpandedCase] = useState<number | null>(null);
  const [expandedSection, setExpandedSection] = useState<string>("problem");

  return (
    <section
      id="case-studies"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
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
            Deep Dives
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 text-foreground">
            The Full Story,{" "}
            <span className="gradient-text">Not Just the Highlight Reel</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real problems. Real bets. Real outcomes. And what I'd do differently.
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="max-w-4xl mx-auto space-y-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card overflow-hidden"
            >
              {/* Header - Always Visible */}
              <div
                className={`p-6 lg:p-8 cursor-pointer transition-all ${expandedCase === study.id ? study.lightColor : "hover:bg-muted/30"
                  }`}
                onClick={() =>
                  setExpandedCase(expandedCase === study.id ? null : study.id)
                }
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className={`text-sm font-medium mb-2 ${study.iconColor}`}>
                      {study.subtitle}
                    </p>
                    <h3 className="text-xl lg:text-2xl font-display font-bold text-foreground mb-2">
                      {study.title}
                    </h3>
                    <p className="text-muted-foreground font-medium">
                      {study.tagline}
                    </p>
                  </div>
                  <motion.div
                    animate={{
                      rotate: expandedCase === study.id ? 180 : 0,
                    }}
                    className="p-2 rounded-full bg-muted/50 text-muted-foreground flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </div>
              </div>

              {/* Expanded Content */}
              <AnimatePresence>
                {expandedCase === study.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 lg:px-8 pb-8 border-t border-border">
                      {/* Section Tabs */}
                      <div className="flex flex-wrap gap-2 py-6">
                        {Object.entries(study.sections).map(([key, section]) => {
                          const icons: Record<string, any> = {
                            problem: AlertTriangle,
                            hypothesis: Lightbulb,
                            solution: Wrench,
                            outcome: TrendingUp,
                            tradeoffs: BookOpen,
                          };
                          const Icon = icons[key];
                          return (
                            <motion.button
                              key={key}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => setExpandedSection(key)}
                              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all text-sm ${expandedSection === key
                                ? `bg-gradient-to-r ${study.color} text-white shadow-lg`
                                : "bg-muted/50 text-muted-foreground hover:text-foreground border border-border hover:border-primary/30"
                                }`}
                            >
                              <Icon className="w-4 h-4" />
                              {section.title}
                            </motion.button>
                          );
                        })}
                      </div>

                      {/* Section Content */}
                      {expandedSection &&
                        study.sections[
                        expandedSection as keyof typeof study.sections
                        ] && (
                          <motion.div
                            key={expandedSection}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-6"
                          >
                            {(() => {
                              const section =
                                study.sections[
                                expandedSection as keyof typeof study.sections
                                ];
                              return (
                                <>
                                  <p className="text-lg text-muted-foreground leading-relaxed">
                                    {section.content}
                                  </p>

                                  {"painPoints" in section && (
                                    <div className="grid sm:grid-cols-2 gap-3">
                                      {section.painPoints.map(
                                        (point: string, i: number) => (
                                          <div
                                            key={i}
                                            className="flex items-start gap-3 p-3 rounded-lg bg-red-50 border border-red-200"
                                          >
                                            <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                            <span className="text-sm text-foreground">
                                              {point}
                                            </span>
                                          </div>
                                        )
                                      )}
                                    </div>
                                  )}

                                  {"bets" in section && (
                                    <div className="grid sm:grid-cols-2 gap-3">
                                      {section.bets.map(
                                        (bet: string, i: number) => (
                                          <div
                                            key={i}
                                            className="flex items-start gap-3 p-3 rounded-lg bg-amber-50 border border-amber-200"
                                          >
                                            <Lightbulb className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                                            <span className="text-sm text-foreground">
                                              {bet}
                                            </span>
                                          </div>
                                        )
                                      )}
                                    </div>
                                  )}

                                  {"components" in section && (
                                    <div className="grid sm:grid-cols-2 gap-3">
                                      {section.components.map(
                                        (
                                          comp: { name: string; desc: string },
                                          i: number
                                        ) => (
                                          <div
                                            key={i}
                                            className="p-4 rounded-lg bg-muted/30 border border-border"
                                          >
                                            <h5 className="font-semibold text-foreground mb-1">
                                              {comp.name}
                                            </h5>
                                            <p className="text-sm text-muted-foreground">
                                              {comp.desc}
                                            </p>
                                          </div>
                                        )
                                      )}
                                    </div>
                                  )}

                                  {"results" in section && (
                                    <div className="grid sm:grid-cols-2 gap-3">
                                      {section.results.map(
                                        (
                                          result: {
                                            metric: string;
                                            detail: string;
                                          },
                                          i: number
                                        ) => (
                                          <div
                                            key={i}
                                            className="flex items-start gap-3 p-3 rounded-lg bg-green-50 border border-green-200"
                                          >
                                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                            <div>
                                              <span className="font-semibold text-foreground">
                                                {result.metric}
                                              </span>
                                              <p className="text-sm text-muted-foreground">
                                                {result.detail}
                                              </p>
                                            </div>
                                          </div>
                                        )
                                      )}
                                    </div>
                                  )}

                                  {"insights" in section && (
                                    <div className="space-y-3">
                                      {section.insights.map(
                                        (insight: string, i: number) => (
                                          <div
                                            key={i}
                                            className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/20"
                                          >
                                            <Brain className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-foreground">
                                              {insight}
                                            </span>
                                          </div>
                                        )
                                      )}
                                    </div>
                                  )}
                                </>
                              );
                            })()}
                          </motion.div>
                        )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
