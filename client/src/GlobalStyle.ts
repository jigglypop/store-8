import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

// styled component thema?

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  
  body {
    width: 100vw;
    min-height: 100vh;

    --gray1: #333333;
    --gray2: #4F4F4F; 
    --gray3: #828282; 
    --gray4: #BDBDBD;
    --line-gray: #BDBDBD;
    --gray5: #E0E0E0;
    --gray6: #F5F5F7;
    --background-gray: #F5F5F7;
    --text-lightgray: #BDBDBD;
    --text-gray: #828282;

    --white: #FFFFFF;
    --background-white: #FFFFFF;
    --text-white: #FFFFFF;
    --off-white: #E7E7E7;
    --black: #000000;
    --background-black: #000000;
    --text-black: #000000;
    --pastel-black: #353535;
    --background-pastel-black: #353535;
    --line-black: #353535;

    --mint: #2AC1BC;
    --text-mint: #2AC1BC;
    --dark-mint: #219A95;
    --white-mint: #A0E1E0;

    --red: #F45452;

    --body-tiny-font: 0.625rem;
    --body-small-font: 0.75rem;
    --body-middle-font: 0.875rem;
    --body-large-font: 1.125rem;
  }

  p, h1, h2, h3, h4, h5, h6, div, span, input, input::placeholder, button {
    font-family: "NotoSans", "Nanum Gothic", sans-serif;
    /* 제목이나 큰 글씨, 제목 등은 배민 폰트로 써도 좋을 듯 하다. + 배민 폰트도 추가해놓자 */
  }

  button {
    appearance: none;
    border: none;
  }

  .vertical-center-align {
    display: flex;
    align-items: center;
  }

  .center-align {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default GlobalStyle;
