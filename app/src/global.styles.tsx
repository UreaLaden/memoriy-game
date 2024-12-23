import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&display=swap');

 :root {
  --active:#FDA214;
  --inactive-dark:#BCCED9;
  --inactive-dark:#F2F2F2;
  --bg-dark:#152938;
  --bg-light:#FCFCFC;
  --bg-medium:#304859;
  --bg-blue-dark:#7191A5;
  --bg-blue-light:#6395B8;
     
}

body {
  font-family: 'Atkinson Hyperlegible', sans-serif;
  margin: 0;
  padding: 0;
}
`;

export default GlobalStyle;
