import defaultFetch from 'isomorphic-fetch';

export const createCustomersService = ({fetch, baseUrl}) => {
  const get = (id) => {
    return fetch(`${baseUrl}/customers/${id}`)
      .then(res => res.json());
  };

  return {get};
};

export default createCustomersService({
  fetch: defaultFetch,
  baseUrl: process.env.API_URL
});
