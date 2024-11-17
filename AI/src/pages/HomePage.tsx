import React from 'react';
import QuestionCard from '../components/questions/QuestionCard';
import AskQuestionButton from '../components/questions/AskQuestionButton';
import TabNavigation from '../components/layout/TabNavigation';

const SAMPLE_QUESTIONS = [
  {
    title: "How does AI handle natural language processing in real-time applications?",
    content: "I'm building a chatbot and wondering about the best practices for implementing NLP in real-time scenarios. What are the current state-of-the-art approaches?",
    tags: ['artificial-intelligence', 'nlp', 'machine-learning'],
    votes: 42,
    answers: 5,
    views: 1234,
    author: {
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
    },
    timestamp: "2h ago",
    hasAIAnswer: true
  },
  {
    title: "Best practices for scaling machine learning models in production",
    content: "What are the recommended approaches for scaling ML models when dealing with increasing data volumes and user requests?",
    tags: ['machine-learning', 'scaling', 'production'],
    votes: 38,
    answers: 7,
    views: 892,
    author: {
      name: "Alex Kumar",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
    },
    timestamp: "4h ago",
    hasOfficialAnswer: true
  }
];

export default function HomePage() {
  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Knowledge Base</h1>
        <div className="flex space-x-4">
          <select className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm">
            <option>Most Recent</option>
            <option>Most Voted</option>
            <option>Most Viewed</option>
          </select>
        </div>
      </div>

      <TabNavigation />

      <div className="mt-8 space-y-6">
        {SAMPLE_QUESTIONS.map((question, index) => (
          <QuestionCard key={index} {...question} />
        ))}
      </div>

      <AskQuestionButton />
    </>
  );
}