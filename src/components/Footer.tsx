import { motion } from 'framer-motion';
import { Github, Linkedin, Code2, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: 'https://github.com/sayan1812', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/priyanshu-halder-849933278/', label: 'LinkedIn' },
    { icon: Code2, href: 'https://leetcode.com/u/sayan2024/', label: 'LeetCode' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    if (href === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative py-16 px-4 border-t border-white/10">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-gradient">Priyanshu portfolio</h3>
            <p className="text-muted-foreground leading-relaxed">
              Passionate Computer Science student crafting digital solutions with modern technologies.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-card-hover p-3 rounded-lg group"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map(({ name, href }) => (
                <button
                  key={name}
                  onClick={() => scrollToSection(href)}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-foreground">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Kolkata, India</p>
              <a
                href="mailto:priyanshuhalder2001@gmail.com"
                className="block hover:text-primary transition-colors duration-200 break-all"
              >
                priyanshuhalder2001@gmail.com
              </a>
              <a
                href="tel:+918389937791"
                className="block hover:text-primary transition-colors duration-200"
              >
                +91 8389937791
              </a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10 text-center"
        >
          <p className="text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
            © {currentYear} Priyanshu Halder. All Rights Reserved.
            <span className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> in India
            </span>
          </p>
        </motion.div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
    </footer>
  );
};

export default Footer;