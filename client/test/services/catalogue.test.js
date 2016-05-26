import {expect} from 'chai';
import fetch from '../../mocks/fetch';
import {createCatalogueService} from '../../src/js/services/catalogue';

const catalogue = createCatalogueService({
  fetch,
  baseUrl: 'http://localhost:3000/'
});

describe('catalogue service', () => {
  it('should get products for a location', (done) => {
    catalogue.productsForLocation(0)
      .then((res) => expect(res).to.deep.equal({example: 'response'}))
      .then(() => done())
      .catch(err => done(err));
  });
});
