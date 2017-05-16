/* eslint-disable */

export default [
  {
    "key": "grundschule",
    "name": {
      "de": "Grundschule",
      "en": "Primary school"
    },
    "description": {
      "de": "Anteil der Mädchen, die die Grundschule abschließen (i.d.R. 2014) [in Prozent], (vorzeitige Einschulungen können zu Anteilen von mehr als 100 % führen)",
      "en": "Share of girls who complete primary school (most data from 2014) [as a percentage], (entering into school early can lead to shares of greater than 100%)"
    },
    "quelle": "UNESCO",
    "link": "http://data.uis.unesco.org/index.aspx?queryid=160",
    "unit": "%",
    "fixed": 0,
    "domain": [
      0,
      108
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
      "de": "Frauenwahlrecht",
      "en": "Women's right to vote"
    },
    "description": {
      "de": "Jahre, seit dem Frauen auf nationaler Ebene das gleiche aktive Wahlrecht wie Männer haben",
      "en": "Years that have passed since women were granted the same voting rights as men at the national level"
    },
    "quelle": "Wikipedia",
    "link": "https://en.wikipedia.org/wiki/Women%27s_suffrage",
    "unit": "Jahre",
    "fixed": 1,
    "domain": [
      0,
      135
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
      "en": "Proportion of women"
    },
    "description": {
      "de": "Frauenanteil in Vorständen und Aufsichtsräten (2015) [in Prozent]",
      "en": "Share of women on management and supervisory boards (2015) [as a percentage]"
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
      "en": "Management"
    },
    "description": {
      "de": "Frauenanteil unter Führungskräften, Akademikern und Technikern (2015) [in Prozent]",
      "en": "Beschriftung: Share of women among managers, academics and engineers (2015) [as a percentage]"
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
      "en": "Maternal mortality"
    },
    "description": {
      "de": "Zahl der Frauen, die vor, während oder in den ersten sechs Wochen nach der Geburt sterben (2015) [je 100.000 Geburten]",
      "en": "The number of women who die before, during or in the first six weeks after giving birth (2015) [per 100,000 births]"
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
   "de": "Lohngefälle",
   "en": "Pay gap"
 },
 "description": {
   "de": "Unbereinigter Gender Pay Gap (i.d.R. 2015) [in Prozent]",
   "en": "Gender pay gap in unadjusted form (most data from 2015) [as a percentage]"
 },
 "quelle": "Eurostat",
 "link": "http://ec.europa.eu/eurostat/tgm/table.do?tab=table&init=1&plugin=1&language=en&pcode=tsdsc340",
 "unit": "%",
 "fixed": 1,
 "domain": [
   0,
   27
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
 "de": "Kabinettsposten",
 "en": "Cabinet posts"
},
"description": {
 "de": "Frauenanteil an Kabinettsposten (2016) [in mind. … Prozent]",
 "en": "Share of women in government cabinet posts (2016) [minimum percentage]"
},
"quelle": "WomanStats",
"link": "http://www.womanstats.org/new/",
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
