import store from '../store';
import { isObject } from 'lodash';

export default function translate(value) {
  const language = store.getState().app.language;
  // multilanguage text object
  if (isObject(value) && 'de' in value && 'en' in value) {
    return value[language];
  }
  return value;
}
