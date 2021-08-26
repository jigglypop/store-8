export interface ICheckReq {}

export interface ICheckRes {
  id: number;
  username: string;
  imageUrl: string;
  email: string;
  updatedAt: Date;
  createdAt: Date;
}
export interface ICheckBody {
  id: number;
  username: string;
  imageUrl: string | null;
}

export interface IUpdateUserReq {
  checkForm: ICheckBody;
  token: any;
}
