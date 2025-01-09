// Import the required modules
import React from "react";
import { useTranslation } from "react-i18next";

// Define the Cart component
const Cart = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("cart")}</h1>
      <p>Selected items will be displayed here</p>
    </div>
  );
};

// Export the Cart component
export default Cart;
