import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
  /* *, *::before, *::after { */
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    border: none;
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Pretendard';
  }

  #root {
    width: 100%;
    height: auto;
  }

  button {
    background-color: transparent;
  }
`;

export default GlobalStyle;