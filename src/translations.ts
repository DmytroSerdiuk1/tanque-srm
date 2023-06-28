import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const en = require('./translations/en.json');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const uk = require('./translations/uk.json');

const resources = {
	en: {  ...en },
	uk: {  ...uk },
};


i18next.use(LanguageDetector).use(initReactI18next).init({
	fallbackLng: 'en',
	debug: true,
	resources,
	interpolation: {
		escapeValue: false // react already safes from xss
	}
});