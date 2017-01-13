/* eslint-disable */

export default [
  {
    "key": "meanworking",
    "name": {
      "de": "Durchschnittliche wöchentliche Arbeitszeit",
      "en": ""
    },
    "description": {
      "de": "Durchschnittliche wöchentliche Arbeitszeit (2012- 2015)",
      "en": ""
    },
    "quelle": "ILO",
    "link": "http://www.ilo.org/ilostat",
        "unit": "h",
    "fixed": 1,
    "domain": [
      0,
      63
    ],
    "skala": [
      0,
      24
    ],
    "translate": [
      0,
      90
    ],
    "scale": 1,
    "colorSet": "Reds",
    "colorNum": 9,
    "data": []
  },
  {
    "key": "limitedcontracts1984",
    "name": {
      "de": "Befristung 1984",
      "en": ""
    },
    "description": {
      "de": "Anteil der Arbeitsverträge, die befristet sind, im Jahr 1984",
      "en": ""
    },
    "quelle": "ILO",
    "link": "http://www.ilo.org/ilostat",
        "unit": "%",
    "fixed": 1,
    "domain": [
      0,
      18
    ],
    "skala": [
      0,
      24
    ],
    "translate": [
      0,
      90
    ],
    "scale": 1,
    "colorSet": "Reds",
    "colorNum": 9,
    "data": require('./01_top_10_percent.csv')
  },
  {
    "key": "limitedcontracts2014",
    "name": {
      "de": "Befristung 2014",
      "en": ""
    },
    "description": {
      "de": "Anteil der Arbeitsverträge, die befristet sind, im Jahr 2014",
      "en": ""
    },
    "quelle": " ILO",
    "link": " http://www.ilo.org/ilostat",
    "unit": "%",
    "fixed": 1,
    "domain": [
      0,
      36
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
    "data": require('./02_top_1_percent.csv')
  },
   {
    "key": "childrenlabour",
    "name": {
      "de": "Kinderarbeit",
      "en": ""
    },
    "description": {
      "de": "Anteil der Fünf- bis Siebzehnjährigen, die arbeiten",
      "en": ""
    },
    "quelle": "ILO",
    "link": "http://www.ilo.org/ilostat",
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
    "colorSet": "Reds",
    "colorNum": 9,
    "data": require('./03_s80_s20_ratio.csv')
  },
   {
    "key": "youthunemployment",
    "name": {
      "de": "Jugendarbeitslosigkeit",
      "en": ""
    },
    "description": {
      "de": "Arbeitslosenquote bei Unter-25-Jährigen in Prozent",
      "en": ""
    },
    "quelle": "ILO",
    "link": "http://www.ilo.org/ilostat",
    "unit": "%",
    "fixed": 1,
    "domain": [
      0,
      54
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
    "data": require('./04_gini_index.csv')
  },
     {
    "key": "unemployment",
    "name": {
      "de": "Arbeitslosigkeit",
      "en": ""
    },
    "description": {
      "de": "Arbeitslosenquote bei Über-24-Jährigen",
      "en": ""
    },
    "quelle": "ILO",
    "link": "http://www.ilo.org/ilostat",
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
    "colorSet": "Reds",
    "colorNum": 9,
    "data": require('./05_richest_10_percent.csv')
  }
];
