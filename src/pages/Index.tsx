import AnimatedBackground from '@/components/AnimatedBackground';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EducationSection from '@/components/EducationSection';
import SkillsSection from '@/components/SkillsSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import AIChat from '@/components/AIChat';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground font-inter">
      {/* Animated 3D Background */}
      <AnimatedBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        <section id="hero">
          <HeroSection />
        </section>
        
        <AboutSection />
        
        <EducationSection />
        
        <SkillsSection />
        
        <section id="services">
          <ServicesSection />
        </section>
        
        <ProjectsSection />
        
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* AI Chat */}
      <AIChat />
    </div>
  );
};

export default Index;