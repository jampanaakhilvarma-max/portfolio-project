import React from 'react';
import HeroSection from './HeroSection';
import FlagshipProducts from './FlagshipProducts';
import SideProjects from './SideProjects';
import { MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PortfolioPageProps {
  onBackToChat: () => void;
}

const PortfolioPage: React.FC<PortfolioPageProps> = ({ onBackToChat }) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 sm:py-4 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <div className="text-lg sm:text-xl font-bold text-gray-900 text-center sm:text-left">My Product Portfolio</div>
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <div className="flex space-x-4 sm:space-x-6">
              <a href="#hero" className="text-sm sm:text-base text-gray-700 hover:text-gray-900 transition-colors">About</a>
              <a href="#flagship" className="text-sm sm:text-base text-gray-700 hover:text-gray-900 transition-colors">Products</a>
              <a href="#projects" className="text-sm sm:text-base text-gray-700 hover:text-gray-900 transition-colors">Projects</a>
            </div>
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-24 sm:pt-20">
        <HeroSection />
        <FlagshipProducts />
        <SideProjects />
      </div>
    </div>
  );
};

export default PortfolioPage;