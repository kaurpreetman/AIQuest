import React from 'react';
import { ThumbsUp, ThumbsDown, MessageCircle, Eye, Bot } from 'lucide-react';

interface QuestionCardProps {
  title: string;
  content: string;
  tags: string[];
  votes: number;
  answers: number;
  views: number;
  author: {
    name: string;
    avatar: string;
  };
  timestamp: string;
  hasOfficialAnswer?: boolean;
  hasAIAnswer?: boolean;
}

export default function QuestionCard({
  title,
  content,
  tags,
  votes,
  answers,
  views,
  author,
  timestamp,
  hasOfficialAnswer,
  hasAIAnswer,
}: QuestionCardProps) {
  return (
    <div className="bg-gray-900/50 border border-blue-900/20 rounded-xl p-6 hover:border-blue-600/30 transition-all duration-300">
      <div className="flex items-start space-x-4">
        <div className="flex flex-col items-center space-y-2">
          <button className="p-2 rounded-lg hover:bg-blue-600/10 text-gray-400 hover:text-blue-400">
            <ThumbsUp className="w-5 h-5" />
          </button>
          <span className="text-lg font-semibold text-gray-300">{votes}</span>
          <button className="p-2 rounded-lg hover:bg-red-600/10 text-gray-400 hover:text-red-400">
            <ThumbsDown className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <h2 className="text-xl font-bold text-white hover:text-blue-400 cursor-pointer">
              {title}
            </h2>
            {hasOfficialAnswer && (
              <span className="px-2 py-1 text-xs font-medium bg-green-600/20 text-green-400 rounded-full">
                Official Answer
              </span>
            )}
            {hasAIAnswer && (
              <span className="px-2 py-1 text-xs font-medium bg-blue-600/20 text-blue-400 rounded-full flex items-center">
                <Bot className="w-3 h-3 mr-1" />
                AI Answer
              </span>
            )}
          </div>

          <p className="mt-2 text-gray-300">{content}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-medium bg-blue-600/10 text-blue-400 rounded-full hover:bg-blue-600/20 cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span className="flex items-center">
                <MessageCircle className="w-4 h-4 mr-1" />
                {answers} answers
              </span>
              <span className="flex items-center">
                <Eye className="w-4 h-4 mr-1" />
                {views} views
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <img
                src={author.avatar}
                alt={author.name}
                className="w-6 h-6 rounded-full"
              />
              <span className="text-sm text-gray-400">
                asked by <span className="text-blue-400">{author.name}</span>
              </span>
              <span className="text-sm text-gray-500">{timestamp}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}