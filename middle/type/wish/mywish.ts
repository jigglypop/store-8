import { IProduct } from '../product/product';

export interface IMyWishRes {
  count: number;
  rows: IProduct[];
  pages: number;
}
