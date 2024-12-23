import styled from "styled-components";

export const SelectorContainer = styled.div<{
  bgcolor?: string;
  hovercolor?: string;
}>`
  background-color: ${({ bgcolor }) => bgcolor || "transparent"};
  border-radius: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
  font-family:'Atkinson Hyperlegible';

  &:hover {
    background-color: ${({ hovercolor }) => hovercolor || "transparent"};
    cursor: pointer;
  }
`;
