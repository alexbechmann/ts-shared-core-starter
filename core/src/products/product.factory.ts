import { Product } from '@src/products/product.model';

const names = [
  "TV",
  "Trainers",
  "Car"
]

export const productFactory = {
  createProduct: () => {
    const name = names[Math.floor(Math.random() * names.length)];
    const product: Product = {
      name,
      category: 'Random'
    }
    return product
  }
}