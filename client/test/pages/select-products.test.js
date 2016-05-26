import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import SelectProducts from '../../src/js/pages/select-products.js';

describe('<SelectProducts />', () => {
  it('Renders successfully', () => {
    const wrapper = shallow(<SelectProducts />);
    expect(wrapper).to.have.length(1);
  });

  it('Has a display name', () => {
    expect(SelectProducts.displayName).to.equal('SelectProducts');
  });

  it('Has a product selector', () => {
    const wrapper = shallow(<SelectProducts />);

    expect(wrapper.find('ProductSelector')).to.have.length(1);
  });
});
