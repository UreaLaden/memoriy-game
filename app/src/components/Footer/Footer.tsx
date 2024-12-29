import { useMemo } from "react";
import { useGameContext } from "../../utils/hooks/useGameContext";
import TurnIndicator from "../TurnIndicator/TurnIndicator";
import {
  ContentContainer,
  FooterContainer,
  MainContent,
} from "./Footer.component";
import { useTrackGameTime } from "../../utils/hooks/useTrackGameTime";

const Footer = () => {
  const context = useGameContext();
  const { formattedGameTime } = useTrackGameTime();

  const footerContent = useMemo(() => {
    if (context.game.playerCount > 1) {
      return context.game.players.map((p) => (
        <TurnIndicator
          key={`player-${p.id}`}
          isActive={context.game.activePlayer === p}
          player={p.id}
          playerPoints={p.points}
        />
      ));
    }

    return (
      <MainContent>
        <ContentContainer>
          <div>Time</div>
          <div>{formattedGameTime}</div>
        </ContentContainer>
        <ContentContainer>
          <div>Moves</div>
          <div>{context.game.players[0]?.moves.length}</div>
        </ContentContainer>
      </MainContent>
    );
  }, [context.game.players, formattedGameTime]);
  return <FooterContainer>{footerContent}</FooterContainer>;
};
export default Footer;
