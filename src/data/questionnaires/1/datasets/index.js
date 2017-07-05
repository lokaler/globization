/* eslint-disable */

export default [
  {
    "key": "trinkwasser",
    "name": {
      "de": "Sauberes Trinkwasser",
      "en": ""
    },
    "description": {
      "de": "Anteil der Bevölkerung mit Zugang zu sauberem Trinkwasser (i.d.R. 2015)",
      "en": ""
    },
    "quelle": "WHO/Unicef",
    "link": "https://www.wssinfo.org/data-estimates/tables/",
    "unit": "%",
    "fixed": 1,
    "domain": [
      40,
      100
    ],
    "skala": [
      10,
      100
    ],
    "translate": [
      0,
      90
    ],
    "scale": 1,
    "colorSet": "Reds",
    "colorNum": 9,
    "data": require('./trinkwasser.json')
  }
];
