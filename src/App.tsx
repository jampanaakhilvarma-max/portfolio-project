import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import ChatbotPage from './components/ChatbotPage';
import PortfolioPage from './components/PortfolioPage';
import CaseStudyPage from './components/CaseStudyPage';
import WorkbenchPage from './components/Workbench';
import ErrorBoundary from './components/ErrorBoundary';

// Wrapper component to use useNavigate hook
const ChatbotPageWrapper = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // Use location.key as a unique key to force remount on navigation
  return <ChatbotPage key={location.key} onSkip={() => navigate('/portfolio')} />;
};

const PortfolioPageWrapper = () => {
  const navigate = useNavigate();
  return <PortfolioPage onBackToChat={() => navigate('/')} />;
};

const CaseStudyPageWrapper = () => {
  const navigate = useNavigate();
  return <CaseStudyPage onBack={() => navigate('/portfolio#case-study-0')} />;
};

const WorkbenchPageWrapper = () => {
  const navigate = useNavigate();
  return <WorkbenchPage onBack={() => navigate('/portfolio#case-study-1')} />;
};

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<ChatbotPageWrapper />} />
          <Route path="/portfolio" element={<PortfolioPageWrapper />} />
          <Route path="/case-study/0" element={<CaseStudyPageWrapper />} />
          <Route path="/case-study/1" element={<WorkbenchPageWrapper />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;