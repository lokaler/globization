/* eslint-disable */

import * as ActionTypes from '../constants/ActionTypes';

import dataset1 from '../data/dataset1.csv';
import master from '../data/master.csv';
import d3 from 'd3';

// const masterMap = d3.map(master, (d) => { d.alpha3 });

const initialState = {
  dataset: {
    name: 'bevölkerung',
    domain: [0, d3.max(dataset1, function(d){ return d.value*1; })],
    data: dataset1
  },
  master
};

export default function questions(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.FOO:
      return state;
    default:
      return state;
  }
}
