import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const SkillsSection = () => {
  const [inView, setInView] = useState(false);

  const skills = [
    { category: 'Languages', items: [
      { name: 'C++', level: 90 },
      { name: 'Java', level: 85 },
      { name: 'Python', level: 75 },
      { name: 'C', level: 80 }
    ]},
    { category: 'Frontend', items: [
      { name: 'HTML/CSS', level: 95 },
      { name: 'JavaScript', level: 88 },
      { name: 'React.js', level: 85 },
      { name: 'Bootstrap', level: 90 }
    ]},
    { category: 'Backend', items: [
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 75 },
      { name: 'MySQL', level: 85 },
      { name: 'API Integration', level: 82 }
    ]},
    { category: 'Tools & Others', items: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'VS Code', level: 95 },
      { name: 'Postman', level: 85 },
      { name: 'DSA', level: 88 }
    ]}
  ];

  useEffect(() => {
    const timer = setTimeout(() => setInView(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Continuously expanding my technical skill set through hands-on projects and learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: groupIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl hover-lift"
            >
              <h3 className="text-2xl font-semibold mb-6 text-gradient">
                {skillGroup.category}
              </h3>
              
              <div className="space-y-6">
                {skillGroup.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: (groupIndex * 0.1) + (skillIndex * 0.1) }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-primary font-semibold">{skill.level}%</span>
                    </div>
                    
                    <div className="progress-bar">
                      <motion.div
                        className="progress-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1.5, 
                          delay: (groupIndex * 0.2) + (skillIndex * 0.1),
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Specializations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="glass-card p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-semibold mb-6 text-gradient">Specializations</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['DSA', 'Full-Stack Development', 'API Integration', 'Problem Solving', 'Continuous Learning'].map((specialization, index) => (
                <motion.span
                  key={specialization}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 bg-gradient-to-r from-primary/20 to-secondary/20 
                           text-foreground rounded-full font-medium cursor-default
                           border border-primary/30 hover:border-primary/50 transition-all"
                >
                  {specialization}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Section Background Accent */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <span className="text-9xl font-black text-foreground">SKILLS</span>
      </div>
    </section>
  );
};

export default SkillsSection;