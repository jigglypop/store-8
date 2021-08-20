import cache from './cache';
import { SERVER_URL } from '@client/constants/server_url';

type MethodType = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD';

interface IResponse<T> {
  success: true;
  response: T;
}
interface IErrorResponse {
  success: false;
  errorMessage: string;
}

async function fetchWrapper<reqType, resType>(
  url: string,
  method: MethodType,
  body?: reqType
): Promise<IResponse<resType> | IErrorResponse> {
  try {
    const token = cache.get('token') ?? '';
    const res = await fetch(SERVER_URL + url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      credentials: 'include', //refresh 토큰 때 cookie사용하기 위해서 미리 설정
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      if (res.status === 401) {
        //로그인 관련 에러
        cache.remove('token');
      }

      const { message } = await res.json();
      return { success: false, errorMessage: message };
    }

    const response = await res.json();

    return { success: true, response };
  } catch (err) {
    console.log(err);
    return { success: false, errorMessage: err.message };
  }
}

export default fetchWrapper;
