'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCustomersService = undefined;

var _data = require('../data.js');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createCustomersService = exports.createCustomersService = function createCustomersService(_ref) {
  var data = _ref.data;

  var get = function get(id) {
    return data.customers.find(function (customer) {
      return customer.id === id;
    });
  };

  return { get: get };
};

exports.default = createCustomersService({ data: _data2.default });