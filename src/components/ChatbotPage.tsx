import React from 'react';
import N8nChatWidget from './N8nChatWidget';
import type { ChatbotPageProps } from '../types';

const ChatbotPage: React.FC<ChatbotPageProps> = ({ onSkip }) => {
  return <N8nChatWidget onSkip={onSkip} />;
};

export default React.memo(ChatbotPage);