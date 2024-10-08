// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "welcome": "Welcome to my portfolio",
      "submit": "Submit",
      "message": "Message",
      // Ajoutez d'autres traductions ici
    }
  },
  fr: {
    translation: {
      "welcome": "Bienvenue dans mon portfolio",
      "submit": "Envoyer",
      "message": "Message",
      "Home": "Accueil",
      // Ajoutez d'autres traductions ici
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "fr", // Langue par défaut modifiée en français
    fallbackLng: "fr", // Langue de secours
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;