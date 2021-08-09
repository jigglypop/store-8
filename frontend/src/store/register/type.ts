// 회원가입의 폼 양식
export interface IRegisterForm {
  username: string | null
  email: string | null
  password: string | null
  passwordconfirm: string | null
}

// 회원가입 성공시 리턴 데이터(잘 모르겠으면 백엔드 만드신분께 타입 여쭤보기)
export interface IRegisterData {
  id?: string;
  username: string;
  hashedPassword: string;
  email?: string;
  imageUrl?: string;
}

// 회원가입 input
export interface IRegisterInput {
  payload : {
    key : keyof IRegisterForm
    value : string | null
  }
}
