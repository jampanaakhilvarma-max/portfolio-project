import React from 'react';
import { MapPin, Mail, Linkedin, Github, Award, Users, TrendingUp } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 flex items-center">
      <div className="max-w-6xl mx-auto px-4 py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                <Award className="w-4 h-4" />
                <span>Product Manager</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Akhil
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed whitespace-pre-line">
                I'm Akhil Varma, a HR-Tech & AI Product Manager at Dex who turns sprawling employee data into Agentic AI workflows that feel effortless. Over the past 6+ years I've taken three products from whiteboard scribble to launch—features such as Dex Feed, Gamification, and our AI talent-matching engine—now relied on by 6,000 employees every month and slashing staffing delays by 70%.

Fluent in both code and conversation, I prototype in Python before launch and align with leadership after, shipping human-centred solutions at startup speed.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">5+</div>
                <div className="text-sm text-gray-600 flex items-center justify-center mt-1">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">7</div>
                <div className="text-sm text-gray-600 flex items-center justify-center mt-1">
                  <Award className="w-4 h-4 mr-1" />
                  Total Projects
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">10K+</div>
                <div className="text-sm text-gray-600 flex items-center justify-center mt-1">
                  <Users className="w-4 h-4 mr-1" />
                  Users Impacted
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>Hyderabad, Ts</span>
              </div>
              <div className="flex items-center space-x-4">
                <a href="mailto:akhil@example.com" className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                  <Mail className="w-5 h-5 text-gray-600" />
                </a>
                <a href="https://www.linkedin.com/in/akhilvarmaj/" className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 text-gray-600" />
                </a>
                <a href="#" className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                  <Github className="w-5 h-5 text-gray-600" />
                </a>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#flagship"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 text-center font-medium"
              >
                View My Work
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=1UxAqNO-dmdQgpGAXriZ2d_RXUl12unnX"
                className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors text-center font-medium"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                Resume
              </a>
            </div>
          </div>

          {/* Right Column - Profile Image & Cards */}
          <div className="relative">
            {/* Profile Image */}
            <div className="relative z-10 mx-auto w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <div className="text-6xl text-gray-600">👨‍💼</div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Growth Expert</div>
                  <div className="text-xs text-gray-500">User Acquisition & Retention</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Team Leader</div>
                  <div className="text-xs text-gray-500">Cross-functional Collaboration</div>
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