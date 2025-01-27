// src/components/Cart.js
import React from "react";
import { useContext } from "react";
import { StoreContext } from "../utils/store";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(StoreContext);

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>Quantity: {product.quantity}</p>
            <p>Price: ${product.price * product.quantity}</p>
            <button
              onClick={() => updateQuantity(product.id, product.quantity + 1)}
            >
              +
            </button>
            <button
              onClick={() => updateQuantity(product.id, product.quantity - 1)}
            >
              -
            </button>
            <button onClick={() => removeFromCart(product.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
