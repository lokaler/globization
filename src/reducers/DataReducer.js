/* eslint-disable */

import * as ActionTypes from '../constants/ActionTypes';

// import dataset1 from '../data/dataset1.csv';
import master from '../data/master.csv';
import d3 from 'd3';

// const masterMap = d3.map(master, (d) => { d.alpha3 });
// console.log(d3.max(dataset1, function(d){ return d.value*1; }));
// console.log(JSON.stringify(dataset1));

const initialState = {
  dataset: {
    name: 'Lebensmittelausgaben',
    decription: 'Prozentualer Anteil Lebensmittel an Gesamtausgaben',
    domain: [0, 63.23],
    skala: [0,10,40,100],
    colorSet: 'Oranges',
    colorNum: 9,
    data: [{"iso":"BLR","value":"36.56"},{"iso":"BEL","value":"12.61"},{"iso":"BGR","value":"20.12"},{"iso":"DNK","value":"11.25"},{"iso":"DEU","value":"10.13"},{"iso":"EST","value":"21.75"},{"iso":"FIN","value":"12.83"},{"iso":"FRA","value":"13.48"},{"iso":"GRC","value":"18.64"},{"iso":"IRL","value":"10.34"},{"iso":"ISL","value":"15.13"},{"iso":"ITA","value":"14.64"},{"iso":"HRV","value":"20.46"},{"iso":"LVA","value":"19.23"},{"iso":"LTU","value":"24.04"},{"iso":"LUX","value":"11.43"},{"iso":"MLT","value":"15.24"},{"iso":"MDA","value":"26.56"},{"iso":"MNE","value":"35.9"},{"iso":"NLD","value":"11.41"},{"iso":"NOR","value":"11.69"},{"iso":"AUT","value":"10.48"},{"iso":"POL","value":"18"},{"iso":"PRT","value":"18.99"},{"iso":"RUS","value":"28.32"},{"iso":"SMR","value":"13.35"},{"iso":"SWE","value":"12.39"},{"iso":"CHE","value":"8.85"},{"iso":"SRB","value":"27.03"},{"iso":"SVK","value":"17.53"},{"iso":"SVN","value":"16.55"},{"iso":"ESP","value":"13.67"},{"iso":"CZE","value":"16.4"},{"iso":"TUR","value":"27.45"},{"iso":"UKR","value":"37.53"},{"iso":"HUN","value":"19.24"},{"iso":"GBR","value":"8.55"},{"iso":"CYP","value":"15.83"},{"iso":"ETH","value":"55.43"},{"iso":"BWA","value":"26.06"},{"iso":"BFA","value":"57.3"},{"iso":"CIV","value":"48.32"},{"iso":"GHA","value":"51.41"},{"iso":"CMR","value":"45.81"},{"iso":"KEN","value":"49.47"},{"iso":"MWI","value":"42.81"},{"iso":"MRT","value":"63.23"},{"iso":"NAM","value":"26.74"},{"iso":"NER","value":"45.12"},{"iso":"NGA","value":"47.05"},{"iso":"SLE","value":"44.61"},{"iso":"ZAF","value":"25.38"},{"iso":"SWZ","value":"35.28"},{"iso":"BLZ","value":"25.43"},{"iso":"BOL","value":"35.7"},{"iso":"BRA","value":"16.26"},{"iso":"CHL","value":"16.24"},{"iso":"DOM","value":"24.93"},{"iso":"GTM","value":"42.23"},{"iso":"HND","value":"32.66"},{"iso":"CAN","value":"9.07"},{"iso":"COL","value":"17.35"},{"iso":"MEX","value":"23.94"},{"iso":"NIC","value":"32.7"},{"iso":"PAN","value":"21.87"},{"iso":"PER","value":"23.54"},{"iso":"VEN","value":"24.03"},{"iso":"USA","value":"6.69"},{"iso":"AZE","value":"41"},{"iso":"BTN","value":"38.54"},{"iso":"IND","value":"30.71"},{"iso":"IRQ","value":"27.6"},{"iso":"IRN","value":"30.05"},{"iso":"ISR","value":"16.44"},{"iso":"JPN","value":"14.11"},{"iso":"YEM","value":"44.01"},{"iso":"KGZ","value":"46.43"},{"iso":"KOR","value":"13.04"},{"iso":"LAO","value":"51.39"},{"iso":"LBN","value":"25.3"},{"iso":"MYS","value":"22.07"},{"iso":"MNG","value":"31.02"},{"iso":"SAU","value":"29.44"},{"iso":"SGP","value":"7"},{"iso":"LKA","value":"33.69"},{"iso":"THA","value":"28.46"},{"iso":"AUS","value":"9.99"},{"iso":"FJI","value":"29.22"},{"iso":"NZL","value":"15.09"},{"iso":"PNG","value":"11.28"},{"iso":"SLB","value":"50.83"}]
  },
  master
};

export default function questions(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.FOO:
      return state;
    default:
      return state;
  }
}