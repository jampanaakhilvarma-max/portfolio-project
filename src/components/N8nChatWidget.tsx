import React from 'react';

interface N8nChatWidgetProps {
  onSkip: () => void;
}

const N8nChatWidget: React.FC<N8nChatWidgetProps> = ({ onSkip }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex flex-col">
      {/* Simple Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-[#1E293B]">Chat with Akhil</h1>
          <button
            onClick={onSkip}
            className="flex items-center space-x-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all transform hover:scale-105 shadow-lg"
          >
            <span>Skip to Portfolio</span>
          </button>
        </div>
      </header>

      {/* Simple 1-liner heading */}
      <div className="text-center py-6">
        <h2 className="text-2xl font-semibold text-gray-800">Ask me anything about my work and experience</h2>
      </div>

      {/* N8N Chat UI Container - Full Window Mode */}
      <div className="flex-1 w-full">
        <n8nchatui-inpage></n8nchatui-inpage>
      </div>
    </div>
  );
};

export default N8nChatWidget; 