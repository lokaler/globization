/* eslint-disable */

export default [
  {
    "key": "forest",
    "name": {
      "de": "Waldfläche",
      "en": ""
    },
    "description": {
      "de": "Legende: Waldfläche in Quadratkilometern",
      "en": ""
    },
    "quelle": "FAO",
    "link": "",
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
    "data": require('./00_Flaeche_Wald.csv')
  },
  {
    "key": "size_logging",
    "name": {
      "de": "Landfläche",
      "en": ""
    },
    "description": {
      "de": "Landfläche in Quadratkilometern",
      "en": ""
    },
    "quelle": "FAO",
    "link": "",
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
    "data": require('./01_FAO_Land_Flaechen.csv')
  },
   {
    "key": "logging",
    "name": {
      "de": "Abholzung",
      "en": ""
    },
    "description": {
      "de": "Entwaldete Fläche in Quadratkilometern pro Jahr",
      "en": ""
    },
    "quelle": "FAO",
    "link": "",
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
    "data": require('./02_FAO_Wald_Abholzung.csv')
  },
   {
    "key": "biodiversity",
    "name": {
      "de": "Rote Liste",
      "en": ""
    },
    "description": {
      "de": "Rote-Liste-Index von 0 bis 1",
      "en": ""
    },
    "quelle": "IUCN",
    "link": "",
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
    "data": require('./03_Red_List_Index.csv')
  },
     {
    "key": "protected",
    "name": {
      "de": "Geschützte Flächen",
      "en": ""
    },
    "description": {
      "de": "Anteil der für Artenvielfalt wichtigen Flächen, die unter Schutz stehen (%)",
      "en": ""
    },
    "quelle": "UNEP",
    "link": "",
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
    "data": require('./04_Proportion_Protected.csv')
  },
       {
    "key": "developmentaid",
    "name": {
      "de": "Entwicklungshilfe",
      "en": ""
    },
    "description": {
      "de": "Entwicklungshilfe für Artenvielfalt im Jahr 2014 in US Dollar",
      "en": ""
    },
    "quelle": "OECD",
    "link": "",
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
    "data": require('./05_Development_assistance.csv')
  }

];
