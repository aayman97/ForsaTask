import LocalizedStrings from 'react-native-localization';
import english from './en';
import arabic from './ar';

export const strings = new LocalizedStrings({
  en: english,
  ar: arabic,
});

export const changeLanguage = languageKey => {
  strings.setLanguage(languageKey);
};

export const getLanguage = () => {
  return strings.getLanguage();
};
