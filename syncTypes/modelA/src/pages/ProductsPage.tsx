import React, { useState, useEffect } from "react";
import { getProducts } from "../services/api";
import ProductCard from "../components/ProductCard";
import { Product } from "../models/product";

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div>
      <h1>Products</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={handleAddToCart}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
