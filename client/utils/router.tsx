import {
  useContext,
  createContext,
  useState,
  useEffect,
  ReactElement,
  Dispatch,
  SetStateAction
} from 'react';

interface ICurrentPath {
  pathname: string;
  setPathName: Dispatch<SetStateAction<string>>;
}

interface IRouter {
  children: ReactElement | ReactElement[] | string;
}

interface ILink extends IRouter{
  to: string;
}

interface ILinkDummy {
  to: string;
  name: string;
}

interface IRoute {
  component:  () => JSX.Element;
  path: string;
}

export const RouterContext = createContext<ICurrentPath>({} as ICurrentPath);

export function Router({ children } : IRouter ) {
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
export function Route({ path, component: Component }: IRoute) {
  const { pathname } = useContext(RouterContext);
  return path === pathname
    ? <Component />
    : null;
}

export function Link({ children, to }: ILink) {
  const { setPathName } = useContext(RouterContext);
  const onClick = () => {
    setPathName(to)
    history.pushState({path: to}, to, to)
  }
  return (
    <div className="router-link" onClick={() => onClick()}>
      {children}
    </div>)
}

export function DummyLink({ to, name }: ILinkDummy) {
  const { setPathName } = useContext(RouterContext);
  const onClick = () => {
    setPathName(to)
    history.pushState({path: to}, to, to)
  }
  return (
    <div className={`router-go-${name}`} id={`router-go-${name}`} onClick={() => onClick()}>
    </div>)
}

// 더미셋. 이 이름으로 HistoryPush에 넣어주면 라우팅됩니다. ex) HistoryPush('main') -> 메인으로
export function RouterSet() {
  return (
    <div>
      <DummyLink to="/" name="main" />
      <DummyLink to="/auth" name="auth" />
      <DummyLink to="/login" name="login" />
      <DummyLink to="/register" name="register" />
      <DummyLink to="/github" name="github" />
    </div>)
}

export function HistoryPush(name: string) {
  document.getElementById(`router-go-${name}`)?.click()
  return (<div></div>)
}
