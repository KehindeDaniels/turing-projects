// LanguageSwitcher.jsx
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.language = lng;
    document.dir = lng === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lng;
  };

  return (
    <div className="language-switcher">
      <button onClick={() => changeLanguage("en")}>
        {t("languageSwitcher.english")}
      </button>
      <button onClick={() => changeLanguage("ar")}>
        {t("languageSwitcher.arabic")}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
