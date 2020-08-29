import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Gelion';
    font-weight: 100;
    /* this must be local src in order for the jump to appear */
    src: url('/Gelion-Thin.woff2');
  }

  html, button {
    font-family: Gelion;
    font-weight: 100;
  }
`;