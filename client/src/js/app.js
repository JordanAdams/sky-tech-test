import React from 'react';
import {render} from 'react-dom';
import SelectProducts from './pages/select-products';
import Checkout from './pages/checkout';
import { Router, Route, Link, hashHistory } from 'react-router'

const app = (
  <Router history={hashHistory}>
    <Route path="/" component={SelectProducts} />
    <Route path="checkout" component={Checkout} />
  </Router>
);

render(app, document.getElementById('app'));
