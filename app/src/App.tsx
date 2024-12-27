import { Typography } from "@mui/material";
import {
  ActionButtonContainer,
  AppContainer,
  FooterContainer,
  GameSpace,
  HeaderContainer,
} from "./App.component";
import ActionButton from "./components/ActionButton/ActionButton";
import SelectorGrid from "./components/SelectorGrid/SelectorGrid";
import useGameContext from "./utils/hooks/useGameContext";
import { useMemo } from "react";
import { Colors, GameState } from "./utils/constants";
import TurnIndicator from "./components/TurnIndicator/TurnIndicator";
import CustomDialog from "./components/CustomDialogs/dialogs";

function App() {
  const context = useGameContext();

  const footerContent = useMemo(() => {
    if (context.game.playerCount > 1) {
      return context.game.players.map((p) => (
        <TurnIndicator isActive={false} player={p.id} playerPoints={p.points} />
      ));
    }

    return (
      <div style={{ display: "flex", columnGap: "1em" }}>
        <div
          style={{
            flex: 1,
            backgroundColor: `${Colors["--columbia-blue"]}`,
            textAlign: "center",
            padding: ".5em 1em 1em 1em",
            borderRadius: "10px",
          }}
        >
          <div>Time</div>
          <div style={{ fontSize: "2em", fontWeight: 700 }}>1:53</div>
        </div>
        <div
          style={{
            flex: 1,
            backgroundColor: `${Colors["--columbia-blue"]}`,
            textAlign: "center",
            padding: ".5em 1em 1em 1em",
            borderRadius: "10px",
          }}
        >
          <div>Moves</div>
          <div style={{ fontSize: "2em", fontWeight: 700 }}>39</div>
        </div>
      </div>
    );
  }, [context.game.players]);

  return (
    <>
      <AppContainer>
        <HeaderContainer>
          <Typography sx={{ fontSize: 40, fontWeight: 700 }}>memory</Typography>
          <ActionButtonContainer>
            <ActionButton
              text={"Menu"}
              onClick={() => console.log("Not Yet Implemented")}
              isPrimary={true}
            />
            <ActionButton
              text={"New Game"}
              onClick={() => console.log("Not Yet Implemented")}
              isPrimary={false}
            />
          </ActionButtonContainer>
        </HeaderContainer>
        <GameSpace>
          <SelectorGrid
            gridSize={context.game.gridSize}
            gridMode={context.game.theme}
          />
        </GameSpace>
        <FooterContainer>{footerContent}</FooterContainer>
      </AppContainer>
      <CustomDialog gameState={context.game.state} isOpen={context.game.state === GameState.START} />
    </>
  );
}

export default App;
