export const debounce = (fn: Function, wait: number) => {
  let timer: NodeJS.Timeout;
  function debounced(e: any) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn(e);
    }, wait);
  }
  return debounced;
};

export const throttle = (fn: Function, time: number) => {
  let timer: NodeJS.Timeout | null;
  return (e: any) => {
    if (!timer) {
      timer = setTimeout(function () {
        timer = null;
        fn(e);
      }, time);
    }
  };
};
