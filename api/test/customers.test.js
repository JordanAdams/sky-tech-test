import {expect} from 'chai';
import {createCustomersService} from '../src/services/customers';

const customers = createCustomersService({
  data: {
    customers: [
      {id: '0', name: 'Bob', location: 'london'},
      {id: '1', name: 'Alice', location: 'liverpool'}
    ]
  }
});

describe('customers service', () => {
  it('should get customers', () => {
    expect(customers.get('0'))
      .to.deep.equal({id: '0', name: 'Bob', location: 'london'})
  });
})
