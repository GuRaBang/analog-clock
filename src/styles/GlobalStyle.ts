import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle/*css*/ `
  html, body {
    margin: 0;
    height: 100%;
  }
  body{ 
    background-color: var(--light-gray);
  }
  :root{
    /*color*/
    --light-gray: hsl(180, 10%, 95%);
    --navy: hsl(225, 50%, 23%);
    --orange: hsl(24, 100%, 58%);
    --turquoise: hsl(183, 48%, 52%);
    --white: hsl(0, 0%, 100%);
  }
  .srOnly {
    overflow: hidden;
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
  }
`;

export default GlobalStyle;
