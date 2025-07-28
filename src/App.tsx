import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import ChatbotPage from './components/ChatbotPage';
import PortfolioPage from './components/PortfolioPage';
import CaseStudyPage from './components/CaseStudyPage';

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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChatbotPageWrapper />} />
        <Route path="/portfolio" element={<PortfolioPageWrapper />} />
        <Route path="/case-study/:id" element={<CaseStudyPage />} />
      </Routes>
    </Router>
  );
}

export default App;