import React from "react"

function ProductList(props) {
  let productList = [];
  props.products.forEach(product => {
    const {name, quantity, currency, price} = product;
    productList.push(
        <li key={name}>
          <span>{name}</span> |
          <span>{quantity}</span> |
          <span>{currency}</span> |
          <span>{price}</span>
        </li>
    );
  });

  return (
      <ul>
        {productList}
      </ul>
  );
}

export default ProductList
