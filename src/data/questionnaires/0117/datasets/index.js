/* eslint-disable */

export default [
  {
    "key": "grundschule",
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
    "colorSet": "Purples",
    "colorNum": 9,
    "data": require('./1_Grundschule.csv')
  },

  {
    "key": "wahlrecht",
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
    "unit": "€",
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
    "colorSet": "Purples",
    "colorNum": 9,
    "data": require('./2_wahlrecht.csv')
  },
   {
    "key": "vorstaende",
    "name": {
      "de": "Frauenanteil",
      "en": ""
    },
    "description": {
      "de": "Frauenanteil in Vorständen und Aufsichtsräten (2015) [in Prozent]",
      "en": ""
    },
    "quelle": "Credit Suisse Research",
    "link": "http://publications.credit-suisse.com/tasks/render/file/index.cfm?fileid=5A7755E1-EFDD-1973-A0B5C54AFF3FB0AE",
    "unit": "%",
    "fixed": 1,
    "domain": [
      0,
      45
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
    "colorSet": "Purples",
    "colorNum": 9,
    "data": require('./3_vorstaende.csv')
  },
   {
    "key": "fuehrungspos",
    "name": {
      "de": "Führungskräfte",
      "en": ""
    },
    "description": {
      "de": "Frauenanteil unter Führungskräften, Akademikern und Technikern (2015) [in Prozent]",
      "en": ""
    },
    "quelle": "ILO",
    "link": "http://www.ilo.org/ilostat/faces/oracle/webcenter/portalapp/pagehierarchy/Page3.jspx?MBI_ID=12",
    "unit": "%",
    "fixed": 1,
    "domain": [
      9,
      72
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
    "colorSet": "Purples",
    "colorNum": 9,
    "data": require('./4_fuehrungspositionen.csv')
  },
     {
    "key": "muettersterb",
    "name": {
      "de": "Müttersterblickkeit",
      "en": "Wealth Top 10%"
    },
    "description": {
      "de": "Zahl der Frauen, die vor, während oder in den ersten sechs Wochen nach der Geburt sterben (2015) [je 100.000 Geburten]",
      "en": ""
    },
    "quelle": "WHO",
    "link": "http://apps.who.int/gho/data/node.main.MATMORT?lang=en",
    "unit": "",
    "fixed": 1,
    "domain": [
      0,
      1800
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
    "colorSet": "Purples",
    "colorNum": 9,
    "data": require('./5_muettersterblichkeit.csv')
  },
  {
 "key": "lohngefaelle",
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
 "colorSet": "Purples",
 "colorNum": 9,
 "data": require('./6_lohngefaelle.csv')
},
{
"key": "regierungsposten",
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
"colorSet": "Purples",
"colorNum": 9,
"data": require('./7_regierungsposten.csv')
}
];
