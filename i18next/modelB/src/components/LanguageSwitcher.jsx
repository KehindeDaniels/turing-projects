// Import the required modules
import React from "react";
import { useTranslation } from "react-i18next";

// Define the LanguageSwitcher component
const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("fr")}>Français</button>
      <button onClick={() => changeLanguage("es")}>Español</button>
      <button onClick={() => changeLanguage("zh")}>中文</button>
    </div>
  );
};

// Export the LanguageSwitcher component
export default LanguageSwitcher;
