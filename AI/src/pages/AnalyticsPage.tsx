import React from 'react';
import { BarChart, Users, MessageSquare, Eye, TrendingUp, Award } from 'lucide-react';

const stats = [
  { name: 'Total Questions', value: '2,543', icon: MessageSquare, change: '+12.3%' },
  { name: 'Total Users', value: '1,234', icon: Users, change: '+8.2%' },
  { name: 'Total Views', value: '89.4K', icon: Eye, change: '+23.1%' },
  { name: 'Answers Rate', value: '94.2%', icon: TrendingUp, change: '+4.5%' },
];

const topContributors = [
  { name: 'Sarah Chen', points: 1234, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100' },
  { name: 'Alex Kumar', points: 982, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100' },
  { name: 'Maria Rodriguez', points: 876, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100' },
];

const popularTags = [
  { name: 'machine-learning', count: 342 },
  { name: 'javascript', count: 289 },
  { name: 'python', count: 256 },
  { name: 'react', count: 234 },
  { name: 'docker', count: 198 },
];

export default function AnalyticsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
        <p className="text-gray-400 mt-2">Track platform performance and user engagement</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-gray-800/50 rounded-xl p-6">
              <div className="flex items-center">
                <div className="p-2 bg-blue-600/20 rounded-lg">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <span className="ml-2 text-sm text-green-400">{stat.change}</span>
              </div>
              <p className="mt-4 text-2xl font-bold">{stat.value}</p>
              <p className="text-gray-400 text-sm">{stat.name}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-gray-800/50 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4">Activity Overview</h2>
          <div className="h-64 flex items-center justify-center">
            <BarChart className="w-12 h-12 text-gray-600" />
            <p className="text-gray-500 ml-4">Chart visualization goes here</p>
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4">Top Contributors</h2>
          <div className="space-y-4">
            {topContributors.map((contributor, index) => (
              <div key={contributor.name} className="flex items-center">
                <div className="relative">
                  <img
                    src={contributor.avatar}
                    alt={contributor.name}
                    className="w-10 h-10 rounded-full"
                  />
                  {index === 0 && (
                    <div className="absolute -top-1 -right-1">
                      <Award className="w-4 h-4 text-yellow-400" />
                    </div>
                  )}
                </div>
                <div className="ml-3 flex-1">
                  <p className="font-medium">{contributor.name}</p>
                  <p className="text-sm text-gray-400">{contributor.points} points</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 bg-gray-800/50 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4">Popular Tags</h2>
          <div className="flex flex-wrap gap-3">
            {popularTags.map((tag) => (
              <div
                key={tag.name}
                className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm"
              >
                {tag.name}
                <span className="ml-2 text-gray-400">{tag.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}