import _ from 'lodash';
import d3 from 'd3';

import master from 'data/map/master.csv';


export function prepareDataset(dataset) {
  for (const d of dataset.data) {
    const e = _.find(master, { alpha3: d.iso });
    const t = _.find(this.topojson, (c) => c.properties.iso === d.iso);
    d.onMap = t !== undefined;
    d.vergleich = e.vergleich;
  }
  /* eslint-disable */
  dataset.vergleichDomain = d3.extent(dataset.data, (d) => d.vergleich);
  /* eslint-enable */
}
