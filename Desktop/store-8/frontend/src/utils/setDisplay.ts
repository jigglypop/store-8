import cache from "./cache";
import { $ } from "./jQurey";

// 다크모드 확인해보고 있으면 boolean 값 변환
export const isDark = () => {
  const flag = cache.get("dark");
  if (!flag) {
    return true;
  } else {
    if (flag === "false") {
      return false;
    } else {
      return true;
    }
  }
};
const colorPickerSelector = () => {
  const color = cache.get("color");
  let text = "#12fff7";
  let headerColor = "linear-gradient(45deg, #0cebeb, #20e3b2, #219A95)";
  let tag = "#219A95";
  let header = "#1d1d1d";
  if (color) {
    if (color === "1") {
      text = "#12fff7";
      headerColor = "linear-gradient(45deg, #0cebeb, #20e3b2, #219A95)";
      header = "#1d1d1d";
      tag = "#219A95";
    } else if (color === "2") {
      text = "#e94057";
      headerColor = "linear-gradient(45deg, #8a2387, #e94057, #f27121)";
      header = "white";
      tag = "#f27121";
    } else if (color === "3") {
      text = "#ffe259";
      headerColor = "linear-gradient(45deg, #ffe259, #ffa751)";
      header = "#1d1d1d";
      tag = "#ffa751";
    } else if (color === "4") {
      text = "#b2fefa";
      headerColor = "linear-gradient(45deg, #b2fefa, #0ed2f7)";
      header = "#1d1d1d";
      tag = "#0ed2f7";
    }
  }
  return {
    text,
    headerColor,
    header,
    tag,
  };
};

export const SunAttr = () => {
  const colorPicker = colorPickerSelector();
  const tag = colorPicker.tag;
  const headerColor = colorPicker.headerColor;
  const text = colorPicker.text;
  return {
    "--back": "#1d1d1d",
    "--text": "#1d1d1d",
    "--app": "white",
    "--body-background": "#d7d7d7",
    "--header-color": "#222222",
    "--base-shadow": "none",
    "--dark-gradient": "linear-gradient(45deg, #0cebeb, #20e3b2, #219A95)",
    "--thumb-gradient": headerColor,
    "--grayA": "white",
    "--grayB": "#f6f6f6",
    "--grayD": "#888888",
    "--grayE": "#484848",
    "--border": "none",
    "--header-app": "white",
    "--darkmode": headerColor,
    "--tag": tag,
    "--thumb": text,
  };
};

export const MoonAttr = () => {
  const colorPicker = colorPickerSelector();
  const tag = colorPicker.tag;
  const headerColor = colorPicker.headerColor;
  const text = colorPicker.text;
  const header = colorPicker.header;
  return {
    "--back": "white",
    "--text": text,
    "--app": "#1d1d1d",
    "--body-background": "#222222",
    "--thumb-gradient": headerColor,
    "--header-color": headerColor,
    "--base-shadow": text,
    "--dark-gradient": headerColor,
    "--grayA": "#484848",
    "--grayB": "#888888",
    "--grayD": "#f6f6f6",
    "--grayE": "white",
    "--border": text,
    "--header-app": header,
    "--tag": tag,
    "--darkmode": "linear-gradient(45deg, #434343, #000000)",
    "--thumb": text,
  };
};

export const setVAll = (Attr: any) => {
  const body = document.querySelector("body");
  if (body) {
    for (const param of Object.keys(Attr)) {
      $(body).val(param, Attr[param]);
    }
  }
};

// 다크모드인지 확인해보고 다크모드이면 세팅
export const setDarkMode = () => {
  const dark = cache.get("dark");
  if (dark === "false") {
    setVAll(SunAttr());
  } else {
    setVAll(MoonAttr());
  }
};
