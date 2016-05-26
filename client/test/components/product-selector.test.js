import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import ProductList from '../../src/js/components/product-list';
import ProductSelector from '../../src/js/components/product-selector';

describe('<ProductSelector />', () => {
  it('Renders successfully', () => {
    const wrapper = shallow(<ProductSelector />);
    expect(wrapper).to.have.length(1);
  });

  it('Has a display name', () => {
    expect(ProductSelector.displayName).to.equal('ProductSelector');
  });

  it('Has product lists', () => {
    const wrapper = shallow(<ProductSelector />);
    expect(wrapper.find('ProductList')).to.have.length(2);
  });

  it('Has a basket', () => {
    const wrapper = shallow(<ProductSelector />);
    expect(wrapper.find('Basket')).to.have.length(1);
  });
});
