import React from "react";
import Product from "./Product";
import { getProducts } from "../data/products";
import { addToCart } from "../utils/cart";

const ProductList = () => {
  const products = getProducts();

  const handleAddToCart = (id) => {
    addToCart(id);
  };

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Product product={product} onAddToCart={handleAddToCart} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
