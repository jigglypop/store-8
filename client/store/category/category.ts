import 'regenerator-runtime/runtime'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import createExtraGet from '../createExtra/createExtraGet';
import { getCategoryApi } from '@client/api/category';
import { ICategoryRes } from '@middle/type/category/category'

// 카테고리 추가부분(product get은 복사후 함수명만 바꿔줘도 거의 무방)
const name = 'category'
export const getCategory = createAsyncThunk(name, getCategoryApi)
const categoryExtra = createExtraGet<ICategoryRes | null>(getCategory, name)

interface ICategoryState {
  category: ICategoryRes | null
  error : string | null
  loading: boolean
}

const initialState : ICategoryState = {
  category: null,
  error: null,
  loading: false,
}

const categorySlice = createSlice({
  name,
  initialState,
  reducers: {
    initCategory: () => initialState,
  },
  extraReducers: categoryExtra
})

export const { initCategory } = categorySlice.actions
export default categorySlice.reducer;