import { styled } from "styled-components";

export const SelectorGridContainer = styled.div<{ gridsize: number }>`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(${({ gridsize }) => gridsize}, 75px);
  grid-template-rows: repeat(${({ gridsize }) => gridsize}, 75px);
  grid-gap: 0.5em;
  padding-top:50%;

  @media (min-width: 768px) {
    padding-top:30%;
    grid-template-columns: repeat(${({ gridsize }) => gridsize}, 150px);
    grid-template-rows: repeat(${({ gridsize }) => gridsize}, 150px);
  }

  @media (min-width: 1024px) {
    padding-top: 5%;
    grid-template-columns: repeat(${({ gridsize }) => gridsize}, 100px);
    grid-template-rows: repeat(${({ gridsize }) => gridsize}, 100px);
  }
`;
