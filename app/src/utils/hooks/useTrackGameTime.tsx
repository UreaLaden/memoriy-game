import { useEffect, useMemo, useState } from "react";
import { useGameContext } from "./useGameContext";
import { GameState } from "../constants";

export const useTrackGameTime = () => {
  const context = useGameContext();
  const [realTimeGameTime, setRealTimeGameTime] = useState<number>(
    context.getGameTime()
  );

  useEffect(() => {
    let interval: number | null = null;

    if (context.game.state === GameState.ACTIVE) {
      interval = setInterval(() => {
        const timeElapsed = context.getGameTime();
        setRealTimeGameTime(timeElapsed);
        context.tick(timeElapsed);
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [context.game.state, context]);

  const formattedGameTime = useMemo(() => {
    const formatToMinutesAndSeconds = (totalSeconds: number): string => {
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;

      const formattedSeconds = seconds.toString().padStart(2, "0");
      return `${minutes}:${formattedSeconds}`;
    };

    return formatToMinutesAndSeconds(realTimeGameTime);
  }, [realTimeGameTime]);

  return { formattedGameTime };
};
