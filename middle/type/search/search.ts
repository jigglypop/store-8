import { IProduct } from '../../../server/models/Product';

export interface ISearchRes {
  count: number;
  rows: IProduct[];
  pages: number;
}
