import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { Product } from "../types";

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState<{ [id: number]: Product }>({});

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const addToCart = (product: Product) => {
    setCart((prevCart) => ({ ...prevCart, [product.id]: product }));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Simple E-Commerce</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>Products</h2>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      )}
      <Link to="/cart">View Cart</Link>
    </div>
  );
};

export default Home;
