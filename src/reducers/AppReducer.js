import * as ActionTypes from '../constants/ActionTypes';
import { contains } from 'lodash';

const initialState = {
  language: 'de',
  mobile: false
};

function getQueryVariable(variable) {
  const query = window.location.search.substring(1);
  const vars = query.split('&');
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split('=');
    if (decodeURIComponent(pair[0]) === variable) {
      return decodeURIComponent(pair[1]);
    }
  }
}

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.GET_URL_PARAMETERS: {
      let language = getQueryVariable('language') || 'de';
      if (!contains(['de', 'en'], language)) language = 'de';
      const mobile = !!parseInt(getQueryVariable('mobile') || '0', 10);
      return Object.assign({}, { language, mobile });
    }
    default:
      return state;
  }
}
