import styled from '@lib/styledComponent';

interface IHeader {
  isLeft?: number;
  isUp?: boolean;
}

interface IUserSlider {
  isUp: boolean;
  isRight: boolean;
}

export const UserSlider = styled.div<IUserSlider>`
  position: fixed;
  top: ${(props) => (props.isUp ? '70px' : '100px')};
  right: 0;
  background-color: rgba(0, 0, 0, 0.9);
  color: var(--text-white);
  box-shadow: 0 0 20px var(--black);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  padding: 20px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  transform: translateX(${(props) => (props.isRight ? '0' : '200px')});
  transition: all 0.3s ease-in;

  .user-slider-item {
    margin: 10px;
  }
`;

// 컬러피커
export const Picker = styled.div`
  position: relative;
  width: var(--slider-width);

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--background-black);
  padding: 15px 25px;

  .colorpicker-outer {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  &.color {
    background-color: var(--dark);
    border-radius: 10px;
    padding: 0 10px;
  }

  .colorpicker-button {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 25px;
    height: 25px;
    margin: 5px;
    border-radius: 50%;
    background: var(--dark-gradient);
    transition: all 0.3s ease-in;
    cursor: pointer;
  }

  #color-1 {
    background: linear-gradient(45deg, #12fff7, #20e3b2, #29ffc6);
    box-shadow: 0 0 10px #12fff7;
  }

  #color-2 {
    background: linear-gradient(45deg, #8a2387, #e94057, #f27121);
    box-shadow: 0 0 10px #e94057;
  }

  #color-3 {
    background: linear-gradient(45deg, #ffe259, #ffa751);
    box-shadow: 0 0 10px #ffe259;
  }

  #color-4 {
    background: linear-gradient(45deg, #b2fefa, #0ed2f7);
    box-shadow: 0 0 10px #b2fefa;
  }

  .colorpicker-button:hover {
    transform: scale(1.2);
  }
`;

export const DarkMode = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background: var(--glass-picker);
  box-shadow: 0 0 10px var(--shadow-black-dark);
  border: 0.5px solid var(--text-black-dark);
  transform: scale(0.8);
  transition: all 0.3s ease-in;
  cursor: pointer;

  path {
    fill: var(--text-black-dark);
  }

  &:hover {
    transform: scale(1);
  }
`;

// 아이템 부분
export const HeaderItem = styled.div`
  margin: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: var(--body-middle-font);

  .main-logo {
    .mainHorizontal_svg__letter {
      stroke-dasharray: 0px, 40px;
      stroke: #000;
      stroke-width: 0.5px;
      transition-duration: 0.5s;
      stroke-linejoin: round;
      stroke-linecap: round;
      transition-property: stroke-dasharray, fill;
    }

    .mainHorizontal_svg__later-dark {
      fill: var(--text-pastel-black-dark);
    }
  }

  .main-logo:hover {
    .mainHorizontal_svg__letter {
      stroke-dasharray: 40px, 0px;
      fill: #ffffff;
    }

    .mainHorizontal_svg__later-dark {
      fill: #ffffff;
    }
  }

  .cart-text {
    display: flex;
    flex-direction: row;
    p {
      margin-right: 10px;
    }
  }
`;

// 헤더 바깥
export const HeaderOuter = styled.div`
  .slider-all {
    display: flex;
  }
`;
// 헤더 부분
export const Header = styled.header<IHeader>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  color: var(--text-black-dark);
  z-index: 10;

  .headerInner {
    padding-left: ${(props) => props.isLeft + 'px'};
    position: relative;
    background-color: transparent;

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
    transition: all 0.3s ease-in;

    svg {
      fill: var(--text-black-dark);
    }
    .left,
    .right {
      position: relative;
      display: flex;
      .hamberger {
        transform: scale(0.8);
      }
    }

    .main-img {
      width: 150px;
      object-fit: cover;
      cursor: pointer;
    }
  }
  .headerInner.up {
    background-color: rgba(0, 0, 0, 0.6);
    color: var(--text-white);
    box-shadow: 0 0 20px var(--black);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    height: 70px;

    .mainHorizontal_svg__later-dark {
      fill: var(--text-white);
    }

    .hamberger {
      svg {
        fill: var(--text-white);
      }
    }
  }

  .isSmallHeader {
    display: none;
  }
  @media only screen and (max-width: 1000px) {
    .isSmallHeader {
      display: flex;
    }
    .isBigHeader {
      display: none;
    }
    .headerInner {
      padding-left: 0 !important;
    }
  }
  @media only screen and (max-width: 600px) {
    .isSSmallHeader {
      display: none;
    }
  }
`;
// 슬라이더 아이템 부분
export const SliderItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: var(--body-small-font);
  font-weight: 600;

  .slider-one-item {
    position: relative;
    padding: 20px;
    width: 100%;
    height: 50px;
    background-color: transparent;
  }

  .slider-item {
    position: relative;
    padding: 20px;
    width: 100%;
    height: 50px;
    background-color: transparent;
  }
`;

// 슬라이더 부분
export const Slider = styled.div<IHeader>`
  position: fixed;
  top: 0;
  left: 0;
  width: 150px;
  height: 100%;
  z-index: 11;
  background-color: rgba(0, 0, 0, 0.9);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  color: var(--white);
  transform: translateX(${(props) => (props.isLeft === 0 ? '-150px' : '0')});
  display: flex;
  justify-content: center;
  transition: all 0.3s ease-in;

  display: grid;
  grid-template-rows: 100px 1fr;

  .slider-picker {
    grid-row: 1/2;
  }

  .slider-outer-one-inner {
    grid-row: 2/3;
    width: 100%;
    padding: 0 0 100px 0;
    position: relative;
  }
  @media only screen and (max-width: 900px) {
    top: ${(props) => (props.isUp ? '70px' : '100px')};
  }
`;

// 슬라이더 두번째 부분
export const SliderTwo = styled.div<IHeader>`
  position: fixed;
  top: 0;
  left: 0;
  width: 150px;
  height: 100%;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.9);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  color: var(--white);
  transform: translateX(${(props) => (props.isLeft === 300 ? '150px' : '-150px')});
  transition: all 0.3s ease-in;

  .slider-inner {
    padding: 100px 0;
    position: relative;
  }
  @media only screen and (max-width: 900px) {
    top: ${(props) => (props.isUp ? '70px' : '100px')};
  }
`;
