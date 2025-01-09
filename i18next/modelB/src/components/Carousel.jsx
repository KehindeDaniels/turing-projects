// Import the required modules
import React from "react";
import { useTranslation } from "react-i18next";
import ProductCard from "./ProductCard";

// Define the products array
const products = [
  { name: "braille" },
  { name: "wheelchair" },
  { name: "walkingStick" },
];

// Define the Carousel component
const Carousel = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("welcome")}</h1>
      <div>
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
};

// Export the Carousel component
export default Carousel;
