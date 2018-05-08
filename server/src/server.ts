import { Product, productFactory } from "@my-project/core";
import * as express from "express";

const app = express();

app.use("/", (req, res) => {
  const exampleProduct: Product = productFactory.createProduct();
  res.send(`Example random product name is ${exampleProduct.name}`);
});

const port = process.env.PORT || 3500;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
