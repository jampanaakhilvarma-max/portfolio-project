import React from 'react';
import N8nChatWidget from './N8nChatWidget';

interface ChatbotPageProps {
  onSkip: () => void;
}

const ChatbotPage: React.FC<ChatbotPageProps> = ({ onSkip }) => {
  return <N8nChatWidget onSkip={onSkip} />;
};

export default ChatbotPage;