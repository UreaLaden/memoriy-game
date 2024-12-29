import { styled } from "styled-components";

export const SelectorGridContainer = styled.div<{
  gridsize: number;
  pixelsize: number;
}>`
  height: auto;

  display: grid;
  grid-template-columns: repeat(
    ${({ gridsize }) => gridsize},
    ${({ pixelsize }) => pixelsize}px
  );
  grid-template-rows: repeat(
    ${({ gridsize }) => gridsize},
    ${({ pixelsize }) => pixelsize}px
  );
  grid-gap: 0.5em;

  @media (min-width: 768px) {
    grid-template-columns: repeat(
      ${({ gridsize }) => gridsize},
      ${({ pixelsize }) => pixelsize}px
    );
    grid-template-rows: repeat(
      ${({ gridsize }) => gridsize},
      ${({ pixelsize }) => pixelsize}px
    );
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(
      ${({ gridsize }) => gridsize},
      ${({ pixelsize }) => pixelsize}px
    );
    grid-template-rows: repeat(
      ${({ gridsize }) => gridsize},
      ${({ pixelsize }) => pixelsize}px
    );
  }
`;
