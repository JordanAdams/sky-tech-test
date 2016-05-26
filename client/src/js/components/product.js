import React from 'react';

const Product = ({id, name, selected, onSelectionChange}) => {
  return (
    <div>
      <input type="checkbox" defaultChecked={selected} onChange={(e) => onSelectionChange(id, e)} />{name}
    </div>);
};

Product.displayName = 'Product';

export default Product;
