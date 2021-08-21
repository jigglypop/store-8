export interface IProduct {
  id: number;
  title: string;
  productImgSrc: string;
  detailImgSrc: string;
  amount: number;
  originalAmount: number;
  sale: number;
  categoryId: number;
  createdAt: Date;
}

export interface IProductRes {
  id: number;
  title: string;
  productImgSrc: string;
  detailImgSrc: string;
  amount: number;
  originalAmount: number;
  sale: number;
  categoryId: number;
  options: any;
}
