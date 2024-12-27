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

export const End: FC = () => {
  const onRestartGame = () => {
    console.log("Restart not yet implemented");
  };

  const TitleText = useMemo(() => {
    return "Player 3 Wins!";
  }, []);

  const onStartNewGame = () => {
    console.log("Restart not yet implemented");
  };

  const PlayerStats = Array.from<number>({ length: 4 }).map(
    (_: number, idx: number) => idx + 1
  );

  const winner = 1;

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
        <SubHeader resetmargin={true}>
          Game over! Here are the results...
        </SubHeader>
      </DialogTitle>
      <DialogContent
        sx={{ rowGap: "1em", display: "flex", flexDirection: "column" }}
      >
        {PlayerStats.map((idx: number) => {
          return (
            <MetricContainer
              bgcolor={
                idx === winner ? Colors["--gunmetal"] : Colors["--white-smoke"]
              }
              fontcolor={
                idx === winner ? Colors["--white"] : Colors["--charcoal"]
              }
              key={idx + "player"}
            >
              <MetricItemContainer>
                <span
                  style={{
                    color:
                      idx !== winner
                        ? Colors["--air-force-blue"]
                        : Colors["--white"],
                  }}
                >
                  Player {idx} {idx === winner ? "(Winner!)" : ""}
                </span>
                <span style={{ fontSize: "1.5em" }}>{idx} Pairs</span>
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
