import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header aria-label={t("aria.navigation")}>
      <nav>
        <ul>
          <li>
            <a href="/">{t("welcome")}</a>
          </li>
          <li>
            <a href="/cart">{t("cart")}</a>
          </li>
        </ul>
      </nav>
      <LanguageSwitcher />
    </header>
  );
};

export default Header;
