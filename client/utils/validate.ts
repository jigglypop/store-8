export const validate = (name: string, value: string) => {
  let flag = true;
  let error = '';
  if (name === 'email') {
    const result = value.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);
    if (!result) {
      flag = false;
      error = '이메일의 형식이 맞지 않습니다.';
    }
  } else if (name === 'password') {
    if (value.length < 8 || value.length > 16) {
      flag = false;
      error = '비밀번호는 8자 이상 16자 이하로 입력해야 합니다.';
    }
  } else if (name === 'username') {
    if (value.length < 2 || value.length > 16) {
      flag = false;
      error = '유저 이름은 2자 이상 16자 이하로 입력해야 합니다.';
    }
  }
  return { flag, error };
};
