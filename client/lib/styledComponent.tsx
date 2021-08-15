import React, { ReactElement } from 'react';

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

function styledGenerator<T extends unknown>(
  JSXType: string,
  stringArray: TemplateStringsArray,
  ...values: ((props: T) => string | number)[]
): (props: any) => ReactElement {
  return (props: any): ReactElement => {
    const randomClass = makeRandomClassName();
    const assembledString = assembleParsedArray(stringArray, values, props);
    const cssString = getCssFromScss(assembledString, '.' + randomClass);

    const styleElement = React.createElement('style', { key: 'style' }, cssString);

    // TODO : Styled Component에 이벤트를 주려면 여기에 추가하기.
    return React.createElement(
      JSXType,
      {
        onMouseEnter: props.onMouseEnter,
        onMouseLeave: props.onMouseLeave,
        onMouseMove: props.onMouseMove,
        className: randomClass,
      },
      [styleElement, props.children]
    );
  };
}

function setStyledItem<T extends unknown>(
  stringArray: TemplateStringsArray,
  ...values: ((props: T) => string | number)[]
) {
  return styledGenerator(this.type, stringArray, ...values);
}

const styled = {
  // TODO : Styled Component에 type 을 추가하려면 여기에 추가하기.
  button: setStyledItem.bind({ type: 'button' }),
  footer: setStyledItem.bind({ type: 'footer' }),
  table: setStyledItem.bind({ type: 'table' }),
  tr: setStyledItem.bind({ type: 'tr' }),
  h1: setStyledItem.bind({ type: 'h1' }),
  h2: setStyledItem.bind({ type: 'h2' }),
  h3: setStyledItem.bind({ type: 'h3' }),
  h4: setStyledItem.bind({ type: 'h4' }),
  div: setStyledItem.bind({ type: 'div' }),
  span: setStyledItem.bind({ type: 'span' }),
};

export default styled;

function assembleParsedArray(
  stringArray: TemplateStringsArray,
  values: ((props: any) => string | number)[],
  props: any
) {
  return stringArray.reduce((acc, str, i) => {
    return values[i] ? acc + str + values[i](props) : acc + str;
  }, '');
}

function preProcessingString(scssString: string) {
  // "," 로 끝난 것들을 모두 이어줌.
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
  return result;
}

// styled-component의 문자열을 css 문법으로 교체해주는 함수.
function getCssFromScss(scssString: string, prefix: string) {
  const parsedScssString = preProcessingString(scssString).split('\n');
  let braceStack = 0;
  let { result, index } = deleteNamelessPart(parsedScssString, prefix);

  let tempScssString = '';
  let tempDeclarePart = '';
  for (let i = index; i < parsedScssString.length; i += 1) {
    if (isStart(parsedScssString[i])) {
      // 만약 '.className {' 의 문자열이라면 구문 정의의 시작.
      if (braceStack === 0) {
        // 처음이라면 선언부를 기억하기.
        tempDeclarePart += getScssDeclare(parsedScssString[i]);
      }
      braceStack += 1;
      tempScssString += parsedScssString[i] + '\n';
    } else if (isEnd(parsedScssString[i])) {
      // '}' 라면 brace count 를 낮추면서 종료인지 확인하기.
      if (braceStack === 0) {
        // '{' 보다 '}' 가 먼저 나온 경우.
        throw new Error(
          '[styledComponent] : SCSS Part에서 } 를 먼저 발견했습니다. 문제되는 SCSS 문자열 : ' +
            parsedScssString[i]
        );
      } else if (braceStack === 1) {
        braceStack = 0;
        tempScssString += parsedScssString[i] + '\n';
        result += getCssString(tempScssString, prefix + ' ' + tempDeclarePart);
        tempScssString = '';
        tempDeclarePart = '';
      } else {
        braceStack -= 1;
        tempScssString += parsedScssString[i] + '\n';
      }
    } else {
      tempScssString += parsedScssString[i] + '\n';
    }
  }

  return result;
}

