import { createElement } from 'react';
const parseStyles = (styles: string) =>
  styles
    .split(';')
    .filter((style: string) => style.split(':')[0] && style.split(':')[1])
    .map((style: string) => [
      style
        .split(':')[0]
        .trim()
        .replace(/-./g, (c: any) => c.substr(1).toUpperCase()),
      style.split(':')[1].trim(),
    ])
    .reduce(
      (styleObj: any, style: any) => ({
        ...styleObj,
        [style[0]]: style[1],
      }),
      {}
    );

const styleItem = function (strings: any, ...values: any) {
  let that = this;
  return function (props: any) {
    let _that = that;
    function defaultTemplateLiteralFunction(strings: any, ...values: any) {
      return strings.reduce((acc: any, v: any, i: any) => {
        acc += v;
        if (!values[i]) {
          acc += '';
          return acc;
        }

        acc += typeof values[i] === 'function' ? values[i](props) : values[i];
        return acc;
      }, '');
    }

    const tempStyles = defaultTemplateLiteralFunction(strings, ...values);
    const styles = tempStyles.trim().replace(/\n/gi, '');
    if (!styles) return null;
    let parsedStyles = parseStyles(styles);
    return createElement(
      _that.name,
      {
        ...props,
        style: parsedStyles,
      },
      props.children
    );
  };
};

export const styled = {
  div: styleItem.bind({ name: 'div' }),
  a: styleItem.bind({ name: 'a' }),
  h1: styleItem.bind({ name: 'h1' }),
  h2: styleItem.bind({ name: 'h2' }),
  h3: styleItem.bind({ name: 'h3' }),
  h4: styleItem.bind({ name: 'h4' }),
  h5: styleItem.bind({ name: 'h5' }),
  h6: styleItem.bind({ name: 'h6' }),
  section: styleItem.bind({ name: 'section' }),
  header: styleItem.bind({ name: 'header' }),
  button: styleItem.bind({ name: 'button' }),
};
