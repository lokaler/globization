import { maxBy, minBy } from 'lodash';
import { getDataset } from 'logic/Dataset';
import translate from 'logic/translate';
import { isNull, isUndefined, defer } from 'lodash';
import { sprintf } from 'sprintf-js';
import store from '../store';

export default {

  isNull,
  isUndefined,
  fmt: sprintf,

  getCountryName(datasetKey, value) {
    const dataset = getDataset(datasetKey);
    const isoCode = dataset.getCountryForValue(value);
    return translate(isoCode, { isCountryCode: true, case: 'locative' });
  },

  getMaxCountryName(datasetKey) {
    const dataset = getDataset(datasetKey);
    if (dataset) {
      const isoCode = maxBy(dataset.data, d => parseFloat(d.value)).iso;
      return translate(isoCode, { isCountryCode: true, case: 'locative' });
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
      const isoCode = minBy(dataset.data, d => parseFloat(d.value)).iso;
      return translate(isoCode, { isCountryCode: true, case: 'locative' });
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
  },

  getDatasetCountByComparator(datasetKey, value, comparator) {
    const dataset = getDataset(datasetKey);
    if (dataset) {
      switch (comparator) {
        case '=': {
          return dataset.data.filter(d => d.value === value).length;
        }
        case '<': {
          return dataset.data.filter(d => d.value < value).length;
        }
        case '<=': {
          return dataset.data.filter(d => d.value <= value).length;
        }
        case '>': {
          return dataset.data.filter(d => d.value > value).length;
        }
        case '>=': {
          return dataset.data.filter(d => d.value >= value).length;
        }
        default: {
          return 0;
        }
      }
    }
  },

  getMinISO(datasetKey) {
    const dataset = getDataset(datasetKey);
    if (dataset) {
      const isoCode = minBy(dataset.data, d => parseFloat(d.value)).iso;
      return isoCode;
    }
  },

  getMaxISO(datasetKey) {
    const dataset = getDataset(datasetKey);
    if (dataset) {
      const isoCode = maxBy(dataset.data, d => parseFloat(d.value)).iso;
      return isoCode;
    }
  },

  getISO(datasetKey, value) {
    const dataset = getDataset(datasetKey);
    if (dataset) {
      const isoCode = dataset.getCountryForValue(value);
      return isoCode;
    }
  },

  panToCountry(isoCode) {
    const state = store.getState();
    if (state.vis.active !== isoCode) {
      defer(() => {
        window.actions.changeVis({
          animation: {
            action: 'zoomToCountry',
            payload: isoCode
          },
          active: isoCode,
          tooltip: { active: false }
        });
      });
    }
    return true;
  }
};
