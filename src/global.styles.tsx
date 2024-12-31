import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle` 

 :root {
  --orange-peal:#FDA214;
  --charcoal:#304859;  
  --columbia-blue:#BCCED9;
  --gunmetal:#152938;
  --air-force-blue:#7191A5;
  --white:#FCFCFC;
  --white-smoke:#F2F2F2;
  --air-super-blue:#6395B8;
  
  height:100%;
  }

  html,body,#root{
    height:100%;
    margin:0;
    padding:0;
  }

body {
  font-family: 'Atkinson Hyperlegible', sans-serif;
  margin: 0;
  padding: 0;
}

#root{
  display:flex;
  flex:1;
  flex-direction:column;
}

`;

export default GlobalStyle;
