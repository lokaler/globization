/* eslint-disable */

export default [
  {
    "key": "meanworking",
    "name": {
      "de": "Durchschnittliche wöchentliche Arbeitszeit",
      "en": "average weekly working time"
    },
    "description": {
      "de": "Durchschnittliche wöchentliche Arbeitszeit (2012- 2015)",
      "en": "average weekly working time (2012 - 2015)"
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
    "data": require('./00_mean_working_hours_globus.csv')
  },
  {
    "key": "limitedcontracts1984",
    "name": {
      "de": "Befristung 1984",
      "en": "Temporary Employment 1984"
    },
    "description": {
      "de": "Anteil der Arbeitsverträge, die befristet sind, im Jahr 1984",
      "en": "Share of fixed-term employment contracts in 1984."
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
    "data": require('./01_1984_temporary_employment.csv')
  },
  {
    "key": "limitedcontracts2014",
    "name": {
      "de": "Befristung 2014",
      "en": "Temporary Jobs in 2014"
    },
    "description": {
      "de": "Anteil der Arbeitsverträge, die befristet sind, im Jahr 2014",
      "en": "Share of employment contracts with a fixed term in 2014"
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
    "data": require('./02_2014_temporary_employment.csv')
  },
   {
    "key": "childrenlabour",
    "name": {
      "de": "Kinderarbeit",
      "en": "Child Labor"
    },
    "description": {
      "de": "Anteil der Fünf- bis Siebzehnjährigen, die arbeiten",
      "en": "Share of five- and seven-year-olds who work"
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
    "data": require('./03_Kinderarbeit.csv')
  },
   {
    "key": "youthunemployment",
    "name": {
      "de": "Jugendarbeitslosigkeit",
      "en": "Youth Unemployment"
    },
    "description": {
      "de": "Arbeitslosenquote bei Unter-25-Jährigen in Prozent",
      "en": "Unemployment rate of youth under 25 as a percentage"
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
    "data": require('./04_youth_unemployment.csv')
  },
     {
    "key": "unemployment",
    "name": {
      "de": "Arbeitslosigkeit",
      "en": "Unemployment"
    },
    "description": {
      "de": "Arbeitslosenquote bei Über-24-Jährigen",
      "en": "Unemployment rate among over-24-year-olds"
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
    "data": require('./05_rest_unemployment.csv')
  },

  {
    "key": "maternyleave",
    "name": {
      "de": "Mutterschutz",
      "en": "Maternity Leave"
    },
    "description": {
      "de": "Anzahl Wochen des bezahlten Mutterschutzes",
      "en": "Number of weeks of paid maternity leave"
    },
    "quelle": "ILO",
    "link": " http://www.ilo.org/ilostat",
    "unit": "Wochen",
    "fixed": 1,
    "legendCorner": true,
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
    "data": require('./06_Maternity leave benefits.csv')
  }



];
