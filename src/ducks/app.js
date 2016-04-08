import d3 from 'd3';
import { includes } from 'lodash';
import { getQueryVariable } from 'logic/url';

const GET_URL_PARAMETERS = 'GET_URL_PARAMETERS';
const SET_WINDOW_SIZE = 'SET_WINDOW_SIZE';

const bbox = d3.select('body').node().getBoundingClientRect();
const width = Math.min(bbox.width, 860);

const initialState = {
  language: 'de',
  mobile: false,
  width,
  height: 500
};

export function reducer(state = initialState, action) {
  switch (action.type) {

    case GET_URL_PARAMETERS: {
      let language = getQueryVariable('language') || 'de';
      if (!includes(['de', 'en'], language)) language = 'de';
      const mobile = !!parseInt(getQueryVariable('mobile') || '0', 10);
      return { ...state, language, mobile };
    }

    case SET_WINDOW_SIZE: {
      return { ...state, ...action.sizes };
    }

    default:
      return state;
  }
}

export const actions = {
  getUrlParameters: () => (
    { type: GET_URL_PARAMETERS }
  ),
  setWindowSize: (sizes) => (
    { type: SET_WINDOW_SIZE, sizes }
  )
};
