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
    component: 'Cart',
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
    component: 'OrderPage',
  },
  {
    path: '/mypage-refund-list',
    name: 'mypage-refund-list',
    title: '마이페이지 - 취소/반품/교환 내역',
    component: 'RefundPage',
  },
  {
    path: '/category/:categoryId',
    name: 'category',
    title: '카테고리 페이지',
    component: 'CategoryPage',
  },
];
