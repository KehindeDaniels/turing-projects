import React from "react";

const CartItem = ({ item, onUpdateCart, onRemoveFromCart }) => {
  return (
    <li>
      <h2>{item.name}</h2>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => onUpdateCart(item.id, item.quantity + 1)}>
        +
      </button>
      <button onClick={() => onUpdateCart(item.id, item.quantity - 1)}>
        -
      </button>
      <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
    </li>
  );
};

export default CartItem;
