import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

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
    /* TODO: 이후에 Main Page 및 Header, Footer 만들고 정렬 부분 재정의 필요 */
    display: flex;
    justify-content: center;
    align-items: center;

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
    --body-huge-font: 1.5rem;
    --body-title-font:2.5rem;
    --body-subtitle-font:2rem;
    --head-small-font: 1.75rem;
    
    @media only screen and (min-width: 375px) {
      --app-width: 100vw;
    }
    @media only screen and (min-width: 768px) {
      --app-width: 668px;
    }
    @media only screen and (min-width: 1300px) {
      --app-width: 1200px;
    }
  }

  p, h1, h2, h3, h4, h5, h6, div, span, input, input::placeholder, button {
    font-family: "NotoSans", "Nanum Gothic", sans-serif;
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
