import styled from "styled-components";
import { MOBILE_WIDTH } from "../../utils/constants";

export const IndicatorContainer = styled.div<{ $isActive: boolean }>`
  background-color: ${({ $isActive }) =>
    $isActive ? "var(--orange-peal)" : "var(--columbia-blue)"};

  height: 100%;
  width: 100%;
  border-radius: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: ${MOBILE_WIDTH}px) {
    flex-direction: row;
    align-items: center;
    justify-content:space-around;
    column-gap:.75em;
  }

  & .active-indicator {
    opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
    transition: opacity 0.3s ease;
    z-index: 0;
    height: 10px;
    width: 20px;
    position: absolute;
    background-color: ${({ $isActive }) =>
      $isActive ? "var(--orange-peal)" : "var(--columbia-blue)"};
    top: -10px;
    left: 40%;
    right: 40%;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  }

  & .player-text {
    color: ${({ $isActive }) =>
      $isActive ? "var(--white)" : "var(--air-force-blue)"};
    text-align: center;
    flex: 1;
    padding-top: 10%;
    font-weight: 700;
    font-size: 1.5em;

    @media (min-width: ${MOBILE_WIDTH}px) {
      padding: 0 0 0 .1em;
      flex:unset;
      font-size:2em;
    }
  }

  & .player-points {
    color: ${({ $isActive }) =>
      $isActive ? "var(--white)" : "var(--charcoal)"};
    text-align: center;
    font-weight: 700;
    font-size: 2.5em;
    flex: 2;

    @media (min-width: ${MOBILE_WIDTH}px) {
      font-size:4em;
      flex:unset;
    }
  }
`;
