import { IProduct } from '../../../server/models/Product';

export interface ICategoryRes {
  count: number;
  rows: IProduct[];
  pages: number;
}
