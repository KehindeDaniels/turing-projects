// src/ProductList.js
import React from "react";
import { useTranslation } from "react-i18next";
import products from "./products.json";

const ProductList = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t("products.title")}</h2>
      <p>{t("products.description")}</p>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <h3>
              {t("product.name")}: {product.name}
            </h3>
            <p>
              {t("product.description")}: {product.description}
            </p>
            <p>
              {t("product.price")}: {product.price}
            </p>
            <p>
              {t("product.category")}: {product.category}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
