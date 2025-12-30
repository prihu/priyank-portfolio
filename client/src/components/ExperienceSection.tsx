/**
 * Experience Section - Organic Tech Futurism
 * Timeline-style career progression with glass-morphic cards
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    company: "IndusInd Bank",
    role: "DVP Product - Consumer Banking",
    location: "Gurgaon, India",
    period: "Aug 2024 - Present",
    type: "current",
    achievements: [
      "Executed product-led growth strategies, resulting in 25% connectivity across 300K daily call attempts, supporting 10M+ customers through 400+ agent infrastructure",
      "Reduced agent idle time by 30% and lifted conversions by 25% by deploying next-gen Dialer with Gen-AI/LLM driven speech analytics",
      "Enhanced customer NPS by 30 points by building inbound routing to mapped agent, CSAT capture & feedback loop",
      "Lifted agent productivity by 20% by automating workflows through integration of CRM and Dialer into unified omnichannel platform",
      "Piloted Agentic Voice AI relationship manager based on LLMs serving 2 million additional customers without headcount increases",
    ],
  },
  {
    company: "Prefr (acquired by CRED)",
    role: "Product Manager, Growth & Customer Service",
    location: "Hyderabad, India",
    period: "Jan 2021 - Aug 2024",
    type: "past",
    achievements: [
      "Grew platform to 3M+ monthly applicants and $250M of loan transaction value, serving Google, Cars24, and Paisabazaar as primary lending API infrastructure",
      "Achieved 70% repeat usage of credit limit among 20K+ B2B merchants by launching BNPL product for Flipkart Wholesale, Waycool, and Elasticrun",
      "Boosted credit score fetch success to 99%, statement uploads by 30%, and KYC completion by 15% through bureau fallback, AI-driven uploads",
      "Delivered 20% of $15M monthly loan transaction value by enabling repeat loan purchases through optimising the repeat loan user journey",
      "Eliminated 70% of manual fraud review effort by building detection system leveraging transaction, liveliness, and KYC data",
    ],
  },
  {
    company: "NeoGrowth Credit",
    role: "Associate Product Manager, Onboarding",
    location: "Mumbai, India",
    period: "May 2018 - Jan 2021",
    type: "past",
    achievements: [
      "Accelerated MSME loan volumes by 6x and slashed approval time from 30 minutes to 5 minutes by launching NeoScore ML model",
      "Captured 50% of new business volume and added $10M+ incremental loans in 3 months through NeoExpress product adoption",
      "Amplified partner lead conversion by 15% and expanded distribution to 5+ cities by implementing bulk upload and time-tracking features",
      "Optimized CAC by 10% and strengthened product-market fit by conducting 150+ merchant interviews",
      "Increased adoption of internally built sales app by 50% by launching new versions with enhanced features",
    ],
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
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
            Career Journey
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            Professional{" "}
            <span className="gradient-text-primary">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            7+ years of building and scaling fintech products that have transformed 
            how millions access financial services.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent hidden lg:block" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-8 ${
                  index % 2 === 0 ? "" : "lg:direction-rtl"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 lg:left-1/2 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-primary border-4 border-background hidden lg:block animate-pulse-glow" />

                {/* Card */}
                <div
                  className={`glass-card p-6 lg:p-8 ${
                    index % 2 === 0 ? "lg:col-start-1" : "lg:col-start-2"
                  }`}
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Building2 className="w-5 h-5 text-primary" />
                        <h3 className="text-xl font-display font-bold text-foreground">
                          {exp.company}
                        </h3>
                        {exp.type === "current" && (
                          <span className="px-2 py-0.5 text-xs font-medium bg-green-500/20 text-green-400 rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-lg text-primary font-medium">{exp.role}</p>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Empty column for alternating layout */}
                <div className={index % 2 === 0 ? "lg:col-start-2" : "lg:col-start-1"} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
