import Footer from './components/Footer/Footer';
import MainPage from './pages/MainPage/MainPage';
import { Router, Route, RouterSet } from './utils/router';
import ThreePage from './pages/ThreePage/ThreePage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import Headers from './pages/Headers/Headers';
import GithubPage from './pages/GithubPage/GithubPage';
import OrderPage from './pages/MyPage/OrderPage/OrderPage';
import RefundPage from './pages/MyPage/RefundPage/RefundPage';
import MyPage from './pages/MyPage/MyPage';
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage';
import Cart from './pages/Cart/Cart';

function App() {
  return (
    <div className="App">
      <Router>
        <Headers />
        <Route path="/" component={MainPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/product" component={ProductDetailPage} />
        <Route path="/cart" component={Cart} />
        <Route path="/github" component={GithubPage} />
        <Route path="/three" component={ThreePage} />
        <Route path="/mypage-order-list" component={OrderPage} />
        <Route path="/mypage-cancel-list" component={RefundPage} />
        <Route path="/mypage-refund-list" component={RefundPage} />
        <Route path="/product" component={ProductDetailPage} />
        <Footer />
        <RouterSet />
      </Router>
    </div>
  );
}

export default App;

/*
<Route path='/mypage-wish-list' component={RefundPage} />
<Route path='/mypage-coupon' component={RefundPage} />
<Route path='/mypage-mileage' component={RefundPage} />
<Route path='/mypage-qa' component={RefundPage} />
<Route path='/mypage-password-check' component={RefundPage} />
<Route path='/mypage-address' component={RefundPage} />
<Route path='/mypage-goods-qa' component={RefundPage} />
<Route path='/mypage-goods-review' component={RefundPage} />
*/
