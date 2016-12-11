import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import PaymentPage from './components/payment/PaymentPage';
import ConfirmationPage from './components/confirmation/ConfirmationPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="payment" component={PaymentPage} />
    <Route path="confirmation" component={ConfirmationPage} />
  </Route>
  );
