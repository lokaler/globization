import _ from 'lodash';
import d3 from 'd3';
import topojson from 'topojson';

import master from 'data/master.csv';
import worldData from 'data/world-110m.json';


export function getTopoJson() {
  const t = topojson.feature(worldData, worldData.objects.countries).features;
  for (const d of t) {
    const e = _.find(master, { numeric: d.id.toString() });
    d.properties.iso = e ? e.alpha3 : '';
  }
  return t;
}

export function getMaster() {
  for (const d of master) {
    d.gdp = Number(d.gdp);
    d.population = Number(d.population);
    d.vergleich = d.gdp / d.population;
  }
  return master;
}

export function prepareDataset(dataset) {
  for (const d of dataset.data) {
    const e = _.find(master, { alpha3: d.iso });
    const t = _.find(this.topojson, (c) => c.properties.iso === d.iso);
    d.onMap = t !== undefined;
    d.vergleich = e.vergleich;
  }
  /* eslint-disable */
  //console.log(dataset.key, d3.extent(dataset.data, d=>d.value ))
  dataset.vergleichDomain = d3.extent(dataset.data, (d) => d.vergleich);
  /* eslint-enable */
}
