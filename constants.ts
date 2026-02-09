
import { Game, GameCategory } from './types';

export const GAMES: Game[] = [
  {
    id: '2048',
    title: '2048',
    category: GameCategory.PUZZLE,
    thumbnail: 'https://picsum.photos/seed/2048/400/300',
    iframeUrl: 'https://play2048.co/',
    description: 'Join the numbers and get to the 2048 tile!',
    isHot: true
  },
  {
    id: 'flappy-bird',
    title: 'Flappy Bird',
    category: GameCategory.ACTION,
    thumbnail: 'https://picsum.photos/seed/flappy/400/300',
    iframeUrl: 'https://flappybird.io/',
    description: 'Tap to flap your wings and avoid the pipes.',
    isHot: true
  },
  {
    id: 'tetris',
    title: 'Tetris Arcade',
    category: GameCategory.PUZZLE,
    thumbnail: 'https://picsum.photos/seed/tetris/400/300',
    iframeUrl: 'https://tetris.com/play-tetris',
    description: 'The classic block-stacking puzzle game.'
  },
  {
    id: 'slope',
    title: 'Slope',
    category: GameCategory.DRIVING,
    thumbnail: 'https://picsum.photos/seed/slope/400/300',
    iframeUrl: 'https://kbhgames.com/game/slope',
    description: 'Drive a ball down a steep slope while avoiding obstacles.',
    isHot: true
  },
  {
    id: 'moto-x3m',
    title: 'Moto X3M',
    category: GameCategory.DRIVING,
    thumbnail: 'https://picsum.photos/seed/moto/400/300',
    iframeUrl: 'https://moto-x3m.io/',
    description: 'Bike racing game with challenging levels and stunts.'
  },
  {
    id: 'shell-shockers',
    title: 'Shell Shockers',
    category: GameCategory.MULTIPLAYER,
    thumbnail: 'https://picsum.photos/seed/eggs/400/300',
    iframeUrl: 'https://shellshock.io/',
    description: 'Egg-based multiplayer first-person shooter.',
    isHot: true
  },
  {
    id: 'basket-bros',
    title: 'Basket Bros',
    category: GameCategory.SPORTS,
    thumbnail: 'https://picsum.photos/seed/basket/400/300',
    iframeUrl: 'https://basketbros.io/',
    description: 'Fast-paced 1v1 basketball action.'
  },
  {
    id: 'little-alchemy',
    title: 'Little Alchemy',
    category: GameCategory.PUZZLE,
    thumbnail: 'https://picsum.photos/seed/alchemy/400/300',
    iframeUrl: 'https://littlealchemy.com/',
    description: 'Combine elements to discover new items.'
  },
  {
    id: 'chess',
    title: 'Lichess',
    category: GameCategory.CLASSIC,
    thumbnail: 'https://picsum.photos/seed/chess/400/300',
    iframeUrl: 'https://lichess.org/embed/game/new',
    description: 'Play chess against the computer or friends.'
  },
  {
    id: 'doodle-jump',
    title: 'Doodle Jump',
    category: GameCategory.ACTION,
    thumbnail: 'https://picsum.photos/seed/jump/400/300',
    iframeUrl: 'https://doodlejump.io/',
    description: 'Jump as high as you can on platforms.'
  },
  {
    id: 'drift-hunters',
    title: 'Drift Hunters',
    category: GameCategory.DRIVING,
    thumbnail: 'https://picsum.photos/seed/drift/400/300',
    iframeUrl: 'https://drift-hunters.io/',
    description: 'Realistic drifting game with cool cars.'
  }
];

export const CATEGORIES = Object.values(GameCategory);
