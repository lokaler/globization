/* eslint-disable */

export default [
  {
    "key": "peaceindex",
    "name": {
      "de": "Global Peace Index",
      "en": "Global Peace Index"
    },
    "description": {
      "de": "Global Peace Index (1 sehr friedlich, 4 sehr unfriedlich)",
      "en": "Global Peace Index 2016 (1 = high level of peace, 4 low level of peace)"
    },
    "quelle": "Institute for Economics and Peace",
    "link": "http://www.visionofhumanity.org/#page/indexes/global-peace-index/2016/CAN,USA/OVER",
    "unit": "",
    "fixed": 1,
    "domain": [
      1,
      4
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
    "data": require('./peaceindex.csv')
  },
  {
    "key": "refugees",
    "name": {
      "de": "Ins Ausland Geflüchtete",
      "en": "Refugees Abroad"
    },
    "description": {
      "de": "Flüchtlinge und Asylbewerber im Aufnahmeland, Stand 2014",
      "en": "Refugees and asylum applicants in host country, 2014)"
    },
    "quelle": "UNHCR",
    "link": "http://popstats.unhcr.org/en/persons_of_concern",
    "unit": "",
    "fixed": 0,
    "legendCorner": true,
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
      "en": "Internally Displaced"
    },
    "description": {
      "de": "Binnenflüchtlinge, Stand 2014 [Anteil an der Bevölkerung in Prozent]",
      "en": "Internally displaced, 2014 (percent share of population)"
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
    "key": "homocides",
    "name": {
      "de": "Mordrate",
      "en": "Murder Rate"
    },
    "description": {
      "de": "Morde pro Jahr pro 100.000 Einwohner",
      "en": "Annual murders per 100,000 residents"
    },
    "quelle": "UNODC",
    "link": "https://data.unodc.org/#state:0",
    "unit": "",
    "fixed": 0,
    "domain": [
      0,
      80
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
    "data": require('./homocides.csv')
  },
  {
    "key": "slavery",
    "name": {
      "de": "Sklaverei",
      "en": "Slavery"
    },
    "description": {
      "de": "Anteil der Bevölkerung in moderner Sklaverei, Stand 2015 [in Prozent]",
      "en": "Share of population in modern slavery, 2015 (as a percentage)"
    },
    "quelle": "The Walk Free Foundation",
    "link": "http://www.globalslaveryindex.org/findings/",
    "unit": "%",
    "fixed": 0,
    "domain": [
      0,
      5
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
    "data": require('./slavery.csv')
  },
  {
    "key": "journalists",
    "name": {
      "de": "Ermordete Journalisten",
      "en": "Murdered Journalists"
    },
    "description": {
      "de": "Seit 1992 ermordete Journalisten, Stand Juni 2016",
      "en": "Journalists murdered since 1992, as of June 2016"
    },
    "quelle": "Committee to Protect Journalists ",
    "link": "https://cpj.org/killed/murdered.php",
    "unit": "",
    "fixed": 0,
    "domain": [
      0,
      110
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
