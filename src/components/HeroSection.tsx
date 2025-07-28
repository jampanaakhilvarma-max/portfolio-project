import React from 'react';
import { MapPin, Mail, Linkedin, Github, Award, Users, TrendingUp, Star } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 flex items-center">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium">
                <Award className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-center">HR-Tech & Agentic AI Product Leader</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Akhil Varma
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-medium">
                Bridging Human Intuition, Market Feedback & Machine Intelligence
              </p>
              <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                <p>
                  I build agentic, scalable, and human-aware product ecosystems at the intersection of people, intelligent systems, and business outcomes. At Dex, I've led flagship HR-Tech and AI products—streamlining employee journeys, automating internal talent workflows, and enabling decision-making at scale. These platforms now support 15,000+ employees and have helped cut staffing delays by 70%.
                </p>
                <p>
                  But product isn't just what I do—it's how I think.
                </p>
                <p>
                  I still remember the first time something I built removed a blocker in someone's day. It wasn't the feature specs or architecture diagrams that stuck with me—it was that smile of frictionlessness. Since then, I've been hooked on crafting systems that anticipate need, move with users, and operate quietly but powerfully in the background. For me, product is where empathy meets automation.
                </p>
              </div>

              {/* Achievement Stars */}
            </div>

            {/* Contact & Social Links */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="mailto:jampanaakhilvarma@hotmail.com"
                className="flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base w-full sm:w-auto justify-center"
              >
                <Mail className="w-4 h-4" />
                <span>Get in Touch</span>
              </a>
              <a
                href="https://www.linkedin.com/in/akhilvarmaj/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors text-sm sm:text-base w-full sm:w-auto justify-center"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://docs.google.com/document/d/1Ahbmifz9LKQBe9_bu1Q4se1rghUVOrzlWoj3LEcUtGA/export?format=pdf"
                className="px-6 sm:px-8 py-2 sm:py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors text-center font-medium text-sm sm:text-base w-full sm:w-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Right Column - Profile Image & Cards */}
          <div className="relative mt-8 lg:mt-0">
            {/* Profile Image */}
            <div className="relative z-10 mx-auto w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center">
              <img src="/assets/1639191622837.jpg" alt="Profile" className="w-40 h-40 sm:w-48 sm:h-48 object-contain mx-auto" />
            </div>

            {/* Floating Cards */}
            <div
              className="absolute -top-2 -right-8 sm:-top-4 sm:-right-12 bg-white rounded-xl shadow-lg p-3 sm:p-4 border border-gray-100"
              style={{ width: '160px', maxWidth: '160px' }}
            >
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-600">Platform Users</p>
                  <p className="text-sm sm:text-lg font-bold text-gray-900">15,000+</p>
                </div>
              </div>
            </div>

            <div
              className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-white rounded-xl shadow-lg p-3 sm:p-4 border border-gray-100"
              style={{ width: '160px', maxWidth: '160px' }}
            >
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-600">Staffing Delays</p>
                  <p className="text-sm sm:text-lg font-bold text-gray-900">-70%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;