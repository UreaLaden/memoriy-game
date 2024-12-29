import { useEffect, useMemo, useState } from "react";
import { useGameContext } from "./useGameContext";
import { GameState } from "../constants";

export const useTrackGameTime = () => {
  const context = useGameContext();
  const [pauseDuration, setPauseDuration] = useState<number>(0);
  const [pauseStart, setPauseStart] = useState<number | null>(null);
  const [realTimeGameTime, setRealTimeGameTime] = useState<number>(
    context.getGameTime()
  );

  useEffect(() => {
    let interval: number | null = null;

    if (!context.game.startTime) {
      console.error("Game Start time is not defined");
      return;
    }

    if (context.game.state === GameState.ACTIVE) {
      const updatedPauseDuration =
        pauseStart !== null
          ? pauseDuration + (new Date().getTime() - pauseStart)
          : pauseDuration;

      if (pauseStart !== null) {
        setPauseDuration(updatedPauseDuration);
        setPauseStart(null);
      }

      interval = setInterval(() => {
        const timeElapsed = Math.floor(
          (new Date().getTime() - context.game.startTime!.getTime() - updatedPauseDuration) / 1000
        );
        
        setRealTimeGameTime(timeElapsed);
        context.tick(timeElapsed);
      }, 1000);
    } else if (context.game.state === GameState.PAUSE) {
      if (pauseStart === null) {
        setPauseStart(new Date().getTime());
      }
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [
    context.game.state,
    context.game.startTime,
    pauseDuration,
    pauseStart,
    realTimeGameTime,
  ]);

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
