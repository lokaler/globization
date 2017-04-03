/* eslint-disable */

export default [
  {
    "key": "food",
    "name": {
      "de": "Ausgaben für Lebensmittel",
      "en": "Expenditures on food"
    },
    "description": {
      "de": "Anteil Lebensmittelausgaben am Konsum in Prozent",
      "en": "Food expenditures as a percentage of consumption"
    },
    "compareName": {
      "de": "Bruttoinlandsprodukt pro Kopf",
      "en": "Gross domestic product per capita"
    },
    "quelle": {
      "de": "Statistisches Bundesamt",
      "en": "Federal Office of Statistics"
    },
    "link": "https://www.destatis.de/DE/ZahlenFakten/LaenderRegionen/Internationales/Thema/Tabellen/Basistabelle_KonsumN.html",
    "unit": "%",
    "fixed": 0,
    "domain": [
      0,
      63.23
    ],
    "skala": [
      0,
      10,
      40,
      100
    ],
    "translate": [
      0,
      90
    ],
    "scale": 1,
    "colorSet": "Oranges",
    "colorNum": 9,
    "data": require('./food.csv')
  },
  {
    "key": "meat",
    "name": {
      "de": "Fleischverbrauch",
      "en": "Meat supply"
    },
    "description": {
      "de": "Wöchentlicher Fleischverbrauch pro Kopf in kg",
      "en": "Weekly per capita meat supply in kg"
    },
    "quelle": "FAO / WRI",
    "link": "http://faostat3.fao.org/home/E",
    "unit": "kg",
    "fixed": 1,
    "domain": [
      0,
      3
    ],
    "skala": [
      0,
      10,
      40,
      100
    ],
    "translate": [
      0,
      90
    ],
    "scale": 1,
    "colorSet": "Oranges",
    "colorNum": 9,
    "data": require('./meat.csv')
  },
  {
    "key": "foodwaste",
    "name": {
      "de": "Lebensmittelabfälle",
      "en": "Food waste"
    },
    "description": {
      "de": "Wöchentliche Lebensmittelabfälle pro Kopf in kg",
      "en": "Weekly per capita food waste in kg"
    },
    "quelle": "Bräutigam et al. 2014",
    "link": "http://wmr.sagepub.com/content/32/8/683.full.pdf+html",
    "unit": "kg",
    "fixed": 1,
    "domain": [
      1.5,
      2.7
    ],
    "skala": [
      0,
      10,
      40,
      100
    ],
    "translate": [
      -124,
      485
    ],
    "scale": 2.4,
    "colorSet": "Oranges",
    "colorNum": 9,
    "data": require('./foodwaste.csv')
  },
  {
    "key": "electro",
    "name": {
      "de": "Elektroschrott",
      "en": "Electronic waste"
    },
    "description": {
      "de": "Jährlich erzeugter Elektroschrott pro Kopf in kg",
      "en": "Yearly electronic waste generated per capita in kg"
    },
    "quelle": "E-Waste-Monitor 2014",
    "link": "http://i.unu.edu/media/unu.edu/news/52624/UNU-1stGlobal-E-Waste-Monitor-2014-small.pdf",
    "unit": "kg",
    "fixed": 0,
    "domain": [
      0,
      28.3
    ],
    "skala": [
      0,
      10,
      40,
      100
    ],
    "translate": [
      0,
      90
    ],
    "scale": 1,
    "colorSet": "Oranges",
    "colorNum": 9,
    "data": require('./electro.csv')
  }
]
