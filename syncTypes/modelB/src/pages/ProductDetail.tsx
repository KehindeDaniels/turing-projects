import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Product } from "../types";

interface Props {
  cart: { [id: number]: Product };
  addToCart: (product: Product) => void;
  increaseQuantity: (product: Product) => void;
}

const ProductDetail: React.FC<Props> = ({
  cart,
  addToCart,
  increaseQuantity,
}) => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  return (
    <div style={{ padding: "20px" }}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        product && (
          <div>
            <h1>{product.title}</h1>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <button onClick={() => increaseQuantity(product)}>
              Increase Quantity
            </button>
          </div>
        )
      )}
    </div>
  );
};

export default ProductDetail;
