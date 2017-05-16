import { presimplify } from 'topojson-simplify';
import { feature } from 'topojson-client';

// import mastercsv from './master.csv';
import masterjson from './master.json';
import worldData from './world-50m-custom-hq.json';
// import worldData from './world-50m-custom-mq.json';
// import worldData from './world-50m-custom-lq.json';

function getTopoJson() {
  let worldDataSimple = presimplify(worldData);
  // worldDataSimple = simplify(worldDataSimple)
  const t = feature(worldDataSimple, worldDataSimple.objects.countries).features;

  for (const d of t) {
    // console.log(d);
    // const e = _.find(mastercsv, { numeric: d.id.toString() });
    // d.properties.iso = e ? e.alpha3 : '';
    d.properties.iso = d.properties.iso_a3;
  }
  return t;
}

function getMaster() {
  // masterjson instead of mastercsv because of the missing loader
  for (const d of masterjson) {
    d.gdp = Number(d.gdp);
    d.population = Number(d.population);
    d.vergleich = d.gdp / d.population;
  }
  return masterjson;
}

export const topofeatures = getTopoJson();
export const master = getMaster();
