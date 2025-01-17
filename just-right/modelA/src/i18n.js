// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "./locales/en.json";
import arTranslations from "./locales/ar.json";

i18n.use(initReactI18next).init({
  lng: "en", // default language
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources: {
    en: {
      translation: enTranslations,
    },
    ar: {
      translation: arTranslations,
    },
  },
});

export default i18n;
