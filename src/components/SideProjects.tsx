import React from 'react';
import { ExternalLink, Github, Calendar, Zap, Code, Lightbulb } from 'lucide-react';

const SideProjects: React.FC = () => {
  const projects = [
    {
      title: 'AI Product Assistant',
      description: 'A ChatGPT-powered tool that helps product managers generate PRDs, user stories, and roadmaps.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'AI/ML',
      status: 'Live',
      technologies: ['OpenAI API', 'React', 'Node.js'],
      github: '#',
      demo: '#',
      timeline: '2023'
    },
    {
      title: 'StartupMetrics Dashboard',
      description: 'Real-time dashboard for tracking key startup metrics and KPIs with beautiful visualizations.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Analytics',
      status: 'Beta',
      technologies: ['D3.js', 'Python', 'PostgreSQL'],
      github: '#',
      demo: '#',
      timeline: '2023'
    },
    {
      title: 'FeatureFeedback Collector',
      description: 'Widget for collecting and prioritizing user feedback directly from your product interface.',
      image: 'https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'User Research',
      status: 'Prototype',
      technologies: ['Vue.js', 'Firebase', 'Tailwind'],
      github: '#',
      demo: '#',
      timeline: '2022'
    },
    {
      title: 'PMToolkit',
      description: 'Collection of product management templates, frameworks, and calculators for everyday PM tasks.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Productivity',
      status: 'Live',
      technologies: ['React', 'TypeScript', 'Vercel'],
      github: '#',
      demo: '#',
      timeline: '2022'
    },
    {
      title: 'UserJourney Mapper',
      description: 'Interactive tool for creating and sharing user journey maps with team collaboration features.',
      image: 'https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'UX Design',
      status: 'Development',
      technologies: ['React', 'Canvas API', 'WebSocket'],
      github: '#',
      demo: '#',
      timeline: '2023'
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'bg-green-100 text-green-800';
      case 'Beta': return 'bg-blue-100 text-blue-800';
      case 'Development': return 'bg-yellow-100 text-yellow-800';
      case 'Prototype': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI/ML': return Zap;
      case 'Analytics': return Code;
      case 'User Research': return Lightbulb;
      default: return Code;
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
            <Lightbulb className="w-4 h-4" />
            <span>Side Projects & Prototypes</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experimental Innovation</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            When I'm not working on flagship products, I love experimenting with new ideas, 
            technologies, and solutions to everyday product management challenges.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                  <div className="bg-white/90 backdrop-blur-md rounded-full p-1">
                    {React.createElement(getCategoryIcon(project.category), { 
                      className: "w-4 h-4 text-gray-700" 
                    })}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{project.timeline}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3">
                  <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                    {project.category}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-4">
                  <a
                    href={project.demo}
                    className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Have an Idea?</h3>
            <p className="text-gray-600 mb-6">
              I'm always interested in collaborating on innovative product ideas. 
              Let's build something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:akhil@example.com"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 font-medium"
              >
                Let's Collaborate
              </a>
              <a
                href="#"
                className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors font-medium"
              >
                View All Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SideProjects;