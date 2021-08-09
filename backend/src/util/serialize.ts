// 시리얼라이징
export const serialize = (user: any) => {
  const data = user.toJSON();
  delete data.hashedPassword;
  return data;
};
