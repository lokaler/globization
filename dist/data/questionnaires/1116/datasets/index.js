/* eslint-disable */

export default [
  {
    "key": "noschool",
    "name": {
      "de": "Keine Schule",
      "en": ""
    },
    "description": {
      "de": "Anteil der 9- bis 12-Jährigen, die nie eine Schule besucht haben (in %)",
      "en": ""
    },
    "quelle": "World Inequality Database on Education",
    "link": "http://www.education-inequalities.org/indicators/edu0_prim#?sort=mean&dimension=all&group=all&age_group=edu0_prim&countries=all",
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
    "colorSet": "Blues",
    "colorNum": 9,
    "data": require('./00_no_school.csv')
  },
  {
    "key": "years_schooling",
    "name": {
      "de": "Schulzeit",
      "en": ""
    },
    "description": {
      "de": "Durchschnittliche Schulzeit in Jahren",
      "en": ""
    },
    "quelle": "World Inequality Database on Education",
    "link": "http://www.education-inequalities.org/indicators/eduyears#?sort=disparity&dimension=wealth_quintile&group=|Quintile%205|Quintile%201&age_group=eduyears_20&countries=all",
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
    "colorSet": "Blues",
    "colorNum": 9,
    "data": require('./01_years_schooling.csv')
  },
   {
    "key": "school_poor",
    "name": {
      "de": "Schulzeit Arme",
      "en": ""
    },
    "description": {
      "de": "Durchschnittliche Schulzeit von Kindern der ärmsten zehn Prozent in Jahren",
      "en": ""
    },
    "quelle": "World Inequality Database on Education",
    "link": "http://www.education-inequalities.org/indicators/eduyears#?sort=disparity&dimension=wealth_quintile&group=|Quintile%205|Quintile%201&age_group=eduyears_20&countries=all",
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
    "colorSet": "Blues",
    "colorNum": 9,
    "data": require('./02_years_schooling_poor.csv')
  },
   {
    "key": "edu_money",
    "name": {
      "de": "Geld für Bildung",
      "en": ""
    },
    "description": {
      "de": "Staatliche Ausgaben für Bildung in Prozent der Wirtschaftskraft",
      "en": ""
    },
    "quelle": "UNESCO",
    "link": "http://data.uis.unesco.org/Index.aspx?queryid=181",
    "unit": "%",
    "fixed": 1,
    "domain": [
      0,
      9
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
    "colorSet": "Blues",
    "colorNum": 9,
    "data": require('./03_spending_GDP.csv')
  },
     {
    "key": "edu_1980",
    "name": {
      "de": "Grundschule 1980",
      "en": ""
    },
    "description": {
      "de": "Anteil der 15- bis 19-Jährigen, die keine Grundschule besucht hat, im Jahr 1980",
      "en": ""
    },
    "quelle": "Wittgenstein Centre for Demography and Global Human Capital",
    "link": "http://witt.null2.net/shiny/wic/",
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
    "colorSet": "Blues",
    "colorNum": 9,
    "data": require('./04_primary_attainment_1980.csv')
  },
  {
    "key": "edu_2015",
    "name": {
      "de": "Grundschule 2015",
      "en": ""
    },
    "description": {
      "de": "Anteil der 15- bis 19-Jährigen, die keine Grundschule besucht hat, im Jahr 2015",
      "en": ""
    },
    "quelle": "Wittgenstein Centre for Demography and Global Human Capital",
    "link": "http://witt.null2.net/shiny/wic/",
    "unit": "%",
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
    "colorSet": "Blues",
    "colorNum": 9,
    "data": require('./05_primary_attainment_2015.csv')
  },
  {
    "key": "edu_all",
    "name": {
      "de": "Bildung für alle",
      "en": ""
    },
    "description": {
      "de": "Anzahl Jahre bis der Anteil der 15- bis 19-Jährigen ohne Grundschulbesuch unter fünf Prozent fällt",
      "en": ""
    },
    "quelle": "Wittgenstein Centre for Demography and Global Human Capital",
    "link": "http://witt.null2.net/shiny/wic/",
    "unit": "Jahre",
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
    "colorSet": "Blues",
    "colorNum": 9,
    "data": require('./06_sdg_goal_reached.csv')
  },
  {
    "key": "computer_skills",
    "name": {
      "de": "Computer-Kenntnisse",
      "en": ""
    },
    "description": {
      "de": "Anteil der Erwachsenen, die eine Datei oder einen Ordner auf einem Computer verschieben können",
      "en": ""
    },
    "quelle": "Uno",
    "link": "http://data.un.org/Data.aspx?q=ICT&d=SDGs&f=series%3aSE_ADT_ICTCPY",
    "unit": "%",
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
    "colorSet": "Blues",
    "colorNum": 9,
    "data": require('./07_computer_skills.csv')
  }



];
