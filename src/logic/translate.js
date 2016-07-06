import store from 'store';
import { isObject, isString, get } from 'lodash';
import translations from 'data/translations.json';
import master from 'data/map/master.csv';


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
    return get(countries, path);
  }

  // for numbers and strings which are parsable as numbers
  const _isNumber = !isNaN(value);
  const _isNumberString = (
    isString(value)
    && !isNaN(Number(value.replace(/,/g, '')))
  );
  if (_isNumber || _isNumberString) {
    const v = _isNumberString ? Number(value.replace(/,/g, '')) : value;
    let translated = v.toString();
    if (v >= 1000 && v < 1000000) {
      translated = (v / 1000).toFixed(2).toString().replace('.00', '');
      translated += language === 'de' ? ' Tsd' : 'k';
    }
    if (v >= 1000000) {
      translated = (v / 1000000).toFixed(2).toString().replace('.00', '');
      translated += language === 'de' ? ' Mio' : 'M';
    }

    if (language === 'de') {
      translated = translated.replace(/,/g, '_');
      translated = translated.replace(/\./g, ',');
      translated = translated.replace(/_/g, '.');
    }
    return translated;
  }

  // simple string
  if (isString(value)) {
    const translated = ((translations[value] || {})[language]);
    return isString(translated) ? translated : value;
  }

  return value;
}
