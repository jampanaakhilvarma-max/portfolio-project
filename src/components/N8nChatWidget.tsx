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
        title: "Akhil Varma - AI-Driven Product Leader",
        titleAvatarSrc: "https://www.svgrepo.com/show/339963/chat-bot.svg",
        avatarSize: 40,
        welcomeMessage: "Explore Akhil's journey as a Product Manager delivering AI-powered solutions that drive business impact.",
        errorMessage: "Please connect me to n8n first",
        backgroundColor: "#ffffff",
        height: 0,
        width: 0,
        fontSize: 16,
        showStarterPrompts: true,
        starterPrompts: [
          "💼 What projects has he worked on?",
          "🧠 Tell me about his AI work",
          "📈 What are his key outcomes?",
          "🤝 How does he lead teams?"
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
        } else if (Array.isArray(value)) {
          // Handle array values like starterPrompts
          chatElement.setAttribute(`data-${key}`, JSON.stringify(value));
        }
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex flex-col">
      {/* Enhanced Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-[#1E293B] leading-tight">Akhil Varma | AI-Driven Product Leader</h1>
            <p className="text-sm text-gray-600 mt-2 leading-relaxed font-medium">Portfolio of Impact-First Digital Products</p>
          </div>
          <button
            onClick={onSkip}
            className="flex items-center space-x-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all transform hover:scale-105 shadow-lg"
          >
            <span>Explore Full Portfolio</span>
          </button>
        </div>
      </header>

      {/* Enhanced heading with better visual hierarchy */}
      <div className="text-center py-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Ask me about what I shipped, not just what I scoped</h2>
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