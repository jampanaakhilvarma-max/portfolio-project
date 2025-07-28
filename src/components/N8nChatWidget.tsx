import React, { useEffect, useRef } from 'react';

interface N8nChatWidgetProps {
  onSkip: () => void;
}

const N8nChatWidget: React.FC<N8nChatWidgetProps> = ({ onSkip }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const chatElementRef = useRef<HTMLElement | null>(null);

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
        welcomeMessage: "Hi! I can walk you through Akhil Varma's product leadership, AI-driven projects, and key outcomes. Ask away — from roadmaps to results.",
        errorMessage: "Please connect me to n8n first",
        backgroundColor: "#ffffff",
        height: 0,
        width: 0,
        fontSize: 16,
        showStarterPrompts: true,
        starterPrompts: [
          "\ud83d\udcbc What projects has he worked on?",
          "\ud83e\udde0 Tell me about his AI work",
          "\ud83d\udcc8 What are his key outcomes?",
          "\ud83e\udd1d How does he lead teams?"
        ]
      }
    };

    function configureChatWidget() {
      if (chatElementRef.current) {
        Object.entries(chatConfig.chatWindow).forEach(([key, value]) => {
          if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
            chatElementRef.current!.setAttribute(`data-${key}`, value.toString());
          } else if (Array.isArray(value)) {
            chatElementRef.current!.setAttribute(`data-${key}`, JSON.stringify(value));
          }
        });
        chatElementRef.current.setAttribute('data-welcome-message', chatConfig.chatWindow.welcomeMessage);
      } else {
        console.warn('n8nchatui-inpage element not found. Chat widget may not be configured.');
      }
    }

    // Wait for the custom element to be defined before creating and configuring
    if ('customElements' in window && typeof window.customElements.whenDefined === 'function') {
      window.customElements.whenDefined('n8nchatui-inpage').then(() => {
        // Create the chat element imperatively
        if (containerRef.current && !chatElementRef.current) {
          const chatElement = document.createElement('n8nchatui-inpage');
          chatElement.setAttribute('data-welcome-message', chatConfig.chatWindow.welcomeMessage);
          // Set the chat backend URL
          chatElement.setAttribute('data-n8n-chat-url', 'https://akhilaipractise1996.app.n8n.cloud/webhook/00fc39a9-1fb1-48ff-b00e-785268ecb0be/chat');
          containerRef.current.appendChild(chatElement);
          chatElementRef.current = chatElement;
          
          // Configure the element after it's added to DOM
          setTimeout(configureChatWidget, 100);
        }
      });
    } else {
      // Fallback for very old browsers
      setTimeout(() => {
        if (containerRef.current && !chatElementRef.current) {
          const chatElement = document.createElement('n8nchatui-inpage');
          chatElement.setAttribute('data-welcome-message', chatConfig.chatWindow.welcomeMessage);
          // Set the chat backend URL
          chatElement.setAttribute('data-n8n-chat-url', 'https://akhilaipractise1996.app.n8n.cloud/webhook/00fc39a9-1fb1-48ff-b00e-785268ecb0be/chat');
          containerRef.current.appendChild(chatElement);
          chatElementRef.current = chatElement;
          
          setTimeout(configureChatWidget, 100);
        }
      }, 500);
    }

    // Cleanup function
    return () => {
      if (chatElementRef.current && containerRef.current) {
        containerRef.current.removeChild(chatElementRef.current);
        chatElementRef.current = null;
      }
    };
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
      <div className="flex-1 w-full" ref={containerRef}>
        {/* Chat element will be created and appended here imperatively */}
      </div>
    </div>
  );
};

export default N8nChatWidget; 