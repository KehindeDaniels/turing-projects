// components/ProductCard.js
import React from "react";
import { useTranslation } from "react-i18next";
import AddToCartButton from "./AddToCartButton";

const ProductCard = ({ product }) => {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t(`products.${product.name}`)}</h2>
      <p>{t(`aria.${product.name}Description`)}</p>
      <AddToCartButton />
    </div>
  );
};

export default ProductCard;
