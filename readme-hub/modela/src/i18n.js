import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: localStorage.getItem("language") || "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: require("./i18n/en.json"),
    },
    es: {
      translation: require("./i18n/es.json"),
    },
    fr: {
      translation: require("./i18n/fr.json"),
    },
    de: {
      translation: require("./i18n/de.json"),
    },
  },
});

export default i18n;
