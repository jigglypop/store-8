import Cart from '../models/Cart';
import Product from '../models/Product';
import ProductOption from '../models/Option';

export function productInit() {
  Product.bulkCreate([
    {
      title: '을지로 목장갑, 위잉 뚝딱',
      amount: 6000,
      productImgSrc: 'image0.jpg',
      detailImgSrc: 'image0.jpg',
    },
    {
      title: '요모포켓X배달이친구들 메이배달이 포켓',
      amount: 64000,
      productImgSrc: 'image1.jpg',
      detailImgSrc: 'image1.jpg',
    },
    {
      title: '재생지에 콩기름으로 인쇄한 일기장',
      amount: 3500,
      productImgSrc: 'image2.jpg',
      detailImgSrc: 'image2.jpg',
    },
    {
      title: 'ㅋㅋ슬리퍼 화이트',
      amount: 21000,
      productImgSrc: 'image3.jpg',
      detailImgSrc: 'image3.jpg',
    },
    {
      title: '매거진F No.16 Namul',
      amount: 13500,
      productImgSrc: 'image4.jpg',
      detailImgSrc: 'image4.jpg',
    },
  ]);
}

export function optionInit() {
  ProductOption.bulkCreate([
    {
      productId: 4,
      amount: 13500,
      title: '사이즈 : 더 작은발',
    },
    {
      productId: 4,
      amount: 13500,
      title: '사이즈 : 작은발',
    },
    {
      productId: 4,
      amount: 13500,
      title: '사이즈 : 큰발',
    },
  ]);
}

export function cartInit() {
  Cart.bulkCreate([
    {
      productId: 4,
      productOptionId: 1,
      userId: 1,
      productCount: 1,
    },
    {
      productId: 2,
      productOptionId: 0,
      userId: 1,
      productCount: 3,
    },
    {
      productId: 1,
      productOptionId: 0,
      userId: 1,
      productCount: 1,
    },
  ]);
}
