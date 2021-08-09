import styled, { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  @font-face {
    font-family: "NanumBarunGothic";
    src: url("/font/NanumBarunGothicSubset.woff2"); 
  }

  body {
    font-family: "NanumBarunGothic", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;

    /* variable 값 */
    /* 그라디언트 */
    --background-bluegreen: linear-gradient(45deg, #0cebeb, #20e3b2, #29ffc6);
    --background-purple: linear-gradient(45deg, #8e2de2, #4a00e0);
    --background-dark: linear-gradient(45deg, #000000, #434343);
    --background-yellow: linear-gradient(45deg, #ffe259, #ffa751);

    /* 넓이들 */
    --carousel-width: 1520px;

    /* 색깔들 */
    --baemin: #12fff7;
    --thumb: #12fff7;
    --text: #1d1d1d;
    --white-text: white;
    --header-app: white;
    --app: white;
    --red: #ed213a;
    --header: var(--background-bluegreen);
    --grayA: white;
    --grayB: #f6f6f6;
    --grayC: #d7d7d7;
    --grayD: #888888;
    --grayE: #484848;
    --dark: #222222;
    --bluegreen: #0cebeb;
    --green: #00b09b;
    --purple: #8e2de2;
    --yellow: #ffe259;
    --primary1: #2AC1BC;
    --primary3: #219A95;


    --category-badge-1 : linear-gradient(45deg, #ed213a, #93291e);
    --category-badge-2 : linear-gradient(45deg, #bc4e9c, #f80759);
    --category-badge-3 : linear-gradient(45deg, #fdc830, #f37335);
    --category-badge-4 : linear-gradient(45deg, #ffe259, #ffa751);
    --category-badge-5 : linear-gradient(45deg, #a8ff78, #78ffd6);
    --category-badge-6 : linear-gradient(45deg, #11998e, #38ef7d);
    --category-badge-7 : linear-gradient(45deg, #12d8fa, #1fa2ff);
    --category-badge-8 : linear-gradient(45deg, #8e2de2, #4a00e0);
    --category-badge-9 : linear-gradient(45deg, #302b63, #24243e);
    --category-badge-10 : linear-gradient(45deg, #434343, #000000);
    --category-badge-11 : linear-gradient(45deg, #434343, #434343);

    --category-1 : #ed213a;
    --category-2 : #bc4e9c;
    --category-3 : #fdc830;
    --category-4 : #ffe259;
    --category-5 : #a8ff78;
    --category-6 : #11998e;
    --category-7 : #12d8fa;
    --category-8 : #8e2de2;
    --category-9 : #302b63;
    --category-10 : #434343;
    --category-11 : var(--grayD);

    --body-background: #d7d7d7;
    --calendar-item: #d7d7d7;
    --base-shadow: none;
    --tag: #219A95;
    --blue: #1fa2ff;
    --badge: none;
    --calendar-outer-width: 1200px;

    --base-gradient: linear-gradient(45deg, #0cebeb, #20e3b2, #219A95);
    --dark-gradient: linear-gradient(45deg, #0cebeb, #20e3b2, #29ffc6);
    --darkmode: linear-gradient(45deg, #0cebeb, #20e3b2, #29ffc6);
    --thumb-gradient: linear-gradient(45deg, #0cebeb, #20e3b2, #219A95);

    --base-color:#0cebeb;
    --header-color: #222222;
    --border: none;
    --credit-width: 430px;
    --credit-height: 260px;
    transition: all 0.3s ease-in;
  }
  // root  
  #root {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
  // a태그 스타일 없애기
  a:link,
  a:visited,
  a:hover  { 
    text-decoration: none;
  }
  // 스크롤 디자인
  ::-webkit-scrollbar {
    width: 20px;
    background-color: var(--dark);
  }
  // 스크롤 디자인 엄지부분
  ::-webkit-scrollbar-thumb {
    background: var(--thumb-gradient);
    border-radius: 10px;
    background-clip: padding-box;
    border: 3px solid var(--dark);
  }
  // 스크롤 디자인 트랙, 코너부분 색깔
  ::-webkit-scrollbar-track {
    background-color: var(--dark);
  }
  ::-webkit-scrollbar-corner {
    background-color: var(--dark);
  }
`;

export default GlobalStyle;

// 앱부분 (공통으로 들어가는 부분)
export const App = styled.div`
  // 앱 윗부분
  margin-top: 200px;
`;
