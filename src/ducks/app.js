import { includes } from 'lodash';
import { getQueryVariable } from 'logic/url';

export const GET_URL_PARAMETERS = 'GET_URL_PARAMETERS';
const SET_WINDOW_SIZE = 'SET_WINDOW_SIZE';

const initialState = {
  language: 'de',
  mobile: false,
  width: 860,
  height: 500
};

export function reducer(state = initialState, action) {
  switch (action.type) {

    case GET_URL_PARAMETERS: {
      const { language, mobile } = action;
      return { ...state, language, mobile };
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
    let language = getQueryVariable('language') || 'de';
    if (!includes(['de', 'en'], language)) language = 'de';
    const mobile = !!parseInt(getQueryVariable('mobile') || '0', 10);
    const round = getQueryVariable('round') || null;
    return { type: GET_URL_PARAMETERS, language, mobile, round };
  },

  setWindowSize: (sizes) => (
    { type: SET_WINDOW_SIZE, sizes }
  )
};
