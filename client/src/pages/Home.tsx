/**
 * DESIGN PHILOSOPHY: Organic Tech Futurism
 * - Dark theme with luminous violet/cyan accents
 * - Glass-morphic cards with backdrop blur
 * - Organic wave dividers between sections
 * - Smooth scroll with parallax effects
 */

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Ambient background gradient mesh */}
      <div className="fixed inset-0 gradient-mesh pointer-events-none" />
      
      <Navigation />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}
