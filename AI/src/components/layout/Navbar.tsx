import React from 'react';
import { Search, Bell, User, Home, MessageCircle, BarChart2, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-blue-900/30 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                AIQuest
              </span>
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-4">
                <NavLink to="/" icon={<Home className="w-4 h-4" />} text="Home" />
                <NavLink to="/questions" icon={<MessageCircle className="w-4 h-4" />} text="Questions" />
                <NavLink to="/analytics" icon={<BarChart2 className="w-4 h-4" />} text="Analytics" />
              </div>
            </div>
          </div>
          
          <div className="flex-1 max-w-2xl px-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-blue-900/30 rounded-lg bg-gray-900/50 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="Search questions..."
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800">
              <Bell className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800">
              <User className="h-5 w-5" />
            </button>
            <button className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) {
  const location = useLocation();
  const active = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium ${
        active
          ? 'bg-blue-600 text-white'
          : 'text-gray-300 hover:bg-gray-800 hover:text-white'
      }`}
    >
      {icon}
      <span className="ml-2">{text}</span>
    </Link>
  );
}