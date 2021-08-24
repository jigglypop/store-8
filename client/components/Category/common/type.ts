import { ICategoryRes } from '@middle/type/category/category';

export interface ICategory {
  category?: ICategoryRes | null;
  pages?: number[];
}
