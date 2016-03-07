import _ from 'lodash';

class Dataset {
  constructor(data) {
    this.data = data;
  }
  setData(data) {
    this.data = data;
  }
  find(query) {
    return _.find(this.data, query);
  }
  getValueForCountry() {
    return this.find({});
  }
  getIsoForId(id) {
    return this.find({ numeric: id.toString() });
  }
}

export { Dataset };
