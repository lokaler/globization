import { maxBy, minBy, sample } from 'lodash';
import { getDataset } from 'logic/Dataset';
import translate from 'logic/translate';
import { isNull, isUndefined, defer } from 'lodash';
import { sprintf } from 'sprintf-js';
import { topofeatures } from 'data/map/index';
import store from '../../store';

export default {

  isNull,
  isUndefined,
  fmt: (f, ...values) => {
    const clean = values.map(v => isUndefined(v) ? 0 : v);
    return sprintf(f, ...clean);
  },

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
    // not a good idea to create a new dataset on every call..
    const dataset = getDataset(datasetKey);
    if (dataset) {
      const isoCode = dataset.getCountryForValue(value);
      return isoCode;
    }
  },

  panToCountry(isoCode) {
    const state = store.getState();
    if (state.vis.active !== isoCode) {
      defer(
        () => window.actions.zoomToCountry(isoCode)
      );
    }
    return true;
  },

  panToRandomCountry() {
    const isoCode = sample(topofeatures).properties.iso;
    defer(
      () => window.actions.zoomToCountry(isoCode)
    );
    return true;
  },

  setDataset(key) {
    const state = store.getState();
    const currentKey = (state.questions.dataset || {}).key;
    if (key !== currentKey) {
      defer(
        () => window.actions.setDataSet(key)
      );
    }
  },

  calculateBmi(weight, height) {
    return weight / ((height * height) / 10000);
  },

  shareButtonTwitter(url, text) {
    const language = store.getState().app.language;
    const linkUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}&lang=${language}&via=SPIEGELONLINE`;

    return (
      `<a class='share twitter ${language}' target='_blank'
        title='Twitter' href='${ linkUrl }'></a>`
    );
  },

  shareButtonFacebook(url, text) {
    const language = store.getState().app.language;
    const linkUrl = `https://www.facebook.com/share.php?u=${url}&t=${text}`;

    return (
      `<a class='share facebook ${language}' target='_blank'
        title='Facebook' href='${ linkUrl }'></a>`
    );
  }
};
