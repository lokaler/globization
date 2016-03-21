/* eslint-disable */

import * as ActionTypes from '../constants/ActionTypes';
import objectAssign from 'object-assign';

const initialState = {
  debug:false,
  mapData: [],
  latlng: [0, 0],
  paths: [],
  initialScale: 245,
  scale: 245,
  zoom: 1,
  rotate: [0, 0],
  translate: [0, 0],
  type: 'globe',
  animation:null,
  active:null,
  tooltip: {
    active:false,
    text: "Testtooltip",
    x: 200,
    y: 200
  }
};



export default function vis(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.UPDATE_POS:
      return objectAssign({}, state, { latlng: action.latlng });
    case ActionTypes.UPDATE_PATH:
      return objectAssign({}, state, { paths: action.paths });
    case ActionTypes.CHANGE_TYPE:
      return objectAssign({}, state, { type: action.val });
    case ActionTypes.CHANGE_VIS:
      return objectAssign({}, state,  action.val );
    default:
      return state;
  }
}
