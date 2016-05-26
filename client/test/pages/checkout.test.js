import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Basket from '../../src/js/components/basket.js';
import Checkout from '../../src/js/pages/checkout.js';

const props = {
  location: {
    query: {
      products: ['a', 'b', 'c']
    }
  }
};

describe('<Checkout />', () => {
  it('Renders successfully', () => {
    const wrapper = shallow(<Checkout {...props} />);
    expect(wrapper).to.have.length(1);
  });

  it('Has a display name', () => {
    expect(Checkout.displayName).to.equal('Checkout');
  });

  it('Renders selected products list', () => {
    const wrapper = shallow(<Checkout {...props} />);

    expect(wrapper.find('li')).to.have.length(3);
  });
});
