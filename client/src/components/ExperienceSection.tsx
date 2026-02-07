/**
 * Experience Section - Story-Driven
 * Each role tells a story: What was broken → What I did → What changed
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, MapPin, Building2 } from "lucide-react";

interface RoleStory {
  company: string;
  title: string;
  period: string;
  location: string;
  theProblem: string;
  whatIBuilt: string[];
  theResult: string;
  borderColor: string;
}

const roles: RoleStory[] = [
  {
    company: "IndusInd Bank",
    title: "DVP Product — Consumer Banking",
    period: "Aug 2024 → Present",
    location: "Gurgaon, India",
    theProblem: "A 400+ agent contact center struggling with 300K daily call attempts, low connectivity, and zero AI infrastructure in a traditional banking setup.",
    whatIBuilt: [
      "Deployed Gen-AI/LLM driven speech analytics on next-gen Dialer — reduced agent idle time by 30%, lifted conversions by 25%",
      "Built inbound routing with mapped agents, CSAT capture, and contextual communications — enhanced NPS by 30 points",
      "Integrated CRM + Dialer into unified omnichannel platform — lifted agent productivity by 20%",
      "Piloted Agentic Voice AI relationship manager using LLMs — serving 2M+ additional customers without headcount increases",
    ],
    theResult: "25% connectivity across 300K daily calls, supporting 10M+ customers. Pioneering AI-first contact center transformation in Indian banking.",
    borderColor: "border-l-blue-500",
  },
  {
    company: "Prefr (acquired by CRED)",
    title: "Product Manager — Growth & Customer Service",
    period: "Jan 2021 → Aug 2024",
    location: "Hyderabad, India",
    theProblem: "A lending API platform that needed to scale from early stage to becoming the infrastructure powering Google, Cars24, and Paisabazaar's lending operations.",
    whatIBuilt: [
      "Grew platform to 3M+ monthly applicants and $250M loan transaction value — serving as primary lending API infrastructure",
      "Launched BNPL product for Flipkart Wholesale, Waycool, Elasticrun — achieved 70% repeat usage among 20K+ merchants",
      "Boosted credit score fetch to 99%, statement uploads by 30%, KYC completion by 15% through bureau fallback and AI-driven flows",
      "Built fraud detection system leveraging transaction, liveness, and KYC data — eliminated 70% of manual review effort",
    ],
    theResult: "From early-stage to $250M+ TPV. The lending API became the invisible infrastructure behind India's biggest consumer lending platforms.",
    borderColor: "border-l-teal-500",
  },
  {
    company: "NeoGrowth Credit",
    title: "Associate Product Manager — Onboarding",
    period: "May 2018 → Jan 2021",
    location: "Mumbai, India",
    theProblem: "MSME loan approvals took 30 minutes of manual review. The sales team was using outdated tools. Product-market fit was unclear.",
    whatIBuilt: [
      "Built NeoScore ML model for automated bank-statement analysis — slashed approval from 30 min to 5 min, accelerated volumes by 6x",
      "Launched NeoExpress product — captured 50% of new business volume, added $10M+ incremental loans in 3 months",
      "Conducted 150+ merchant interviews to optimize CAC by 10% and strengthen product-market fit",
      "Rebuilt internal sales app with iterative launches — increased adoption by 50%",
    ],
    theResult: "Transformed MSME lending from manual drudgery to ML-powered speed. Proved that automation doesn't replace human judgment — it amplifies it.",
    borderColor: "border-l-orange-500",
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [expandedRole, setExpandedRole] = useState<number>(0);

  return (
    <section id="experience" ref={ref} className="relative py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-mono tracking-wider text-muted-foreground uppercase mb-3">
            The Work
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            What Was Broken. <span className="gradient-text">What I Fixed.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Not a list of responsibilities. Each role is a story of finding a problem 
            and building the system that solved it.
          </p>
        </motion.div>

        {/* Roles */}
        <div className="max-w-4xl mx-auto space-y-6">
          {roles.map((role, index) => (
            <motion.div
              key={role.company}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className={`rounded-2xl border border-border ${role.borderColor} border-l-4 bg-card overflow-hidden transition-all duration-300 ${
                  expandedRole === index ? "shadow-lg" : "hover:shadow-md"
                }`}
              >
                {/* Header - Always visible */}
                <button
                  onClick={() => setExpandedRole(expandedRole === index ? -1 : index)}
                  className="w-full p-6 flex items-center justify-between text-left"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <Building2 className="w-4 h-4 text-primary" />
                      <span className="font-display font-bold text-lg text-foreground">
                        {role.company}
                      </span>
                      {index === 0 && (
                        <span className="px-2 py-0.5 text-xs font-medium bg-green-500/15 text-green-600 rounded-full border border-green-500/20">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <span className="font-medium text-foreground/80">{role.title}</span>
                      <span>•</span>
                      <span>{role.period}</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {role.location}
                      </span>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedRole === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  </motion.div>
                </button>

                {/* Expanded Content */}
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedRole === index ? "auto" : 0,
                    opacity: expandedRole === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 space-y-5">
                    {/* The Problem */}
                    <div>
                      <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
                        The Problem
                      </p>
                      <p className="text-sm text-foreground/80 leading-relaxed italic border-l-2 border-primary/30 pl-4">
                        {role.theProblem}
                      </p>
                    </div>

                    {/* What I Built */}
                    <div>
                      <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3">
                        What I Built
                      </p>
                      <div className="space-y-2">
                        {role.whatIBuilt.map((item, i) => (
                          <div key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* The Result */}
                    <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                      <p className="text-xs font-mono text-primary uppercase tracking-wider mb-1">
                        The Result
                      </p>
                      <p className="text-sm font-medium text-foreground">
                        {role.theResult}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
