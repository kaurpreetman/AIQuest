import React from 'react';
import { Flame, Clock, TrendingUp } from 'lucide-react';

export default function TabNavigation() {
  return (
    <div className="flex space-x-1 bg-gray-800/50 p-1 rounded-lg">
      <Tab icon={<TrendingUp className="w-4 h-4" />} text="Trending" active />
      <Tab icon={<Clock className="w-4 h-4" />} text="Latest" />
      <Tab icon={<Flame className="w-4 h-4" />} text="Hot" />
    </div>
  );
}

function Tab({ icon, text, active = false }: { icon: React.ReactNode; text: string; active?: boolean }) {
  return (
    <button
      className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
        active
          ? 'bg-blue-600 text-white'
          : 'text-gray-400 hover:text-white hover:bg-gray-700'
      }`}
    >
      {icon}
      <span className="ml-2">{text}</span>
    </button>
  );
}