import 'regenerator-runtime/runtime';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import createExtraGet from '../createExtra/createExtraGet';
import { getSearchApi } from '@client/api/search';
import { ISearchRes } from '../../../middle/type/search/search';

// 카테고리 추가부분(product get은 복사후 함수명만 바꿔줘도 거의 무방)
const name = 'search';
export const getSearch = createAsyncThunk(name, getSearchApi);
const categoryExtra = createExtraGet<ISearchRes | null>(getSearch, name);

interface ISearchState {
  search: ISearchRes | null;
  error: string | null;
  loading: boolean;
}

const initialState: ISearchState = {
  search: null,
  error: null,
  loading: false,
};

const categorySlice = createSlice({
  name,
  initialState,
  reducers: {
    initSearch: () => initialState,
  },
  extraReducers: categoryExtra,
});

export const { initSearch } = categorySlice.actions;
export default categorySlice.reducer;
