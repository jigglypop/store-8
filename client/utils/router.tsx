import { useContext, createContext, useState, useEffect } from 'react';

export const RouterContext = createContext<any | undefined>(undefined);

export function Router({ children } : any) {
  const [pathname, setPathName] = useState(window.location.pathname);
  useEffect(() => {
    window.addEventListener('popstate', () => {
      setPathName(window.location.pathname)
    })
  },[])
  return (
    <RouterContext.Provider value={{ pathname, setPathName }}>
      {children}
    </RouterContext.Provider>)
}
export function Route({ path, component: Component }: any) {
  const { pathname, setPathName } = useContext(RouterContext);
  return path.match(pathname)
    ? <Component />
    : null;
}

export function Link({ children, to }: any) {
  const { pathname, setPathName } = useContext(RouterContext);
  const onClick = () => {
    console.log("클릭")
    setPathName(to)
    history.pushState({path: to}, to, to)
  }
  return (
    <div onClick={() => onClick()}>
      {children}
    </div>)
}
