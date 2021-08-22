import cache from './cache';
import { $ } from './jQurey';
import { store } from '../store';
import { changeModeAll } from '@client/store/mode/mode';

// 다크모드 확인해보고 있으면 boolean 값 변환
export const isDark = () => {
  const flag = cache.get('dark');
  if (!flag) {
    return true;
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
  let text = '#12fff7';
  let headerColor = 'linear-gradient(45deg, #0cebeb, #20e3b2, #219A95)';
  let tag = '#219A95';
  let header = '#1d1d1d';
  let glass = 'rgba(18, 255, 247, 0.8)';
  if (color) {
    if (color === '1') {
      text = '#12fff7';
      headerColor = 'linear-gradient(45deg, #0cebeb, #20e3b2, #219A95)';
      header = '#1d1d1d';
      tag = '#219A95';
      glass = 'rgba(18, 255, 247, 0.8)';
    } else if (color === '2') {
      text = '#e94057';
      headerColor = 'linear-gradient(45deg, #8a2387, #e94057, #f27121)';
      header = 'white';
      tag = '#f27121';
      glass = 'rgba(233, 64, 87, 0.8)';
    } else if (color === '3') {
      text = '#ffe259';
      headerColor = 'linear-gradient(45deg, #ffe259, #ffa751)';
      header = '#1d1d1d';
      tag = '#ffa751';
      glass = 'rgba(255, 226, 89, 0.8)';
    } else if (color === '4') {
      text = '#b2fefa';
      headerColor = 'linear-gradient(45deg, #b2fefa, #0ed2f7)';
      header = '#1d1d1d';
      tag = '#0ed2f7';
      glass = 'rgba(178, 254, 250, 0.8)';
    }
  }
  return {
    text,
    headerColor,
    header,
    tag,
    glass,
  };
};
// 낮모드
export const SunAttr = () => {
  // 컬러 피커 셀렉터에서 가져온 값 세팅
  const colorPicker = colorPickerSelector();
  const tag = colorPicker.tag;
  const headerColor = colorPicker.headerColor;
  const text = colorPicker.text;
  const glass = colorPicker.glass;
  return {
    '--text-black-dark': '#000000',
    '--text-white-dark': 'white',
    '--text-pastel-black-dark': '#353535',
    '--text-gray-dark': '#828282',
    '--background-black-dark': 'black',
    '--background-white-dark': 'white',
    '--background-section-dark': ' #F5F5F7',
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
  };
};
// 밤모드
export const MoonAttr = () => {
  const colorPicker = colorPickerSelector();
  const tag = colorPicker.tag;
  const headerColor = colorPicker.headerColor;
  const text = colorPicker.text;
  const glass = colorPicker.glass;
  return {
    '--text-black-dark': 'white',
    '--text-white-dark': 'black',
    '--text-pastel-black-dark': 'white',
    '--text-gray-dark': 'white',
    '--background-black-dark': 'white',
    '--background-white-dark': 'black',
    '--background-section-dark': ' #4F4F4F',
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
  if (dark === 'false') {
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
