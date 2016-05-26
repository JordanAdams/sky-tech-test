import React from 'react';

const Checkout = (props) => {
  const products = (props.location.query.products || []).map((product, i) => {
    return <li key={i}>{product}</li>;
  });

  return (
    <div>
      <h1>Checkout</h1>
      <div className="shadow-box">
        <h2>Your Package</h2>
        <ul>{products}</ul>
      </div>
    </div>);
};

Checkout.displayName = 'Checkout';

export default Checkout;
