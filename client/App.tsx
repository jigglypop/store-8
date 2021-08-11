import { useEffect, useState } from "react";
import Auth from "./pages/Auth";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./pages/Main";
import { Router, Route } from "./utils/router";


function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Route path='/' component={Main} />
        <Route path='/auth' component={Auth} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
