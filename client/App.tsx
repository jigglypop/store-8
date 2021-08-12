import Footer from "./components/Footer/Footer";
import MainPage from "./pages/MainPage/MainPage";
import { Router, Route, RouterSet } from "./utils/router";
import ThreePage from "./pages/ThreePage/ThreePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Headers from "./pages/Headers/Headers";
import GibhubPage from "./pages/GithubPage/GibhubPage";


function App() {
  return (
    <div className="App">
      <Router>
        <Headers />
        <Route path='/' component={MainPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/register' component={RegisterPage} />
        <Route path='/github' component={GibhubPage} />
        <Route path='/three' component={ThreePage} />
        <Footer />
        <RouterSet />
      </Router>
    </div>
  );
}

export default App;
