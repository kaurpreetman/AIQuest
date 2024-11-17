import React from 'react';
import { useParams } from 'react-router-dom';
import { ThumbsUp, ThumbsDown, MessageCircle, Eye, Bot, Award } from 'lucide-react';

const SAMPLE_QUESTION = {
  title: "How does AI handle natural language processing in real-time applications?",
  content: "I'm building a chatbot and wondering about the best practices for implementing NLP in real-time scenarios. What are the current state-of-the-art approaches?",
  tags: ['artificial-intelligence', 'nlp', 'machine-learning'],
  votes: 42,
  answers: [
    {
      id: 1,
      content: "For real-time NLP applications, you'll want to consider these key aspects:\n\n1. Model Optimization\n- Use quantization\n- Consider distilled models\n- Implement caching strategies\n\n2. Architecture Choices\n- BERT for understanding\n- GPT for generation\n- T5 for specific tasks",
      author: {
        name: "Dr. Sarah Chen",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
        role: "AI Expert"
      },
      votes: 28,
      timestamp: "1d ago",
      isOfficial: true
    },
    {
      id: 2,
      content: "Based on the available knowledge base and best practices, here are some recommendations for real-time NLP processing:\n\n- Use streaming APIs\n- Implement rate limiting\n- Consider using websockets\n- Cache frequent responses",
      votes: 15,
      timestamp: "1d ago",
      isAIGenerated: true
    }
  ],
  author: {
    name: "Alex Kumar",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
  },
  timestamp: "2d ago",
  views: 1234
};

export default function QuestionDetailPage() {
  const { id } = useParams();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gray-900/50 border border-blue-900/20 rounded-xl p-6 mb-8">
        <div className="flex items-start space-x-4">
          <div className="flex flex-col items-center space-y-2">
            <button className="p-2 rounded-lg hover:bg-blue-600/10 text-gray-400 hover:text-blue-400">
              <ThumbsUp className="w-5 h-5" />
            </button>
            <span className="text-lg font-semibold text-gray-300">
              {SAMPLE_QUESTION.votes}
            </span>
            <button className="p-2 rounded-lg hover:bg-red-600/10 text-gray-400 hover:text-red-400">
              <ThumbsDown className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1">
            <h1 className="text-2xl font-bold text-white mb-4">
              {SAMPLE_QUESTION.title}
            </h1>

            <p className="text-gray-300 mb-4">{SAMPLE_QUESTION.content}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {SAMPLE_QUESTION.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs font-medium bg-blue-600/10 text-blue-400 rounded-full hover:bg-blue-600/20 cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between text-sm text-gray-400">
              <div className="flex items-center space-x-4">
                <span className="flex items-center">
                  <MessageCircle className="w-4 h-4 mr-1" />
                  {SAMPLE_QUESTION.answers.length} answers
                </span>
                <span className="flex items-center">
                  <Eye className="w-4 h-4 mr-1" />
                  {SAMPLE_QUESTION.views} views
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <img
                  src={SAMPLE_QUESTION.author.avatar}
                  alt={SAMPLE_QUESTION.author.name}
                  className="w-6 h-6 rounded-full"
                />
                <span>
                  asked by{' '}
                  <span className="text-blue-400">
                    {SAMPLE_QUESTION.author.name}
                  </span>
                </span>
                <span className="text-gray-500">{SAMPLE_QUESTION.timestamp}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">
          {SAMPLE_QUESTION.answers.length} Answers
        </h2>

        <div className="space-y-6">
          {SAMPLE_QUESTION.answers.map((answer) => (
            <div
              key={answer.id}
              className="bg-gray-900/50 border border-blue-900/20 rounded-xl p-6"
            >
              <div className="flex items-start space-x-4">
                <div className="flex flex-col items-center space-y-2">
                  <button className="p-2 rounded-lg hover:bg-blue-600/10 text-gray-400 hover:text-blue-400">
                    <ThumbsUp className="w-5 h-5" />
                  </button>
                  <span className="text-lg font-semibold text-gray-300">
                    {answer.votes}
                  </span>
                  <button className="p-2 rounded-lg hover:bg-red-600/10 text-gray-400 hover:text-red-400">
                    <ThumbsDown className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    {answer.isOfficial && (
                      <span className="flex items-center px-2 py-1 text-xs font-medium bg-green-600/20 text-green-400 rounded-full">
                        <Award className="w-3 h-3 mr-1" />
                        Official Answer
                      </span>
                    )}
                    {answer.isAIGenerated && (
                      <span className="flex items-center px-2 py-1 text-xs font-medium bg-blue-600/20 text-blue-400 rounded-full">
                        <Bot className="w-3 h-3 mr-1" />
                        AI Generated
                      </span>
                    )}
                  </div>

                  <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300 whitespace-pre-wrap">
                      {answer.content}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-end space-x-2">
                    {answer.author && (
                      <>
                        <img
                          src={answer.author.avatar}
                          alt={answer.author.name}
                          className="w-6 h-6 rounded-full"
                        />
                        <span className="text-sm text-gray-400">
                          answered by{' '}
                          <span className="text-blue-400">
                            {answer.author.name}
                          </span>
                          {answer.author.role && (
                            <span className="text-gray-500"> • {answer.author.role}</span>
                          )}
                        </span>
                      </>
                    )}
                    <span className="text-sm text-gray-500">{answer.timestamp}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-900/50 border border-blue-900/20 rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4">Your Answer</h2>
        <textarea
          rows={6}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          placeholder="Write your answer here..."
        />
        <div className="flex justify-end mt-4">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Post Answer
          </button>
        </div>
      </div>
    </div>
  );
}
