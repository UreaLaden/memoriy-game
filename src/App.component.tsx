import styled from "styled-components";

export const AppContainer = styled.div`
  height: 100%;
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-column: repeat(7, 1fr);
  grid-template-rows: repeat(7, 1fr);
`;

export const GameSpace = styled.div`
  grid-row: 2 / 7;
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
