import React from "react";
import { useTranslation } from "react-i18next";

const AddToCartButton = () => {
  const { t } = useTranslation();

  return <button aria-label={t("aria.cartButton")}>{t("addToCart")}</button>;
};

export default AddToCartButton;
