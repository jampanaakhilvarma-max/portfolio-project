import React, { useEffect, useRef } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';
import { 
  Brain,
  Target,
  Users,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { CHAT_CONFIG } from '../lib/constants';
import type { N8nChatWidgetProps } from '../types';

const N8nChatWidget: React.FC<N8nChatWidgetProps> = ({ onSkip }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add custom CSS variables to match your design
    const style = document.createElement('style');
    style.textContent = `
      :root {
        --chat--color-primary: #4f46e5;
        --chat--color-primary-shade-50: #4338ca;
        --chat--color-primary-shade-100: #3730a3;
        --chat--color-secondary: #8b5cf6;
        --chat--color-secondary-shade-50: #7c3aed;
        --chat--color-secondary-shade-100: #6d28d9;
        --chat--color-white: #ffffff;
        --chat--color-light: #f8fafc;
        --chat--color-light-shade-50: #f1f5f9;
        --chat--color-light-shade-100: #e2e8f0;
        --chat--color-medium: #cbd5e1;
        --chat--color-dark: #1e293b;
        --chat--color-disabled: #64748b;
        --chat--color-typing: #475569;

        --chat--spacing: 1rem;
        --chat--border-radius: 0.5rem;
        --chat--transition-duration: 0.15s;

        --chat--window--width: 100%;
        --chat--window--height: 100%;

        --chat--header-height: auto;
        --chat--header--padding: var(--chat--spacing);
        --chat--header--background: var(--chat--color-dark);
        --chat--header--color: var(--chat--color-white);
        --chat--header--border-top: none;
        --chat--header--border-bottom: none;
        --chat--heading--font-size: 1.5em;
        --chat--subtitle--font-size: inherit;
        --chat--subtitle--line-height: 1.8;

        --chat--textarea--height: 50px;

        --chat--message--font-size: 1rem;
        --chat--message--padding: var(--chat--spacing);
        --chat--message--border-radius: var(--chat--border-radius);
        --chat--message-line-height: 1.8;
        --chat--message--bot--background: var(--chat--color-white);
        --chat--message--bot--color: var(--chat--color-dark);
        --chat--message--bot--border: 1px solid var(--chat--color-light-shade-100);
        --chat--message--user--background: var(--chat--color-primary);
        --chat--message--user--color: var(--chat--color-white);
        --chat--message--user--border: none;
        --chat--message--pre--background: rgba(0, 0, 0, 0.05);

        --chat--toggle--background: var(--chat--color-primary);
        --chat--toggle--hover--background: var(--chat--color-primary-shade-50);
        --chat--toggle--active--background: var(--chat--color-primary-shade-100);
        --chat--toggle--color: var(--chat--color-white);
        --chat--toggle--size: 64px;
      }
    `;
    document.head.appendChild(style);

    // Initialize n8n chat
    if (containerRef.current) {
      createChat({
        webhookUrl: CHAT_CONFIG.webhookUrl,
        target: '#n8n-chat-container',
        mode: 'fullscreen',
        showWelcomeScreen: false,
        loadPreviousSession: true,
        initialMessages: CHAT_CONFIG.initialMessages,
        i18n: CHAT_CONFIG.i18n,
        metadata: CHAT_CONFIG.metadata
      });
    }

    // Cleanup function
    return () => {
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-start justify-center p-6 pt-32">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Left Side - Introduction */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 mb-6 lg:mb-8">
            <Sparkles className="w-4 h-4 text-blue-300" />
            <span className="text-blue-200 text-sm font-medium">Live AI Demo</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 lg:mb-6 leading-tight">
            Akhil Varma
          </h1>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-blue-200 mb-4 lg:mb-6 font-light">
            Product Manager
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-6 lg:mb-8 leading-relaxed max-w-2xl">
            Bridging Human Intuition, User Feedback & AI Intelligence.
            The chatbot on the right is a live example of the conversational AI products I build.
          </p>

          <div className="flex flex-wrap gap-3 lg:gap-4 mb-6 lg:mb-8 justify-center lg:justify-start">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 lg:px-4 py-2">
              <Brain className="w-4 lg:w-5 h-4 lg:h-5 text-blue-400" />
              <span className="text-gray-200 font-medium text-sm lg:text-base">6+ Years</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 lg:px-4 py-2">
              <Target className="w-4 lg:w-5 h-4 lg:h-5 text-teal-400" />
              <span className="text-gray-200 font-medium text-sm lg:text-base">Product Lifecycle</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 lg:px-4 py-2">
              <Users className="w-4 lg:w-5 h-4 lg:h-5 text-orange-400" />
              <span className="text-gray-200 font-medium text-sm lg:text-base">AI Strategy</span>
            </div>
          </div>

          <button
            onClick={onSkip}
            className="group bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-3 mx-auto lg:mx-0 text-sm lg:text-base"
          >
            View Full Portfolio
            <ArrowRight className="w-4 lg:w-5 h-4 lg:h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right Side - Chat Widget */}
        <div className="flex justify-center lg:justify-end">
          <div 
            id="n8n-chat-container" 
            className="w-full max-w-lg h-[450px] lg:h-[700px]"
            ref={containerRef}
          >
            {/* n8n chat will be rendered here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default N8nChatWidget; 