import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science & Engineering',
      institution: 'IEM, Salt Lake',
      location: 'Kolkata, India',
      period: '2022 - 2026',
      description: 'Pursuing Bachelor of Technology with specialization in Computer Science and Engineering.',
      status: 'Current'
    },
    {
      degree: 'Higher Secondary (Science)',
      institution: 'S.M. Nasir Smriti High School',
      location: 'West Bengal, India',
      period: '2020 - 2022',
      description: 'Completed higher secondary education with focus on Science stream.',
      status: 'Completed'
    },
    {
      degree: 'Secondary Education',
      institution: 'Mira High School',
      location: 'West Bengal, India',
      period: '2014 - 2020',
      description: 'Completed secondary education with strong academic performance.',
      status: 'Completed'
    }
  ];

  const experience = [
    {
      title: 'Front-End Development Intern',
      company: 'CodeAlpha',
      period: 'Mar - Apr 2025',
      description: 'Built responsive web pages using HTML, CSS, and JavaScript. Optimized layouts and performance for better user experience.',
      skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design']
    },
    {
      title: 'DSA C++ Programming Intern',
      company: 'InternPe',
      period: 'Jul 7 - Jul 21, 2025',
      description: 'Solved advanced coding challenges and implemented optimized data structures and algorithms.',
      skills: ['C++', 'Data Structures', 'Algorithms', 'Problem Solving']
    }
  ];

  return (
    <section id="education" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Education & Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-gradient flex items-center gap-3">
              <GraduationCap className="w-8 h-8" />
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((item, index) => (
                <motion.div
                  key={item.degree}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {index < education.length - 1 && (
                    <div className="absolute left-6 top-16 w-px h-20 bg-gradient-to-b from-primary to-secondary opacity-50" />
                  )}
                  
                  <Card className="glass-card border-0 hover-lift relative">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex-shrink-0">
                          <GraduationCap className="w-6 h-6 text-primary" />
                        </div>
                        
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center justify-between flex-wrap gap-2">
                            <h4 className="font-semibold text-foreground">{item.degree}</h4>
                            <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                              item.status === 'Current' 
                                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                            }`}>
                              {item.status}
                            </span>
                          </div>
                          
                          <p className="text-primary font-medium">{item.institution}</p>
                          
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {item.period}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {item.location}
                            </div>
                          </div>
                          
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-gradient flex items-center gap-3">
              <Calendar className="w-8 h-8" />
              Experience
            </h3>
            
            <div className="space-y-6">
              {experience.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {index < experience.length - 1 && (
                    <div className="absolute left-6 top-16 w-px h-20 bg-gradient-to-b from-secondary to-accent opacity-50" />
                  )}
                  
                  <Card className="glass-card border-0 hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-gradient-to-br from-secondary/20 to-accent/20 flex-shrink-0">
                          <Calendar className="w-6 h-6 text-secondary" />
                        </div>
                        
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center justify-between flex-wrap gap-2">
                            <h4 className="font-semibold text-foreground">{item.title}</h4>
                            <span className="text-xs text-muted-foreground">{item.period}</span>
                          </div>
                          
                          <p className="text-secondary font-medium">{item.company}</p>
                          
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 pt-2">
                            {item.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-3 py-1 text-xs font-medium bg-secondary/10 text-secondary 
                                         rounded-full border border-secondary/20"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section Background Accent */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <span className="text-9xl font-black text-foreground">JOURNEY</span>
      </div>
    </section>
  );
};

export default EducationSection;