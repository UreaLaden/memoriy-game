import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&display=swap');

 :root {
  --orange-peal:#FDA214;
  --charcoal:#304859;  
  --columbia-blue:#BCCED9;
  --gunmetal:#152938;
  --air-force-blue:#7191A5;
  --white:#FCFCFC;
  --white-smoke:#F2F2F2;
  --air-super-blue:#6395B8;
  }

body {
  font-family: 'Atkinson Hyperlegible', sans-serif;
  margin: 0;
  padding: 0;
}
`;

export default GlobalStyle;
