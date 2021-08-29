import { useState, useEffect } from 'react';

import { throttle } from '@client/utils/performance';

interface IArgs {
  minWidth?: number;
  maxWidth?: number;
}

export const useResponse = ({ minWidth, maxWidth }: IArgs) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowSize = throttle(() => {
    setWindowWidth(window.innerWidth);
  }, 100);

  useEffect(() => {
    window.addEventListener('resize', handleWindowSize);
    return () => window.removeEventListener('resize', handleWindowSize);
  }, []);

  if (minWidth && maxWidth) return windowWidth > minWidth && windowWidth <= maxWidth;
  else if (maxWidth) return windowWidth <= maxWidth;
  else if (minWidth) return windowWidth > minWidth;
  return false;
};
