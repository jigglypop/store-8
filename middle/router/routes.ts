export const routes = [
  {
    path: '/',
    name: 'intro',
    title: '대문',
    component: 'IntroPage',
  },
  {
    path: '/main',
    name: 'main',
    title: '메인',
    component: 'MainPage',
  },
  {
    path: '/login',
    name: 'login',
    title: '로그인',
    component: 'LoginPage',
  },
  {
    path: '/register',
    name: 'register',
    title: '회원가입',
    component: 'RegisterPage',
  },
  {
    path: '/github',
    name: 'github',
    title: '깃허브 로그인',
    component: 'GithubPage',
  },
  {
    path: '/cart',
    name: 'cart',
    title: '장바구니',
    component: 'CartPage',
  },
  {
    path: '/product/:productId',
    name: 'product',
    title: '상품 페이지',
    component: 'ProductDetailPage',
  },
  {
    path: '/store',
    name: 'store',
    title: '스토어',
    component: 'StorePage',
  },
  {
    path: '/mypage-order-list',
    name: 'mypage-order-list',
    title: '마이페이지 - 주문목록/배송조회',
    component: 'MyOrderPage',
  },
  {
    path: '/mypage-refund-list',
    name: 'mypage-refund-list',
    title: '마이페이지 - 반품/환불 내역',
    component: 'MyRefundPage',
  },
  {
    path: '/mypage-wish-list',
    name: 'mypage-wish-list',
    title: '마이페이지 - 찜리스트',
    component: 'MyWishPage',
  },
  {
    path: '/mypage-address',
    name: 'mypage-address',
    title: '마이페이지 - 배송지관리',
    component: 'MyAddressPage',
  },
  {
    path: '/mypage-goods-qa',
    name: 'mypage-goods-qa',
    title: '마이페이지 - 나의 상품문의',
    component: 'MyGoodsQAPage',
  },
  {
    path: '/mypage-goods-review',
    name: 'mypage-goods-review',
    title: '마이페이지 - 나의 상품후기',
    component: 'MyGoodsReviewPage',
  },
  {
    path: '/mypage-info-edit',
    name: 'mypage-info-edit',
    title: '마이페이지 - 나의 정보수정',
    component: 'MyInfoEditPage',
  },
  {
    path: '/category/:categoryId',
    name: 'category',
    title: '카테고리 페이지',
    component: 'CategoryPage',
  },
  {
    path: '/search/:searchId',
    name: 'search',
    title: '검색',
    component: 'SearchPage',
  },
];
