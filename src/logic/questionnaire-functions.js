import { maxBy, minBy } from 'lodash';
import { getDataset } from 'logic/Dataset';

export default {

  getCountryName(datasetKey, value) {
    const dataset = getDataset(datasetKey);
    const countryCode = dataset.getCountryForValue(value);
    return countryCode;
  },

  getMaxCountryName(datasetKey) {
    const dataset = getDataset(datasetKey);
    if (dataset) {
      return maxBy(dataset.data, d => parseFloat(d.value)).iso;
    }
  },

  getMaxValue(datasetKey) {
    const dataset = getDataset(datasetKey);
    if (dataset) {
      return maxBy(dataset.data, d => parseFloat(d.value)).value;
    }
  },

  getMinCountryName(datasetKey) {
    const dataset = getDataset(datasetKey);
    if (dataset) {
      return minBy(dataset.data, d => parseFloat(d.value)).iso;
    }
  },

  getMinValue(datasetKey) {
    const dataset = getDataset(datasetKey);
    if (dataset) {
      return minBy(dataset.data, d => parseFloat(d.value)).value;
    }
  },

  getDatasetCount(datasetKey) {
    const dataset = getDataset(datasetKey);
    if (dataset) {
      return dataset.data.length;
    }
  },

  getDatasetCountLessThanValue(datasetKey, value) {
    const dataset = getDataset(datasetKey);
    if (dataset) {
      const less = dataset.data.filter(d => d.value < value);
      return less.count;
    }
  }
};
