// src/pages/Products.js
import React, { useEffect } from "react";
import { useContext } from "react";
import { StoreContext } from "../utils/store";
import Product from "../components/Product";
import api from "../utils/api";

const Products = () => {
  const { products, setProducts } = useContext(StoreContext);

  useEffect(() => {
    api.getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Product product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
