/* eslint-disable */

import * as ActionTypes from '../constants/ActionTypes';
import objectAssign from 'object-assign';

// import dataset1 from '../data/dataset1.csv';
import master from '../data/master.csv';
import d3 from 'd3';

// const masterMap = d3.map(master, (d) => { d.alpha3 });
// console.log(d3.max(dataset1, function(d){ return d.value*1; }));
// console.log(JSON.stringify(dataset1));

const initialState = {
  dataset: null,
  datasets: [],
  master
};

export default function questions(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.RECEIVE_DATASETS: {
      return objectAssign({}, state, { dataset: action.data[0], datasets: action.data });
    }
    case ActionTypes.SET_DATASET: {
      const newDataSet = state.datasets.filter((d,i) => d.name == action.name)[0];
      return objectAssign({}, state, { dataset: newDataSet });
    }
    default:
      return state;
  }
}
