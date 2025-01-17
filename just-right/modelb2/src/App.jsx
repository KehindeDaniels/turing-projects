// src/App.js
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Products from "./pages/Products";

function App() {
  const { t } = useTranslation();

  return (
    <div className="app">
      <header className="header">
        <h1>{t("header.title")}</h1>
        <nav>
          <ul>
            <li>{t("header.navigationBar.home")}</li>
            <li>{t("header.navigationBar.products")}</li>
          </ul>
        </nav>
        <LanguageSwitcher />
      </header>
      <main>
        <Products />
      </main>
    </div>
  );
}

export default App;
