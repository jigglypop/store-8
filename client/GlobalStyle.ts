import styled, { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  body {
    /* 오버플로우 x hidden(아래 스크롤이 잡혀서) */
    overflow-x: hidden;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    /* 폰트 */
    font-family: "NanumBarunGothic", "Do Hyeon", sans-serif;

    /* 그레이 */
    --gray1: #333333;
    --gray2: #4F4F4F; 
    --gray3: #828282; 
    --gray4: #BDBDBD;
    --gray5: #E0E0E0;
    --gray6: #F5F5F7;
    --gray5-button-hover: #E0E0E0;

    /* 그 외 색깔 */
    --red: #F45452;
    --yellow: #FFD142;
    --mint: #2AC1BC;
    --dark-mint: #219A95;
    --white-mint: #A0E1E0;
    --dark-blue: #293D7C;
    --white: #FFFFFF;
    --off-white: #E7E7E7;
    --black: #000000;
    --pastel-black: #353535;

    /* 선 색상 */
    --line-black: #353535;
    --line-mint: #2AC1BC;
    --line-red: #F45452;
    --line-gray: #BDBDBD;
    --line-gray2: #A1A1A1;
    --border-dark-gray: #717171;

    /* 백그라운드 */
    --background-white: #FFFFFF;
    --background-pastel-black: #353535;
    --background-black: #000000;
    --background-gray: #F5F5F7;
    --background-dark-gray: #4F4F4F;
    --background-mint: #2AC1BC;
    --background-dark-mint: #219A95;
    --background-red: #F45452;
    --background-dark-red: #D73331;
    --background-yellow: #FFD142;
    --background-dark-blue: #293D7C;
    --body-background: white;
    --header-background: white;
    --background-button-clicked: #E0E0E0;

    /* 텍스트 */
    --text-pastel-black: #353535;
    --text-black: #000000;
    --text-red: #F45452;
    --text-mint: #2AC1BC;
    --text-dark-blue: #293D7C;
    --text-white: #FFFFFF;
    --text-lightgray: #BDBDBD;
    --text-gray: #828282;
    --text-dark-gray: #525252;
  
    /* 컬러피커용 */
    --text-picker: #000000;
    --text-dark-picker: #000000;

    /* 글씨 크기 */
    --body-tiny-font: 0.625rem;
    --body-small-font: 0.75rem;
    --body-middle-font: 0.875rem;
    --body-large-font: 1.125rem;
    --body-huge-font: 1.5rem;
    --body-title-font: 2.5rem;
    --body-subtitle-font: 2rem;
    --head-small-font: 1.75rem;
    --carousel-width: 1520px;
  
    /* 넓이와 높이 */
    --slider-width: 150px;
  
    /* 다크모드에서 바뀌는 것들 (-dark 접미어 붙음) */
    --text-pastel-black-dark: #353535;
    --text-black-dark: #000000;
    --text-white-dark: #FFFFFF;
    --body-background-dark: white;
    --header-background-dark: white;
    --card-dark: #FFFFFF;
    --footer-background-dark: #E7E7E7;

    /* 컬러피커에서 바뀌는 것들 (-picker 접미어 붙음) */
    --tag-picker: #219A95;
    --text-picker: #12fff7;
    --header-gradient-picker:linear-gradient(45deg, #0cebeb, #20e3b2, #219A95);
    --glass-picker: rgba(18, 255, 247, 0.8);
    --shadow-picker: 0 0 20px #219A95;

    @media only screen and (min-width: 0px) {
      --app-width: 100vw;
    }
    @media only screen and (min-width: 375px) {
      --app-width: 100vw;
    }
    @media only screen and (min-width: 768px) {
      --app-width: 668px;
    }
    @media only screen and (min-width: 1300px) {
      --app-width: 1200px;
    }
    
    /* 캐러셀  width만 조정 */
    @media only screen and (max-width: 1300px) {
      --carousel-width: 1150px;
    }
    @media only screen and (max-width: 1200px) {
      --carousel-width: 1050px;
    }
    @media only screen and (max-width: 1100px) {
      --carousel-width: 950px;
    }
    @media only screen and (max-width: 1000px) {
      --carousel-width: 850px;
    }
    @media only screen and (max-width: 900px) {
      --carousel-width: 750px;
    }
    @media only screen and (max-width: 800px) {
      --carousel-width: 650px;
    }
    @media only screen and (max-width: 700px) {
      --carousel-width: 550px;
    }
    @media only screen and (max-width: 600px) {
      --carousel-width: 450px;
    }
    @media only screen and (max-width: 500px) {
      --carousel-width: 350px;
    }
    @media only screen and (max-width: 375px) {
      --carousel-width: 300px;
    }


    /* 기본 백그라운드 */
    background: var(--body-background-dark);

    /* 스크롤 */
    ::-webkit-scrollbar {
      width: 15px;
      background-color: var(--text-white-dark);
    }
    /* 스크롤 엄지부분 */

    ::-webkit-scrollbar-thumb {
      background: var(--header-gradient-picker);
      border-radius: 10px;
      border: 2px solid transparent;
      background-clip: padding-box;
    }
    /* 스크롤 트랙 */
    ::-webkit-scrollbar-track {
      background-color: rgba(0, 0, 0, 0.6);
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
    }
    /* 스크롤 코너 */
    ::-webkit-scrollbar-corner {
      background-color: transparent;
    }
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

export const App = styled.div`
  margin-top: 100px;
  position: relative;
  width: 100vw;
  min-height: 60vh;
`;
// 토스트 부분 간단 디자인(수정 가능)
export const ToastDiv = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 20;
  min-width: 200px;
  color: white;

  .toast {
    background-color: #1d1d1d;
    font-size: 15px;
    font-weight: 600;
    border-radius: 5px;
    padding: 20px 50px;
    margin: 0.5rem;
    border: 2px solid var(--text-picker);

    strong {
      color: var(--text-picker);
    }
  }
`;

export default GlobalStyle;
