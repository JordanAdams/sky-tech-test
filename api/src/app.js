import express from 'express';
import customers from './services/customers';
import catalogue from './services/catalogue';
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/customers/:id', (req, res) => {
  const customer = customers.get(req.params.id);
  if (!customer) {
    return res.status(404);
  }

  return res.send(customer);
});

app.get('/catalogue', (req, res) => {
  const location = req.query.location;
  const products = catalogue.productsForLocation(location);

  return res.send(products);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Api started');
});
