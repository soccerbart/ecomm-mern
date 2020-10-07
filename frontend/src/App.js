import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Homepage from './pages/homepage/Homepage';
import Productpage from './pages/productpage/Productpage';
import Cartpage from './pages/cartpage/Cartpage';
import Loginpage from './pages/loginpage/Loginpage';
import Registerpage from './pages/registerpage/Registerpage';
import Profilepage from './pages/profilepage/Profilepage';
import Shippingpage from './pages/shippingpage/Shippingpage';
import PaymentMethodPage from './pages/payment-method-page/PaymentMethodPage';
import PlaceOrderPage from './pages/place-order/PlaceOrderPage';
import Orderpage from './pages/orderpage/Orderpage';
import UserListPage from './pages/userlist-page/UserListPage';
import UserEditPage from './pages/useredit-page/UserEditPage';
import ProductListPage from './pages/productlist/ProductListPage';
import ProductEditPage from './pages/product-editpage/ProductEditPage';
import OrderListPage from './pages/order-listpage/OrderListPage';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/login" component={Loginpage} />
          <Route path="/register" component={Registerpage} />
          <Route path="/shipping" component={Shippingpage} />
          <Route path="/payment" component={PaymentMethodPage} />
          <Route path="/placeorder" component={PlaceOrderPage} />
          <Route path="/order/:id" component={Orderpage} />
          <Route path="/profile" component={Profilepage} />
          <Route path="/admin/userlist" component={UserListPage} />
          <Route path="/admin/user/:id/edit" component={UserEditPage} />
          <Route path="/product/:id" component={Productpage} />
          <Route path="/admin/productlist" component={ProductListPage} />
          <Route path="/admin/orderlist" component={OrderListPage} />
          <Route path="/admin/product/:id/edit" component={ProductEditPage} />
          <Route path="/cart/:id?" component={Cartpage} />
          <Route path="/" component={Homepage} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
