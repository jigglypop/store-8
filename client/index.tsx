import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import { Provider } from 'react-redux';
import { store } from "./store";

// import { getCheck } from "./store/check";
// 
// const loadUser = () =>{
//   try{
//     const user = localStorage.getItem('user')
//     if (!user) return
//     const _user = JSON.parse(user)
//     store.dispatch(getCheck(_user.token))
//   }catch(e){
//     console.log('로컬 스토리지 오류')
//   }
// }
// 
// loadUser()

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
