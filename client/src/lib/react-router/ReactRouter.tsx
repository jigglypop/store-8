import React, {
  ReactElement,
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from 'react';

interface ICurrentPath {
  currentPath: string;
  setCurrentPath: React.Dispatch<React.SetStateAction<string>>;
}

const HistoryContext = createContext<ICurrentPath>({} as ICurrentPath);

interface IRouter {
  children: ReactElement | ReactElement[];
}

export function Router({ children }: IRouter): ReactElement {
  const DEFAULT_PATH = window.location.pathname;
  const DEFAULT_QUERY = window.location.search;
  const [currentPath, setCurrentPath] = useState<string>('');

  const handlePopstate = (e: PopStateEvent) => {
    e.state ? setCurrentPath(e.state?.page.to) : setCurrentPath(DEFAULT_PATH);
  };

  useEffect(() => {
    setCurrentPath(DEFAULT_PATH + DEFAULT_QUERY);
    window.addEventListener('popstate', handlePopstate);
  }, []);

  return (
    <HistoryContext.Provider value={{ currentPath, setCurrentPath }}>
      {children}
    </HistoryContext.Provider>
  );
}

interface ILink {
  children: ReactElement | ReactElement[] | string;
  to: string;
}

export function Link({ to, children }: ILink): ReactElement {
  const { currentPath, setCurrentPath } = useContext<ICurrentPath>(HistoryContext);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentPath === to) return;
    setCurrentPath(to);
    window.history.pushState({ page: { to } }, to, to);
  };
  return (
    <a href="" onClick={handleClick}>
      {children}
    </a>
  );
}

interface IRoute {
  children: ReactElement | ReactElement[];
  exact?: boolean;
  path: string;
}

export function Route({ children, exact, path }: IRoute): ReactElement | null {
  const { currentPath } = useContext<ICurrentPath>(HistoryContext);

  if (exact && currentPath.split('?')[0] !== path) return null;

  if (currentPath?.includes(path)) return <>{children}</>;
  else return null;
}
