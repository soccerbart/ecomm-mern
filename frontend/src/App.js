import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Homepage from './pages/homepage/Homepage';
import Productpage from './pages/productpage/Productpage';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={Homepage} exact />
          <Route path="/product/:id" component={Productpage} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
