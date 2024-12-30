import { DialogActions, DialogContent, DialogTitle } from "@mui/material";
import React, { FC, useMemo } from "react";
import ActionButton from "../ActionButton/ActionButton";
import {
  MainHeader,
  MetricContainer,  
  SubHeader,
} from "./dialogs.component";
import { Colors } from "../../utils/constants";
import { useGameContext } from "../../utils/hooks/useGameContext";
import { iPlayer } from "../../utils/models";
import { Metric } from "../Metric/Metric";

export const End: FC = () => {
  const context = useGameContext();

  const onRestartGame = () => {
    context.restart();
  };

  const winner = useMemo(() => {
    const winner = context.game.winner;
    return winner;
  }, [context.game.winner]);

  const TitleText = useMemo(() => {
    if (context.game.players.length === 1) {
      return "You did it!";
    }
    const winnerStr =
      winner.length > 1
        ? `Players ${winner.map((w) => w.id).join(" and ")} Tied!`
        : `Player ${winner[0].id} Wins!`;
    return winnerStr;
  }, [winner]);

  const onStartNewGame = () => {
    context.setup();
  };

  const endGameContent = useMemo(() => {
    if (context.game.players.length > 1) {
      return context.game.players.map((player: iPlayer) => {
        return (
          <MetricContainer
            $fontColor={
              winner.includes(player) ? Colors["--white"] : Colors["--charcoal"]
            }
            key={player.id + "player"}
          >
            <Metric
              highlight={winner.includes(player)}
              displayWinnerFlag={winner.includes(player)}
              player={player}
              isSolo={false}
              secondaryTextType={"pair"}
            />
          </MetricContainer>
        );
      });
    }
    return (
      <MetricContainer $fontColor={Colors["--air-force-blue"]}>
        <Metric
          highlight={false}
          displayWinnerFlag={false}
          player={context.game.players[0]}
          isSolo={true}
          secondaryTextType={"time"}
        />
        <Metric
          highlight={false}
          displayWinnerFlag={false}
          player={context.game.players[0]}
          isSolo={true}
          secondaryTextType={"moves"}
        />
      </MetricContainer>
    );
  }, [context.game.players]);

  return (
    <React.Fragment>
      <DialogTitle
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          pt: "1em",
        }}
      >
        <MainHeader>{TitleText}</MainHeader>
        <SubHeader $resetMargin={true}>
          Game over! Here are the results...
        </SubHeader>
      </DialogTitle>
      <DialogContent
        sx={{ rowGap: "1em", display: "flex", flexDirection: "column" }}
      >
        {endGameContent}
      </DialogContent>
      <DialogActions
        sx={{ margin: "0 1em 1em 1em", flexDirection: "column", rowGap: "1em" }}
      >
        <ActionButton
          text={"Restart"}
          onClick={onRestartGame}
          isPrimary={true}
        />
        <ActionButton
          text={"Setup New Game"}
          onClick={onStartNewGame}
          isPrimary={false}
        />
      </DialogActions>
    </React.Fragment>
  );
};
