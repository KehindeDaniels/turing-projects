// components/Cart.js
import React from "react";
import { useTranslation } from "react-i18next";

const Cart = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("cart")}</h1>
      <p>Selected items will be displayed here</p>
    </div>
  );
};

export default Cart;
