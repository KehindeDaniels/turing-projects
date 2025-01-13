import React from "react";
import Cart from "../components/CartPage";
import { CartItem } from "../models/cartItem";
import { Product } from "../models/product";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);

  const handleRemoveFromCart = (product: Product) => {
    // Remove from cart logic
  };

  const handleIncreaseQuantity = (product: Product) => {
    // Increase quantity logic
  };

  const handleDecreaseQuantity = (product: Product) => {
    // Decrease quantity logic
  };

  return (
    <div>
      <Cart
        cartItems={cartItems}
        removeFromCart={handleRemoveFromCart}
        increaseQuantity={handleIncreaseQuantity}
        decreaseQuantity={handleDecreaseQuantity}
      />
      <p>Total: ${total}</p>
    </div>
  );
};

export default CartPage;
