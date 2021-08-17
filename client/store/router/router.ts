import 'regenerator-runtime/runtime'
import { createSlice } from '@reduxjs/toolkit'

const name = 'router'
// 라우터 부분(리덕스의 router 저장 데이터 타입 정의)
export interface IRouterReq {
  pathname: string;
  params: string;
  query: string;
  notfound: string;
}
// 라우터 input 인덱스 시그니쳐(input에 값 유동적으로 선택하기 위함)
export interface IRouterInput {
  payload : {
    key : keyof IRouterReq
    value : string
  }
}
export interface IRouterQuery {
  [key: string]: string
}
// 라우터 input 페이로드(저장소 데이터 모양과 일치)
export interface IRouterInputAll {
  payload : IRouterReq
}
// 라우터의 상태타입(router와 해당 url의 쿼리 부분)
export interface IRouterState {
  router: IRouterReq
  query: IRouterQuery
}

const initialState : IRouterState = {
  router: {
    pathname: "",
    params: "",
    query: "",
    notfound: ""
  },
  query: {}
}


const routerSlice = createSlice({
  name,
  initialState,
  reducers: {
    initRouter: () => initialState,
    // 라우터의 값 하나만 바꾸기(대비용으로 만듦)
    changeRouter: (state, { payload: { key, value } }: IRouterInput) => {
      state.router[key] = value;
    },
    // 라우터의 값 한번에 바꾸기(query도 파싱해서 올림)
    changeRouterAll: (state, { payload }: IRouterInputAll) => {
      state.router = payload;
      // query 파싱부분
      if (state.router.query !== '') {
        const _query: IRouterQuery = {};
        const queryArray = state.router.query.split('&');
        for (let query of queryArray) {
          const queries = query.split('=');
          _query[queries[0]] = queries[1];
        }
        state.query = _query;
      } else {
        state.query = {};
      }
    },
  },
});
export const { initRouter, changeRouter, changeRouterAll } = routerSlice.actions
export default routerSlice.reducer;