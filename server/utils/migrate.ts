import Product from '../models/Product';
import { CATEGORIES } from '../constants/migration/CATEGORIES';
import { PRODUCTS } from '../constants/migration/PRODUCTS';
import { OPTIONS } from '../constants/migration/OPTIONS';
import Category, { ICategory } from '../models/Category';
import Option from '../models/Option';

// 카테고리 부분 시작
const initCategory = () => {
  return Category.sync().then(async () => {
    const categories = await Category.findAll();
    const values = categories.map((category: ICategory) => category.title);
    const notInsertedData = CATEGORIES.filter(
      (category: ICategory) => !values.includes(category.title)
    );
    notInsertedData.forEach((category: ICategory) => Category.create(category));
  });
};
// 상품 부분 시작
const initProduct = async () => {
  return Product.sync().then(async () => {
    for (let key of Object.keys(PRODUCTS)) {
      const PRODUCT = PRODUCTS[key];
      await Product.create({ ...PRODUCT });
    }
  });
};
// 상품 옵션 부분 시작
const initOption = async () => {
  return Option.sync().then(async () => {
    for (let key of Object.keys(OPTIONS)) {
      const OPTION = OPTIONS[key];
      await Option.create({ ...OPTION });
    }
  });
};

export const migrate = async () => {
  await initCategory();
  await initProduct();
  await initOption();
};
