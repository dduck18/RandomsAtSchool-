
import React from 'react';
import { Game } from '../types';

interface GameCardProps {
  game: Game;
  onPlay: (game: Game) => void;
}

const GameCard: React.FC<GameCardProps> = ({ game, onPlay }) => {
  return (
    <div 
      className="group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-indigo-500 transition-all cursor-pointer shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1"
      onClick={() => onPlay(game)}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={game.thumbnail} 
          alt={game.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
        
        {game.isHot && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full flex items-center gap-1 shadow-lg">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.334-.398-1.817a1 1 0 00-1.487-.88 4.52 4.52 0 00-2.43 3.587c-.044.498-.059.985-.059 1.448 0 3.476 2.443 6.137 5.507 6.137 3.065 0 5.507-2.661 5.507-6.137 0-.308-.017-.616-.05-.913a3.51 3.51 0 01-1.012 2.144 1 1 0 01-1.486-1.503 6.3 6.3 0 001.011-3.366c0-.972-.188-1.893-.513-2.747a17.408 17.408 0 00-1.274-2.67c-.169-.31-.324-.547-.448-.708z" clipRule="evenodd" />
            </svg>
            Hot
          </div>
        )}
        
        <div className="absolute top-3 right-3 bg-slate-900/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-lg border border-white/10">
          {game.category}
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-indigo-900/40">
           <div className="w-14 h-14 bg-indigo-600 rounded-full flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-transform">
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
           </div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-gaming font-bold text-white mb-1 leading-tight">{game.title}</h3>
        <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed">
          {game.description}
        </p>
      </div>
    </div>
  );
};

export default GameCard;
