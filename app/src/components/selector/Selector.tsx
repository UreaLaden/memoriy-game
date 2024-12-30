import { FC, useEffect, useMemo, useState } from "react";

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
    const { gameTime, lastMoves } = context.game || {};
    // If the game just started, initialize as inactive (visible)
    if (gameTime === 0) {
      console.log("Setting initial state");
      setState("inactive");
      return;
    }

    if (gameTime >= 3 && !startGame) {
      console.log("Hiding everything");
      setState("hidden");
      setStartGame(true);
      return;
    }

    // After the memory period, hide items that haven't been selected
    if (state === "inactive" && !lastMoves.some((move) => move?.id === id)) {
      //We'll want to first confirm whether there is a pair before hiding
      console.log("Inactive Block. Checking for pair before hiding");
      
      setState("hidden");

      return;
    }

    // If the another item was clicked after this one, mark inactive (already revealed)
    if (state === "active" && lastMoves[0]?.id === id) {      
      setState("inactive");
      return;
    }
  }, [context.game?.gameTime, state, context.game.lastMoves]);

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

  const onSelected = () => {
    setState("active");
    onClick(value, id);
  };

  return (
    <SelectorContainer
      bgcolor={bgColor}
      hovercolor={Colors["--air-super-blue"]}
      onClick={onSelected}
    >
      {Graphic}
    </SelectorContainer>
  );
};

export default Selector;
