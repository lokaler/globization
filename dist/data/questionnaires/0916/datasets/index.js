/* eslint-disable */

export default [
  {
    "key": "consumption_elect",
    "name": {
      "de": "Stromverbrauch",
      "en": ""
    },
    "description": {
      "de": "Stromverbrauch pro Kopf in Kilowattstunden (kWh)",
      "en": ""
    },
    "quelle": "IEA",
    "link": "http://data.worldbank.org/indicator/EG.USE.ELEC.KH.PC",
    "unit": "",
    "fixed": 1,
    "domain": [
      0,
      18000
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
    "colorSet": "Reds",
    "colorNum": 9,
    "data": require('./00_consumption_elect.csv')
  },
  {
    "key": "strompreis",
    "name": {
      "de": "Ausgaben für Strom",
      "en": ""
    },
    "description": {
      "de": "Ausgaben für Strom eines 2-Personen-Haushalts in Euro",
      "en": ""
    },
    "quelle": "IEA/Eurostat",
    "link": "http://www.iea.org/publications/freepublications/publication/key-world-energy-statistics-2015.html",
    "unit": "€",
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
    "colorSet": "Reds",
    "colorNum": 9,
    "data": require('./01_strompreis.csv')
  },
   {
    "key": "access_elect",
    "name": {
      "de": "Kein Zugang zu Strom",
      "en": ""
    },
    "description": {
      "de": "Anteil der Bevölkerung ohne Zugang zu Strom (%)",
      "en": ""
    },
    "quelle": "IEA",
    "link": "http://data.worldbank.org/indicator/EG.ELC.ACCS.ZS",
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
    "colorSet": "Reds",
    "colorNum": 9,
    "data": require('./02_access_elect.csv')
  },
   {
    "key": "renewable_elect",
    "name": {
      "de": "Anteil erneuerbare Energien",
      "en": ""
    },
    "description": {
      "de": "Anteil erneuerbarer Energien an der Stromerzeugung in Prozent",
      "en": ""
    },
    "quelle": "IEA",
    "link": "https://www.iea.org/statistics/relateddatabases/worldenergystatisticsandbalances/",
    "unit": "%",
    "fixed": 1,
    "domain": [
      0,
      99
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
    "colorSet": "Reds",
    "colorNum": 9,
    "data": require('./03_renewable_elect.csv')
  },
     {
    "key": "tempdiffs",
    "name": {
      "de": "Temperaturanstieg",
      "en": ""
    },
    "description": {
      "de": "Anstieg der mittleren Temperatur seit 1900",
      "en": ""
    },
    "quelle": "Berkeley Earth",
    "link": "http://berkeleyearth.lbl.gov/country-list/",
    "unit": "",
    "fixed": 1,
    "domain": [
      0,
      2.7
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
    "colorSet": "Reds",
    "colorNum": 9,
    "data": require('./04_tempdiffs.csv')
  },
     {
    "key": "cozwei_kopf",
    "name": {
      "de": "CO2-Ausstoß pro Kopf",
      "en": ""
    },
    "description": {
      "de": "CO2-Ausstoß pro Kopf in Tonnen",
      "en": ""
    },
    "quelle": "CDIAC",
    "link": "http://cdiac.ornl.gov/trends/emis/meth_reg.html",
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
    "colorSet": "Reds",
    "colorNum": 9,
    "data": require('./05_cozwei_kopf.csv')
  },
       {
    "key": "cozwei_gdp",
    "name": {
      "de": "CO2-Ausstoß pro $ BIP",
      "en": ""
    },
    "description": {
      "de": "CO2-Ausstoß in Kilogramm pro Dollar BIP",
      "en": ""
    },
    "quelle": "CDIAC",
    "link": "http://cdiac.ornl.gov/trends/emis/meth_reg.html",
    "unit": "",
    "fixed": 1,
    "domain": [
      0,
      0.9
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
    "colorSet": "Reds",
    "colorNum": 9,
    "data": require('./06_cozwei_gdp.csv')
  },
       {
    "key": "klimaschutz",
    "name": {
      "de": "Klimaschutzindex",
      "en": ""
    },
    "description": {
      "de": "Klimaschutzindex zwischen 0 und 100 Punkten",
      "en": ""
    },
    "quelle": "Germanwatch",
    "link": "https://germanwatch.org/de/download/13624.pdf",
    "unit": "",
    "fixed": 1,
    "domain": [
      0,
      100
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
    "colorSet": "Reds",
    "colorNum": 9,
    "data": require('./07_klimaschutz.csv')
  }

];
