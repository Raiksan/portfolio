import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ptBrTranslations from './locales/pt/translation.json';
import enTranslations from './locales/en/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      pt: {
        translation: ptBrTranslations,
      },
      en: {
        translation: enTranslations,
      },
    },
    fallbackLng: 'en',

    detection: {
      order: [`querystring`,'localStorage', 'navigator'],
      caches: ['localStorage'], 
    },
    
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;