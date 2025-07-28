import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import ChatbotPage from './components/ChatbotPage';
import PortfolioPage from './components/PortfolioPage';

const CaseStudyPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-3xl w-full p-8 bg-white rounded-xl shadow-lg">
        <button
          onClick={() => navigate('/portfolio')}
          className="mb-6 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition font-medium"
        >
          ← Back to Portfolio
        </button>
        <h1 className="text-4xl font-bold mb-4 text-indigo-700">Case Study</h1>
        <p className="text-lg text-gray-700">This is a placeholder for the case study details. You can customize this page to match your product's format and colors.</p>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChatbotPage onSkip={() => window.location.assign('/portfolio')} />} />
        <Route path="/portfolio" element={<PortfolioPage onBackToChat={() => window.location.assign('/')} />} />
        <Route path="/case-study/:id" element={<CaseStudyPage />} />
      </Routes>
    </Router>
  );
}

export default App;