import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Product from '../../src/js/components/product';
import ProductList from '../../src/js/components/product-list';

const minProps = {
  products: [],
  onSelectionChange: () => {}
};

describe('<ProductList />', () => {
  it('Renders successfully', () => {
    const wrapper = shallow(<ProductList {...minProps} />);
    expect(wrapper).to.have.length(1);
  });

  it('Has a display name', () => {
    expect(ProductList.displayName).to.equal('ProductList');
  });

  it('Renders products', () => {
    const products = [
      {name: 'product 1', selected: true},
      {name: 'product 2', selected: false},
      {name: 'product 3', selected: true}
    ];

    const wrapper = shallow(<ProductList {...minProps} products={products} />);

    expect(wrapper.find('Product')).to.have.length(3);
  });
});
