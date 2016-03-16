import { fromPairs, find } from 'lodash';
import store from '../store';

export default class Dataset {
  constructor(data) {
    this.data = data;
    this.db = fromPairs(this.data.map(d => [d.iso, d.value * 1]));
  }
  setData(data) {
    this.data = data;
    this.db = fromPairs(this.data.map(d => [d.iso, d.value * 1]));
  }
  getValueForCountry(iso) {
    return this.db[iso];
  }
  getCountryForValue(value) {
    let distance = Number.MAX_VALUE;
    let isoCode = null;
    this.data.forEach((data) => {
      const cDist = Math.abs(data.value - value);
      if (cDist < distance) {
        isoCode = data.iso;
        distance = cDist;
      }
    });
    return isoCode;
  }
}

export function getDataset(datasetKey) {
  const datasets = store.getState().master.datasets;
  const dataset = find(datasets, dataset => dataset.key === datasetKey);
  if (dataset) {
    return new Dataset(dataset.data);
  }
  return null;
}
