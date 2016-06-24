/* eslint-disable */

export default [
  {
    "key": "refugees",
    "name": {
      "de": "Geflüchtete",
      "en": ""
    },
    "description": {
      "de": "Flüchtlinge und Asylbewerber im Aufnahmeland, Stand 2014",
      "en": ""
    },
    "quelle": "UNHCR",
    "link": "http://popstats.unhcr.org/en/persons_of_concern",
    "unit": "",
    "fixed": 0,
    "domain": [
      0,
      1700000
    ],
    "skala": [
      0,
      100000,
      200000,

    ],
    "translate": [
      0,
      90
    ],
    "scale": 1,
    "colorSet": "Reds",
    "colorNum": 9,
    "data": require('./refugees.csv')
  },
  {
    "key": "displaced",
    "name": {
      "de": "Binnenflüchtlinge",
      "en": ""
    },
    "description": {
      "de": "Binnenflüchtlinge, Stand 2014 [Anteil an der Bevölkerung in Prozent]",
      "en": ""
    },
    "quelle": "UNHCR",
    "link": "http://popstats.unhcr.org/en/persons_of_concern",
    "unit": "%",
    "fixed": 0,
    "domain": [
      0,
      36
    ],
    "skala": [
      0,
      10,
      20,
      30
    ],
    "translate": [
      0,
      90
    ],
    "scale": 1,
    "colorSet": "Reds",
    "colorNum": 9,
    "data": require('./displaced.csv')
  },
  {
    "key": "threat",
    "name": {
      "de": "Lebensgefahr",
      "en": "Poverty in the EU"
    },
    "description": {
      "de": "Morde pro Jahr pro 100.000 Einwohner",
      "en": ""
    },
    "quelle": "UNODC",
    "link": "https://data.unodc.org/#state:0",
    "unit": "",
    "fixed": 0,
    "domain": [
      0,
      30
    ],
    "skala": [
      0,
      5,
      10,
      30
    ],
    "translate": [
      -124,
      485
    ],
    "scale": 2.4,
    "colorSet": "Reds",
    "colorNum": 9,
    "data": require('./homocides.csv')
  },
  {
    "key": "slaves",
    "name": {
      "de": "Sklaverei",
      "en": ""
    },
    "description": {
      "de": "Anteil der Bevölkerung in moderner Sklaverei, Stand 2015 [in Prozent]",
      "en": ""
    },
    "quelle": "The Walk Free Foundation",
    "link": "http://www.globalslaveryindex.org/findings/",
    "unit": "",
    "fixed": 0,
    "domain": [
      0,
      7
    ],
    "skala": [
      0,
      5,
      10,
      30
    ],
    "translate": [
      -124,
      485
    ],
    "scale": 2.4,
    "colorSet": "Reds",
    "colorNum": 9,
    "data": require('./slavery.csv')
  },
  {
    "key": "journalists",
    "name": {
      "de": "Ermoderte Journalisten",
      "en": "Extreme Poverty"
    },
    "description": {
      "de": "Seit 1992 ermordete Journalisten, Stand Juni 2016",
      "en": "Share of population with less than $1.25 per day [%]"
    },
    "quelle": "Committee to Protect Journalists ",
    "link": "https://cpj.org/killed/murdered.php",
    "unit": "",
    "fixed": 0,
    "domain": [
      0,
      100
    ],
    "skala": [
      0,
      5,
      10,
      30
    ],
    "translate": [
      0,
      90
    ],
    "scale": 1,
    "colorSet": "Reds",
    "colorNum": 9,
    "data": require('./journalists.csv')
  }
];
