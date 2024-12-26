import { FC } from "react";
import { IndicatorContainer } from "./TurnIndicator.component";

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
  return (
    <IndicatorContainer $isActive={isActive}>
      <div className={"active-indicator"}></div>
      <div className={"player-text"}>P{player}</div>
      <div className={"player-points"}>{playerPoints}</div>
    </IndicatorContainer>
  );
};

export default TurnIndicator;
