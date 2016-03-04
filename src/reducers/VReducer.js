/* eslint-disable */

import * as ActionTypes from '../constants/ActionTypes';
import objectAssign from 'object-assign';
import worldData from '../data/world-110m.json';
import topojson from 'topojson';

const initialState = {
  mapData: [],
  latlng: [0, 0],
  paths: [],
  initialScale: 245,
  scale: 245,
  zoom: 1,
  rotate: [0, 0],
  topojson: topojson.feature(worldData, worldData.objects.countries).features,
  translate: [0, 0],
  type: 'map'
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
