import * as ActionTypes from '../constants/ActionTypes';
import { includes } from 'lodash';
import d3 from 'd3';
const bbox = d3.select('body').node().getBoundingClientRect();
const width = bbox.width > 860 ? 860 : bbox.width;

const initialState = {
  language: 'de',
  mobile: false,
  width,
  height: 500
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
      if (!includes(['de', 'en'], language)) language = 'de';
      const mobile = !!parseInt(getQueryVariable('mobile') || '0', 10);
      return Object.assign({}, state, { language, mobile });
    }
    case ActionTypes.SET_WINDOW_SIZE: {
      return Object.assign({}, state, { ...action.sizes });
    }
    case ActionTypes.SPON_LOGGER: {
      const sponFrame = window.parent.$ || false;
      // console.log('logger', sponFrame);
      if (sponFrame) {
        sponFrame().spInterface('reCountPage',
          { countIVW: true, newParamsOnly: false, params: null });
      }
      return state;
    }
    default:
      return state;
  }
}
