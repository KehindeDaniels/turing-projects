import React, { useState } from "react";

const App: React.FC = () => {
  const products = [
    { id: 1, name: "Apple Watch", price: 300, image: "" },
    { id: 2, name: "Electric fan", price: 80, image: "" },
    { id: 3, name: "MAc book promax", price: 1300, image: "" },
  ];

  const [cart, setCart] = useState({ items: [], total: 0 });

  const addToCart = (product) => {
    setCart((prevCart) => ({
      items: [...prevCart.items, product],
      total: prevCart.total + product.price,
    }));
  };

  const removeFromCart = (index) => {
    const itemToRemove = cart.items[index];
    setCart((prevCart) => ({
      items: prevCart.items.filter((_, i) => i !== index),
      total: prevCart.total - itemToRemove.price,
    }));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Simple E-Commerce</h1>

      <div>
        <h2>Products</h2>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              marginBottom: "10px",
              display: "flex",
              justifyContent: "space-between",
              width: "300px",
            }}
          >
            <span>
              {product.name} - ${product.price}
            </span>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: "20px",
          borderTop: "2px solid #ccc",
          paddingTop: "10px",
        }}
      >
        <h2>Cart</h2>
        {cart.items.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {cart.items.map((item, index) => (
              <li
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "300px",
                  marginBottom: "10px",
                }}
              >
                <span>
                  {item.name} - ${item.price}
                </span>
                <button onClick={() => removeFromCart(index)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
        <p>
          <strong>Total: ${cart.total}</strong>
        </p>
      </div>
    </div>
  );
};

export default App;
