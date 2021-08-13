export const routes = [
    {
        "path": "/",
        "name": "main",
        "title": "메인",
        "component": "MainPage",
    },
    {
        "path": "/login",
        "name": "login",
        "title": "로그인",
        "component": "LoginPage",

    },
    {
        "path": "/register",
        "name": "register",
        "title": "회원가입",
        "component": "RegisterPage",
    },
    {
        "path": "/github",
        "name": "github",
        "title": "깃허브 로그인",
        "component": "GithubPage",
    },
    {
        "path": "/mypage",
        "name": "mypage",
        "title": "마이페이지",
        "component": "MyPage",
    },
    {
        "path": "/cart",
        "name": "cart",
        "title": "장바구니",
        "component": "Cart",
    },
    {
        "path": "/product/:productId",
        "name": "product",
        "title": "상품 페이지",
        "component": "ProductDetailPage",
    },
    {
        "path": "/three",
        "name": "three",
        "title": "3D",
        "component": "ThreePage",
    },
]