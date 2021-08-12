import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import { Provider } from 'react-redux';
import { store } from "./store";

import { getCheck } from "./store/auth/check";
import cache from "./utils/cache";

const loadUser = () =>{
  try{
    const token = cache.get('token')
    if (!token) return
    store.dispatch(getCheck(token))
  }catch(e){
    console.log('로컬 스토리지 오류')
  }
}

loadUser()

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <GlobalStyle />
        <App/>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
