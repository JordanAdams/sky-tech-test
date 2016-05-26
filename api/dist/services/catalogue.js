'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCatalogueService = undefined;

var _data = require('../data');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createCatalogueService = exports.createCatalogueService = function createCatalogueService(_ref) {
  var data = _ref.data;

  var productsForLocation = function productsForLocation() {
    var location = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

    return data.catalogue.filter(function (product) {
      if (!product.location) {
        return true;
      }

      return product.location === location;
    });
  };

  return { productsForLocation: productsForLocation };
};

exports.default = createCatalogueService({ data: _data2.default });