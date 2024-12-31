import styled from "styled-components";

export const HeaderContainer = styled.div`
  
  grid-row: 1/2;
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
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
