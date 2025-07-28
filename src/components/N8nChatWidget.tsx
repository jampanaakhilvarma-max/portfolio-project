import React, { useEffect } from 'react';

interface N8nChatWidgetProps {
  onSkip: () => void;
}

const N8nChatWidget: React.FC<N8nChatWidgetProps> = ({ onSkip }) => {
  useEffect(() => {
    // Configure N8N Chat Widget
    const chatConfig = {
      chatWindow: {
        borderRadiusStyle: "rounded",
        avatarBorderRadius: 25,
        messageBorderRadius: 6,
        showTitle: true,
        title: "Akhil Varma - Product Manager",
        titleAvatarSrc: "https://www.svgrepo.com/show/339963/chat-bot.svg",
        avatarSize: 40,
        welcomeMessage: "Hi! I can walk you through Akhil Varma's product leadership, AI-driven projects, and key outcomes. Ask away — from roadmaps to results.",
        errorMessage: "Please connect me to n8n first",
        backgroundColor: "#ffffff",
        height: 0,
        width: 0,
        fontSize: 16,
        starterPrompts: [
          "Who are you?",
          "What do you do?",
          "Tell me about your experience",
          "What are your key achievements?"
        ]
      }
    };

    // Apply configuration to the chat widget
    const chatElement = document.querySelector('n8nchatui-inpage');
    if (chatElement) {
      // Set data attributes for configuration
      Object.entries(chatConfig.chatWindow).forEach(([key, value]) => {
        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
          chatElement.setAttribute(`data-${key}`, value.toString());
        }
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex flex-col">
      {/* Simple Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-[#1E293B]">Akhil Varma Product Portfolio</h1>
            <p className="text-sm text-gray-600 mt-1">Driving Impactful Product Outcomes at the Intersection of AI, Strategy, and User-Centric Design.</p>
          </div>
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

      {/* Chat Interface Heading */}
      <div className="text-center py-4">
        <h3 className="text-lg font-medium text-gray-700">Start a conversation below</h3>
      </div>

      {/* N8N Chat UI Container - Full Window Mode */}
      <div className="flex-1 w-full">
        <n8nchatui-inpage></n8nchatui-inpage>
      </div>
    </div>
  );
};

export default N8nChatWidget; 