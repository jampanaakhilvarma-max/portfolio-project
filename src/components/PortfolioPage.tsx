import React from 'react';
import HeroSection from './HeroSection';
import FlagshipProducts from './FlagshipProducts';
import SideProjects from './SideProjects';
import { MessageCircle } from 'lucide-react';

interface PortfolioPageProps {
  onBackToChat: () => void;
}

const PortfolioPage: React.FC<PortfolioPageProps> = ({ onBackToChat }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-gray-900">My Product Portfolio</div>
          <div className="flex items-center space-x-6">
            <a href="#hero" className="text-gray-700 hover:text-gray-900 transition-colors">About</a>
            <a href="#flagship" className="text-gray-700 hover:text-gray-900 transition-colors">Products</a>
            <a href="#projects" className="text-gray-700 hover:text-gray-900 transition-colors">Projects</a>
            <button
              onClick={onBackToChat}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-20">
        <HeroSection />
        <FlagshipProducts />
        <SideProjects />
      </div>
    </div>
  );
};

export default PortfolioPage;