import _ from 'lodash';
import d3 from 'd3';
import topojson from 'topojson';

import { RECEIVE_DATASETS, SET_DATASET } from '../constants/ActionTypes';
import master from 'data/master.csv';
import worldData from 'data/world-110m.json';

function makeTopoJson() {
  const t = topojson.feature(worldData, worldData.objects.countries).features;
  for (const d of t) {
    const e = _.find(master, { numeric: d.id.toString() });
    d.properties.iso = e ? e.alpha3 : '';
  }
  return t;
}

function parseMaster(data) {
  for (const d of data) {
    d.gdp = Number(d.gdp);
    d.population = Number(d.population);
    d.vergleich = d.gdp / d.population;
  }
  return data;
}

function prepareDataset(dataset) {
  for (const d of dataset.data) {
    const e = _.find(master, { alpha3: d.iso });
    const t = _.find(this.topojson, (c) => c.properties.iso === d.iso);
    d.onMap = t !== undefined;
    d.vergleich = e.vergleich;
  }
  /* eslint-disable */
  dataset.vergleichDomain = d3.extent(dataset.data, (d) => d.vergleich);
  /* eslint-enable */
}

const initialState = {
  dataset: null,
  datasets: [],
  topojson: makeTopoJson(),
  master: parseMaster(master)
};

export default function questions(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_DATASETS: {
      action.data.forEach(prepareDataset.bind(state));
      return {
        ...state,
        dataset: action.data[0],
        datasets: action.data
      };
    }
    case SET_DATASET: {
      const newDataSet = state.datasets.filter((d) => d.key === action.name)[0];
      return {
        ...state,
        dataset: newDataSet
      };
    }
    default:
      return state;
  }
}
