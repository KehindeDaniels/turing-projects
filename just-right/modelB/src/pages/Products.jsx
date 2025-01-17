// src/pages/Products.js
import { useTranslation } from "react-i18next";
import products from "../data/products.json";
import Product from "../components/Product";

const Products = () => {
  const { t } = useTranslation();

  return (
    <div className="products">
      <h1>{t("products.title")}</h1>
      <p>{t("products.description")}</p>
      <div className="products-list">
        {products.map((product) => (
          <Product key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
