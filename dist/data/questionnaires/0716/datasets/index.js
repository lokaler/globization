/* eslint-disable */

export default [
  {
    "key": "travels",
    "name": {
      "de": "Urlaubsreisen pro Kopf",
      "en": "Per-capita vacation trips"
    },
    "description": {
      "de": "Jährliche Anzahl Urlaubsreisen pro Einwohner (Stand 2013/14)",
      "en": "Number of yearly per-capita vacation trips (for 2013/14)"
    },
    "quelle": "Weltbank/UNWTO",
    "link": "http://databank.worldbank.org/data/reports.aspx?source=world-development-indicators",
    "unit": "",
    "fixed": 1,
    "domain": [
      0,
      1.6
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
    "data": require('./travels.csv')
  },
  {
    "key": "travelingtofromgermany",
    "name": {
      "de": "Anteile Reiseziele",
      "en": "Share of destinations"
    },
    "description": {
      "de": "Anteil der Reisen in das jeweilige Land (an allen Reisen der Einwohner Deutschlands von mehr als fünf Tagen in 2015)",
      "en": "Share of trips of longer than five days made by German residents (2015)"
    },
    "quelle": "FUR",
    "link": "http://www.fur.de/fileadmin/user_upload/RA_2016/RA2016_Erste_Ergebnisse_DE.pdf",
    "unit": "",
    "fixed": 0,
    "legendCorner": true,
    "domain": [
      0,
      15
    ],
    "skala": [
      0

    ],
    "translate": [
      -124,
      485
    ],
    "scale": 2.4,
    "colorSet": "Purples",
    "colorNum": 9,
    "data": require('./travelingtofromgermany.csv')
  },
  {
    "key": "cruiseships",
    "name": {
      "de": "Kreuzfahrten",
      "en": "Cruises"
    },
    "description": {
      "de": "Passagiere auf europäischen Kreuzfahrtschiffen pro Jahr pro 1000 Einwohner (2015)",
      "en": "Passengers on European cruise ships per year per 1,000 residents (2015)"
    },
    "quelle": "CLIA",
    "link": "http://www.irn-research.com/wp-content/uploads/2016/03/CLIA-Europe-Stats-and-marts-2015-1.pdf",
    "unit": "",
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
      -124,
      485
    ],
    "scale": 2.4,
    "colorSet": "Purples",
    "colorNum": 9,
    "data": require('./cruiseships.csv')
  },
  {
    "key": "touristsfromgermany",
    "name": {
      "de": "Touristen aus Deutschland",
      "en": "Tourists from Germany"
    },
    "description": {
      "de": "An der Grenze angekommene Touristen oder Besucher aus Deutschland (I.d.R. 2014)",
      "en": "Tourists or visitors from Germany crossing the border (most data from 2014)"
    },
    "quelle": "UNWTO",
    "link": "http://statistics.unwto.org/publication/yearbook-tourism-statistics-2016-edition",
    "unit": "",
    "fixed": 0,
    "domain": [
      0,
      36000000
    ],
    "skala": [
      0,
      5,
      10,
      30
    ],
    "translate": [
      0,
      90
    ],
    "scale": 1,
    "colorSet": "Purples",
    "colorNum": 9,
    "data": require('./touristsfromgermany.csv')
  },
  {
    "key": "tourismexpenditures",
    "name": {
      "de": "Ausgaben Auslandsreisen",
      "en": "Spending on trips abroad"
    },
    "description": {
      "de": "Von Reisenden pro Kopf pro Jahr im Ausland ausgegebenes Geld [Euro]",
      "en": "Money spent by travelers abroad per capita, per annum [euro]"
    },
    "quelle": "Weltbank/UNWTO",
    "link": "http://databank.worldbank.org/data/reports.aspx?source=world-development-indicators",
    "unit": "€",
    "fixed": 0,
    "domain": [
      0,
      4500
    ],
    "skala": [
      0,
      5,
      10,
      30
    ],
    "translate": [
      0,
      90
    ],
    "scale": 1,
    "colorSet": "Purples",
    "colorNum": 9,
    "data": require('./tourismexpenditures.csv')
  },
  {
    "key": "amountholidays",
    "name": {
      "de": "Urlaubstage",
      "en": "Vacation days"
    },
    "description": {
      "de": "Gesetzlicher Urlaubsanspruch",
      "en": "Legally prescribed number of vacation days"
    },
    "quelle": "Mercer via Statista",
    "link": "http://de.statista.com/statistik/daten/studie/38834/umfrage/gesetzlicher-urlaubsanspruch-und-anzahl-der-feiertage/",
    "unit": "",
    "fixed": 0,
    "domain": [
      10,
      30
    ],
    "skala": [
      0,
      5,
      10,
      30
    ],
    "translate": [
      -124,
      485
    ],
    "scale": 2.4,
    "colorSet": "Purples",
    "colorNum": 9,
    "data": require('./amountholidays.csv')
  },
  {
    "key": "airportstravelingto",
    "name": {
      "de": "Flüge von Deutschland aus",
      "en": "Passengers flown from German airports"
    },
    "description": {
      "de": "Von deutschen Flughäfen zu diesem Endziel abgeflogene Passagiere in 2015",
      "en": "The number of passengers flown from German airports to this destination in 2015"
    },
    "quelle": "Destatis",
    "link": "https://www.destatis.de/DE/Publikationen/Thematisch/TransportVerkehr/Luftverkehr/LuftverkehrAusgewaehlteFlugplaetze.html ",
    "unit": "",
    "fixed": 0,
    "domain": [
      0,
      13500000
    ],
    "skala": [
      0,
      5,
      10,
      30
    ],
    "translate": [
      0,
      90
    ],
    "scale": 1,
    "colorSet": "Purples",
    "colorNum": 9,
    "data": require('./airportstravelingto.csv')
  }

];
