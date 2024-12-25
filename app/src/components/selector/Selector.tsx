import { FC, useMemo } from "react";

import {
  iSelectorIconProps,
  SelectorMode,
  SelectorState,
} from "../../utils/models";
import { ColorMap } from "../../utils/constants";
import { SnowflakeIcon } from "../../svgs";
import { SelectorContainer } from "./Selector.components";

export interface SelectorProps {
  id: string;
  mode: SelectorMode;
  state: SelectorState;
  gridSize: 4 | 6;
  value: number;
  onClick: (selection: number, id: string) => void;
}

const Selector: FC<SelectorProps> = ({ id, state, mode, value, onClick }) => {
  const bgColor = useMemo(() => ColorMap.get(state) || "transparent", [state]);

  const Graphic = useMemo(() => {    
    if (mode === "graphic") {
      const iconProps: iSelectorIconProps = {
        primaryFill: "white",
        secondaryFill: "white",
        vbX: 0,
        vbY: 0,
        vbWidth: 56,
        vbHeight: 56,
      };
      return state !== "hidden" && <SnowflakeIcon {...iconProps} />;
    }
    return (
      <div
        style={{
          color: state !== "hidden" ? "white" : "transparent",
          width: "fit-content",
          height: "fit-content",
          fontSize: "2rem",
          fontWeight: "700",
        }}
      >
        {value}
      </div>
    );
  }, [mode, state, value]);

  const onSelected = () => {
    onClick(value, id);    
  };

  return (
    <SelectorContainer
      bgcolor={bgColor}
      hovercolor={"var(--bg-blue-light)"}
      onClick={onSelected}
    >
      {Graphic}
    </SelectorContainer>
  );
};

export default Selector;
