// components/Carousel.js
import React from "react";
import { useTranslation } from "react-i18next";
import ProductCard from "./ProductCard";

const products = [
  { name: "braille" },
  { name: "wheelchair" },
  { name: "walkingStick" },
];

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

export default Carousel;
