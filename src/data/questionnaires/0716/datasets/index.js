/* eslint-disable */

export default [
  {
    "key": "travels",
    "name": {
      "de": "Urlaubsreisen",
      "en": ""
    },
    "description": {
      "de": "Anzahl Urlaubsreisen pro Jahr und Einwohner (Stand 2013/14)",
      "en": ""
    },
    "quelle": "Weltbank/UNWTO",
    "link": "http://databank.worldbank.org/data/reports.aspx?source=world-development-indicators",
    "unit": "",
    "fixed": 1,
    "domain": [
      1,
      12
    ],
    "skala": [
      0,
      11

    ],
    "translate": [
      0,
      90
    ],
    "scale": 1,
    "colorSet": "Reds",
    "colorNum": 9,
    "data": require('./travels.csv')
  },
  {
    "key": "travelingtofromgermany",
    "name": {
      "de": "Reiseziele",
      "en": ""
    },
    "description": {
      "de": "Anteil an allen von der in Deutschland lebenden deutschsprachigen Bevölkerung gemachten Reisen ab 5 Tagen (2015)",
      "en": ""
    },
    "quelle": "FUR",
    "link": "http://www.fur.de/fileadmin/user_upload/RA_2016/RA2016_Erste_Ergebnisse_DE.pdf",
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
    "data": require('./travelingtofromgermany.csv')
  },
  {
    "key": "cruiseships",
    "name": {
      "de": "Kreuzfahrten",
      "en": ""
    },
    "description": {
      "de": "Passagiere auf europäischen Kreuzfahrtschiffen pro Jahr pro 1000 Einwohner (2014)",
      "en": ""
    },
    "quelle": "CLIA",
    "link": "http://www.cruising.org/docs/default-source/research/clia_europe_statistics_and_markets_2014.pdf?sfvrsn=2",
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
    "data": require('./cruiseships.csv')
  },
  {
    "key": "touristsfromgermany",
    "name": {
      "de": "Touristen aus Deutschland",
      "en": ""
    },
    "description": {
      "de": "An der Grenze angekommene Touristen oder Besucher aus Deutschland (I.d.R. 2014)",
      "en": ""
    },
    "quelle": "UNWTO",
    "link": "http://statistics.unwto.org/publication/yearbook-tourism-statistics-2016-edition",
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
    "data": require('./touristsfromgermany.csv')
  },
  {
    "key": "tourismexpenditures",
    "name": {
      "de": "Ausgaben von Touristen",
      "en": ""
    },
    "description": {
      "de": "Von Reisenden pro Kopf pro Jahr im Ausland ausgegebenes Geld [Euro]",
      "en": ""
    },
    "quelle": "Weltbank/UNWTO",
    "link": "http://databank.worldbank.org/data/reports.aspx?source=world-development-indicators",
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
    "data": require('./tourismexpenditures.csv')
  },
  {
    "key": "amountholidays",
    "name": {
      "de": "Urlaubstage",
      "en": "Murdered Journalists"
    },
    "description": {
      "de": "Durchschnittliche Anzahl Urlaubstage (2014)",
      "en": ""
    },
    "quelle": "",
    "link": "",
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
    "data": require('./amountholidays.csv')
  }
];
