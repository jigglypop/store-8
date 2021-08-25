import rootReducer, { RootState } from '@client/store';
import { createStore } from '@reduxjs/toolkit';
import React, { ReactNode } from 'react';

import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

function configureStore(initialState?: RootState) {
  return createStore(rootReducer, initialState);
}

export function mockReduxWrapper(initialState?: RootState) {
  const store = configureMockStore()(initialState);
  const wrapper = ({ children }: { children: ReactNode }) => {
    return <Provider store={store as any}>{children}</Provider>;
  };
  return [wrapper, store] as const;
}

export function prepareReduxWrapper(initialState?: any) {
  const store = configureStore(initialState);
  const wrapper = ({ children }: { children: React.ReactNode }) => {
    return <Provider store={store as any}>{children}</Provider>;
  };
  return [wrapper, store] as const;
}
