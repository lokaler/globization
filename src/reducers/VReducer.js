/* eslint-disable */

import * as ActionTypes from '../constants/ActionTypes';
import objectAssign from 'object-assign';
import worldData from '../data/world-110m.json';
import topojson from 'topojson';

const initialState = {
  debug:true,
  mapData: [],
  latlng: [0, 0],
  paths: [],
  initialScale: 245,
  scale: 245,
  zoom: 1,
  rotate: [0, 0],
  topojson: topojson.feature(worldData, worldData.objects.countries).features,
  translate: [0, 0],
  type: 'globe',
  animation:null
};

function findeCountry(name){
  console.log(name);
}

export default function vis(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.UPDATE_POS:
      return objectAssign({}, state, { latlng: action.latlng });
    case ActionTypes.UPDATE_PATH:
      return objectAssign({}, state, { paths: action.paths });
    case ActionTypes.CHANGE_TYPE:
      return objectAssign({}, state, { type: action.val });
    case ActionTypes.ZOOM_TO_COUNTRY:
      findeCountry(action.name);
      return objectAssign({}, state, { type: action.name });
    case ActionTypes.CHANGE_VIS:
      return objectAssign({}, state,  action.val );
    default:
      return state;
  }
}
