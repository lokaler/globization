/* eslint-disable */

export default [

  {
    "key": "incometopten",
    "name": {
      "de": "Einkommen Top 10%",
      "en": ""
    },
    "description": {
      "de": "Verfügbares Monatseinkommen in Euro, mit dem man mehr als 90 % der Bevölkerung verdient",
      "en": ""
    },
    "quelle": "Eurostat",
    "link": "http://ec.europa.eu/eurostat/web/income-and-living-conditions/data/database",
        "unit": "",
    "fixed": 1,
    "domain": [
      0,
      9000
    ],
    "skala": [
      0,
      24
    ],
    "translate": [
      -124,
      485
    ],
    "scale": 2.4,
    "colorSet": "Blues",
    "colorNum": 9,
    "data": require('./01_top_10_percent.csv')
  },
  {
    "key": "incometopone",
    "name": {
      "de": "Einkommen Top 1%",
      "en": ""
    },
    "description": {
      "de": "Verfügbares Monatseinkommen in Euro, mit dem man mehr als 99 Prozent der Bevölkerung verdient",
      "en": ""
    },
    "quelle": "Eurostat",
    "link": " http://ec.europa.eu/eurostat/web/income-and-living-conditions/data/database",
    "unit": "",
    "fixed": 1,
    "domain": [
      0,
      9000
    ],
    "skala": [
      0,
      3

    ],
    "translate": [
      -124,
      485
    ],
    "scale": 2.4,
    "colorSet": "Blues",
    "colorNum": 9,
    "data": require('./02_top_1_percent.csv')
  },
   {
    "key": "eightytwenty",
    "name": {
      "de": "Einkommens-Ungleichheit",
      "en": ""
    },
    "description": {
      "de": "Verhältnis des Einkommens der oberen 20 Prozent zu den unteren 20 Prozent",
      "en": ""
    },
    "quelle": "OECD",
    "link": "http://stats.oecd.org/index.aspx?queryid=66670",
    "unit": "",
    "fixed": 1,
    "domain": [
      0,
      18
    ],
    "skala": [
      0,
      3

    ],
    "translate": [
      0,
      90
    ],
    "scale": 1,
    "colorSet": "Blues",
    "colorNum": 9,
    "data": require('./03_s80_s20_ratio.csv')
  },
   {
    "key": "giniindex",
    "name": {
      "de": "Gini-Index",
      "en": ""
    },
    "description": {
      "de": "Gini-Index zwischen 0 (Alle besitzen gleich viel) und 100 (Eine Person besitzt alles)",
      "en": ""
    },
    "quelle": "Weltbank",
    "link": "http://data.worldbank.org/indicator/SI.POV.GINI",
    "unit": "",
    "fixed": 1,
    "domain": [
      0,
      70
    ],
    "skala": [
      0,
      3

    ],
    "translate": [
      0,
      90
    ],
    "scale": 1,
    "colorSet": "Blues",
    "colorNum": 9,
    "data": require('./04_gini_index.csv')
  },
     {
    "key": "wealthtopten",
    "name": {
      "de": "Vermögen Top 10%",
      "en": ""
    },
    "description": {
      "de": "Anteil der Top 10 Prozent am Gesamtvermögen in Prozent",
      "en": ""
    },
    "quelle": "OECD",
    "link": "https://stats.oecd.org/Index.aspx?DataSetCode=WEALTH",
    "unit": "%",
    "fixed": 1,
    "domain": [
      0,
      90
    ],
    "skala": [
      0,
      3

    ],
    "translate": [
      0,
      90
    ],
    "scale": 1,
    "colorSet": "Blues",
    "colorNum": 9,
    "data": require('./05_richest_10_percent.csv')
  }
];
