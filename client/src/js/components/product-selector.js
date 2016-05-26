import React from 'react';
import ProductList from './product-list';
import Basket from './basket';
import cookies from 'cookie-getter';
import customers from '../services/customers';
import catalogue from '../services/catalogue';
import { Link } from 'react-router'

const ProductSelector = React.createClass({
  getInitialState() {
    return {
      products: []
    };
  },

  componentDidMount() {
    const customerID = cookies('customerID');

    customers.get(customerID)
      .then((customer) => catalogue.productsForLocation(customer.location))
      .then((products) => this.setState({products}))
      .catch(() => {
        this.setState({products: []});
      });
  },

  onSelectionChange(id, event) {
    const products = this.state.products.map((product) => {
      if (product.id === id) {
        product.selected = event.target.checked;
      }

      return product;
    });

    this.setState({products});
  },

  render() {
    const {products} = this.state;
    const sportProducts = products.filter(p => p.category === 'sports');
    const newsProducts = products.filter(p => p.category === 'news');
    const selectedProducts = products.filter(p => p.selected);
    const selectedProductNames = selectedProducts.map(p => p.name);

    return (
      <div className="product-selector shadow-box">
        <section>
          <h2>Sports</h2>
          <ProductList products={sportProducts} onSelectionChange={this.onSelectionChange} />
        </section>

        <section>
          <h2>News</h2>
          <ProductList products={newsProducts} onSelectionChange={this.onSelectionChange} />
        </section>

        <section>
          <h2>Basket</h2>
          <Basket products={selectedProducts} />
          <Link className="checkout" to={{pathname: '/checkout', query: {products: selectedProductNames}}}>Checkout</Link>
        </section>
      </div>
    );
  }
});

export default ProductSelector;
