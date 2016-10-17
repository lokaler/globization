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
    "link": "http://data.un.org/Data.aspx?q=forest&d=FAO&f=itemCode:6661&c=2,3,4,5,6,7&s=countryName:asc,elementCode:asc,year:desc&v=1",
    "unit": "",
    "fixed": 1,
    "domain": [
      0,
      8100000
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
    "colorSet": "Greens",
    "colorNum": 9,
    "data": require('./00_Flaeche_Wald.csv')
  },
  {
    "key": "amount_logging",
    "name": {
      "de": "Landfläche",
      "en": ""
    },
    "description": {
      "de": "Landfläche in Quadratkilometern",
      "en": ""
    },
    "quelle": "FAO",
    "link": "http://data.worldbank.org/indicator/AG.LND.TOTL.K2",
    "unit": "",
    "fixed": 1,
    "domain": [
      0,
      18000000
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
    "colorSet": "Greens",
    "colorNum": 9,
    "data": require('./01_FAO_Land_Flaechen.csv')
  },
   {
    "key": "deforestation",
    "name": {
      "de": "Abholzung",
      "en": ""
    },
    "description": {
      "de": "Entwaldete Fläche in Quadratkilometern pro Jahr",
      "en": ""
    },
    "quelle": "FAO",
    "link": "http://data.un.org/Data.aspx?q=forest&d=FAO&f=itemCode:6661&c=2,3,4,5,6,7&s=countryName:asc,elementCode:asc,year:desc&v=1",
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
    "colorSet": "Greens",
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
    "link": "http://data.un.org/Data.aspx?q=red+list+index&d=SDGs&f=series:ER_RSK_LST&c=2,3,11,13,14&s=ref_area_name:asc,time_period:desc&v=1",
    "unit": "",
    "fixed": 1,
    "domain": [
      0,
      .99
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
    "colorSet": "Greens",
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
    "link": "http://data.un.org/Data.aspx?q=biodiversity&d=SDGs&f=series:ER_PTD_TERR&c=2,3,11,13,14&s=ref_area_name:asc,time_period:desc&v=1",
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
    "colorSet": "Greens",
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
    "colorSet": "Greens",
    "colorNum": 9,
    "data": require('./05_Development_assistance.csv')
  }

];
