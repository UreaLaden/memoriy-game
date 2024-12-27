import { Button, DialogActions } from "@mui/material";
import React, { FC } from "react";

export const Pause: FC = () => {
  return (
    <React.Fragment>
      <DialogActions>
        <Button>Restart</Button>
        <Button>New Game</Button>
        <Button>Resume Game</Button>
      </DialogActions>
    </React.Fragment>
  );
};
