// Shared types for the portfolio application

export interface Project {
  title: string;
  description: string;
  demo: string;
  status?: 'Live' | 'Beta' | 'Development' | 'Prototype';
  category?: 'AI/ML' | 'Analytics' | 'User Research';
}

export interface CaseStudy {
  id: string;
  title: string;
  company: string;
  role: string;
  duration: string;
  description: string;
  outcomes: string[];
  technologies: string[];
  metrics: {
    label: string;
    before: string;
    after: string;
    improvement?: string;
  }[];
}

export interface NavigationProps {
  onBackToChat: () => void;
}

export interface ChatbotPageProps {
  onSkip: () => void;
}

export interface PortfolioPageProps {
  onBackToChat: () => void;
}

export interface CaseStudyPageProps {
  onBack: () => void;
}

export interface WorkbenchPageProps {
  onBack: () => void;
}

export interface N8nChatWidgetProps {
  onSkip: () => void;
}

export interface HeroSectionProps {
  className?: string;
}

export interface FlagshipProduct {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  metrics: {
    label: string;
    value: string;
    change?: string;
  }[];
  features: string[];
  technologies: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface Achievement {
  label: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
} 