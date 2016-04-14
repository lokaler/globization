import { fromPairs, find, sample } from 'lodash';
import store from 'store';

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
    this.data
      .filter(d => d.onMap)
      .forEach((data) => {
        const cDist = Math.abs(data.value - value);
        if (cDist < distance) {
          isoCode = data.iso;
          distance = cDist;
        }
      });
    return isoCode;
  }
  getRandomIso() {
    return sample(this.data.filter(d => d.onMap)).iso;
  }
}

export function getDataset(datasetKey) {
  const datasets = store.getState().questions.datasets;
  const dataset = find(datasets, ds => ds.key === datasetKey);
  if (dataset) {
    // this is very un-performant
    return new Dataset(dataset.data);
  }
  return null;
}
