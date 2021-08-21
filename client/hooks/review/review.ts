import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@client/store';

import { useRouter } from '../router/router';

type IFetchType = 'create' | 'update' | 'delete';

export function useReview() {
  const {
    router: { params },
  } = useRouter();

  const productId = +params;

  //   const { question, loading, error } = useSelector((state: RootState) => state.question);
  //   const dispatch = useDispatch();

  //   // 페이지 시작
  //   useEffect(() => {
  //     dispatch(getReview(productId));
  //   }, []);

  return {
    review: review ?? [],
    loading: false,
    error: '',
  };
  // loading,
  // error,
}

const review = [
  {
    id: 1,
    title: '좋습니다!!',
    contents: '최고네요! 인생템이에요',
    score: 5,
    date: '2021.08.20',
    imgSrc: ['public/image/product/big/1.jpg', 'public/image/product/big/2.jpg'],
    likeCount: 0,
    dislikeCount: 1,
    isLike: false,
    isDislike: true,
  },
  {
    id: 2,
    title: '좋습니다!!',
    contents: '최고네요! 인생템이에요',
    score: 2,
    date: '2021.08.20',
    imgSrc: ['public/image/product/big/1.jpg', 'public/image/product/big/2.jpg'],
    likeCount: 0,
    dislikeCount: 1,
    isLike: false,
    isDislike: true,
  },
];
