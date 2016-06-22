/* eslint-disable */

export default [
  {
    "key": "bmiWoman",
    "name": {
      "de": "Body-Mass-Index",
      "en": "Body Mass Index"
    },
    "description": {
      "de": "Durchschnittlicher BMI Frauen in 2014",
      "en": "Average BMI for women in 2014"
    },
    "linkedSet": [
      {
        "key": "bmiWoman",
        "value": "female"
      },
      {
        "key": "bmiMan",
        "value": "male"
      }
    ],
    "quelle": "The Lancet",
    "link": "",
    "unit": "",
    "fixed": 0,
    "domain": [
      20.8,
      34.8
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
    "colorSet": "Blues",
    "colorNum": 9,
    "data": require('./bmiWoman.csv')
  },
  {
    "key": "bmiMan",
    "name": {
      "de": "Body-Mass-Index",
      "en": "Body Mass Index"
    },
    "description": {
      "de": "Durchschnittlicher BMI Männer in 2014",
      "en": "Average BMI for men in 2014"
    },
    "linkedSet": [
      {
        "key": "bmiWoman",
        "value": "female"
      },
      {
        "key": "bmiMan",
        "value": "male"
      }
    ],
    "quelle": "The Lancet",
    "link": "",
    "unit": "",
    "fixed": 0,
    "domain": [
      20.1,
      32.2
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
    "colorSet": "Blues",
    "colorNum": 9,
    "data": require('./bmiMan.csv')
  },
  {
    "key": "overweightBoys",
    "name": {
      "de": "Übergewicht Jugendliche",
      "en": "Overweight youth"
    },
    "description": {
      "de": "Anteil übergewichtiger Jungen unter 20 Jahre in Prozent",
      "en": "Share of overweight boys under 20 as a percentage"
    },
    "linkedSet": [
      {
        "key": "overweightBoys",
        "value": "male"
      },
      {
        "key": "overweightGirls",
        "value": "female"
      }
    ],
    "quelle": "The Lancet",
    "link": "http://www.thelancet.com/journals/lancet/article/PIIS0140-6736%2814%2960460-8/abstract",
    "unit": "%",
    "fixed": 0,
    "domain": [
      1,
      47.7
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
    "colorSet": "Blues",
    "colorNum": 9,
    "data": require('./overweightBoys.csv')
  },
  {
    "key": "overweightGirls",
    "name": {
      "de": "Übergewicht Jugendliche",
      "en": "Overweight youth"
    },
    "description": {
      "de": "Anteil übergewichtiger Mädchen unter 20 Jahre in Prozent",
      "en": "Share of overweight girls under 20 as a percentage"
    },
    "linkedSet": [
      {
        "key": "overweightBoys",
        "value": "male"
      },
      {
        "key": "overweightGirls",
        "value": "female"
      }
    ],
    "quelle": "The Lancet",
    "link": "http://www.thelancet.com/journals/lancet/article/PIIS0140-6736%2814%2960460-8/abstract",
    "unit": "%",
    "fixed": 0,
    "domain": [
      1,
      66.1
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
    "colorSet": "Blues",
    "colorNum": 9,
    "data": require('./overweightGirls.csv')
  },
  {
    "key": "diabetesWoman",
    "name": {
      "de": "Diabetes",
      "en": "Diabetes"
    },
    "description": {
      "de": "Anteil Frauen mit Diabetes 2014 in Prozent",
      "en": "Share of women with diabetes as a percentage"
    },
    "linkedSet": [
      {
        "key": "diabetesWoman",
        "value": "female"
      },
      {
        "key": "diabetesMen",
        "value": "male"
      }
    ],
    "quelle": "NCD Risk Factor Collaboration",
    "link": "",
    "unit": "%",
    "fixed": 0,
    "domain": [
      2.8,
      32.9
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
    "colorSet": "Blues",
    "colorNum": 9,
    "data": require('./diabetesWoman.csv')
  },
  {
    "key": "diabetesMen",
    "name": {
      "de": "Diabetes",
      "en": "Diabetes"
    },
    "description": {
      "de": "Anteil Männer mit Diabetes 2014 in Prozent",
      "en": "Share of men with diabetes in 2014 as a percentage"
    },
    "linkedSet": [
      {
        "key": "diabetesWoman",
        "value": "female"
      },
      {
        "key": "diabetesMen",
        "value": "male"
      }
    ],
    "quelle": "NCD Risk Factor Collaboration",
    "link": "",
    "unit": "%",
    "fixed": 0,
    "domain": [
      4.2,
      30.8
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
    "colorSet": "Blues",
    "colorNum": 9,
    "data": require('./diabetesMen.csv')
  },
  {
    "key": "notMoving",
    "name": {
      "de": "Bewegungsmangel",
      "en": "Lack of exercise"
    },
    "description": {
      "de": "Anteil der Jugendlichen zwischen 11 und 17 Jahren, die sich zu wenig bewegen in Prozent",
      "en": "Share of youth between 11 and 17 who exercise too little -- as a percentage"
    },
    "quelle": "WHO",
    "link": "http://apps.who.int/gho/data/view.main.2482ADO?lang=en",
    "unit": "%",
    "fixed": 0,
    "domain": [
      70.5,
      94.8
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
    "colorSet": "Blues",
    "colorNum": 9,
    "data": require('./notMoving.csv')
  },
  {
    "key": "alcoholConsume",
    "name": {
      "de": "Alkoholkonsum",
      "en": "Alcohol consumption"
    },
    "description": {
      "de": "Pro Woche und Person getrunkener Alkohol in Anzahl 0,5-Liter-Biere umgerechnet",
      "en": "Alcohol drunken per week by a person in numbers of 0.5 litre beers"
    },
    "quelle": "WHO",
    "link": "http://apps.who.int/gho/data/node.main.A1032?lang=en?showonly=GISAH",
    "unit": "",
    "fixed": 0,
    "domain": [
      0.1,
      14.1
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
    "colorSet": "Blues",
    "colorNum": 9,
    "data": require('./alcoholConsume.csv')
  }
]
