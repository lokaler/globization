// import _ from 'lodash';
import topojson from 'topojson';

import mastercsv from './master.csv';
import worldData from './world-50m-custom-hq.json';
// import worldData from './world-50m-custom-mq.json';
// import worldData from './world-50m-custom-lq.json';

function getTopoJson() {
  topojson.presimplify(worldData);
  const t = topojson.feature(worldData, worldData.objects.countries).features;

  for (const d of t) {
    // console.log(d);
    // const e = _.find(mastercsv, { numeric: d.id.toString() });
    // d.properties.iso = e ? e.alpha3 : '';
    d.properties.iso = d.properties.iso_a3;
  }
  return t;
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
