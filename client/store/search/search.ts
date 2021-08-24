import 'regenerator-runtime/runtime';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import createExtraGet from '../createExtra/createExtraGet';
import { getSearchApi } from '@client/api/search';
import { ISearchRes } from '../../../middle/type/search/search';

// 카테고리 추가부분(product get은 복사후 함수명만 바꿔줘도 거의 무방)
const name = 'search';
export const getSearch = createAsyncThunk(name, getSearchApi);
const categoryExtra = createExtraGet<ISearchRes | null>(getSearch, name);

interface ISearchInput {
  payload: {
    search: ISearchRes;
  };
}
interface ISearchTitle {
  payload: {
    title: string;
  };
}
interface ISearchState {
  search: ISearchRes | null;
  title: string;
  error: string | null;
  loading: boolean;
}

const initialState: ISearchState = {
  search: null,
  title: '',
  error: null,
  loading: false,
};

const categorySlice = createSlice({
  name,
  initialState,
  reducers: {
    initSearch: () => initialState,
    changeSearchItem: (state, { payload }: ISearchInput) => {
      state.search = payload.search;
    },
    setSearchTitle: (state, { payload }: ISearchTitle) => {
      state.title = payload.title;
    },
  },
  extraReducers: categoryExtra,
});

export const { initSearch, changeSearchItem, setSearchTitle } = categorySlice.actions;
export default categorySlice.reducer;
