import React from 'react';

const Basket = ({products}) => {
  const items = products.map(({name, id}) => <li key={id}>{name}</li>);

  return <ul>{items}</ul>;
};

Basket.displayName = 'Basket';

export default Basket;
