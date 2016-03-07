import _ from 'lodash';

class Dataset {
  setData(data) {
    this.data = data;
  }
  find(query) {
    return _.find(this.data, query);
  }
  getValueForCountry() {
    return this.find({});
  }
}

export { Dataset };