// GetCssFromScss 에서 재귀적으로 호출하는 함수
function getCssString(scssString: string, prefix: string) {
  // & 를 prefix로 변경한 css 구문 호출. 내부에 또 다른 block 이 있을 수 있다.
  const parsedScssString = scssString.trim().split('\n');
  let braceStack = 0;
  let tempDeclarePart = '';
  let tempScssString = '';

  if (isKeyframe(parsedScssString[0])) {
    return parseKeyframeQuery(scssString, prefix);
  } else if (isMedia(parsedScssString[0])) {
    return parseMediaQuery(scssString, prefix);
  } else {
    let result = '';
    let realPrefix = prefix;
    if (isStratWithAnd(parsedScssString[0])) {
      // 만약 & 를 만나면 prefix 를 붙여서 해결.
      realPrefix = prefix.split('&')[0].trim() + prefix.split('&')[1];
      result = realPrefix + ' {\n';
    } else {
      result = prefix + ' {\n';
    }
    for (let i = 1; i < parsedScssString.length; i += 1) {
      if (isStart(parsedScssString[i])) {
        // 만약 내부의 또다른 Block 을 만났다면 parsing 하지 않고 선언부를 저장.
        if (braceStack === 0) {
          tempDeclarePart = getScssDeclare(parsedScssString[i]);
        }
        braceStack += 1;
        tempScssString += parsedScssString[i] + '\n';
      } else if (isEnd(parsedScssString[i])) {
        if (braceStack === 1) {
          braceStack -= 1;
          tempScssString += parsedScssString[i] + '\n';

          // 현재까지 이어오던 CSS Block 을 잠시 닫고, 새로운 Block 을 정의. --- 1
          result += '}\n\n';

          // 새로 Block을 Parsing 하여 추가. 주로 Media Query를 사용하는 경우 이 로직을 탐.
          result += getCssString(tempScssString, realPrefix + ' ' + tempDeclarePart);
          tempScssString = '';
          tempDeclarePart = '';

          // 위의 1에서 닫은 CSS Block 을 열어서 마저 정의.
          result += realPrefix + ' {\n';
        } else if (braceStack > 1) {
          braceStack -= 1;
          tempScssString += parsedScssString[i] + '\n';
        } else {
          result += parsedScssString[i] + '\n';
        }
      } else {
        // 만약 "{" 를 만나지 않았다면 결과에 바로 붙이기, 아니라면 temp 에 붙이기.
        if (braceStack > 0) {
          tempScssString += parsedScssString[i] + '\n';
        } else {
          result += '  ' + parsedScssString[i] + '\n';
        }
      }
    }

    return result + '\n';
  }
}

function parseMediaQuery(scssString: string, prefix: string) {
  // Media Query 를 만난 경우의 SCSS Parsing
  let mediaPrefix = '@' + prefix.split('@')[1].trim();
  let nonMediaPrefix = prefix.split('@')[0].trim();
  const parsedScssString = scssString.trim().split('\n');

  // 물론 media query 내부에도 block 이 있을 수 있다.
  let result = mediaPrefix + ' {\n';

  let tempScssString = '  ' + nonMediaPrefix + ' {\n';

  for (let i = 1; i < parsedScssString.length - 1; i += 1) {
    tempScssString += '  ' + parsedScssString[i] + '\n';
  }

  tempScssString += '  ' + '}';
  result += getCssString(tempScssString, '  ' + nonMediaPrefix);

  result += '}\n';

  return result;
}

function parseKeyframeQuery(scssString: string, prefix: string) {
  // Keyframe을 만난 경우의 SCSS Parsing, 그냥 모두 더해서 내보내준다.
  let mediaPrefix = '@' + prefix.split('@')[1].trim();
  const parsedScssString = scssString.trim().split('\n');

  // 물론 media query 내부에도 block 이 있을 수 있다.
  let result = mediaPrefix + ' {\n';

  for (let i = 1; i < parsedScssString.length - 1; i += 1) {
    result += '  ' + parsedScssString[i] + '\n';
  }

  result += '}\n';

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

function isMedia(scssString: string) {
  return scssString.indexOf('@') >= 0;
}

function isStratWithAnd(scssString: string) {
  // 만약 선언부에 & 가 있다면?
  if (isStart(scssString)) {
    if (getScssDeclare(scssString).indexOf('&') >= 0) {
      return true;
    }
  }
  return false;
}

function isKeyframe(scssString: string) {
  if (isMedia(scssString)) {
    if (scssString.includes('@keyframes')) {
      return true;
    }
  }
  return false;
}
