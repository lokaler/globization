/* eslint-disable */

export default [
  {
    "key": "nettoHousehold",
    "name": {
      "de": "Mittleres Haushaltsnettoeinkommen",
      "en": "Median net household income"
    },
    "description": {
      "de": "Mittleres Haushaltsnettoeinkommen [kaufkraftbereinigt in 1000 US-Dollar]",
      "en": "Median net household income [1000 US dollars, adjusted for purchasing power]"
    },
    "quelle": "OECD",
    "link": "http://stats.oecd.org/Index.aspx?DataSetCode=BLI",
    "unit": "Tsd. USD",
    "fixed": 0,
    "domain": [
      0,
      40
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
    "colorSet": "Blues",
    "colorNum": 9,
    "data": require('./00_nettoHousehold.csv')
  },
  {
    "key": "incometopten",
    "name": {
      "de": "Einkommen Top 10%",
      "en": "Income Top 10%"
    },
    "description": {
      "de": "Verfügbares Monatseinkommen in Euro, mit dem man mehr als 90 % der Bevölkerung verdient",
      "en": "Available monthly income in euro required for a person to earn more than 90 percent of the population."
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
      "en": "Income Top 1%"
    },
    "description": {
      "de": "Verfügbares Monatseinkommen in Euro, mit dem man mehr als 99 Prozent der Bevölkerung verdient",
      "en": "Available monthly income in euro required for a person to earn more than 99 percent of the population."
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
      "en": "Income Inequality"
    },
    "description": {
      "de": "Verhältnis des Einkommens der oberen 20 Prozent zu den unteren 20 Prozent",
      "en": "Income disparity between the top 20 percent and the lowest 20 percent."
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
      "en": "Gini Index"
    },
    "description": {
      "de": "Gini-Index zwischen 0 (Alle besitzen gleich viel) und 100 (Eine Person besitzt alles)",
      "en": "Gini index between 0 (perfect income equality) und 100 (perfect income inequality)"
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
      "en": "Wealth Top 10%"
    },
    "description": {
      "de": "Anteil der Top 10 Prozent am Gesamtvermögen in Prozent",
      "en": "Percent share of total wealth held by the top 10 percent."
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
