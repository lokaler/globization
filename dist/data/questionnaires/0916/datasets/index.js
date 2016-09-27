/* eslint-disable */

export default [
  {
    "key": "consumption_elect",
    "name": {
      "de": "Stromverbrauch",
      "en": "Electricity consumption"
    },
    "description": {
      "de": "Stromverbrauch pro Kopf in Kilowattstunden (kWh)",
      "en": "Per capita electricity consumption in kilowatt hours (kWh)"
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
      "en": "Expenditures on electricity"
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
      "en": "No access to electricity"
    },
    "description": {
      "de": "Anteil der Bevölkerung ohne Zugang zu Strom (%)",
      "en": "Proportion of people without access to electricity (%)"
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
      "en": "Share of renewable energy"
    },
    "description": {
      "de": "Anteil erneuerbarer Energien an der Stromerzeugung in Prozent",
      "en": "Share of renewable energy in electricity production (%)"
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
      "en": "Temperature rise"
    },
    "description": {
      "de": "Anstieg der mittleren Temperatur seit 1900",
      "en": "Increase in mean temperature since 1900"
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
      "en": "CO2 emissions per capita"
    },
    "description": {
      "de": "CO2-Ausstoß pro Kopf in Tonnen",
      "en": "CO2 emissions per capita in tonnes"
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
      "en": "CO2 emissions per $ GDP"
    },
    "description": {
      "de": "CO2-Ausstoß in Kilogramm pro Dollar BIP",
      "en": "CO2 emissions in kilograms per dollar GDP"
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
      "en": "Climate protection index"
    },
    "description": {
      "de": "Klimaschutzindex zwischen 0 und 100 Punkten",
      "en": "Climate protection index between 0 and 100 points"
    },
    "quelle": "Germanwatch",
    "link": "https://germanwatch.org/de/download/13624.pdf",
    "unit": "",
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
    "data": require('./07_klimaschutz.csv')
  }

];
