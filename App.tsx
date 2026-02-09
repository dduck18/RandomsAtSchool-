import React, { useState, useMemo } from 'react';
import { Game, GameCategory } from './types.ts';
import { GAMES } from './constants.ts';
import Navbar from './components/Navbar.tsx';
import Sidebar from './components/Sidebar.tsx';
import GameCard from './components/GameCard.tsx';
import GameOverlay from './components/GameOverlay.tsx';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<GameCategory>(GameCategory.ALL);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  const filteredGames = useMemo(() => {
    return GAMES.filter(game => {
      const matchesCategory = activeCategory === GameCategory.ALL || game.category === activeCategory;
      const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const hotGames = useMemo(() => {
    return GAMES.filter(game => game.isHot).slice(0, 4);
  }, []);

  const handlePlay = (game: Game) => {
    setSelectedGame(game);
  };

  const handleClosePlayer = () => {
    setSelectedGame(null);
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar 
        onSearch={setSearchQuery} 
        activeCategory={activeCategory} 
        onCategorySelect={setActiveCategory} 
      />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <Sidebar 
            activeCategory={activeCategory} 
            onCategorySelect={setActiveCategory} 
          />

          <div className="flex-1">
            {/* Banner Section */}
            {activeCategory === GameCategory.ALL && !searchQuery && (
              <section className="mb-12">
                <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-900 to-slate-900 border border-indigo-500/20 shadow-2xl flex items-center px-10">
                  <div className="relative z-10 max-w-md">
                    <span className="inline-block bg-indigo-500/20 text-indigo-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-indigo-500/30">
                      Trending Now
                    </span>
                    <h1 className="text-4xl md:text-5xl font-gaming font-extrabold text-white mb-4">
                      RandomsAtSchool <br/>
                      <span className="text-indigo-400">Level Up</span> Your Fun
                    </h1>
                    <p className="text-slate-400 mb-6 text-sm md:text-base">
                      Access your favorite games anywhere, anytime. No blocks, just pure high-performance gaming for free.
                    </p>
                    <button 
                      onClick={() => handlePlay(hotGames[0])}
                      className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-8 py-3 rounded-2xl shadow-xl shadow-indigo-600/30 transition-all flex items-center gap-2 group"
                    >
                      Play Now
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                  {/* Background decoration */}
                  <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block overflow-hidden pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/20 blur-[100px] rounded-full"></div>
                    <img 
                      src="https://picsum.photos/seed/gameplay/800/600" 
                      className="w-full h-full object-cover mix-blend-overlay opacity-50 scale-125 rotate-12"
                      alt="Background Decoration"
                    />
                  </div>
                </div>
              </section>
            )}

            {/* Games Grid Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-gaming font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-8 bg-indigo-500 rounded-full"></span>
                  {activeCategory === GameCategory.ALL ? 'Most Popular' : activeCategory}
                </h2>
                <p className="text-slate-500 text-sm mt-1">Showing {filteredGames.length} games</p>
              </div>
              
              <div className="flex gap-2">
                <button className="p-2 bg-slate-800 border border-slate-700 rounded-xl text-slate-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                </button>
                <button className="p-2 bg-slate-800 border border-slate-700 rounded-xl text-indigo-400 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Games Grid */}
            {filteredGames.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredGames.map(game => (
                  <GameCard key={game.id} game={game} onPlay={handlePlay} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center mb-6 border border-slate-700">
                  <svg className="w-12 h-12 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">No games found</h3>
                <p className="text-slate-500 max-w-xs">We couldn't find any games matching "{searchQuery}". Try a different keyword.</p>
                <button 
                  onClick={() => { setSearchQuery(''); setActiveCategory(GameCategory.ALL); }}
                  className="mt-6 text-indigo-400 font-bold hover:text-indigo-300 transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-slate-800 py-12 px-4 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-xl font-gaming font-bold text-white tracking-tight">RandomsAtSchool</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                RandomsAtSchool is a premium platform for unblocked browser games. Our mission is to provide high-quality gaming experiences that work anywhere, bypassing restrictions with lightning-fast speeds.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">DCMA</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Social Media</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-indigo-600 hover:scale-110 transition-all">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-indigo-600 hover:scale-110 transition-all">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} RandomsAtSchool. All rights reserved. Gaming is life.
          </div>
        </div>
      </footer>

      {/* Game Overlay */}
      <GameOverlay game={selectedGame} onClose={handleClosePlayer} />
    </div>
  );
};

export default App;