import defaultData from '../data';

export const createCatalogueService = ({data}) => {
  const productsForLocation = (location = '') => {
    return data.catalogue.filter(product => {
      if (!product.location) {
        return true;
      }

      return product.location === location
    })
  };

  return {productsForLocation};
};

export default createCatalogueService({data: defaultData});
