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
    gameTime: undefined,
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
      gameTime: undefined,
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
      gameTime: undefined,
    }));
  };

  const restartGameHandler = () => {
    setGame((prev) => ({
      ...prev,
      startTime: new Date(),
      endTime: undefined,
      winner: undefined,
      state: GameState.ACTIVE,
      gameTime: undefined,
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
      if (pair.length > 1) {
        updatedPlayer.points = (updatedPlayer.points || 0) + 1;
      }

      const updatedPlayers: iPlayer[] = [...prev.players];
      updatedPlayers[playerIndex] = updatedPlayer;
      return {
        ...prev,
        players: updatedPlayers,
      };
    });
  };

  const getGameTimeHandler = () => {
    if (!game.startTime) {
      throw new Error("Start time  is undefined");
    }

    const newestTime = game.endTime?.getTime() || new Date().getTime();

    const timeElapsed = Math.floor(
      (newestTime - game.startTime.getTime()) / 1000
    );

    const formatToMinutesAndSeconds = (totalSeconds: number): string => {
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;

      const formattedSeconds = seconds.toString().padStart(2, "0");
      return `${minutes}:${formattedSeconds}`;
    };

    return formatToMinutesAndSeconds(timeElapsed);
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
    };
  }, [game]);

  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export default ContextProvider;
