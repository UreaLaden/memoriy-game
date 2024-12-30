import { DialogActions, DialogContent, DialogTitle } from "@mui/material";
import React, { FC, useMemo } from "react";
import ActionButton from "../ActionButton/ActionButton";
import {
  MainHeader,
  MetricContainer,
  MetricItemContainer,
  SubHeader,
} from "./dialogs.component";
import { Colors } from "../../utils/constants";
import { useGameContext } from "../../utils/hooks/useGameContext";
import { iPlayer, PlayerId } from "../../utils/models";

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
    const winnerStr =
      winner.length > 1
        ? `Players ${winner.map((w) => w.id).join(", ")} Tied!`
        : `Player ${winner[0].id} Wins!`;
    return winnerStr;
  }, [winner]);

  const onStartNewGame = () => {
    context.setup();
  };

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
        {context.game.players.map((player: iPlayer) => {
          return (
            <MetricContainer
              $bgColor={
                winner.includes(player)
                  ? Colors["--gunmetal"]
                  : Colors["--white-smoke"]
              }
              $fontColor={
                winner.includes(player)
                  ? Colors["--white"]
                  : Colors["--charcoal"]
              }
              key={player.id + "player"}
            >
              <MetricItemContainer>
                <span
                  style={{
                    color: winner.includes(player)
                      ? Colors["--air-force-blue"]
                      : Colors["--white"],
                  }}
                >
                  Player {player.id}{" "}
                  {winner.includes(player) ? "(Winner!)" : ""}
                </span>
                <span style={{ fontSize: "1.5em" }}>{player.points} Pairs</span>
              </MetricItemContainer>
            </MetricContainer>
          );
        })}
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
