// src/App.js
import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import ProductList from "./ProductList";

function App() {
  const { t } = useTranslation();

  return (
    <div>
      <header>
        <h1>{t("header.title")}</h1>
        <p>{t("header.description")}</p>
        <LanguageSwitcher />
      </header>
      <main>
        <ProductList />
      </main>
    </div>
  );
}

export default App;
