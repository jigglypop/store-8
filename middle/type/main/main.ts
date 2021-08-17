import { IProduct } from '../../../server/models/Product';

export interface IMainRes {
  best: IProduct[];
  sale: IProduct[];
  new: IProduct[];
}
