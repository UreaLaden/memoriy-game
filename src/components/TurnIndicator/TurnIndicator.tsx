import { FC, useMemo } from "react";
import { IndicatorContainer } from "./TurnIndicator.component";
import { useGetDimensions } from "../../utils/hooks/useGetDimensions";
import { MOBILE_WIDTH } from "../../utils/constants";

export interface TurnIndicatorProps {
  isActive: boolean;
  player: 1 | 2 | 3 | 4;
  playerPoints: number;
}

const TurnIndicator: FC<TurnIndicatorProps> = ({
  isActive,
  player,
  playerPoints,
}) => {
  const dimensions = useGetDimensions()

  const playerText = useMemo(() => {
    return dimensions.width <= MOBILE_WIDTH ? `P${player}` : `Player ${player}`
  },[dimensions])
  return (
    <IndicatorContainer $isActive={isActive}>
      <div className={"active-indicator"}></div>
      <div className={"player-text"}>{playerText}</div>
      <div className={"player-points"}>{playerPoints}</div>
    </IndicatorContainer>
  );
};

export default TurnIndicator;
