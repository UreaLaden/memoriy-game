import styled from "styled-components";

export const AppContainer = styled.div`
  height: 100%;
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-column: repeat(7, 1fr);
  grid-template-rows: repeat(7, 1fr);
`;

export const HeaderContainer = styled.div`
  border: 1px solid red;
  grid-row: 1/2;
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
`;

export const GameSpace = styled.div`
  border: 1px solid blue;
  grid-row: 2 / 7;
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterContainer = styled.div`
  border: 1px solid orange;
  grid-row: 7 / 8;
  grid-column: 1/-1;
  padding: 0 5%;
  align-content:center;
`;

export const ActionButtonContainer = styled.div`
  display: flex;
  min-width: 20%;
  column-gap: 1em;
  
  & :nth-child(2) {
    display: none;
  }

  @media (min-width: 468px) {
    & > :nth-child(2) {
      display: block;
    }
    min-width:40%;
}
`;
