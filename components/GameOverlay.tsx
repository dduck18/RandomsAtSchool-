
import React, { useState } from 'react';
import { Game } from '../types';

interface GameOverlayProps {
  game: Game | null;
  onClose: () => void;
}

const GameOverlay: React.FC<GameOverlayProps> = ({ game, onClose }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (!game) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-slate-950 flex items-center justify-center p-0 md:p-10">
      <div className={`relative w-full h-full max-w-6xl mx-auto flex flex-col bg-slate-900 rounded-none md:rounded-3xl overflow-hidden border border-slate-800 shadow-2xl ${isFullscreen ? 'fixed inset-0 max-w-none rounded-none !p-0 z-[200]' : ''}`}>
        
        {/* Header bar */}
        <div className="bg-slate-800/50 border-b border-slate-700 px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-4">
            <button 
              onClick={onClose}
              className="p-2 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
            <div>
              <h2 className="text-xl font-gaming font-bold text-white leading-none">{game.title}</h2>
              <span className="text-xs text-indigo-400 font-bold uppercase tracking-widest">{game.category}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button 
              className="hidden sm:flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all"
              onClick={() => setIsFullscreen(!isFullscreen)}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
              Fullscreen
            </button>
            <button 
              onClick={onClose}
              className="bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white p-2 rounded-xl transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Game Area */}
        <div className="flex-1 bg-black relative">
          <iframe 
            src={game.iframeUrl} 
            className="w-full h-full border-none"
            title={game.title}
            allowFullScreen
          />
        </div>

        {/* Footer info */}
        {!isFullscreen && (
          <div className="bg-slate-900 p-6 shrink-0 flex items-center justify-between border-t border-slate-800">
            <div className="flex-1 max-w-2xl">
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">How to Play</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                {game.description} Check the game controls within the iframe for specific keys and interactions. RandomsAtSchool provides unblocked access to {game.title} for educational and recreational purposes.
              </p>
            </div>
            <div className="ml-10 hidden lg:block">
               <button className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors font-bold uppercase tracking-widest text-xs">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                 </svg>
                 Add to Favorites
               </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameOverlay;
