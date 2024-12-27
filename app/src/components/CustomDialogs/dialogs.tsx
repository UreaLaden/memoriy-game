import { FC, useMemo } from "react";
import { GameState } from "../../utils/constants";
import { BootstrapDialog } from "./dialogs.component";
import { DialogContent } from "@mui/material";
import { Start } from "./startGame";
import { Pause } from "./pause";
import { End } from "./endGame";

export interface CustomDialogProps {
  gameState: GameState;
  isOpen: boolean;
}

const CustomDialog: FC<CustomDialogProps> = ({ gameState, isOpen }) => {
  const handleClose = () => {};

  const Content = useMemo(() => {
    switch (gameState) {
      case GameState.START:
        return <Start />;
      case GameState.PAUSE:
        return <Pause />;
      case GameState.END:
        return <End />;
      default:
        return <DialogContent>This shouldn't be visible</DialogContent>;
    }
  }, [gameState]);

  return (
    <BootstrapDialog onClose={handleClose} open={isOpen}>
      {Content}
    </BootstrapDialog>
  );
};
export default CustomDialog;
