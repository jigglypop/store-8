import { useState, useEffect } from 'react';

const usePortal = () => {
  const [container] = useState(document.createElement('div'));

  useEffect(() => {
    document.body.appendChild(container);

    return () => {
      document.body.removeChild(container);
    };
  }, [container]);

  return container;
};

export default usePortal;
