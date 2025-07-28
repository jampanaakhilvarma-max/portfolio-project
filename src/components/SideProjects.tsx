import React from 'react';
import { Zap, Code, Lightbulb, Star } from 'lucide-react';

const SideProjects: React.FC = () => {
  const projects = [
    {
      title: '🔢 Personalized Feed Ranking Engine',
      description: 'Boosted feed engagement by 22% through algorithmic ranking based on behavioral signals and content relevance.',
      demo: '#',
    },
    {
      title: '🔍 Attrition Risk Predictor',
      description: 'Built a high-precision model to proactively flag at-risk employees, reducing voluntary attrition by 8 pp YoY.',
      demo: '#',
    },
    {
      title: '🤖 AI-Powered Job Recommender for Talent Ops',
      description: 'Streamlined internal job-posting workflows using LLM embeddings, cutting manual effort by 80%.',
      demo: '#',
    },
    {
      title: '🎧 Automated Podcast Summarizer',
      description: 'Reduced weekly research time by 50% with a custom summarization pipeline for long-form audio content.',
      demo: '#',
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
    <section id="projects" className="py-12 sm:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-green-100 text-green-800 rounded-full text-xs sm:text-sm font-medium mb-4">
            <Lightbulb className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Side Projects & Prototypes</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Experimental Innovation</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            When I'm not working on flagship products, I love experimenting with new ideas, 
            technologies, and solutions to everyday product management challenges.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group p-4 sm:p-6 flex flex-col gap-2 h-full justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{project.title}</h3>
                <div className="text-gray-700 text-xs sm:text-sm mb-2">{project.description}</div>
                
                {/* Innovation Rating */}
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                  </div>
                  <span className="text-xs text-gray-500">Innovation</span>
                </div>
              </div>
              
              <div className="flex-grow"></div>
              <div className="pt-2 flex items-end">
                <a
                  href={project.demo}
                  className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-xs sm:text-sm font-medium w-full justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Have an Idea?</h3>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              I'm always interested in collaborating on innovative product ideas. 
              Let's build something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="mailto:akhil@example.com"
                className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 font-medium text-sm sm:text-base"
              >
                Let's Collaborate
              </a>
              <a
                href="#"
                className="px-6 sm:px-8 py-2 sm:py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors font-medium text-sm sm:text-base"
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