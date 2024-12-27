import {  
  DialogActions,
  DialogContent,  
} from "@mui/material";
import React, { FC } from "react";
import { Colors } from "../../utils/constants";
import ActionButton from "../ActionButton/ActionButton";
import { SubHeader, OptionContainer, Option } from "./dialogs.component";

export const Start: FC = () => {
 
  const onStartGame = () => {
    console.log("Start Game not yet implemented");
  };

  return (
    <React.Fragment>
      <DialogContent>
        <SubHeader>Select Theme</SubHeader>
        <OptionContainer>
          <Option bgcolor={Colors["--charcoal"]}>Numbers</Option>
          <Option bgcolor={Colors["--columbia-blue"]}>Icons</Option>
        </OptionContainer>

        <SubHeader>Numbers of Players</SubHeader>
        <OptionContainer>
          <Option bgcolor={Colors["--charcoal"]}>1</Option>
          <Option bgcolor={Colors["--columbia-blue"]}>2</Option>
          <Option bgcolor={Colors["--columbia-blue"]}>3</Option>
          <Option bgcolor={Colors["--columbia-blue"]}>4</Option>
        </OptionContainer>
        <SubHeader>Grid Size</SubHeader>
        <OptionContainer>
          <Option bgcolor={Colors["--charcoal"]}>4x4</Option>
          <Option bgcolor={Colors["--columbia-blue"]}>6x6</Option>
        </OptionContainer>
      </DialogContent>
      <DialogActions sx={{margin:'0 1em 1em 1em'}}>
        <ActionButton
          text={"Start Game"}
          onClick={onStartGame}
          isPrimary={true}
        />
      </DialogActions>
    </React.Fragment>
  );
};
