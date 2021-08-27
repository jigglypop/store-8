export interface ILoginReq {
  email: string;
  password: string;
  [key: string]: string;
}

export interface ILoginRes {
  id: number;
  username: string;
  email: string;
  updatedAt: Date;
  createdAt: Date;
}
