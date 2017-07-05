import _ from 'lodash';
import d3 from 'd3';

import { topofeatures } from 'data/map/index';
import masterjson from 'data/map/master.json';
import dummyData from './dummy.json';


export function prepareDataset(dataset) {
  // dummy datahack for testing because of the missing loader
  // dataset.data = dummyData;
  for (let d of dataset.data) {
    d.value = +d.value;
    let e = _.find(masterjson, { alpha3: d.iso });
    const t = _.find(topofeatures, (c) => c.properties.iso === d.iso);
    if (!e) {
      console.warn(d.iso, 'not in masterdataset origined from', dataset.key);
      e = { vergleich: 0 };
    }
    d.onMap = t !== undefined;
    d.vergleich = e.vergleich;
    // console.log(d)
  }
  /* eslint-disable */
  dataset.vergleichDomain = d3.extent(dataset.data, (d) => d.vergleich);
  /* eslint-enable */
}


export const emptyDataset = {
  key: 'none',
  data: [],
  translate: [0, 90],
  domain: [0, 1],
  scale: 1
};
