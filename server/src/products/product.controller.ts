import { Request, Response } from "express";
import { Product, productFactory } from "@my-project/core";

export const productController = {
  randomProduct: (req: Request, res: Response) => {
    const exampleProduct: Product = productFactory.createProduct();
    res.send(`Example random product name is ${exampleProduct.name}`);
  }
}