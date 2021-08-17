import Footer from './components/Footer/Footer';
import { Router, Route, RouterSet } from './utils/router';
import Headers from './pages/Headers/Headers';
import loadable from '@loadable/component';
import { routes } from '@middle/router/routes';
import { IRouterItem } from '@middle/type/router/router';
import { useRouter } from './hooks/router/router';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import * as S from './GlobalStyle';
function App() {
  const { router } = useRouter();
  return (
    <S.App>
      <Router>
        <>
          <Headers />
          {routes.map((item: IRouterItem, index: number) => {
            const Component = loadable(() => import(`./pages/${item.component}/${item.component}`));
            return <Route path={item.path} component={Component} key={index} title={item.title} />;
          })}
          {router.notfound === 'false' ? <NotFoundPage /> : ''}
          <RouterSet />
          <Footer />
        </>
      </Router>
      <S.ToastDiv id="toasts"></S.ToastDiv>
    </S.App>
  );
}

export default App;
