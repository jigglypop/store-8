import { IProduct } from '../product/product';

export interface IElastic {
  _source: IProduct;
}

export type IElasticRes = IElastic[];
