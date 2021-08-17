import Product, { IProduct } from '../models/Product';
import { CATEGORIES } from '../constants/migration/CATEGORIES';
import { PRODUCTS } from '../constants/migration/PRODUCTS';
import { OPTIONS } from '../constants/migration/OPTIONS';
import { CARTS } from '../constants/migration/CARTS';
import Category, { ICategory } from '../models/Category';
import Option from '../models/Option';
import Cart from '../models/Cart';

interface IProductQuery {
  [key: string]: string | number;
}

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
// const initProduct = async () => {
//   return Product.sync().then(async () => {
//     for (let key of Object.keys(PRODUCTS)) {
//       const _PRODUCT: any = { ...PRODUCTS[key] };
//       const _PRODUCT_ORIGIN = PRODUCTS[key];
//       _PRODUCT.amount = Number(_PRODUCT_ORIGIN.amount.replace(',', ''));
//       _PRODUCT.originalAmount = Number(_PRODUCT_ORIGIN.originalAmount.replace(',', ''));
//       await Product.create({ ..._PRODUCT });
//     }
//   });
// };

const initProduct = async () => {
  return Product.sync().then(async () => {
    for (let key of Object.keys(PRODUCTS)) {
      const _PRODUCT_TEMP: IProductQuery = {};
      const _PRODUCT: any = { ...PRODUCTS[key] };
      const _PRODUCT_ORIGIN: IProductQuery = PRODUCTS[key];
      for (let key of Object.keys(_PRODUCT_ORIGIN)) {
        if (key === 'amount') {
          _PRODUCT.amount = Number(_PRODUCT_ORIGIN.amount.toString().replace(',', ''));
        } else if (key === 'originalAmount') {
          _PRODUCT.originalAmount = Number(
            _PRODUCT_ORIGIN.originalAmount.toString().replace(',', '')
          );
        } else {
          _PRODUCT_TEMP[key] = _PRODUCT_ORIGIN[key];
        }
      }
      await Product.create({ ..._PRODUCT });
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

// 장바구니 데이터 시작
const initCart = async () => {
  Cart.bulkCreate(CARTS);
};

export const migrate = async () => {
  // await initCategory();
  // await initProduct();
  // await initOption();
  await initCart();
};
