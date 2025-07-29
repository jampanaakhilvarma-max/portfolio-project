import { Linkedin, Github, Mail, ExternalLink } from 'lucide-react';
import type { Project, SocialLink, Achievement } from '../types';

// Social Links
export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/akhilvarmaj/',
    icon: Linkedin,
  },
  {
    platform: 'GitHub',
    url: 'https://github.com/akhilvarmaj',
    icon: Github,
  },
  {
    platform: 'Email',
    url: 'mailto:akhilvarmaj@gmail.com',
    icon: Mail,
  },
];

// Resume Link
export const RESUME_URL = 'https://docs.google.com/document/d/1Ahbmifz9LKQBe9_bu1Q4se1rghUVOrzlWoj3LEcUtGA/export?format=pdf';

// Achievements
export const ACHIEVEMENTS: Achievement[] = [
  {
    label: 'Platform Users',
    value: '15,000+',
    icon: Linkedin,
    color: 'green',
  },
  {
    label: 'Staffing Delays',
    value: '-70%',
    icon: ExternalLink,
    color: 'blue',
  },
];

// Side Projects Data
export const SIDE_PROJECTS: Project[] = [
  {
    title: '🔢 Personalized Feed Ranking Engine',
    description: 'Boosted feed engagement by 22% through algorithmic ranking based on behavioral signals and content relevance.',
    demo: 'https://colab.research.google.com/drive/1oXqT5KMlrMKGH06YZrfanhonCkK-wj2t?usp=sharing',
    category: 'AI/ML',
    status: 'Live',
  },
  {
    title: '🔍 Attrition Risk Predictor',
    description: 'Built a high-precision model to proactively flag at-risk employees, reducing voluntary attrition by 8 pp YoY.',
    demo: 'https://colab.research.google.com/drive/1THrUOcilBb-hgmanShL185PP15HN_Q4l?usp=sharing',
    category: 'AI/ML',
    status: 'Live',
  },
  {
    title: '🤖 AI-Powered Job Recommender for Talent Ops',
    description: 'Streamlined internal job-posting workflows using LLM embeddings, cutting manual effort by 80%.',
    demo: '#',
    category: 'AI/ML',
    status: 'Beta',
  },
  {
    title: '🎧 Automated Podcast Summarizer',
    description: 'Reduced weekly research time by 50% with a custom summarization pipeline for long-form audio content.',
    demo: '#',
    category: 'AI/ML',
    status: 'Development',
  },
];

// Navigation Items
export const NAVIGATION_ITEMS = [
  { href: '#hero', label: 'About' },
  { href: '#flagship', label: 'Products' },
  { href: '#projects', label: 'Projects' },
];

// Chat Configuration
export const CHAT_CONFIG = {
  webhookUrl: 'https://akhilaipractise1996.app.n8n.cloud/webhook/00fc39a9-1fb1-48ff-b00e-785268ecb0be/chat',
  initialMessages: [
    'Hi there! 👋',
    'My name is Akhil Varma. I\'m a Product Manager with a track record of shipping impactful digital products.',
    'I can walk you through my product leadership, AI-driven projects, and key outcomes. Ask away — from roadmaps to results!'
  ],
  i18n: {
    en: {
      title: 'AI Portfolio Assistant',
      subtitle: "Built by Akhil • Try asking about his experience!",
      footer: '',
      getStarted: 'New Conversation',
      inputPlaceholder: 'Ask about AI projects, experience, or skills...',
      closeButtonTooltip: 'Close chat',
    },
  },
  metadata: {
    userType: 'portfolio-visitor',
    source: 'portfolio-chat'
  }
};

// Theme Colors
export const THEME_COLORS = {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
  },
  secondary: {
    50: '#f8fafc',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
  },
  success: {
    50: '#f0fdf4',
    500: '#22c55e',
    600: '#16a34a',
  },
  warning: {
    50: '#fffbeb',
    500: '#f59e0b',
    600: '#d97706',
  },
} as const;

// Animation Durations
export const ANIMATION_DURATIONS = {
  fast: 150,
  normal: 300,
  slow: 500,
} as const;

// Breakpoints
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const; 