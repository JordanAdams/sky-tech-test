import {expect} from 'chai';
import {createCatalogueService} from '../src/services/catalogue';

const catalogue = createCatalogueService({
  data: {
    catalogue: [
      {id: '0', category: 'sports', name: 'Arsenal TV', location: 'london'},
      {id: '1', category: 'sports', name: 'Liverpool TV', location: 'liverpool'},
      {id: '2', category: 'news', name: 'Sky Sports News', location: null}
    ]
  }
});

describe('catalogue service', () => {
  it('should get products for a location', () => {
    expect(catalogue.productsForLocation('london'))
      .to.deep.equal([
        {id: '0', category: 'sports', name: 'Arsenal TV', location: 'london'},
        {id: '2', category: 'news', name: 'Sky Sports News', location: null}
      ])

    expect(catalogue.productsForLocation('liverpool'))
      .to.deep.equal([
        {id: '1', category: 'sports', name: 'Liverpool TV', location: 'liverpool'},
        {id: '2', category: 'news', name: 'Sky Sports News', location: null}
      ])

    expect(catalogue.productsForLocation('not a location'))
      .to.deep.equal([
        {id: '2', category: 'news', name: 'Sky Sports News', location: null}
      ]);
  });
})
