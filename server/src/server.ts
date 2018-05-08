import { Product, productFactory } from '@my-project/core';
const f = require('@my-project/core');
import * as express from 'express';

const app = express();

app.use('/', (req, res) => {
  console.log(f);

  res.send(`Example random product name is `)
});

const port = process.env.PORT || 3500;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`, f, Product, productFactory)
});