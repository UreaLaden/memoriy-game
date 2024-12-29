import { DialogContent } from "@mui/material";
import React, { FC } from "react";
import ActionButton from "../ActionButton/ActionButton";
import { useGameContext } from "../../utils/hooks/useGameContext";

export const Pause: FC = () => {
  const context = useGameContext();

  const onRestart = () => {
    context.restart();
  };
  const onNewGame = () => {
    context.setup();
  };

  const onResumeGame = () => {
    context.pause();
  };

  return (
    <React.Fragment>
      <DialogContent
        sx={{ display: "flex", flexDirection: "column", rowGap: "1em" }}
      >
        <ActionButton text={"Restart"} onClick={onRestart} isPrimary={true} />
        <ActionButton text={"New Game"} onClick={onNewGame} isPrimary={false} />
        <ActionButton
          text={"Resume Game"}
          onClick={onResumeGame}
          isPrimary={false}
        />
      </DialogContent>
    </React.Fragment>
  );
};
