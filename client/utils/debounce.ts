import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { ChangeEvent } from 'react';
import { Dispatch } from 'redux';

interface TInput {
  [key: string]: string;
}
// hook에 있던 debounce함수 뺌
export const debounceRedux = (
  fn: ActionCreatorWithPayload<{ key: keyof TInput; value: string }, string>,
  dispatch: Dispatch,
  e: ChangeEvent<HTMLInputElement>,
  time: number
) => {
  // 인풋 박스 디바운싱
  let timer: NodeJS.Timeout;
  return () => {
    const name = e.target.name;
    const value = e.target.value;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      dispatch(fn({ key: name, value: value }));
    }, time);
  };
};
