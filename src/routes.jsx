import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import PaymentPage from './components/payment/PaymentPage';
import Animation1 from './components/animation/Animation1';
import Animation2 from './components/animation/Animation2';
import Animation3 from './components/animation/Animation3';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="payment" component={PaymentPage} />
    <Route path="animation1" component={Animation3} />
    <Route path="animation2" component={Animation2} />
  </Route>
  );
