import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import cookie from "react-cookies";

import Uz from "./TranslationUz/Uz.json";
import Ru from "./TranslationRu/Ru.json";
import En from "./TranslationEn/En.json";

const resources = {
  en: { translation: En },
  uz: { translation: Uz },
  ru: { translation: Ru }
};

i18n
  .use(initReactI18next) // react-i18next ulanishi
  .init({
    resources,
    lng: cookie.load("tilTanish") ? cookie.load("tilTanish") : "uz", // boshlang‘ich til
    fallbackLng: "uz", // agar til topilmasa
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

