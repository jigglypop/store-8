import styled, { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";


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

    /**
    1. 하얀색으로 변하는 TEXT 색
    2. Dark Mode에서 옅어져야 하는 색
    --text ~~~
    --background ~~~
    styled component 상태를 넘겨주는 부분 + Thema
    */

    --gray1: #333333;
    --gray2: #4F4F4F; 
    --gray3: #828282; 
    --gray4: #BDBDBD;
    --gray5: #E0E0E0;
    --gray6: #F5F5F7;
    --background-gray: #F5F5F7;
    --text-gray: #828282;

    --white: #FFFFFF;
    --off-white: #E7E7E7;
    --black: #000000;
    --text-black: #000000;
    --pastel-black: #353535;

    --mint: #2AC1BC;
    --dark-mint: #219A95;
    --white-mint: #A0E1E0;

    --red: #F45452;

/*
    --pastelBlack: #353535;
    --realWhite: #FFFFFF;
    --backgroundGrey: #F7F7F7;
    --cartGrey: #D1D1D1;
    --textGrey: #898989;
    --realBlack: #000000;
    --pastelBlack: #353535;
*/
    --tinyFont: 0.625rem;
    --smallFont: 0.75rem;
    --middleFont: 0.875rem;
    --largeFont: 1.125rem;

    --carousel-width: 1520px;
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

// 앱부분 (공통으로 들어가는 부분)
export const App = styled.div`
  // 앱 윗부분
  margin-top: 200px;
`;
