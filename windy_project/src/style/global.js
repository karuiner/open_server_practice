import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    border: 0px;
    font-family: "monospace", cursive;
    color: #000;
  }

  body {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
