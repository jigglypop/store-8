import { isOuter, isTag } from "./regex";

const setCSSProperty = ($element: HTMLElement, attr: any, value: string) => {
  if (
    attr === "length" ||
    attr === "parentRule" ||
    attr === "item" ||
    attr === "setProperty" ||
    attr === "removeProperty" ||
    attr === "getPropertyPriority" ||
    attr === "getPropertyValue"
  ) {
    return;
  }
  $element.style[attr] = value;
};

export const $ = (
  element: Document | HTMLElement | string | (Window & typeof globalThis)
) => {
  let $El: HTMLElement | null = null;
  if (typeof element === "string") {
    if (isOuter(element) && isOuter(element).length !== 0) {
      const tag = isTag(element);
      let temp = "";
      if (tag && tag[0]) {
        temp = tag[0].replace(/<|>/g, "");
      }
      $El = document.createElement(`${temp}`);
    } else {
      $El = document.querySelector(element);
    }
  } else if (element instanceof HTMLElement) {
    $El = element;
  }

  const Arguments = {
    append($target: HTMLElement) {
      if ($El instanceof HTMLElement) {
        $target.appendChild($El);
      }
    },
    get(): HTMLElement {
      if ($El) {
        return $El;
      } else {
        $El = document.createElement("div");
        return $El;
      }
    },
    // css valuable 가져오기, 세팅하기(value를 넣으면 세팅함)
    val(key: string, value?: string): string | null | undefined {
      if (!value) {
        if (typeof element === "string") {
          const $El = this.get();
          if ($El instanceof HTMLElement) {
            const result = getComputedStyle($El).getPropertyValue(key);
            if (!result) {
              return null;
            }
            return result;
          } else {
            return null;
          }
        } else if (element instanceof HTMLElement) {
          const result = getComputedStyle(element).getPropertyValue(key);
          if (!result) {
            return null;
          }
          return result;
        }
        return null;
      } else {
        if (typeof element === "string") {
          const $El = this.get();
          if ($El instanceof HTMLElement) {
            $El.style.setProperty(key, value);
          } else {
            return null;
          }
        } else if (element instanceof HTMLElement) {
          element.style.setProperty(key, value);
        } else {
          return null;
        }
      }
    },
    on(type: string, cb: EventListener) {
      const $element = this.get();
      if ($element === null) {
        return;
      }
      $element.addEventListener(type, cb);
      return {
        ...Arguments,
      };
    },
    ready(cb: () => void) {
      if (element === document) {
        cb();
      }
    },
    css(attr: keyof CSSStyleDeclaration, value: string) {
      const $element = this.get();
      if ($element === null) {
        return;
      }
      setCSSProperty($element, attr, value);
      return {
        ...Arguments,
      };
    },
    addClass(className: string) {
      $El?.classList.add(className);
      return {
        ...Arguments,
      };
    },
    toggleClass(className: string) {
      $El?.classList.toggle(className);
      return {
        ...Arguments,
      };
    },
    removeClass(className: string) {
      $El?.classList.remove(className);
      return {
        ...Arguments,
      };
    },
  };

  return {
    ...Arguments,
  };
};
// 쿼리 셀렉터 여러개
export const $$ = (element: string) => {
  return {
    get(): NodeListOf<HTMLElement> {
      return document.querySelectorAll<HTMLElement>(element);
    },
    on(type: string, cb: EventListener) {
      const $elements = this.get();
      $elements.forEach(($el: { addEventListener: (arg0: string, arg1: EventListener) => any; }) => $el.addEventListener(type, cb));
    },
    css(attr: keyof CSSStyleDeclaration, value: string) {
      const $elements = this.get();
      $elements.forEach(($el: HTMLElement) => setCSSProperty($el, attr, value));
    },
  };
};

// 픽셀을 넘버로
export const getPixelNumber = (value: string) => {
  return Number(value.replace("px", ""));
};
