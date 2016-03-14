/* eslint-disable */

import * as ActionTypes from '../constants/ActionTypes';
import objectAssign from 'object-assign';

import master from '../data/master.csv';
import worldData from '../data/world-110m.json';
import topojson from 'topojson';
import d3 from 'd3';
import _ from 'lodash';

// const masterMap = d3.map(master, (d) => { d.alpha3 });
// console.log(d3.max(dataset1, function(d){ return d.value*1; }));
// console.log(JSON.stringify(dataset1));

function makeTopoJson(){
  const t = topojson.feature(worldData, worldData.objects.countries).features;
  t.forEach((d)=> {
    const e = _.find(master, { numeric: d.id+""});
    d.properties.iso = e ? e.alpha3 : "";
  });
  return t;
}


function parseMaster(){
  master.forEach( (d) => {
    d.gdp = d.gdp == "#NV" ? NaN : d.gdp;
    d.gdp = Number(d.gdp);

    // console.log(d.name, d.alpha3,d.gdp);
  })
  return master;
}


const initialState = {
  dataset: null,
  datasets: [],
  topojson: makeTopoJson(),
  master: parseMaster()
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
