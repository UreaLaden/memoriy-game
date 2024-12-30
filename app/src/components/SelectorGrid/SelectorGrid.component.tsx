import { styled } from "styled-components";

export const SelectorGridContainer = styled.div<{
  $gridSize: number;
  $pixelSize: number;
}>`
  height: auto;

  display: grid;
  grid-template-columns: repeat(
    ${({ $gridSize }) => $gridSize},
    ${({ $pixelSize }) => $pixelSize}px
  );
  grid-template-rows: repeat(
    ${({ $gridSize }) => $gridSize},
    ${({ $pixelSize }) => $pixelSize}px
  );
  grid-gap: 0.5em;

  @media (min-width: 768px) {
    grid-template-columns: repeat(
      ${({ $gridSize }) => $gridSize},
      ${({ $pixelSize }) => $pixelSize}px
    );
    grid-template-rows: repeat(
      ${({ $gridSize }) => $gridSize},
      ${({ $pixelSize }) => $pixelSize}px
    );
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(
      ${({ $gridSize }) => $gridSize},
      ${({ $pixelSize }) => $pixelSize}px
    );
    grid-template-rows: repeat(
      ${({ $gridSize }) => $gridSize},
      ${({ $pixelSize }) => $pixelSize}px
    );
  }
`;
