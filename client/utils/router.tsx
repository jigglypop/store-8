import { LoadableComponent } from '@loadable/component';
import { routes } from '@middle/router/routes';
import { IRouterItem } from '@middle/type/router/router';
import {
  useContext,
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';
import { Helmet } from 'react-helmet-async';

interface ICurrentPath {
  pathname: string;
  setPathName: Dispatch<SetStateAction<string>>;
}

interface IRouter {
  children: JSX.Element | string ;
}

interface ILink extends IRouter {
  to: string;
  className?: string;
}

interface ILinkDummy {
  to: string;
  name: string;
}

interface IQuery {
  [key: string]: string
}

export interface IPageQuery<TQuery> {
  params: number | null;
  query: TQuery | null;
}

export interface IPage {
  params: number | null;
}

interface IRoute<TQuery> {
  component: LoadableComponent<IPageQuery<TQuery> | IPage>;
  path: string;
  title: string;
}

export const RouterContext = createContext<ICurrentPath>({} as ICurrentPath);

export function makePathAndQuery(pathname: string) {
  const paths = pathname.split(/\/|\?/g)
  return paths
}

export function Router({ children }: IRouter) {
  const [pathname, setPathName] = useState(window.location.pathname + window.location.search);
  useEffect(() => {
    window.addEventListener('popstate', () => {
      setPathName(window.location.pathname + window.location.search)
    })
  },[])
  return (
    <RouterContext.Provider value={{ pathname, setPathName }}>
      {children}
    </RouterContext.Provider>)
}
export function Route({ path, component: Component, title }: IRoute<IQuery>) {
  const { pathname } = useContext(RouterContext);
  const paths = makePathAndQuery(pathname)
  let RouteResult = null
  const currentPath = path.split(/\/|\?/g)
  if (currentPath[1] === paths[1]) {
    let params = null
    let query: IQuery = {}
    if (paths[2]) {
      params = Number(paths[2])
    }
    if (paths[3]) {
      query = {}
      const queryArray = paths[3].replace("?", "").split("&").map((str: string) => str.split("="))
      for (let [key, value] of queryArray) {
        query[key] = value
      }
    }
    RouteResult = <>
      <Helmet>
        <title>배민 문방구 | {title}</title>
      </Helmet>
      <Component params={params} query={query} />
    </>
  }
  return RouteResult;
}

export function Link({ children, to, className }: ILink) {
  const { setPathName } = useContext(RouterContext);
  const onClick = () => {
    setPathName(to);
    history.pushState({ path: to }, to, to);
  };
  return (
    <div className={'router-link ' + className} onClick={() => onClick()}>
      {children}
    </div>
  );
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
      {routes.map((item: IRouterItem, index: number) => 
        <DummyLink to={`${item.path}`} name={`${item.name}`} key={index} />
      )}
    </div>)
}

export function HistoryPush(name: string) {
  document.getElementById(`router-go-${name}`)?.click()
  return (<div></div>)
}
