import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  h1,h2,h3{
    margin:0;
  }
`;

export default GlobalStyle;
