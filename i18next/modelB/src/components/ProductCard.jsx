// Import the required modules
import React from "react";
import { useTranslation } from "react-i18next";

// Define the ProductCard component
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

// Export the ProductCard component
export default ProductCard;
