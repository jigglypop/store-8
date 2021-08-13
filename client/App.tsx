import Footer from "./components/Footer/Footer";
import { Router, Route, RouterSet } from "./utils/router";
import Headers from "./pages/Headers/Headers";
import loadable from "@loadable/component";
import { routes } from "@middle/router/routes";
import { IRouterItem } from "@middle/type/router/router";

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Headers />
          {routes.map((item: IRouterItem, index: number) => {
            const Component = loadable(() => import(`./pages/${item.component}/${item.component}`));
            return <Route path={item.path} component={Component} key={index} title={item.title}/>}
          )}
          <Footer />
          <RouterSet />
        </>
      </Router>
    </div>
  );
}

export default App;
