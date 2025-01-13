import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CartProductCard from "../components/CartProductCard";
import { Product } from "../types";

const Cart: React.FC = () => {
  const [cart, setCart] = useState<{ [id: number]: Product }>({});
  const [quantities, setQuantities] = useState<{ [id: number]: number }>({});

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const removeFromCart = (product: Product) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      delete newCart[product.id];
      return newCart;
    });
  };

  const increaseQuantity = (product: Product) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [product.id]: (prevQuantities[product.id] || 0) + 1,
    }));
  };

  const decreaseQuantity = (product: Product) => {
    setQuantities((prevQuantities) => {
      const newQuantities = { ...prevQuantities };
      if (newQuantities[product.id] > 1) {
        newQuantities[product.id]--;
      } else {
        delete newQuantities[product.id];
        removeFromCart(product);
      }
      return newQuantities;
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Cart</h1>
      {Object.keys(cart).length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div>
          {Object.keys(cart).map((id) => (
            <CartProductCard
              key={id}
              product={cart[Number(id)]}
              quantity={quantities[Number(id)] || 1}
              removeFromCart={removeFromCart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />
          ))}
        </div>
      )}
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default Cart;
