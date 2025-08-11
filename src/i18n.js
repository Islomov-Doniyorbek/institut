import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const GOOGLE_API_KEY = "AIzaSyASvTS0qWjqzaptSXhbrLpvvS54I_Uy1Ho";

// Kesh saqlash (localStorage)
const cacheKey = "translations_cache";
let translationsCache = JSON.parse(localStorage.getItem(cacheKey) || "{}");

async function translateText(text, targetLang) {
  const cacheId = `${targetLang}_${text}`;
  if (translationsCache[cacheId]) {
    return translationsCache[cacheId];
  }

  const res = await fetch(
    `https://translation.googleapis.com/language/translate/v2?key=${GOOGLE_API_KEY}`,
    {
      method: "POST",
      body: JSON.stringify({
        q: text,
        target: targetLang,
        source: "uz"
      }),
      headers: { "Content-Type": "application/json" }
    }
  );

  const data = await res.json();
  const translated = data.data?.translations?.[0]?.translatedText || text;

  translationsCache[cacheId] = translated;
  localStorage.setItem(cacheKey, JSON.stringify(translationsCache));

  return translated;
}

async function buildTranslations() {
  const baseLang = {
    welcome: "Salom, dunyo!",
    description: "Bu avtomatik tarjima qilingan sayt.",
    button: "Bosish"
  };

  const languages = {
    uz: baseLang,
    ru: {},
    en: {}
  };

  for (let key of Object.keys(baseLang)) {
    languages.ru[key] = await translateText(baseLang[key], "ru");
    languages.en[key] = await translateText(baseLang[key], "en");
  }

  return languages;
}

(async () => {
  const resources = await buildTranslations();

  i18n
    .use(initReactI18next)
    .init({
      resources: {
        uz: { translation: resources.uz },
        ru: { translation: resources.ru },
        en: { translation: resources.en }
      },
      lng: "uz",
      fallbackLng: "uz",
      interpolation: {
        escapeValue: false
      }
    });
})();

export default i18n;
