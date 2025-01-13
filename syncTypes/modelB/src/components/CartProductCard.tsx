import React from "react";
import { Product } from "../types";

interface Props {
  product: Product;
  quantity: number;
  removeFromCart: (product: Product) => void;
  increaseQuantity: (product: Product) => void;
  decreaseQuantity: (product: Product) => void;
}

const CartProductCard: React.FC<Props> = ({
  product,
  quantity,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}) => {
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
        {product.title} - ${product.price} x {quantity}
      </span>
      <div>
        <button onClick={() => decreaseQuantity(product)}>-</button>
        <button onClick={() => increaseQuantity(product)}>+</button>
        <button onClick={() => removeFromCart(product)}>Remove</button>
      </div>
    </div>
  );
};

export default CartProductCard;
