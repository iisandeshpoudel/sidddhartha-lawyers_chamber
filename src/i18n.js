import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import ne from "./locales/ne.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ne: { translation: ne },
  },
  lng: "en",             // 👈 default language
  fallbackLng: "en",     // 👈 fallback if translation is missing
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
