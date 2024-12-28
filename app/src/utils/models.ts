import { createContext } from "react";
import { GameState } from "./constants";

export type SelectorMode = "digit" | "graphic";

export type SelectorState = "active" | "inactive" | "hidden";

export type PlayerId = 1 | 2 | 3 | 4;

export type iGrid = 4 | 6;

export interface iSelectorIconProps {
  primaryFill: string;
  secondaryFill: string;
  vbX: number;
  vbY: number;
  vbWidth: number;
  vbHeight: number;
}

export interface iMove {
  id: string;
  value: string;
  playerId: PlayerId;
}

export interface iSelection {
  theme: SelectorMode;
  playerCount: PlayerId;
  gridSize: iGrid;
}


export interface iPlayer {
  id: PlayerId;
  moves: iMove[];
  points:number;
}

export interface iGame {
  players: iPlayer[];
  startTime?: Date;
  endTime?: Date;
  winner?: iPlayer | iPlayer[];
  state: GameState;
  theme: SelectorMode;
  playerCount: PlayerId;
  gridSize: iGrid;
  gameTime?: Date;
  lastMove?: iMove;
}

export interface iContext {
  game: iGame;

  /**Start a new game with the given configurations */
  newGame: (
    theme: SelectorMode,
    playerCount: PlayerId,
    gridSize: iGrid
  ) => void;

  /**Clear game details and return user to new game view */
  setup: () => void;

  /**Restart the game with the current configurations */
  restart: () => void;

  /**Toggles the game state between GameState.Pause and GameState.Active */
  pause: () => void;

  /**Records a new move */
  move: (move: iMove) => void;

  /**Retrieves the formatted game time elapsed  */
  getGameTime: () => string;
}

export interface iContextProvider {
  children?: React.ReactNode;
}

export const Context = createContext<iContext>({
  game: {
    players: [],
    startTime: undefined,
    endTime: undefined,
    winner: undefined,
    state: GameState.START,
    theme: "graphic",
    playerCount: 1,
    gridSize: 4,
    gameTime: undefined,
  },

  newGame: (
    _theme: SelectorMode,
    _playerCount: PlayerId,
    _gridSize: iGrid
  ) => {},
  setup: () => {},
  restart: () => {},
  pause: () => {},
  move: (_move: iMove) => {},
  getGameTime: () => "",
});
