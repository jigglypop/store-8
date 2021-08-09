import { Route, Switch } from "react-router-dom";
import Auth from "./components/Auth";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./pages/Main";


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/auth" component={Auth} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
