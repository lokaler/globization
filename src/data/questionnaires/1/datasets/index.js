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
  },
  {
    "key": "sanitaer",
    "name": {
      "de": "Sanitärversorgung",
      "en": ""
    },
    "description": {
      "de": "Anteil der Bevölkerung mit Zugang zu Sanitärversorgung (i.d.R. 2015)",
      "en": ""
    },
    "quelle": "WHO/Unicef",
    "link": "https://www.wssinfo.org/data-estimates/tables/",
    "unit": "%",
    "fixed": 1,
    "domain": [
      0,
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
    "data": require('./sanitaer.json')
  },
  {
    "key": "sterberate",
    "name": {
      "de": "Sterberate",
      "en": ""
    },
    "description": {
      "de": "Todesfälle im Zusammenhang mit Trinkwasser-, Sanitär- und Hygienebedingungen (2012)",
      "en": ""
    },
    "quelle": "WHO",
    "link": "http://apps.who.int/gho/data/view.main.SDGWSHBOD392v",
    "unit": "je 100000 Einwohner",
    "fixed": 1,
    "domain": [
      0,
      90
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
    "data": require('./sterberate.json')
  },
  {
    "key": "wasserknapp",
    "name": {
      "de": "wasserknapp",
      "en": ""
    },
    "description": {
      "de": "Risiko für Wassermangel im Jahr 2040, BAU-Szenario",
      "en": ""
    },
    "quelle": "WRI",
    "link": "http://www.wri.org/blog/2015/08/ranking-world%E2%80%99s-most-water-stressed-countries-2040",
    "unit": "%",
    "fixed": 1,
    "domain": [
      0,
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
    "data": require('./wasserknapp.json')
  },
  {
    "key": "abwasser",
    "name": {
      "de": "Abwasser",
      "en": ""
    },
    "description": {
      "de": "Anteil des kommunalen Abwassers, der gereinigt wird (jew. letzter verfügb. Stand)",
      "en": ""
    },
    "quelle": "FAO/IWMI",
    "link": "#",
    "unit": "%",
    "fixed": 1,
    "domain": [
      0,
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
    "data": require('./abwasser.json')
  }
];
