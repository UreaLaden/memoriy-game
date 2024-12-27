import { DialogContent } from "@mui/material";
import React, { FC } from "react";
import ActionButton from "../ActionButton/ActionButton";

export const Pause: FC = () => {
  
  return (
    <React.Fragment>
      <DialogContent
        sx={{ display: "flex", flexDirection: "column",rowGap:'1em'}}
      >
        <ActionButton
          text={"Restart"}
          onClick={() => console.log("Clicked!")}
          isPrimary={true}
        />
        <ActionButton
          text={"New Game"}
          onClick={() => console.log("Clicked!")}
          isPrimary={false}
        />
        <ActionButton
          text={"Resume Game"}
          onClick={() => console.log("Clicked!")}
          isPrimary={false}
        />
      </DialogContent>
    </React.Fragment>
  );
};
