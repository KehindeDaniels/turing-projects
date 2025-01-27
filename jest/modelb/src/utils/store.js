// src/utils/store.js
import { createContext, useState } from "react";

const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const updateProduct = (id, product) => {
    const updatedProducts = products.map((p) => (p.id === id ? product : p));
    setProducts(updatedProducts);
  };

  const deleteProduct = (id) => {
    const updatedProducts = products.filter((p) => p.id !== id);
    setProducts(updatedProducts);
  };

  const addToCart = (product) => {
    const existingProduct = cart.find((p) => p.id === product.id);
    if (existingProduct) {
      const updatedCart = cart.map((p) =>
        p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((p) => p.id !== id);
    setCart(updatedCart);
  };

  const updateQuantity = (id, quantity) => {
    const updatedCart = cart.map((p) => (p.id === id ? { ...p, quantity } : p));
    setCart(updatedCart);
  };

  return (
    <StoreContext.Provider
      value={{
        products,
        cart,
        loading,
        addProduct,
        updateProduct,
        deleteProduct,
        addToCart,
        removeFromCart,
        updateQuantity,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export { StoreProvider, StoreContext };
