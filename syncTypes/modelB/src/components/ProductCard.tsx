import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../types";

interface Props {
  product: Product;
  addToCart: (product: Product) => void;
}

const ProductCard: React.FC<Props> = ({ product, addToCart }) => {
  return (
    <div
      style={{
        marginBottom: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "300px",
        border: "1px solid #ccc",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <Link to={`/products/${product.id}`}>View Details</Link>
    </div>
  );
};

export default ProductCard;
