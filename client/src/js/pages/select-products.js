import React from 'react';
import ProductSelector from '../components/product-selector';

const SelectProducts = () => {
  return (
    <div>
      <h1>Select Products</h1>
      <ProductSelector />
    </div>);
};

SelectProducts.displayName = 'SelectProducts';

export default SelectProducts;
