import { FC, useMemo, useState } from "react";
import {
  Context,
  iContext,
  iContextProvider,
  iGame,
  iGrid,
  iMove,
  iPlayer,
  PlayerId,
  SelectorMode,
} from "../utils/models";
import { GameState } from "../utils/constants";

const ContextProvider: FC<iContextProvider> = ({ children }) => {
  const [game, setGame] = useState<iGame>({
    players: [],
    startTime: undefined,
    endTime: undefined,
    winner: undefined,
    state: GameState.START,
    theme: "graphic",
    playerCount: 1,
    gridSize: 4,
    gameTime: 0,
    activePlayer: undefined,
  });

  const newGameHandler = (
    theme: SelectorMode,
    playerCount: PlayerId,
    gridSize: iGrid
  ) => {
    const newPlayers: iPlayer[] = Array.from(
      { length: playerCount },
      (_, idx) => ({ id: idx + 1, moves: [], points: 0 } as iPlayer)
    );
    setGame(() => ({
      players: newPlayers,
      startTime: new Date(),
      endTime: undefined,
      winner: undefined,
      state: GameState.ACTIVE,
      theme: theme,
      playerCount: playerCount,
      gridSize: gridSize,
      gameTime: 0,
      activePlayer: newPlayers[0],
    }));

    const config = JSON.stringify({
      theme: theme,
      playerCount: playerCount,
      gridSize: gridSize,
    });
    sessionStorage.setItem("config", config);
  };

  const setupGameHandler = () => {
    setGame(() => ({
      players: [],
      startTime: undefined,
      endTime: undefined,
      winner: undefined,
      state: GameState.START,
      theme: "graphic",
      playerCount: 1,
      gridSize: 4,
      gameTime: 0,
      activePlayer: undefined,
    }));
  };

  const restartGameHandler = () => {
    setGame((prev) => ({
      ...prev,
      startTime: new Date(),
      endTime: undefined,
      winner: undefined,
      state: GameState.ACTIVE,
      gameTime: 0,
      activePlayer: prev.players[0],
    }));
  };

  const pauseGameHandler = () => {
    setGame((prev) => ({
      ...prev,
      state:
        prev.state === GameState.PAUSE ? GameState.ACTIVE : GameState.PAUSE,
    }));
  };
  const moveHandler = (move: iMove) => {
    setGame((prev) => {
      const playerIndex = prev.players.findIndex((p) => p.id === move.playerId);
      if (playerIndex === -1) {
        console.error("Invalid move");
        return prev;
      }
      const updatedPlayer = {
        ...prev.players[playerIndex],
        moves: [...prev.players[playerIndex].moves, move],
        points: prev.players[playerIndex].points ?? 0,
      };

      const pair = updatedPlayer.moves.filter((m) => m.value === move.value);
      const updatedPoints =
        pair.length > 1 ? updatedPlayer.points + 1 : updatedPlayer.points;

      const finalUpdatedPlayer = {
        ...updatedPlayer,
        points: updatedPoints,
      };

      const updatedPlayers: iPlayer[] = [...prev.players];
      const nextPlayerIndex =
        playerIndex === prev.players.length - 1 ? 0 : playerIndex + 1;
      updatedPlayers[playerIndex] = finalUpdatedPlayer;

      return {
        ...prev,
        players: updatedPlayers,
        activePlayer: updatedPlayers[nextPlayerIndex],
      };
    });
  };

  const getGameTimeHandler = () => {
    if (!game.startTime) {      
      return 0;
    }

    const newestTime = game.endTime?.getTime() || new Date().getTime();

    const timeElapsed = Math.floor(
      (newestTime - game.startTime.getTime()) / 1000
    );

    return timeElapsed;
  };

  const tickHandler = (timeElapsed: number) => {
    
    setGame((prev) => ({
      ...prev,
      gameTime: timeElapsed,
    }));
  };

  const context: iContext = useMemo(() => {
    return {
      game,
      newGame: newGameHandler,
      setup: setupGameHandler,
      restart: restartGameHandler,
      pause: pauseGameHandler,
      move: moveHandler,

      getGameTime: getGameTimeHandler,
      tick: tickHandler,
    };
  }, [game]);

  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export default ContextProvider;
