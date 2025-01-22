import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: require("../public/locales/en/translation.json"),
    },
    es: {
      translation: require("../public/locales/es/translation.json"),
    },
    fr: {
      translation: require("../public/locales/fr/translation.json"),
    },
    de: {
      translation: require("../public/locales/de/translation.json"),
    },
  },
});

export default i18n;
