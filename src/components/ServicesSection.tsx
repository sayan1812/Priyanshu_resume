import { motion } from 'framer-motion';
import { Code, Palette, Database, Globe, ShoppingCart, BookOpen } from 'lucide-react';
import { Card } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Full-stack web applications using modern technologies like React, Node.js, and responsive design principles."
    },
    {
      icon: Palette,
      title: "Front-End Design",
      description: "Creating beautiful, interactive user interfaces with HTML, CSS, JavaScript, and modern frameworks."
    },
    {
      icon: Database,
      title: "Back-End Basics",
      description: "Server-side development with Node.js, Express.js, and MySQL database integration."
    },
    {
      icon: Globe,
      title: "Portfolio Websites",
      description: "Professional portfolio websites that showcase your work and help you stand out online."
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Basics",
      description: "Basic e-commerce solutions with product catalogs, shopping carts, and payment integration."
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "Always expanding my skillset with the latest technologies and best practices in web development."
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-bold text-foreground/5 pointer-events-none select-none">
        SERVICES
      </div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">What I</span>
            <br />
            <span className="text-foreground">Offer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive web development services to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5
                }}
                className="group"
              >
                <Card className="glass-card p-8 h-full hover:shadow-2xl transition-all duration-500 group-hover:bg-primary/5 border-border/50">
                  <div className="text-center space-y-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                      className="inline-block p-4 bg-gradient-to-br from-primary to-secondary rounded-2xl mb-4"
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Hover Effect Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none" />
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Ready to work together? Let's discuss your project needs.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block btn-hero px-8 py-4 rounded-full font-semibold"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;