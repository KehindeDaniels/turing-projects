import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Product } from "../types";

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState<{ [id: number]: Product }>({});

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

  const addToCart = (product: Product) => {
    setCart((prevCart) => ({ ...prevCart, [product.id]: product }));
  };

  const increaseQuantity = (product: Product) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[product.id]) {
        newCart[product.id].quantity = (newCart[product.id].quantity || 0) + 1;
      } else {
        newCart[product.id] = { ...product, quantity: 1 };
      }
      return newCart;
    });
  };

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
