import React from 'react';
import Product from './product';

const ProductList = ({
  products,
  onSelectionChange
}) => {
  const children = products.map(({id, name, selected}) => {
    return <Product key={id} id={id} name={name} selected={selected} onSelectionChange={onSelectionChange} />;
  });

  return <div>{children}</div>;
};

ProductList.displayName = 'ProductList';

export default ProductList;
