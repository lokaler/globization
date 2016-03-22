import { UPDATE_POS, UPDATE_PATH, CHANGE_TYPE, CHANGE_VIS } from '../constants/ActionTypes';

const initialState = {
  debug: false,
  mapData: [],
  latlng: [0, 0],
  paths: [],
  initialScale: 245,
  scale: 245,
  zoom: 1,
  rotate: [0, 0],
  translate: [0, 0],
  type: 'globe',
  animation: null,
  active: null,
  tooltip: {
    active: false,
    text: 'Testtooltip',
    x: 200,
    y: 200
  }
};

export default function vis(state = initialState, action) {
  switch (action.type) {

    case UPDATE_POS:
      return {
        ...state,
        latlng: action.latlng
      };

    case UPDATE_PATH:
      return {
        ...state,
        paths: action.paths
      };

    case CHANGE_TYPE:
      return {
        ...state,
        type: action.val
      };

    case CHANGE_VIS:
      return {
        ...state,
        ...action.val
      };

    default:
      return state;
  }
}
