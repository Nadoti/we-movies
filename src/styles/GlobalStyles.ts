import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  p,h1,h2,input, button, span, tr, td,th {
    font-family: Open Sans, roboto;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

`;
