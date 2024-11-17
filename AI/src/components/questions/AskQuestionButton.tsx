import React from 'react';
import { PlusCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AskQuestionButton() {
  return (
    <Link
      to="/ask"
      className="fixed bottom-8 right-8 flex items-center px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200 group"
    >
      <PlusCircle className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform duration-200" />
      <span className="font-semibold">Ask Question</span>
    </Link>
  );
}