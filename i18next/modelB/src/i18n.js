// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import languageData from "./languages.json";

i18n.use(initReactI18next).init({
  resources: languageData,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
