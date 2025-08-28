import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Mail, Github, Linkedin, Code2 } from 'lucide-react';
import profileImage from '@/assets/profile-image.jpg';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const typingTexts = [
    "Full-Stack Developer",
    "Java Developer", 
    "C++ Programmer",
    "React Enthusiast",
    "Node.js Developer",
    "AI Enthusiast"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % typingTexts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [typingTexts.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="container mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <img
              src={profileImage}
              alt="Priyanshu Halder"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full glass-card animate-float mx-auto"
            />
            <div className="absolute -inset-2 bg-gradient-to-r from-primary to-secondary rounded-full animate-glow opacity-20 blur-xl" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="text-gradient">Hi, I'm</span>
            <br />
            <span className="text-foreground">Priyanshu Halder</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Computer Science & Engineering Student | Full-Stack Developer
          </p>

          <div className="h-16 flex items-center justify-center">
            <motion.span
              key={currentText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-2xl font-semibold text-gradient"
            >
              {typingTexts[currentText]}
            </motion.span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              className="btn-hero group"
              onClick={() => window.location.href = 'mailto:priyanshuhalder2001@gmail.com'}
            >
              <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Contact Me
            </Button>
            
            <Button 
              variant="outline"
              className="btn-outline group"
              onClick={() => window.open('https://drive.google.com/file/d/1p117VDFmylgvrd-6y86XQ3wQNO3yA-y2/view?usp=sharing', '_blank')}
            >
              <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Download Resume
            </Button>
          </div>

          <div className="flex justify-center gap-6 pt-8">
            {[
              { icon: Github, href: 'https://github.com/sayan1812', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/priyanshu-halder-849933278/', label: 'LinkedIn' },
              { icon: Code2, href: 'https://leetcode.com/u/sayan2024/', label: 'LeetCode' }
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="glass-card-hover p-4 rounded-xl group"
                aria-label={label}
              >
                <Icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ 
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute inset-0 opacity-30 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20"
        style={{ backgroundSize: "400% 400%" }}
      />
    </section>
  );
};

export default HeroSection;