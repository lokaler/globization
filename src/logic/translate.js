import store from '../store';
import { isUndefined, isObject, isString, get } from 'lodash';
import translations from 'data/translations.json';
import master from 'data/master.csv';

const countries = {};
for (const c of master) {
  const isoCode = c.alpha3;
  countries[isoCode] = {
    en: {
      default: c.name,
      locative: c.locaEN
    },
    de: {
      default: c.name_deu,
      locative: c.loca
    }
  };
}

export default function translate(value, options = {}) {
  const language = store.getState().app.language;

  // multilanguage text object
  if (isObject(value) && 'de' in value && 'en' in value) {
    return value[language];
  }

  // simple string that is a country iso code
  if (options.isCountryCode) {
    const case_ = options.case || 'default';
    const path = `${value }.${ language }.${ case_ }`;
    console.log('parh', path);
    return get(countries, path);
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
