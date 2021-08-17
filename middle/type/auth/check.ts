export interface ICheckReq {}

export interface ICheckRes {
  id: number;
  username: string;
  imageUrl: string;
  email: string;
  updatedAt: Date;
  createdAt: Date;
}
