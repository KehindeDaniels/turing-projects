// src/LanguageSwitcher.js
import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
  };

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>
        {i18n.t("languageSwitcher.english")}
      </button>
      <button onClick={() => changeLanguage("ar")}>
        {i18n.t("languageSwitcher.arabic")}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
