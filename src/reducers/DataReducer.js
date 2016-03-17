/* eslint-disable */

import * as ActionTypes from '../constants/ActionTypes';
import objectAssign from 'object-assign';

import master from '../data/master.csv';
import worldData from '../data/world-110m.json';
// import worldDataHk from '../data/hk2.json';
import topojson from 'topojson';
import d3 from 'd3';
import _ from 'lodash';

// const masterMap = d3.map(master, (d) => { d.alpha3 });
// console.log(d3.max(dataset1, function(d){ return d.value*1; }));
// console.log(JSON.stringify(dataset1));

function makeTopoJson(){
  // console.log(worldData, worldDataHk);
  const t = topojson.feature(worldData, worldData.objects.countries).features;
  // const t2 = topojson.feature(worldDataHk, worldDataHk.objects.collection).features;
  // console.log(t[0], t2[1]);
  // console.log(t, t2);
  t.forEach((d)=> {
    const e = _.find(master, { numeric: d.id+""});
    d.properties.iso = e ? e.alpha3 : "";
  });
  return t;
}


function parseMaster(){
  master.forEach( (d) => {
    d.gdp = Number(d.gdp);
    d.population = Number(d.population);
    d.vergleich = d.gdp / d.population;
  })
  return master;
}

function prepareDataset(dataset){
  dataset.data.forEach((d) => {
    let e = _.find(master, { alpha3: d.iso });
    let t = _.find(this.topojson, (c) => c.properties.iso == d.iso);
    d.onMap = t !== undefined;
    d.vergleich = e.vergleich;
  })

  dataset.vergleichDomain = d3.extent(dataset.data, function(d) { return d.vergleich; })
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
      action.data.forEach(prepareDataset.bind(state));

      return objectAssign({}, state, { dataset: action.data[0], datasets: action.data });
    }
    case ActionTypes.SET_DATASET: {
      const newDataSet = state.datasets.filter((d,i) => d.key === action.name)[0];
      return objectAssign({}, state, { dataset: newDataSet });
    }
    default:
      return state;
  }
}
