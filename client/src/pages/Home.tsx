/**
 * DESIGN PHILOSOPHY: Revenue Engine Builder — Unique PM Narrative
 * - Light theme with executive presence
 * - Story-driven sections, not resume-style lists
 * - Each section builds on the narrative arc
 */

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HowIThinkSection from "@/components/HowIThinkSection";
import ExperienceSection from "@/components/ExperienceSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ProjectsSection from "@/components/ProjectsSection";
import CurrentlyExploringSection from "@/components/CurrentlyExploringSection";
import EducationSection from "@/components/EducationSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogsSection from "@/components/BlogsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Ambient background gradient mesh */}
      <div className="fixed inset-0 gradient-mesh pointer-events-none" />
      
      <Navigation />
      
      <main>
        {/* 1. Hook — Who I am in one line */}
        <HeroSection />
        
        {/* 2. The Arc — Career as a story, not a list */}
        <AboutSection />
        
        {/* 3. How I Think — Operating principles with real stories */}
        <HowIThinkSection />
        
        {/* 4. The Work — What was broken, what I fixed */}
        <ExperienceSection />
        
        {/* 5. Deep Dives — Structured case studies */}
        <CaseStudiesSection />
        
        {/* 6. Builder Proof — GitHub projects with PM lens */}
        <ProjectsSection />
        
        {/* 7. Where I Thrive — What I'm looking for */}
        <CurrentlyExploringSection />
        
        {/* 8. Credentials — Education & Certifications */}
        <EducationSection />
        
        {/* 9. Social Proof — Testimonials (shows only when data exists) */}
        <TestimonialsSection />
        
        {/* 10. Thought Leadership — Blog posts */}
        <BlogsSection />
        
        {/* 11. CTA — Contact & Book a Call */}
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}
