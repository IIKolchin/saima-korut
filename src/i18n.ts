import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationFIN from './locales/fin/translation.json';
import translationEN from './locales/en/translation.json';

const defaultLanguage = 'Suomi';

i18n
  // .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      Suomi: { translation: translationFIN },
      Englanti: { translation: translationEN },
    },
    fallbackLng: defaultLanguage,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;