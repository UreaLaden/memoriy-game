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
    winner: [],
    state: GameState.START,
    theme: "graphic",
    playerCount: 1,
    gridSize: 4,
    gameTime: 0,
    activePlayer: undefined,
    lastMoves: [],
    pairs: [],
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
      winner: [],
      state: GameState.ACTIVE,
      theme: theme,
      playerCount: playerCount,
      gridSize: gridSize,
      gameTime: 0,
      activePlayer: newPlayers[0],
      lastMoves: [],
      pairs: [],
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
      winner: [],
      state: GameState.START,
      theme: "graphic",
      playerCount: 1,
      gridSize: 4,
      gameTime: 0,
      activePlayer: undefined,
      lastMoves: [],
      pairs: [],
    }));
  };

  const restartGameHandler = () => {
    setGame((prev) => ({
      ...prev,
      startTime: new Date(),
      endTime: undefined,
      winner: [],
      state: GameState.ACTIVE,
      gameTime: 0,
      activePlayer: prev.players[0],
      lastMoves: [],
      pairs: [],
    }));
  };

  const pauseGameHandler = () => {
    setGame((prev) => ({
      ...prev,
      state:
        prev.state === GameState.PAUSE ? GameState.ACTIVE : GameState.PAUSE,
    }));
  };

  const arePairsEqual = (pair1: iMove[], pair2: iMove[]): boolean => {
    const sorted1 = pair1.map((m) => m.value).sort();
    const sorted2 = pair2.map((m) => m.value).sort();

    return (
      sorted1.length === sorted2.length &&
      sorted1.every((val, idx) => val === sorted2[idx])
    );
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
        moves: [move, ...prev.players[playerIndex].moves],
        points: prev.players[playerIndex].points ?? 0,
      };

      let lastMoves: iMove[] = prev.lastMoves
        ? [move, prev.lastMoves[0]]
        : [move];
      let updatedPairs: iMove[][] = [...prev.pairs];

      if (
        lastMoves.length === 2 &&
        lastMoves[0]?.value === lastMoves[1]?.value &&
        lastMoves[0]?.id !== lastMoves[1]?.id
      ) {
        const isDuplicate = updatedPairs.some((p) =>
          arePairsEqual(p, lastMoves)
        );
        if (!isDuplicate) {
          updatedPairs = [...updatedPairs, [...lastMoves]];

          updatedPlayer.points += 1;
          lastMoves = [];
        }
      }
      const updatedPlayers: iPlayer[] = [...prev.players];
      updatedPlayers[playerIndex] = updatedPlayer;

      const nextPlayerIndex =
        playerIndex === prev.players.length - 1 ? 0 : playerIndex + 1;

      return {
        ...prev,
        players: updatedPlayers,
        activePlayer: updatedPlayers[nextPlayerIndex],
        lastMoves,
        pairs: updatedPairs,
      };
    });
  };

  const endGameHandler = () => {
    setGame((prev) => {
      if (prev.state === GameState.END) {
        return prev;
      }
      let winningPlayer: iPlayer[] = [prev.players[0]];
      let moveCount = 0;
      for (let i = 0; i < prev.players.length; i++) {
        const player = prev.players[i];
        if (player.moves.length <= moveCount) {
          winningPlayer.push(player);
          moveCount = player.moves.length;
        }
      }

      return { ...prev, state: GameState.END, winner: winningPlayer };
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
      endGame: endGameHandler,
      getGameTime: getGameTimeHandler,
      tick: tickHandler,
    };
  }, [game]);

  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export default ContextProvider;
