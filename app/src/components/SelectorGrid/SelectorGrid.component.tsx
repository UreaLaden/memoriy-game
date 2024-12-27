import { styled } from "styled-components";

export const SelectorGridContainer = styled.div<{ gridsize: number }>`  
  height: 100%;
  display:grid;
  grid-template-columns: repeat(${({ gridsize }) => gridsize}, 50px);
  grid-template-rows: repeat(${({ gridsize }) => gridsize}, 50px);
  grid-gap:.5em;
`;
