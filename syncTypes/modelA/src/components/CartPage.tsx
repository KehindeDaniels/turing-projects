import React from "react";
import { CartItem } from "../models/cartItem";

interface Props {
  cartItems: CartItem[];
  removeFromCart: (product: Product) => void;
  increaseQuantity: (product: Product) => void;
  decreaseQuantity: (product: Product) => void;
}

const CartPage: React.FC<Props> = ({
  cartItems,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}) => {
  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {cartItems.map((item) => (
            <li
              key={item.product.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "300px",
                marginBottom: "10px",
              }}
            >
              <span>
                {item.product.title} - ${item.product.price} x {item.quantity}
              </span>
              <div>
                <button onClick={() => decreaseQuantity(item.product)}>
                  -
                </button>
                <button onClick={() => increaseQuantity(item.product)}>
                  +
                </button>
                <button onClick={() => removeFromCart(item.product)}>
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
