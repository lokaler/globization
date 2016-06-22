/* eslint-disable */

export default [
  {
    "key": "nettoHousehold",
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
    "colorSet": "Greens",
    "colorNum": 9,
    "data": require('./nettoHousehold.csv')
  },
  {
    "key": "poorNation",
    "name": {
      "de": "Armutsgrenze",
      "en": "At-risk-of-poverty rate"
    },
    "description": {
      "de": "Anteil Bevölkerung unter nationaler Armutsgrenze [%]",
      "en": "At-risk-of-poverty rate [%]"
    },
    "quelle": "UN",
    "link": "http://data.un.org/Data.aspx?d=MDG&f=seriesRowID%3A581",
    "unit": "%",
    "fixed": 0,
    "domain": [
      0,
      90
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
    "colorSet": "Greens",
    "colorNum": 9,
    "data": require('./poorNation.csv')
  },
  {
    "key": "poorEU",
    "name": {
      "de": "Armut in der EU",
      "en": "Poverty in the EU"
    },
    "description": {
      "de": "Anteil armutsgefährderter Einwohner [%]",
      "en": "At-risk-of-poverty rate [%]"
    },
    "quelle": "SILC",
    "link": "",
    "unit": "%",
    "fixed": 0,
    "domain": [
      0,
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
    "colorSet": "Greens",
    "colorNum": 9,
    "data": require('./poorEU.csv')
  },
  {
    "key": "incomeDistEU",
    "name": {
      "de": "S80/S20-Koeffizient",
      "en": "S80/S20 ratio"
    },
    "description": {
      "de": "Ungleichheit der Einkommensverteilung [S80/S20-Verhältnis]",
      "en": "Inequality of income distribution [S80/S20 ratio]"
    },
    "quelle": "EuroStat",
    "link": "http://ec.europa.eu/eurostat/data/database?node_code=ilc_pns4",
    "unit": "",
    "fixed": 0,
    "domain": [
      0,
      7
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
    "colorSet": "Greens",
    "colorNum": 9,
    "data": require('./incomeDistEU.csv')
  },
  {
    "key": "lessThan125USD",
    "name": {
      "de": "Extreme Armut ",
      "en": "Extreme Poverty"
    },
    "description": {
      "de": "Anteil Bevölkerung mit weniger als 1,25$/Tag [%]",
      "en": "Share of population with less than $1.25 per day [%]"
    },
    "quelle": "UNdata",
    "link": "http://data.un.org/Data.aspx?d=MDG&f=seriesRowID%3a580",
    "unit": "",
    "fixed": 0,
    "domain": [
      0,
      100
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
    "colorSet": "Greens",
    "colorNum": 9,
    "data": require('./lessThan125USD.csv')
  },
  {
    "key": "militaryExp2015",
    "name": {
      "de": "Militärausgaben",
      "en": "Defense spending"
    },
    "description": {
      "de": "Militärausgaben 2015 [Mrd. US-Dollar]",
      "en": "Defense spending [billion US dollars]"
    },
    "quelle": "SIPRI",
    "link": "http://data.un.http://www.sipri.org/research/armaments/milex/milex_database/Data.aspx?d=MDG&f=seriesRowID%3a580",
    "unit": "Mrd. USD",
    "fixed": 0,
    "domain": [
      0,
      600
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
    "colorSet": "Greens",
    "colorNum": 9,
    "data": require('./militaryExp2015.csv')
  },
  {
    "key": "childMortality",
    "name": {
      "de": "Kindersterblichkeit",
      "en": "Mortality rate"
    },
    "description": {
      "de": "Sterblichkeitsrate Kinder unter 5 Jahre pro 1000 Lebendgeburten",
      "en": "Mortality rate for children under 5 years per 1,000 live births"
    },
    "quelle": "UNdata",
    "link": "http://data.un.org/Data.aspx?d=MDG&f=seriesRowID%3a561",
    "unit": "",
    "fixed": 0,
    "domain": [
      0,
      180
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
    "colorSet": "Greens",
    "colorNum": 9,
    "data": require('./childMortality.csv')
  },
  {
    "key": "primaryEdu",
    "name": {
      "de": "Grundschulbildung",
      "en": "Primary school education"
    },
    "description": {
      "de": "Anteil Bevölkerung mit mindestens Grundschulbildung [%]",
      "en": "Share of population with at least a primary school education (%)"
    },
    "quelle": "UNESCO",
    "link": "http://data.uis.unesco.org/?ReportId=163",
    "unit": "%",
    "fixed": 0,
    "domain": [
      0,
      100
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
    "colorSet": "Greens",
    "colorNum": 9,
    "data": require('./primaryEdu.csv')
  },
  {
    "key": "accessSanitary",
    "name": {
      "de": "Zugang zu Sanitäranlagen",
      "en": "Sanitary facilities"
    },
    "description": {
      "de": "Anteil Bevölkerung mit Zugang zu Sanitäranlagen [%]",
      "en": "Share of population with access to sanitary facilities [%]"
    },
    "quelle": "UNdata",
    "link": "http://data.un.org/Data.aspx?d=MDG&f=seriesRowID%3a668 ",
    "unit": "%",
    "fixed": 0,
    "domain": [
      0,
      100
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
    "colorSet": "Greens",
    "colorNum": 9,
    "data": require('./accessSanitary.csv')
  },
  {
    "key": "multiPov",
    "name": {
      "de": "Anteil der MPI-armen Bevölkerung",
      "en": "Poverty according to MPI"
    },
    "description": {
      "de": "Anteil extrem armer Bevölkerung laut Multi-Poverty-Index [%]",
      "en": "Share of population suffering from extreme poverty according to MPI [%]"
    },
    "quelle": "UNDP",
    "link": "http://hdr.undp.org/en/composite/MPI",
    "unit": "%",
    "fixed": 0,
    "domain": [
      0,
      100
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
    "colorSet": "Greens",
    "colorNum": 9,
    "data": require('./multiPov.csv')
  },
  {
    "key": "happyWorld",
    "name": {
      "de": "World Hapiness Index ",
      "en": "Happiness index"
    },
    "description": {
      "de": "Glücks-Index (0 = sehr unglücklich, 10 = sehr glücklich)",
      "en": "Happiness index (0 = very unhappy, 10 = very happy)"
    },
    "quelle": "Worldhappiness Report",
    "link": "http://worldhappiness.report/wp-content/uploads/sites/2/2016/03/HR-V1Ch2_web.pdf",
    "unit": "",
    "fixed": 0,
    "domain": [
      0,
      10
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
    "colorSet": "Greens",
    "colorNum": 9,
    "data": require('./happyWorld.csv')
  }
];
