import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Folder } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'TimeTable Generator',
      description: 'An intelligent timetable generation system built with Java for educational institutions.',
      tags: ['Java', 'Algorithm Design', 'GUI'],
      github: 'https://github.com/sayan1812/Time_Table_Generator',
      color: 'from-blue-500/20 to-purple-500/20'
    },
    {
      title: 'Library Management System',
      description: 'Comprehensive library management system with book tracking and user management.',
      tags: ['C++', 'Data Structures', 'File Handling'],
      github: 'https://github.com/sayan1812/Library-Management-System-C-',
      color: 'from-green-500/20 to-teal-500/20'
    },
    {
      title: 'Autocorrect Tool',
      description: 'Smart text correction tool with real-time suggestions and grammar checking.',
      tags: ['HTML', 'CSS', 'JavaScript', 'NLP'],
      github: 'https://github.com/sayan1812/Autocorrect-Tool',
      live: 'https://sayan1812.github.io/Autocorrect-Tool',
      color: 'from-orange-500/20 to-red-500/20'
    },
    {
      title: 'Resume Parser',
      description: 'AI-powered resume parsing tool that extracts and structures candidate information.',
      tags: ['Python', 'HTML', 'CSS', 'Machine Learning'],
      github: 'https://github.com/sayan1812/resume_parser',
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      title: 'Translator App',
      description: 'Multi-language translation application with speech-to-text capabilities.',
      tags: ['JavaScript', 'CSS', 'HTML', 'APIs'],
      github: 'https://github.com/sayan1812/translator',
      live: 'https://sayan1812.github.io/translator',
      color: 'from-cyan-500/20 to-blue-500/20'
    },
    {
      title: 'Music Player',
      description: 'Feature-rich web music player with playlist management and audio visualization.',
      tags: ['JavaScript', 'HTML', 'CSS', 'Web Audio API'],
      github: 'https://github.com/sayan1812/Music-Player',
      live: 'https://sayan1812.github.io/Music-Player',
      color: 'from-indigo-500/20 to-purple-500/20'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical skills and problem-solving abilities through various projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="glass-card border-0 h-full hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <CardContent className="p-0">
                  <div className={`h-40 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                    <Folder className="w-16 h-16 text-white/80 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold text-gradient group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary 
                                   rounded-full border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3 pt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="btn-glass flex-1 group/btn"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                        Code
                      </Button>
                      
                      {project.live && (
                        <Button
                          size="sm"
                          className="btn-hero flex-1 group/btn"
                          onClick={() => window.open(project.live, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                          Live
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-4 text-gradient">
              Explore More Projects
            </h3>
            <p className="text-muted-foreground mb-6">
              Check out my GitHub for more projects and contributions
            </p>
            <Button
              className="btn-hero group"
              onClick={() => window.open('https://github.com/sayan1812', '_blank')}
            >
              <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              View GitHub Profile
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Section Background Accent */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <span className="text-9xl font-black text-foreground">PROJECTS</span>
      </div>
    </section>
  );
};

export default ProjectsSection;