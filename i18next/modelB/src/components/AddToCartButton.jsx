// Import the required modules
import React from "react";
import { useTranslation } from "react-i18next";

// Define the AddToCartButton component
const AddToCartButton = () => {
  const { t } = useTranslation();

  return <button aria-label={t("aria.cartButton")}>{t("addToCart")}</button>;
};

// Export the AddToCartButton component
export default AddToCartButton;
