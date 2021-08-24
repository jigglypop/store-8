export const checkNameString = (nameString: string): number => {
  if (nameString.length === 0) return 0;
  else if (nameString.length > 6) return 1;
  else return 2;
};

export const checkCallString = (callString: string): number => {
  let checkReg = /^\d{2,3}-\d{3,4}-\d{4}$/;
  if (callString.length === 0) return 0;
  else {
    return checkReg.test(callString) ? 2 : 1;
  }
};

export const checkEmailString = (emailString: string): number => {
  let checkReg =
    /^[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[@]{1}[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[.]{1}[A-Za-z]{1,5}$/;
  if (emailString.length === 0) return 0;
  else {
    return checkReg.test(emailString) ? 2 : 1;
  }
};
