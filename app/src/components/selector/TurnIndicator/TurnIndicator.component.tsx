import styled from "styled-components";

export const IndicatorContainer = styled.div<{ $isActive: boolean }>`
  background-color: ${({ $isActive }) =>
    $isActive ? "var(--active)" : "var(--inactive-dark)"};

  height:100%;
  width:100%;
  border-radius:10px;
  position:relative;
  padding:10px 5px;
    
  & .active-indicator {    
    opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
    transition: opacity 0.3s ease;
    z-index:0;    
    height:10px;
    width:20px;
    position:absolute;
     background-color: ${({ $isActive }) =>
       $isActive ? "var(--active)" : "var(--inactive-dark)"};    
    top:-10px;
    left:40%;
    right:40%;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  }

  & .player-text{
    color: ${({ $isActive }) =>
      $isActive ? "var(--bg-light)" : "var(--bg-blue-dark)"};
    text-align:center;
    
    font-weight:700;
    }
    
    & .player-points{
        color: ${({ $isActive }) =>
          $isActive ? "var(--bg-light)" : "var(--bg-blue-dark)"};
        text-align:center;
        font-weight:700;
        font-size:125%;
  }
`;
