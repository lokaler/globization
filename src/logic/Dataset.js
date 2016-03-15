import { fromPairs } from 'lodash';

class Dataset {
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
}

export default Dataset;
