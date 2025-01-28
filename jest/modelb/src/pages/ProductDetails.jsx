// src/pages/ProductDetails.js
import React from "react";
import { useContext } from "react";
import { StoreContext } from "../utils/store";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { products } = useContext(StoreContext);
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductDetails;
