/* eslint-disable */

export default [
  {
    "key": "noschool",
    "name": {
      "de": "Keine Schule",
      "en": "No School"
    },
    "description": {
      "de": "Anteil der 9- bis 12-Jährigen, die nie eine Schule besucht haben (in %)",
      "en": "Share of children aged 9-12 years who have never been to school."
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
      "en": "Time Spent at School"
    },
    "description": {
      "de": "Durchschnittliche Schulzeit in Jahren",
      "en": "Average Number of Years of Schooling"
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
      "en": "Years of Schooling of Poor"
    },
    "description": {
      "de": "Durchschnittliche Schulzeit von Kindern der ärmsten zehn Prozent in Jahren",
      "en": "The average time spent at school by children in the poorest 10 percent of society in years."
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
      "en": "Expenditure on education"
    },
    "description": {
      "de": "Staatliche Ausgaben für Bildung in Prozent der Wirtschaftskraft",
      "en": "Government expenditure on education as a percentage of GDP"
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
      "en": "Primary attainment 1980"
    },
    "description": {
      "de": "Anteil der 15- bis 19-Jährigen, die keine Grundschule besucht hat, im Jahr 1980",
      "en": "Share of 15- to 19-year-olds in 1980 who hadn’t ever attended primary school"
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
      "en": "Primary attainment in 2015"
    },
    "description": {
      "de": "Anteil der 15- bis 19-Jährigen, die keine Grundschule besucht hat, im Jahr 2015",
      "en": "Share of 15- to 19-year-olds in 2015 who had never attended primary school"
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
      "en": "Education for all"
    },
    "description": {
      "de": "Anzahl Jahre bis der Anteil der 15- bis 19-Jährigen ohne Grundschulbesuch unter fünf Prozent fällt",
      "en": "Year in which the share of 15- to 19-year-olds without any primary education attainment will fall below 5 percent"
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
      "en": "Copying files"
    },
    "description": {
      "de": "Anteil der Erwachsenen, die eine Datei oder einen Ordner auf einem Computer verschieben können",
      "en": "Proportion of adults who can copy or move a file or folder on their computer"
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
