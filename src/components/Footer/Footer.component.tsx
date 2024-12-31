import styled from "styled-components";
import { Colors, DESKTOP_WIDTH, TABLET_WIDTH } from "../../utils/constants";

export const FooterContainer = styled.div`
  grid-row: 7 / 8;
  grid-column: 1/-1;
  padding: 1em 15%;
  align-content: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1em;
  box-sizing: border-box;

  @media (min-width:${DESKTOP_WIDTH}px){
    padding:1em 35%;    
  }
  `;

export const MainContent = styled.div`
  display: flex;
  column-gap: 1em;
  width: 100%;
  
  @media (min-width:${DESKTOP_WIDTH}px){
    column-gap:2em;  
  }
`;

export const ContentContainer = styled.div`
  flex: 1;
  background-color: ${Colors["--columbia-blue"]};
  text-align: center;
  padding: 0.5em 1em 1em 1em;
  border-radius: 10px;

  & :nth-child(1) {
    color: ${Colors[ "--air-force-blue"]};
  }

  & :nth-child(2) {
    font-size: 2em;
    font-weight: 700;
  }

  @media (min-width: ${TABLET_WIDTH}px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:1.5em 1.5em 1.5em 0.5em;
  }
`;
