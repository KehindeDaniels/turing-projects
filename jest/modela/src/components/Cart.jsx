import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { getCart, updateCart } from "../utils/cart";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = getCart();
    setCartItems(cart);
  }, []);

  const handleUpdateCart = (id, quantity) => {
    updateCart(id, quantity);
    setCartItems(getCart());
  };

  const handleRemoveFromCart = (id) => {
    updateCart(id, 0);
    setCartItems(getCart());
  };

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onUpdateCart={handleUpdateCart}
              onRemoveFromCart={handleRemoveFromCart}
            />
          ))}
        </ul>
      )}
      <Link to="/products">Continue shopping</Link>
    </div>
  );
};

export default Cart;
