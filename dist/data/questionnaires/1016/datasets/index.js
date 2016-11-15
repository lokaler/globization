/* eslint-disable */

export default [
  {
    "key": "forest",
    "name": {
      "de": "Waldfläche",
      "en": "Forest area"
    },
    "description": {
      "de": "Anteil der Landfläche, die mit Wald bedeckt ist (%)",
      "en": "Share of land area covered by forest (%)"
    },
    "quelle": "FAO",
    "link": "http://data.un.org/Data.aspx?q=forest&d=FAO&f=itemCode:6661&c=2,3,4,5,6,7&s=countryName:asc,elementCode:asc,year:desc&v=1",
    "unit": "",
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
    "colorSet": "Greens",
    "colorNum": 9,
    "data": require('./00_Flaeche_Wald_Anteil.csv')
  },
  {
    "key": "amount_logging",
    "name": {
      "de": "Landfläche",
      "en": "Land area"
    },
    "description": {
      "de": "Landfläche in Quadratkilometern",
      "en": "Land area in square kilometers"
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
      "en": "Deforestation"
    },
    "description": {
      "de": "Entwaldete Fläche in Quadratkilometern pro Jahr",
      "en": "Deforested areas in square kilometers per year"
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
      "en": "Red List"
    },
    "description": {
      "de": "Rote-Liste-Index von 0 bis 1",
      "en": "Red List Index from 0 to 1"
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
      "en": "Protected Areas"
    },
    "description": {
      "de": "Anteil der für Artenvielfalt wichtigen Flächen, die unter Schutz stehen (%)",
      "en": "Share of areas important to biodiversity that have been placed under protection (%)"
    },
    "quelle": "UNEP",
    "link": "http://data.un.org/Data.aspx?q=biodiversity&d=SDGs&f=series:ER_PTD_TERR&c=2,3,11,13,14&s=ref_area_name:asc,time_period:desc&v=1",
    "unit": "",
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
    "colorSet": "Greens",
    "colorNum": 9,
    "data": require('./04_Proportion_Protected.csv')
  },
  {
    "key": "developmentaid",
    "name": {
      "de": "Entwicklungshilfe",
      "en": "Development aid"
    },
    "description": {
      "de": "Entwicklungshilfe für Artenvielfalt im Jahr 2014 in US-Dollar",
      "en": "Development aid for biodiversity in 2014, in US dollars"
    },
    "quelle": "OECD",
    "link": "http://data.un.org/Data.aspx?q=biodiversity&d=SDGs&f=series:DC_ODA_BDVDL&c=2,3,11,13,14&s=ref_area_name:asc,time_period:desc&v=1",
    "unit": "",
    "fixed": 1,
    "domain": [
      0,
      900000000
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
