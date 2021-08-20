export interface IResult {
  date: string; // order day
  id: number; // refundId : for key
  orderNumber: string; // order
  title: string; // productId
  option?: string; //
  productAmount: number;
  productCount: number;
  state: string; // 주문상태
  isConfirmed: boolean; // 확인/리뷰
  productImgSrc: string;
}

export const _filteredResults: IResult[] = [
  {
    date: '2021-08-08',
    id: 1,
    orderNumber: 'WTC-STORE-08-01',
    title: '[테스트]티셔츠. 헐',
    productAmount: 23000,
    productCount: 3,
    state: '처리완료', // 주문상태
    isConfirmed: false, // 확인/리뷰
    productImgSrc: 'public/image/product/big/1.jpg',
  },
  {
    date: '2021-08-09',
    id: 2,
    orderNumber: 'WTC-STORE-08-02',
    title: '[테스트]카드케이스. 덮어놓고 긁다보면',
    productAmount: 8000,
    productCount: 1,
    state: '처리완료', // 주문상태
    isConfirmed: false, // 확인/리뷰
    productImgSrc: `public/image/product/big/2.jpg`,
  {
    date: '2021-08-10',
    id: 3,
    orderNumber: 'WTC-STORE-08-03',
    title: '[테스트]마스크. 매너모드',
    productAmount: 8000,
    productCount: 3,
    state: '처리완료', // 주문상태
    isConfirmed: false, // 확인/리뷰
    productImgSrc: 'public/image/product/big/3.jpg',
  },
  {
    date: '2021-08-09',
    id: 4,
    orderNumber: 'WTC-STORE-08-04',
    title: '[테스트]여권케이스. 여행하기 좋은여건 (화이트)',
    productAmount: 12000,
    productCount: 1,
    state: '처리완료', // 주문상태
    isConfirmed: false, // 확인/리뷰
    productImgSrc: 'public/image/product/big/4.jpg',
  },
  {
    date: '2021-08-10',
    id: 5,
    orderNumber: 'WTC-STORE-08-05',
    title: '[테스트]뱃지. 초딩입맛 외 10종',
    option: '작은발',
    productAmount: 1500,
    productCount: 3,
    state: '반품신청', // 주문상태
    isConfirmed: false, // 확인/리뷰
    productImgSrc: 'public/image/product/big/5.jpg',
  },
  {
    date: '2021-08-11',
    id: 6,
    orderNumber: 'WTC-STORE-08-05',
    title: '[테스트]뱃지. 초딩입맛 외 10종',
    productAmount: 1500,
    productCount: 1,
    state: '처리완료', // 주문상태
    isConfirmed: false, // 확인/리뷰
    productImgSrc: 'public/image/product/big/5.jpg',
  },
  {
    date: '2021-08-12',
    id: 7,
    orderNumber: 'WTC-STORE-08-06',
    title: '[테스트]캐리어벨트. ㅋㅋㅋ',
    productAmount: 16000,
    productCount: 1,
    state: '배송완료',
    isConfirmed: true,
    productImgSrc: 'public/image/product/big/6.jpg',
  },
];

export const sampleData = {
  couponCount: 1,
  mileage: 1000,
  name: '남영우',
  grade: '일반회원',
};
