import { FC, useCallback, useEffect, useMemo, useState } from "react";

import {
  iSelectorIconProps,
  SelectorMode,
  SelectorState,
} from "../../utils/models";
import { ColorMap, Colors, GraphicMap } from "../../utils/constants";
import { SelectorContainer } from "./Selector.components";
import { useGameContext } from "../../utils/hooks/useGameContext";

export interface SelectorProps {
  id: string;
  mode: SelectorMode;
  gridSize: 4 | 6;
  value: number;
  onClick: (selection: number, id: string) => void;
}

const Selector: FC<SelectorProps> = ({ id, mode, value, onClick }) => {
  const [state, setState] = useState<SelectorState>("inactive");
  const [startGame, setStartGame] = useState(false);
  const context = useGameContext();

  useEffect(() => {
    const { gameTime, lastMoves, pairs } = context.game || {};
    // If the game just started, initialize as inactive (visible)
    if (gameTime < 3) {
      setState("inactive");
      return;
    }

    if (gameTime >= 3 && !startGame) {
      setState("hidden");
      setStartGame(true);
      return;
    }

    // If the item was the last move, set it to active
    if (lastMoves[0]?.id === id) {
      if (state !== "active") {
        setState("active");
      }
      return;
    }
    // If the item is part of a confirmed pair, keep it as inactive (visible)
    if (pairs.some((p) => p.some((m) => m.id === id))) {
      if (state !== "inactive") {
        setState("inactive");
      }
      return;
    }

    // If the item is inactive and not part of the last moves, hide it
    if (state === "inactive") {
      setState("hidden");
      return;
    }

    // If the item is active but not the last move, mark it as inactive
    if (state === "active" && lastMoves[0]?.id !== id) {
      setState("inactive");
    }
  }, [context.game, state]);

  const bgColor = useMemo(() => ColorMap.get(state) || "transparent", [state]);

  const GraphicIcon = useMemo(() => {
    const icon = GraphicMap.get(value);
    if (!icon) {
      console.log(
        `Graphic Required for ${value}. Might be able to use ${Math.floor(
          value / 2
        )}`
      );
      return null;
    }
    return icon;
  }, [value]);

  const Graphic = useMemo(() => {
    if (mode === "graphic") {
      const iconProps: iSelectorIconProps = {
        primaryFill: Colors["--white"],
        secondaryFill: Colors["--white"],
        vbX: 0,
        vbY: 0,
        vbWidth: 56,
        vbHeight: 56,
      };
      return (
        state !== "hidden" && GraphicIcon && <GraphicIcon {...iconProps} />
      );
    }
    return (
      <div
        style={{
          color: state !== "hidden" ? Colors["--white"] : "transparent",
          width: "fit-content",
          height: "fit-content",
          fontSize: "2rem",
          fontWeight: "700",
        }}
      >
        {value}
      </div>
    );
  }, [mode, state, value, GraphicIcon]);

  const onSelected = useCallback(() => {
    onClick(value, id);
  }, [context.game.lastMoves]);

  return (
    <SelectorContainer
      $bgColor={bgColor}
      $hoverColor={Colors["--air-super-blue"]}
      onClick={onSelected}
    >
      {Graphic}
    </SelectorContainer>
  );
};

export default Selector;
