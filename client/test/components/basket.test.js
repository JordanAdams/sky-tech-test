import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Basket from '../../src/js/components/basket';

const minProps = {
  products: []
};

describe('<Basket />', () => {
  it('Renders successfully', () => {
    const wrapper = shallow(<Basket {...minProps} />);
    expect(wrapper).to.have.length(1);
  });

  it('Has a display name', () => {
    expect(Basket.displayName).to.equal('Basket');
  });

  it('Renders a list of selected products', () => {
    const products = [
      {id: 0, name: 'product 1'},
      {id: 1, name: 'product 2'},
      {id: 2, name: 'product 3'}
    ];
    const wrapper = shallow(<Basket {...minProps} products={products} />);

    expect(wrapper.find('li')).to.have.length(3);
  });
});
