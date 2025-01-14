import React from "react";
import { Link } from "react-router-dom";
import CartProductCard from "../components/CartProductCard";
import { Product } from "../types";

interface Props {
  cart: { [id: number]: Product };
  removeFromCart: (product: Product) => void;
  increaseQuantity: (product: Product) => void;
  decreaseQuantity: (product: Product) => void;
}

const Cart: React.FC<Props> = ({
  cart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}) => {
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
              quantity={cart[Number(id)].quantity || 1}
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
