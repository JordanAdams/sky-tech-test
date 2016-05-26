import defaultData from '../data.js';

export const createCustomersService = ({data}) => {
  const get = (id) => {
    return data.customers.find((customer) => customer.id === id);
  };

  return {get};
};

export default createCustomersService({data: defaultData})
