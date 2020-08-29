import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Gelion';
    font-weight: 100;
    src: url('https://stage.kidztopros.com/next-public/fonts/Gelion-Thin.woff2');
  }

  html, button {
    font-family: Gelion;
    font-weight: 100;
  }
`;