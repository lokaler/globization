import { includes } from 'lodash';
import { getQueryVariable } from 'logic/url';
import d3 from 'd3';

export const GET_URL_PARAMETERS = 'GET_URL_PARAMETERS';
export const GET_STORED_VALUES = 'GET_STORED_VALUES';
const SET_WINDOW_SIZE = 'SET_WINDOW_SIZE';

const initialState = {
  language: 'de',
  width: 860,
  height: 500
};


export function reducer(state = initialState, action) {
  switch (action.type) {

    case GET_URL_PARAMETERS: {
      const { language, mobile, width, round } = action;
      return { ...state, language, mobile, width, round };
    }

    case SET_WINDOW_SIZE: {
      const mobile = action.sizes.width < 600;
      return { ...state, ...action.sizes, mobile };
    }

    default:
      return state;
  }
}

export const actions = {

  getUrlParameters: () => {
    const q = getQueryVariable;
    let language = q('language') || 'de';
    if (!includes(['de', 'en'], language)) language = 'de';
    // const mobile = !!parseInt(q('mobile') || '0', 10);
    const round = q('round') || null;
    const card = parseInt(q('card'), 10) || 0;
    const bbox = d3.select('body').node().getBoundingClientRect();
    const mobile = bbox.width < 600;
    return { type: GET_URL_PARAMETERS, language, round, card, mobile,
      width: bbox.width };
  },

  getStoredValues: () => {
    let debugExpressions = localStorage.getItem('debugExpressions');
    debugExpressions = { true: true, false: false }[debugExpressions] || false;
    return { type: GET_STORED_VALUES, debugExpressions };
  },

  setWindowSize: (sizes) => (
    { type: SET_WINDOW_SIZE, sizes }
  )
};
