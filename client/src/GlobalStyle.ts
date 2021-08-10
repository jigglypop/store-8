import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  body {
    width: 100vw;
    min-height: 100vh;
    --cartGrey: #D1D1D1;
    --backgroundGrey: #F7F7F7;
    --realBlack: #000000;
    --pastelBlack: #353535;
    --realWhite: #FFFFFF;
  }
  p, h1, h2, h3, h4, h5, h6, div, span, input, input::placeholder, button {
    font-family: "NotoSans", "Nanum Gothic", sans-serif;
  }
`;

export default GlobalStyle;
