import React from 'react';
import { Link } from 'react-router-dom';
import { Filter } from 'lucide-react';
import QuestionCard from '../components/questions/QuestionCard';
import AskQuestionButton from '../components/questions/AskQuestionButton';

const QUESTIONS = [
  {
    title: "Understanding Transformer Architecture in Deep Learning",
    content: "Can someone explain the key components of the Transformer architecture and how they work together? Specifically interested in the self-attention mechanism.",
    tags: ['deep-learning', 'transformers', 'neural-networks'],
    votes: 56,
    answers: 8,
    views: 2103,
    author: {
      name: "Maria Rodriguez",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100"
    },
    timestamp: "1d ago",
    hasAIAnswer: true
  },
  {
    title: "Implementing OAuth2 in a Microservices Architecture",
    content: "What's the best approach to implement OAuth2 authentication across multiple microservices? Looking for security best practices and potential pitfalls.",
    tags: ['security', 'oauth2', 'microservices'],
    votes: 45,
    answers: 6,
    views: 1567,
    author: {
      name: "James Wilson",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100"
    },
    timestamp: "3d ago",
    hasOfficialAnswer: true
  }
];

export default function QuestionsPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">All Questions</h1>
        <div className="flex items-center space-x-4">
          <button className="flex items-center px-4 py-2 bg-gray-800 rounded-lg text-sm hover:bg-gray-700">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </button>
          <Link
            to="/ask"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700"
          >
            Ask Question
          </Link>
        </div>
      </div>

      <div className="bg-gray-800/50 p-4 rounded-lg mb-8">
        <div className="flex flex-wrap gap-4">
          <select className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-sm">
            <option>All Categories</option>
            <option>Programming</option>
            <option>Machine Learning</option>
            <option>DevOps</option>
          </select>
          <select className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-sm">
            <option>Most Recent</option>
            <option>Most Answered</option>
            <option>Most Viewed</option>
          </select>
        </div>
      </div>

      <div className="space-y-6">
        {QUESTIONS.map((question, index) => (
          <QuestionCard key={index} {...question} />
        ))}
      </div>

      <AskQuestionButton />
    </div>
  );
}