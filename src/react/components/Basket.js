import React from "react"
import Form from "./Form.js"
import ProductList from "./ProductList.js"

class Basket extends React.Component {
  state = {products: []};

  handleAddingProduct = (product) => {
    this.setState(pS => ({products: [...pS.products, product]}));
  };

  calculatePrices = async () => {
    const res = await fetch("/api/getprices", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    });
    const body = await res.json();

    console.log(body);
  };

  render() {
    return (
        <div>
          <Form handleAddingProduct={this.handleAddingProduct}/>
          <ProductList products={this.state.products}/>
          <button onClick={this.calculatePrices}>Посчитать</button>
          <div>
            <p>RUB:<span id="RUB">0</span></p>
            <p>USD:<span id="USD">0</span></p>
            <p>EUR:<span id="EUR">0</span></p>
          </div>
        </div>
    );
  }
}

export default Basket
