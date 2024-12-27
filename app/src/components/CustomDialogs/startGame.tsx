import {
  Button,
  DialogActions,
  DialogContent,
  Typography,
} from "@mui/material";
import React, { FC } from "react";

export const Start: FC = () => {
  return (
    <React.Fragment>
      <DialogContent>
        <Typography>Select Theme</Typography>
        <div>
          <div>Numbers</div>
          <div>Icons</div>
        </div>
        <Typography>Numbers of Players</Typography>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <Typography>Grid Size</Typography>
        <div>4x4</div>
        <div>6x6</div>
      </DialogContent>
      <DialogActions>
        <Button>Start Game</Button>
      </DialogActions>
    </React.Fragment>
  );
};
