/* eslint-disable */

import * as ActionTypes from '../constants/ActionTypes';
import objectAssign from 'object-assign';
import worldData from '../data/world-110m.json';

const initialState = {
  mapData: [],
  latlng: [0, 0],
  paths: [],
  worldData,
  type: 'globe'
};

export default function vis(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.UPDATE_POS:
      return objectAssign({}, state, { latlng: action.latlng });
    case ActionTypes.UPDATE_PATH:
      return objectAssign({}, state, { paths: action.paths });
    default:
      return state;
  }
}
