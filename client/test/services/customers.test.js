import {expect} from 'chai';
import fetch from '../../mocks/fetch';
import {createCustomersService} from '../../src/js/services/customers';

const customers = createCustomersService({
  fetch,
  baseUrl: 'http://localhost:3000/'
});

describe('customers service', () => {
  it('should get a customer', (done) => {
    customers.get(0)
      .then((res) => expect(res).to.deep.equal({example: 'response'}))
      .then(() => done())
      .catch(err => done(err));
  });
});
