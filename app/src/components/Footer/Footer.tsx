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
    const { playerCount, activePlayer, players } = context.game;

    if (playerCount > 1) {
      return players.map((p) => (
        <TurnIndicator
          key={`player-${p.id}`}
          isActive={activePlayer === p}
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
          <div>{players[0]?.moves.length}</div>
        </ContentContainer>
      </MainContent>
    );
  }, [formattedGameTime, context.game]);
  return <FooterContainer>{footerContent}</FooterContainer>;
};
export default Footer;
