import _ from 'lodash';
import topojson from 'topojson';

import mastercsv from './master.csv';
// import worldData from './world-110m.json';        // 177 countries
import worldData from './world-50m.json';      // 241 countries

function getTopoJson() {
  topojson.presimplify(worldData);
  const t = topojson.feature(worldData, worldData.objects.countries).features;
  const tna = t.filter(d => d.id !== 10); // no antarctica

  for (const d of tna) {
    const e = _.find(mastercsv, { numeric: d.id.toString() });
    d.properties.iso = e ? e.alpha3 : '';
  }
  return tna;
}

function getMaster() {
  for (const d of mastercsv) {
    d.gdp = Number(d.gdp);
    d.population = Number(d.population);
    d.vergleich = d.gdp / d.population;
  }
  return mastercsv;
}

export const topofeatures = getTopoJson();
export const master = getMaster();
