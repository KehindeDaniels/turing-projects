import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/api";
import { Product } from "../models/product";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProductById(Number(id));
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    // Add to cart logic
  };

  return (
    <div>
      {product && (
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <div>
            <button onClick={() => setQuantity(quantity - 1)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
