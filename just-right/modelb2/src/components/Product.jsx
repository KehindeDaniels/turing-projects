// src/components/Product.js
import { useTranslation } from "react-i18next";

const Product = ({ product }) => {
  const { t } = useTranslation();

  return (
    <div className="product">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>
        {t("product.price")}:{" "}
        <span style={{ fontWeight: "bold" }}>{product.price}</span>
      </p>
      <p>
        {t("product.category")}:{" "}
        <span style={{ fontWeight: "bold" }}>{product.category}</span>
      </p>
    </div>
  );
};

export default Product;
