import cache from './cache';
import { $ } from './jQurey';
import { store } from '../store';
import { changeModeAll } from '@client/store/mode/mode';
import { checkNameString } from './inputTypeChecker';

// 다크모드 확인해보고 있으면 boolean 값 변환
export const isDark = () => {
  const flag = cache.get('dark');
  if (!flag) {
    return false;
  } else {
    if (flag === 'false') {
      return false;
    } else {
      return true;
    }
  }
};
const colorPickerSelector = () => {
  const color = cache.get('color');
  let text = '#5DBEBB';
  let prime = '#5DBEBB';
  let primeHover = '#219A95';
  let tag = '#219A95';
  let sub = '#3FF2C2';
  let subHover = '#49DEB6';
  let headerColor = 'linear-gradient(45deg, #5DBEBB, #3FF2C2, #219A95)';
  let header = '#1d1d1d';
  let glass = 'rgba(93, 190, 187, 0.8)';
  let textShadow = '0 0 20px #219A95';

  if (color) {
    if (color === '1') {
      /* Mint 색 Color Picker */
      text = '#5DBEBB';
      prime = '#5DBEBB';
      primeHover = '#219A95';
      tag = '#219A95';
      sub = '#3FF2C2';
      subHover = '#49DEB6';
      headerColor = 'linear-gradient(45deg, #5DBEBB, #3FF2C2, #219A95)';
      header = '#1d1d1d';
      glass = 'rgba(93, 190, 187, 0.8)';
      textShadow = '0 0 20px #219A95';
    } else if (color === '2') {
      /* 빨간색 Color Picker */
      text = '#E94057';
      prime = '#E94057';
      primeHover = '#B53143';
      tag = '#B53143';
      sub = '#F27121';
      subHover = '#B55519';
      headerColor = 'linear-gradient(45deg, #E94057, #F27121, #B53143)';
      header = 'white';
      glass = 'rgba(233, 64, 87, 0.8)';
      textShadow = '0 0 20px #B53143';
    } else if (color === '3') {
      /* 노란색 Color Picker */
      text = '#FFA751';
      prime = '#FFE259';
      primeHover = '#E8CF51';
      tag = '#FFA751';
      sub = '#FFA751';
      subHover = '#E8994A';
      headerColor = 'linear-gradient(45deg, #FFE259, #FFA751, #E8CF51)';
      header = '#1d1d1d';
      glass = 'rgba(255, 226, 89, 0.8)';
      textShadow = '0 0 20px #E8994A';
    } else if (color === '4') {
      /* 초록색 Color Picker */
      text = '#2EB3DB';
      prime = '#B6FF8B';
      primeHover = '#A6E880';
      tag = '#2EB3DB';
      sub = '#2EB3DB';
      subHover = '#2694B5';
      headerColor = 'linear-gradient(45deg, #B6FF8B, #2EB3DB, #A6E880)';
      header = '#1d1d1d';
      glass = 'rgba(182, 255, 139, 0.8)';
      textShadow = '0 0 20px #A6E880';
    }
  }
  return {
    text,
    prime,
    primeHover,
    sub,
    subHover,
    headerColor,
    header,
    tag,
    glass,
    textShadow,
  };
};
// 낮모드
export const SunAttr = () => {
  // 컬러 피커 셀렉터에서 가져온 값 세팅
  const colorPicker = colorPickerSelector();
  const { text, prime, primeHover, sub, subHover, headerColor, header, tag, glass, textShadow } =
    colorPicker;
  return {
    '--text-pastel-black-dark': '#353535',
    '--text-pastel-black-nonwhite-dark': '#353535',
    '--text-pastel-black-reverse-dark': '#E1E1E1',
    '--text-black-dark': '#000000',
    '--text-lightgray': '#BDBDBD',
    '--shadow-black-dark': 'rgba(0,0,0, 0.4)',
    '--text-white-dark': 'white',
    '--text-gray-dark': '#828282',
    '--text-placeholder-dark': '#D1D1D1',
    '--text-blue-dark': '#293D7C',
    '--line-black-dark': 'black',
    '--background-black-dark': 'black',
    '--background-search-black-dark': '#353535',
    '--background-white-dark': 'white',
    '--background-white-darken-dark': '#E7E7E7',
    '--background-section-dark': ' #F5F5F7',
    '--background-option-select': '#F5F5F7',
    '--background-button-select': '#F5F5F7',
    '--background-select-section-dark': 'white',
    '--line-gray-dark': '#BDBDBD',
    '--line-dark-gray-dark': '#4F4F4F',
    '--body-background-dark': 'white',
    '--header-background-dark': 'white',
    '--footer-background-dark': '#E7E7E7',
    '--card-dark': '#FFFFFF',
    '--tag-picker': tag,
    '--text-picker': text,
    '--text-dark-picker': '#000000',
    '--header-gradient-picker': headerColor,
    '--glass-picker': glass,
    '--prime-picker': prime,
    '--prime-hover-picker': primeHover,
    '--sub-picker': sub,
    '--sub-hover-picker': subHover,
    '--shadow-picker': 'none',
  };
};
// 밤모드
export const MoonAttr = () => {
  const colorPicker = colorPickerSelector();
  const { text, prime, primeHover, sub, subHover, headerColor, header, tag, glass, textShadow } =
    colorPicker;
  return {
    '--text-pastel-black-dark': 'white',
    '--text-pastel-black-nonwhite-dark': '#424242',
    '--text-pastel-black-reverse-dark': '#353535',
    '--text-black-dark': 'white',
    '--text-lightgray': '#828282',
    '--shadow-black-dark': 'rgba(255,255,255, 0.4)',
    '--text-white-dark': 'black',
    '--text-gray-dark': 'white',
    '--text-placeholder-dark': '#353535',
    '--line-black-dark': 'white',
    '--text-blue-dark': '#0F9AFF',
    '--background-black-dark': 'white',
    '--background-search-black-dark': '#484848',
    '--background-white-dark': 'black',
    '--background-white-darken-dark': '#777777',
    '--background-section-dark': ' #4F4F4F',
    '--background-option-select': '#1d1d1d',
    '--background-button-select': 'black',
    '--background-select-section-dark': '#333333',
    '--line-gray-dark': 'white',
    '--line-dark-gray-dark': 'white',
    '--body-background-dark': '#1d1d1d',
    '--header-background-dark': '#212121',
    '--footer-background-dark': '#212121',
    '--card-dark': '#424242',
    '--tag-picker': tag,
    '--text-picker': text,
    '--text-dark-picker': text,
    '--header-gradient-picker': headerColor,
    '--glass-picker': glass,
    '--prime-picker': prime,
    '--prime-hover-picker': primeHover,
    '--sub-picker': sub,
    '--sub-hover-picker': subHover,
    '--shadow-picker': textShadow,
  };
};
// val값 한번에 세팅
export const setVAll = (Attr: any) => {
  const body = document.querySelector('body');
  if (body) {
    for (const param of Object.keys(Attr)) {
      $(body).val(param, Attr[param]);
    }
  }
};

// 다크모드인지 확인해보고 다크모드이면 세팅
// 밤모드로
export const changeMoon = () => {
  cache.set('dark', 'false');
  const moonAttr = MoonAttr();
  setVAll(moonAttr);
  store.dispatch(
    changeModeAll({
      mode: false,
      vals: moonAttr,
    })
  );
};
// 낮모드로
export const changeSun = () => {
  cache.set('dark', 'true');
  const sunAttr = SunAttr();
  setVAll(sunAttr);
  store.dispatch(
    changeModeAll({
      mode: true,
      vals: sunAttr,
    })
  );
};
// 초기셋용
export const setDarkMode = () => {
  const dark = cache.get('dark');
  // 여기만 바꾸면 됨
  if (dark === 'false' || dark === null) {
    changeMoon();
  } else {
    changeSun();
  }
};
// 토글용
export const toggleDarkMode = () => {
  const dark = cache.get('dark');
  if (dark === 'false') {
    changeSun();
  } else {
    changeMoon();
  }
};
