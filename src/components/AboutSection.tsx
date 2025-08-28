import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, GraduationCap, User, Phone, Mail } from 'lucide-react';

const AboutSection = () => {
  const details = [
    { icon: Calendar, label: 'Birthday', value: '18 Dec 2003' },
    { icon: User, label: 'Age', value: '21' },
    { icon: GraduationCap, label: 'Degree', value: 'B.Tech CSE' },
    { icon: Mail, label: 'Email', value: 'priyanshuhalder2001@gmail.com' },
    { icon: Phone, label: 'Contact', value: '+91 8389937791' },
    { icon: MapPin, label: 'City', value: 'Kolkata, India' }
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-card p-8 rounded-2xl hover-lift">
              <h3 className="text-2xl font-semibold mb-4 text-primary">My Story</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm a hardworking and passionate Computer Science and Engineering student at 
                <span className="text-primary font-medium"> IEM, Salt Lake, Kolkata</span>. 
                I'm continuously learning web development through hands-on projects, aiming to 
                become a proficient full-stack developer.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card border-0 hover-lift">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Personal Details</h3>
                <div className="grid gap-4">
                  {details.map(({ icon: Icon, label, value }, index) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <span className="text-sm text-muted-foreground">{label}:</span>
                        <p className="font-medium text-foreground">{value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Section Background Accent */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <span className="text-9xl font-black text-foreground">ABOUT</span>
      </div>
    </section>
  );
};

export default AboutSection;