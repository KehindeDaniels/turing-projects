// src/components/Product.js
import React from "react";
import { useContext } from "react";
import { StoreContext } from "../utils/store";

const Product = ({ product }) => {
  const { addToCart } = useContext(StoreContext);

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;
