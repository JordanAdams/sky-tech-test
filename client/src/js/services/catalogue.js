import defaultFetch from 'isomorphic-fetch';

export const createCatalogueService = ({fetch, baseUrl}) => {
  const productsForLocation = (id) => {
    return fetch(`${baseUrl}/catalogue?location=${id}`)
      .then(res => res.json());
  };

  return {productsForLocation};
};

export default createCatalogueService({
  fetch: defaultFetch,
  baseUrl: process.env.API_URL
});
