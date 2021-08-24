import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import createExtraGet from '../createExtra/createExtraGet';
import { getElasticApi } from '@client/api/elastic';
import { IElasticRes } from '../../../middle/type/elastic/elastic';

// 엘라스틱 서치 검색
const name = 'elastic';
export const getElastic = createAsyncThunk(name, getElasticApi);
const elasticExtra = createExtraGet<IElasticRes | null>(getElastic, name);

interface IElasticState {
  elastic: IElasticRes | null;
  error: string | null;
  loading: boolean;
}

const initialState: IElasticState = {
  elastic: null,
  error: null,
  loading: false,
};

const elasticSlice = createSlice({
  name,
  initialState,
  reducers: {
    initElastic: () => initialState,
  },
  extraReducers: elasticExtra,
});

export const { initElastic } = elasticSlice.actions;
export default elasticSlice.reducer;
