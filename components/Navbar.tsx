
import React from 'react';
import { GameCategory } from '../types';

interface NavbarProps {
  onSearch: (query: string) => void;
  activeCategory: GameCategory;
  onCategorySelect: (category: GameCategory) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch, activeCategory, onCategorySelect }) => {
  return (
    <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 px-4 py-3">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => onCategorySelect(GameCategory.ALL)}
        >
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-2xl font-gaming font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            RandomsAtSchool
          </span>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-96">
          <input
            type="text"
            placeholder="Search for a game..."
            className="w-full bg-slate-800 border border-slate-700 rounded-full px-5 py-2 pl-12 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-slate-200"
            onChange={(e) => onSearch(e.target.value)}
          />
          <svg className="w-5 h-5 text-slate-400 absolute left-4 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Quick Links */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="#" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Discord</a>
          <a href="#" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Submit Game</a>
          <div className="h-8 w-[1px] bg-slate-800"></div>
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
