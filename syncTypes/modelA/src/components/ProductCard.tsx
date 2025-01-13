import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Product } from "../models/product";

interface Props {
  product: Product;
  addToCart: (product: Product) => void;
}

const ProductCard: React.FC<Props> = ({ product, addToCart }) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleViewDetail = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div
      style={{
        marginBottom: "10px",
        display: "flex",
        justifyContent: "space-between",
        width: "300px",
      }}
    >
      <span>
        {product.title} - ${product.price}
      </span>
      <div>
        <button onClick={handleAddToCart}>Add to Cart</button>
        <button onClick={handleViewDetail}>View Detail</button>
      </div>
    </div>
  );
};

export default ProductCard;
