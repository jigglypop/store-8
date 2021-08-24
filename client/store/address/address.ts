import 'regenerator-runtime/runtime';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import createExtraPost from '@store/createExtra/createExtraPost';
import { getAddressApi } from '@api/address';
import { AddressData, AddressGetReq, AddressRes } from '@middle/type/address/address';

const name = 'address';

interface AddressState {
  address: AddressData[];
  error: string | null;
  loading: boolean;
}

const initialState: AddressState = {
  address: [],
  error: null,
  loading: false,
};

export const getAddress = createAsyncThunk('ADDRESS_GET_API', getAddressApi);
const addressGetReducer = createExtraPost<AddressGetReq, AddressData[] | null>(getAddress, name);

const addressSlice = createSlice({
  name,
  initialState,
  reducers: {
    initAddressStatus: () => initialState,
  },
  extraReducers: addressGetReducer,
});

export const { initAddressStatus } = addressSlice.actions;
export default addressSlice.reducer;