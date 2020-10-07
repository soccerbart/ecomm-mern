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
          <Route path="/profile" component={Profilepage} />
          <Route path="/product/:id" component={Productpage} />
          <Route path="/cart/:id?" component={Cartpage} />
          <Route path="/" component={Homepage} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
