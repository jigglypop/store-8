import { ReactElement } from 'react';

const MAX_CLASS_NAME_LENGTH: number = 16;
const MIN_CLASS_NAME_LENGTH: number = 8;

function makeRandomClassName() {
  const stringBank = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = 'sc-';
  const classLength =
    Math.floor(Math.random() * (MAX_CLASS_NAME_LENGTH - MIN_CLASS_NAME_LENGTH)) +
    MIN_CLASS_NAME_LENGTH;

  for (let i = 0; i < classLength; i += 1) {
    result += stringBank.charAt(Math.floor(Math.random() * stringBank.length));
  }

  return result;
}

const styled = {
  div: (stringArray: TemplateStringsArray, ...values: ((props: any) => string)[] | string[]) => {
    return (props: any): ReactElement => {
      const randomClass = makeRandomClassName();
      // const assembledString = assembleParsedArray(stringArray, values, props);
      const cssString = generateCssString(stringArray, '.' + randomClass);

      return (
        <div className={randomClass}>
          <style>{cssString}</style>
          {props.children}
        </div>
      );
    };
  },
};

export default styled;

/*
function ThemeProvider({ theme }) {
  // 모든 Children 요소들에게 map을 통해 props로 theme을 강제로 내려준다.
  // !! 문제 !! 특정 React Element가 theme 라는 props를 쓴다면 CSS가 덮어 씌워질 수 있다.
}
*/

/*
function assembleParsedArray(
  stringArray: TemplateStringsArray,
  values: ((props: any) => string)[] | string[],
  props: any
) {
  return stringArray.reduce((acc, str, i) => {
    return values[i] ? acc + str + values[i](props) : acc + str;
  }, '');
}
*/

function generateCssString(stringArray: TemplateStringsArray, randomClass: string) {
  // Template String과 무작위 Class 이름을 통해서 CSS 문자열을 만들어줌.
  const parsedCSS = stringArray[0].split('\n');

  let cssString = '' + randomClass + ' { \n';
  let isFirst = true;
  let isStarted = true;

  for (let i = 0; i < parsedCSS.length; i++) {
    if (parsedCSS[i].length === 0) continue;
    if (isFirst) {
      if (isStarted) {
        // 만약 { 를 만나서 붙이는 중이었다면...
        if (parsedCSS[i].indexOf('{') >= 0) {
          cssString += '}' + '\n';
          cssString += randomClass + ' ' + parsedCSS[i] + '\n';
          isStarted = true;
          isFirst = false;
        } else {
          cssString += parsedCSS[i] + '\n';
        }
      }
    } else {
      if (isStarted) {
        // 만약 { 를 만나서 붙이는 중이었다면...
        if (parsedCSS[i].indexOf('}') >= 0) {
          cssString += parsedCSS[i] + '\n';
          isStarted = false;
        } else {
          cssString += parsedCSS[i] + '\n';
        }
      } else {
        // 만약 붙이는 중이 아니었다면
        if (parsedCSS[i].indexOf('{') >= 0) {
          cssString += randomClass + ' ' + parsedCSS[i] + '\n';
          isStarted = true;
        } else {
          throw Error('STYLED ERROR!');
        }
      }
    }
  }
  return cssString;
}
