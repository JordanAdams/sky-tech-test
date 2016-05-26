'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _customers = require('./services/customers');

var _customers2 = _interopRequireDefault(_customers);

var _catalogue = require('./services/catalogue');

var _catalogue2 = _interopRequireDefault(_catalogue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/customers/:id', function (req, res) {
  var customer = _customers2.default.get(req.params.id);
  if (!customer) {
    return res.status(404);
  }

  return res.send(customer);
});

app.get('/catalogue', function (req, res) {
  var location = req.query.location;
  var products = _catalogue2.default.productsForLocation(location);

  return res.send(products);
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Api started');
});