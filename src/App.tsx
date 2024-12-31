import { AppContainer, GameSpace } from "./App.component";
import SelectorGrid from "./components/SelectorGrid/SelectorGrid";
import { useGameContext } from "./utils/hooks/useGameContext";
import { GameState } from "./utils/constants";
import CustomDialog from "./components/CustomDialogs/dialogs";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";


function App() {
  const context = useGameContext();
  
  const onCloseDialog = () => {    
    context.pause();
  };

  return (
    <>
      <AppContainer>
        <Header />
        <GameSpace>
          <SelectorGrid
            gridSize={context.game.gridSize}
            gridMode={context.game.theme}
          />
        </GameSpace>
        <Footer />
      </AppContainer>
      <CustomDialog
        gameState={context.game.state}
        isOpen={context.game.state !== GameState.ACTIVE}
        onClose={onCloseDialog}
      />
    </>
  );
}

export default App;
