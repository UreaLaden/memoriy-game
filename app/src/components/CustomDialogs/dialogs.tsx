import { FC, useMemo } from "react";
import { Colors, GameState } from "../../utils/constants";
import {
  BackdropHeader,
  BootstrapDialog,
  StyledBackdrop,
} from "./dialogs.component";
import { BackdropRoot, DialogContent } from "@mui/material";
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
    <>
      {gameState === GameState.START && isOpen && (
        <StyledBackdrop bgcolor={Colors["--gunmetal"]}>
          <BackdropHeader>memory</BackdropHeader>
        </StyledBackdrop>
      )}
      <BootstrapDialog
        onClose={handleClose}
        open={isOpen}
        slotProps={{
          backdrop: {
            style: {
              opacity: gameState === GameState.START ? 0 : 1,
            },
          },
        }}
      >
        {Content}
      </BootstrapDialog>
    </>
  );
};
export default CustomDialog;
