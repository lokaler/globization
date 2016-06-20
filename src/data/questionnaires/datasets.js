import _ from 'lodash';
import d3 from 'd3';

import { topofeatures } from 'data/map/index';
import master from 'data/map/master.csv';


export function prepareDataset(dataset) {
  console.log(dataset);
  for (const d of dataset.data) {
    const e = _.find(master, { alpha3: d.iso });
    const t = _.find(topofeatures, (c) => c.properties.iso === d.iso);
    d.onMap = t !== undefined;
    d.vergleich = e.vergleich;
  }
  /* eslint-disable */
  dataset.vergleichDomain = d3.extent(dataset.data, (d) => d.vergleich);
  /* eslint-enable */
}
