const fetch = (url) => {
  return Promise.resolve({
    json: () => Promise.resolve({example: 'response'})
  });
};

export default fetch;
