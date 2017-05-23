import { includes } from 'lodash';
import { getQueryVariable } from 'logic/url';
// import d3 from 'd3';

export const GET_URL_PARAMETERS = 'GET_URL_PARAMETERS';
export const GET_STORED_VALUES = 'GET_STORED_VALUES';
const SET_WINDOW_SIZE = 'SET_WINDOW_SIZE';
const SET_FULLSCREEN = 'SET_FULLSCREEN';

const initialState = {
  language: 'de',
  width: 640,
  height: 650,
  fullscreen: false,
  mobile: false,
  mounted: false
};


export function reducer(state = initialState, action) {
  switch (action.type) {

    case GET_URL_PARAMETERS: {
      const { language, round, vis, dataset, country } = action;
      return { ...state, language, round, vis, dataset, country };
    }

    case SET_WINDOW_SIZE: {
      const mobile = action.sizes.width < 600;
      return { ...state, ...action.sizes, mobile, mounted: true };
    }

    case SET_FULLSCREEN: {
      const fullscreen = action.fullscreen;
      return { ...state, fullscreen };
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
    const vis = q('vis') || null;
    const dataset = q('dataset') || null;
    const country = q('country') || null;
    return { type: GET_URL_PARAMETERS, language, round, card, vis, dataset, country };
  },

  getStoredValues: () => {
    let debugExpressions = localStorage.getItem('debugExpressions');
    debugExpressions = { true: true, false: false }[debugExpressions] || false;
    return { type: GET_STORED_VALUES, debugExpressions };
  },

  setWindowSize: (sizes) => (
    { type: SET_WINDOW_SIZE, sizes }
  ),

  setFullscreen: (fullscreen) => (
    { type: SET_FULLSCREEN, fullscreen }
  )
};
