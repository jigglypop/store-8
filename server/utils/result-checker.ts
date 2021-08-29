export const isEmpty = (str: string) => typeof str == 'undefined' || str == null || str == '';

export const isEmptyToken = (token: string) => isEmpty(token);

export const isEmptyObj = (obj: any) => {
  return isEmpty(obj) || obj === {} || obj == {};
};

export const isEmptyOneResultFromDB = (response: any) => isEmptyObj(response);
