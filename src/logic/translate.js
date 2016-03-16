import store from '../store';
import { isUndefined, isObject, isString } from 'lodash';
import translations from 'data/translations.json';

export default function translate(value) {
  const language = store.getState().app.language;

  // multilanguage text object
  if (isObject(value) && 'de' in value && 'en' in value) {
    return value[language];
  }

  // simple string
  if (isString(value)) {
    const translated = ((translations[value] || {})[language]);
    if (isUndefined(translated)) {
      if (__DEV__) {
        console.warn(
          `Translation for "${ value }" (${ language }) is missing.`
        ); // eslint-disable-line no-console
      }
      return value;
    }
    return translated;
  }
  return value;
}
