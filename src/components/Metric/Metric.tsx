import { FC, useMemo } from "react";
import { MetricItemContainer } from "../CustomDialogs/dialogs.component";
import { Colors } from "../../utils/constants";
import { iPlayer } from "../../utils/models";
import { useTrackGameTime } from "../../utils/hooks/useTrackGameTime";

export interface iMetricProps {
  highlight: boolean;
  displayWinnerFlag: boolean;
  player: iPlayer;
  isSolo: boolean;
  secondaryTextType: "pair" | "time" | "moves";
}

export const Metric: FC<iMetricProps> = ({
  highlight,
  displayWinnerFlag,
  player,
  isSolo,
  secondaryTextType,
}) => {
  const { formattedGameTime } = useTrackGameTime();

  const MainDisplayText = useMemo(() => {
    if (!isSolo) {
      return ` Player ${player.id} ${displayWinnerFlag ? "(Winner!)" : ""}`;
    }

    switch (secondaryTextType) {
      case "moves":
        return "Moves Taken";
      case "pair":
        return `Player ${player.id}`;
      case "time":
        return "Time Elapsed";
    }
  }, [isSolo, player, displayWinnerFlag, secondaryTextType]);

  const SecondaryDisplayText = useMemo(() => {
    switch (secondaryTextType) {
      case "moves":
        return `${player.moves.length} Moves`;
      case "pair":
        return `${player.points} Pairs`;
      case "time":
        return `${formattedGameTime}`;
    }
  }, [secondaryTextType, player]);

  return (
    <MetricItemContainer
      $bgColor={highlight ? Colors["--gunmetal"] : Colors["--white-smoke"]}
    >
      <span
        style={{
          flexGrow: 1,
          color:
            !highlight || isSolo
              ? Colors["--air-force-blue"]
              : Colors["--white"],
        }}
      >
        {MainDisplayText}
      </span>
      <span
        style={{
          fontSize: "x-large",
          letterSpacing:".5px",
          color:
            !highlight || isSolo ? Colors["--charcoal"] : Colors["--white"],
        }}
      >
        {SecondaryDisplayText}
      </span>
    </MetricItemContainer>
  );
};
