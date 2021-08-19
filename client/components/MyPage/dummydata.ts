export interface IResult {
  date: Date; // order day
  id: number; // refundId : for key
  orderNumber: string; // order
  title: string; // productId
  option?: string; //
  productPrice: number;
  productCount: number;
  state: string; // 주문상태
  isConfirmed: boolean; // 확인/리뷰
  thumbnailSrc: string;
}

export const _filteredResults: IResult[] = [
  {
    date: new Date('2021-08-08'),
    id: 4,
    orderNumber: 'WTC-DREAMD4-4',
    title: 'ㅋㅋ슬리퍼',
    option: '작은발',
    productPrice: 15000,
    productCount: 3,
    state: '처리완료', // 주문상태
    isConfirmed: false, // 확인/리뷰
    thumbnailSrc: 'https://picsum.photos/40/50',
  },
  {
    date: new Date('2021-08-09'),
    id: 5,
    orderNumber: 'WTC-DREAMD4-5',
    title: '맥주 휴대폰 홀더',
    productPrice: 20000,
    productCount: 1,
    state: '처리완료', // 주문상태
    isConfirmed: false, // 확인/리뷰
    thumbnailSrc: 'https://picsum.photos/40/50',
  },
  {
    date: new Date('2021-08-08'),
    id: 6,
    orderNumber: 'WTC-DREAMD4-4',
    title: 'ㅋㅋ슬리퍼',
    option: '작은발',
    productPrice: 15000,
    productCount: 3,
    state: '처리완료', // 주문상태
    isConfirmed: false, // 확인/리뷰
    thumbnailSrc: 'https://picsum.photos/40/50',
  },
  {
    date: new Date('2021-08-09'),
    id: 7,
    orderNumber: 'WTC-DREAMD4-5',
    title: '맥주 휴대폰 홀더',
    productPrice: 20000,
    productCount: 1,
    state: '처리완료', // 주문상태
    isConfirmed: false, // 확인/리뷰
    thumbnailSrc: 'https://picsum.photos/40/50',
  },
  {
    date: new Date('2021-08-08'),
    id: 8,
    orderNumber: 'WTC-DREAMD4-4',
    title: 'ㅋㅋ슬리퍼',
    option: '작은발',
    productPrice: 15000,
    productCount: 3,
    state: '반품신청', // 주문상태
    isConfirmed: false, // 확인/리뷰
    thumbnailSrc: 'https://picsum.photos/40/50',
  },
  {
    date: new Date('2021-08-09'),
    id: 9,
    orderNumber: 'WTC-DREAMD4-5',
    title: '맥주 휴대폰 홀더',
    productPrice: 20000,
    productCount: 1,
    state: '처리완료', // 주문상태
    isConfirmed: false, // 확인/리뷰
    thumbnailSrc: 'https://picsum.photos/40/50',
  },
];

export const sampleData = {
  couponCount: 1,
  mileage: 1000,
  name: '남영우',
  grade: '일반회원',
};
