import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import {spy} from 'sinon';
import Product from '../../src/js/components/product';

const minProps = {
  name: 'product',
  selected: false,
  onSelectionChange: () => {}
};

describe('<Product />', () => {
  it('Renders successfully', () => {
    const wrapper = shallow(<Product {...minProps} />);
    expect(wrapper).to.have.length(1);
  });

  it('Has a display name', () => {
    expect(Product.displayName).to.equal('Product');
  });

  it('Displays the product name', () => {
    const wrapper = shallow(<Product {...minProps} name="product name" />);

    expect(wrapper.text()).to.equal('product name');
  });

  it('Calls the selection toggle callback', () => {
    const onSelectionChange = spy();
    const wrapper = shallow(<Product {...minProps} onSelectionChange={onSelectionChange} />);
    const checkbox = wrapper.find('input[type="checkbox"]');

    checkbox.simulate('change');
    expect(onSelectionChange.calledOnce).to.equal(true);
  });
});
