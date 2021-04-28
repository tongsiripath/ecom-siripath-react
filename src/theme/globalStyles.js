import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Sarabun', sans-serif;
    //background: teal;
    //font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  body {
    //background: teal;
    min-height: 100vh;
  }
`;
 
export default GlobalStyle;