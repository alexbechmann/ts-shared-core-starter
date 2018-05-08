import { Product, productFactory } from "@my-project/core";
import * as React from "react";

import "./App.css";

class App extends React.Component {
  public render() {
    const exampleProduct: Product = productFactory.createProduct();
    return (
      <div className="App">
        Example random product name is {exampleProduct.name}
      </div>
    );
  }
}

export default App;
