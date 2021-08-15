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
  generateCss: () => {},
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
  tr: (stringArray: TemplateStringsArray, ...values: ((props: any) => string)[] | string[]) => {
    return (props: any): ReactElement => {
      const randomClass = makeRandomClassName();
      // const assembledString = assembleParsedArray(stringArray, values, props);
      const cssString = generateCssString(stringArray, '.' + randomClass);

      return (
        <tr className={randomClass}>
          <style>{cssString}</style>
          {props.children}
        </tr>
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

function assembleParsedArray(stringArray: TemplateStringsArray, values: string[], props: any) {
  return stringArray.reduce((acc, str, i) => {
    return values[i] ? acc + str + values[i] : acc + str;
  }, '');
}

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

function tempGenerator(stringArray: string) {
  const randomClass = makeRandomClassName();
  return getCssString(preProcessingString(stringArray), '.' + randomClass);
}

function preProcessingString(scssString: string) {
  const parsedScssString = scssString.split('\n');
  let result = '';
  for (let i = 0; i < parsedScssString.length; i += 1) {
    let temp = parsedScssString[i].trim();
    if (temp.endsWith(',')) {
      result += temp + ' ';
    } else {
      result += temp + '\n';
    }
  }
  console.log(result);
  return result;
}

// styled-component의 문자열을 css 문법으로 교체해주는 함수.
function getCssString(scssString: string, prefix: string) {
  let braceStack = 0;
  const parsedScssString = scssString.split('\n');
  let { result, index } = deleteNamelessPart(parsedScssString, prefix);

  let tempScssString = '';
  let tempDeclarePart = '';
  for (let i = index; i < parsedScssString.length; i += 1) {
    if (isStart(parsedScssString[i])) {
      if (braceStack === 0) {
        braceStack += 1;
        tempDeclarePart = getScssDeclare(parsedScssString[i]);
      }
      tempScssString = parsedScssString[i];
    }
  }

  return result;
}

function deleteNamelessPart(scssStrings: string[], prefix: string) {
  let result = prefix + ' {';
  let i = 0;
  for (i = 0; i < scssStrings.length; i += 1) {
    if (isStart(scssStrings[i])) {
      return { result: result + '}\n', index: i - 1 };
    } else if (isEnd(scssStrings[i])) {
      throw new Error(
        '[styledComponent] : Nameless Part에서 } 를 발견했습니다. 문제되는 SCSS 문자열 : ' +
          scssStrings[i]
      );
    } else {
      result += '  ' + scssStrings[i] + '\n';
    }
  }
  return { result: result + '}\n', index: i };
}

function isStart(scssString: string) {
  return scssString.indexOf('{') >= 0;
}

function isEnd(scssString: string) {
  return scssString.indexOf('}') >= 0;
}

function getScssDeclare(scssString: string) {
  // CSS 선언부를 공백없이 가져오기
  return scssString.split('{')[0].trim();
}

function isStratWithAnd(scssString: string) {
  // 만약 선언부에 & 가 있다면?
  if (isStart(scssString)) {
    if (getScssDeclare(scssString).charAt(0) === '&') {
      return true;
    }
  }
  return false;
}

export { tempGenerator, getCssString };
