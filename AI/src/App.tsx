import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import HomePage from './pages/HomePage';
import QuestionsPage from './pages/QuestionsPage';
import AskQuestionPage from './pages/AskQuestionPage';
import AnalyticsPage from './pages/AnalyticsPage';
import QuestionDetailPage from './pages/QuestionDetailPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/questions" element={<QuestionsPage />} />
            <Route path="/questions/:id" element={<QuestionDetailPage />} />
            <Route path="/ask" element={<AskQuestionPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;