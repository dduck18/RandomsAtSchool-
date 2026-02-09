
export interface Game {
  id: string;
  title: string;
  thumbnail: string;
  iframeUrl: string;
  category: GameCategory;
  description: string;
  isHot?: boolean;
}

export enum GameCategory {
  ALL = 'All',
  ACTION = 'Action',
  PUZZLE = 'Puzzle',
  SPORTS = 'Sports',
  DRIVING = 'Driving',
  MULTIPLAYER = 'Multiplayer',
  CLASSIC = 'Classic'
}

export interface AppState {
  searchQuery: string;
  activeCategory: GameCategory;
  favorites: string[];
}
