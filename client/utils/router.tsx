import { useRouter } from '@client/hooks/router/router';
import { IRouterReq } from '@client/store/router/router';
import { LoadableComponent } from '@loadable/component';
import { routes } from '@middle/router/routes';
import { IRouterItem } from '@middle/type/router/router';
import { useContext, createContext, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { getRouterObj } from './pathname';

interface ICurrentPath {
  router: IRouterReq;
}

interface IRouter {
  children?: JSX.Element | string;
}

interface ILink extends IRouter {
  to: string;
  className?: string;
  id?: string;
}

interface ILinkDummy {
  to: string;
  name: string;
}

interface IQuery {
  [key: string]: string;
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
  const paths = pathname.split(/\/|\?/g);
  return paths;
}

export function setPathAndQuery(path: string) {
  const paths = path
    .split(/\/|\?/g)
    .filter((str: string, index: number) => str !== '' || index !== 0);

  return paths;
}

export function Router({ children }: IRouter) {
  const { router, onChangeRouterAll } = useRouter();
  useEffect(() => {
    const RouterObj: IRouterReq = getRouterObj(window.location.pathname + window.location.search);
    onChangeRouterAll(RouterObj);

    window.addEventListener('popstate', () => {
      const RouterObj: IRouterReq = getRouterObj(window.location.pathname + window.location.search);
      onChangeRouterAll(RouterObj);
    });
  }, []);
  return <RouterContext.Provider value={{ router }}>{children}</RouterContext.Provider>;
}
export function Route({ path, component: Component, title }: IRoute<IQuery>) {
  const { router } = useContext(RouterContext);
  const { pathname, params } = router;
  let RouteResult = null;
  const currentPath = path.split(/\/|\?/g);
  if (currentPath[1] === pathname) {
    RouteResult = (
      <>
        <Helmet>
          <title>배민 문방구 | {title}</title>
        </Helmet>
        <Component params={Number(params)} query={{}} />
      </>
    );
  }
  return RouteResult;
}

export function Link({ children, to, className, id }: ILink) {
  const { onChangeRouterAll } = useRouter();
  const onClick = () => {
    const RouterObj: IRouterReq = getRouterObj(to);
    onChangeRouterAll(RouterObj);
    history.pushState({ path: to }, to, to);
  };
  return (
    <div
      className={'router-link ' + className === undefined ? '' : className}
      id={id}
      onClick={() => onClick()}
    >
      {children}
    </div>
  );
}

export function DummyLink({ to, name }: ILinkDummy) {
  const { onChangeRouterAll } = useRouter();
  const onClick = () => {
    const RouterObj: IRouterReq = getRouterObj(to);
    onChangeRouterAll(RouterObj);
    history.pushState({ path: to }, to, to);
  };
  return (
    <div className={`router-go-${name}`} id={`router-go-${name}`} onClick={() => onClick()}></div>
  );
}

// 더미셋. 이 이름으로 HistoryPush에 넣어주면 라우팅됩니다. ex) HistoryPush('main') -> 메인으로
export function RouterSet() {
  return (
    <div>
      {routes.map((item: IRouterItem, index: number) => (
        <DummyLink to={`${item.path}`} name={`${item.name}`} key={index} />
      ))}
    </div>
  );
}

export function HistoryPush(name: string) {
  document.getElementById(`router-go-${name}`)?.click();
  return <div></div>;
}
