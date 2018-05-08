import { Product, productFactory } from '@my-project/core';
import * as express from 'express';
import { productController } from '@src/products/product.controller';

const app = express();
app.use('/', productController.randomProduct);

const port = process.env.PORT || 3500;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
