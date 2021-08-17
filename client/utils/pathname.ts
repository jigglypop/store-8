import { IRouterReq } from '@client/store/router/router';
import { routes } from '@middle/router/routes';
import { IRouterItem } from '@middle/type/router/router';

export function getAllPathnames() {
  return routes.map((route: IRouterItem) => {
    return route.path.split('/')[1];
  });
}
export function isInPathname(path: string) {
  const paths = getAllPathnames();
  const _path = path.split('/')[1];
  return paths.includes(_path);
}
// 패스이름 파싱부분
export function getRouterObj(pathname: string) {
  const paths = pathname.split(/\/|\?/g).filter((str: string) => str !== '');
  const RouterObj: IRouterReq = {
    pathname: paths[0] ? paths[0] : '',
    params: paths[1] ? paths[1] : '',
    query: paths[2] ? paths[2] : '',
    notfound: `${isInPathname(window.location.pathname)}`,
  };
  return RouterObj;
}
