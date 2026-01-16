/**
 * DESIGN PHILOSOPHY: Organic Tech Futurism + PM Narrative
 * - Dark theme with luminous violet/cyan accents
 * - Glass-morphic cards with backdrop blur
 * - Strategic storytelling for senior PM roles
 * - Case studies with structured PM thinking
 */

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PhilosophySection from "@/components/PhilosophySection";
import ExperienceSection from "@/components/ExperienceSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
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
        <PhilosophySection />
        <ExperienceSection />
        <CaseStudiesSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}
