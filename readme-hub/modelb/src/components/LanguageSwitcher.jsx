import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  const changeLanguage = (language) => {
    setLang(language);
    localStorage.setItem("lang", language);
  };

  return (
    <div>
      <button
        className={lang === "en" ? "bg-gray-300" : ""}
        onClick={() => changeLanguage("en")}
      >
        English
      </button>
      <button
        className={lang === "es" ? "bg-gray-300" : ""}
        onClick={() => changeLanguage("es")}
      >
        Español
      </button>
      <button
        className={lang === "fr" ? "bg-gray-300" : ""}
        onClick={() => changeLanguage("fr")}
      >
        Français
      </button>
      <button
        className={lang === "de" ? "bg-gray-300" : ""}
        onClick={() => changeLanguage("de")}
      >
        Deutsch
      </button>
    </div>
  );
}

export default LanguageSwitcher;
