import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product, onAddToCart }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={() => onAddToCart(product.id)}>Add to cart</button>
      <Link to={`/products/${product.id}`}>View details</Link>
    </div>
  );
};

export default Product;
