import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";

const App: React.FC = () => {
  const [cart, setCart] = useState<{ [id: number]: Product }>({});

  const addToCart = (product: Product) => {
    setCart((prevCart) => ({ ...prevCart, [product.id]: product }));
  };

  const removeFromCart = (product: Product) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      delete newCart[product.id];
      return newCart;
    });
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

  const decreaseQuantity = (product: Product) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[product.id] && newCart[product.id].quantity > 1) {
        newCart[product.id].quantity--;
      } else {
        delete newCart[product.id];
      }
      return newCart;
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home cart={cart} addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />
          }
        />
        <Route
          path="/products/:id"
          element={
            <ProductDetail
              cart={cart}
              addToCart={addToCart}
              increaseQuantity={increaseQuantity}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
