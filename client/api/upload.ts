import cache from '@client/utils/cache';
import fetchWrapper from '@client/utils/fetchWrapper';

//content-type이 다르기 때문에 따로 정의
export const uploadImg = async (formData: any) => {
  try {
    const token = cache.get('token') ?? '';
    const res = await fetch('http://localhost:3000/api/upload', {
      method: 'POST',
      headers: {
        Authorization: token,
      },
      body: formData,
    });

    if (!res.ok) {
      if (res.status === 401) {
        //로그인 관련 에러
        cache.remove('token');
      }

      const { message } = await res.json();
      return { success: false, errorMessage: message };
    }

    const imgSrc = await res.json();
    return { success: true, imgSrc: imgSrc.src };
  } catch (err) {
    console.log(err);
    console.log(err.message);
    return { success: false, errorMessage: err.message };
  }
};
