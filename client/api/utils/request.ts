
import { SERVER_URL } from "@client/constants/server_url";
import cache from "@client/utils/cache";
import { HTTP_METHOD } from "./method";

export interface IThunkApi {
  rejectWithValue: (error: string) => void
}

const requestGitHub = async (url: string, token?: string) => {
  const res = await fetch(url, HTTP_METHOD.GET(token));
  const data = await res.json();
  const _token = res.headers.get("token");
  if (_token) {
    cache.set("token", _token);
  }
  return data;
};
const requestGet = async (url: string, token?: string) => {
  const res = await fetch(SERVER_URL + url, HTTP_METHOD.GET(token));
  const data = await res.json();
  const _token = res.headers.get("token");
  if (_token) {
    cache.set("token", _token);
  }
  return data;
};

const requestPost = async <TReq>(url: string, data: TReq, token?: string) => {
  const res = await fetch(SERVER_URL + url, HTTP_METHOD.POST<TReq>(data, token));
  const _data = await res.json();
  const _token = res.headers.get("token");
  if (_token) {
    cache.set("token", _token);
  }
  return _data;
};

const requestPut = async <TReq>(url: string, data: TReq, token?: string) => {
  const res = await fetch(SERVER_URL + url, HTTP_METHOD.PUT<TReq>(data, token));
  const _data = await res.json();
  const _token = res.headers.get("token");
  if (_token) {
    cache.set("token", _token);
  }
  return _data;
};

const requestDelete = async (url: string, token?: string) => {
  const res = await fetch(SERVER_URL + url, HTTP_METHOD.DELETE(token));
  const _data = await res.json();
  return _data;
};

const request = {
  github: requestGitHub,
  get: requestGet,
  post: requestPost,
  put: requestPut,
  delete: requestDelete,
};

export default request;
