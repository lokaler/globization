/* eslint-disable */

export default [
  {
    "key": "calories",
    "name": {
      "de": "Kalorien",
      "en": ""
    },
    "description": {
      "de": "Anteil der verfügbaren an den benötigten Kalorien (2014-16) [in Prozent]",
      "en": ""
    },
    "quelle": "FAO",
    "link": "http://www.fao.org/economic/ess/ess-fs/ess-fadata/en/",
    "unit": "",
    "fixed": 0,
    "domain": [
      60,
      202
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
    "colorSet": "Reds",
    "colorNum": 9,
    "data": require('./1_Kalorien.csv')
  },

  {
    "key": "malnutrition",
    "name": {
      "de": "Unterernährung",
      "en": ""
    },
    "description": {
      "de": "Anteil der unterernährten Menschen (2014-16) [in Prozent]",
      "en": ""
    },
    "quelle": "Welthungerhilfe, FAO, IFPRI",
    "link": "http://www.welthungerhilfe.de/archiv-welthunger-index/mediathek/whi-2016-pdf.html?type=6663&tx_rsmmediathek_fe1%5Baction%5D=singleDownload",
    "unit": "%",
    "fixed": 1,
    "domain": [
      0,
      63
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
    "data": require('./2_Unterernaehrung.csv')
  },
   {
    "key": "foodprice",
    "name": {
      "de": "Lebensmittelpreise ",
      "en": ""
    },
    "description": {
      "de": "Lebensmittelpreisindex (USA = 1,0), Lebensmittelpreise relativ zu jeweiligen Verbraucherpreisen (i.d.R. 2014)",
      "en": ""
    },
    "quelle": "FAO, Weltbank, ILO",
    "link": "http://www.fao.org/economic/ess/ess-fs/ess-fadata/en/",
    "unit": "",
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
    "colorSet": "Reds",
    "colorNum": 9,
    "data": require('./3_Preise.csv')
  },
   {
    "key": "growthdelay",
    "name": {
      "de": "Führungskräfte",
      "en": "Management"
    },
    "description": {
      "de": "Anteil der Kinder unter fünf Jahren mit Wachstumsverzögerung",
      "en": ""
    },
    "quelle": "Welthungerhilfe, Unicef, WHO, IFPRI",
    "link": "http://www.welthungerhilfe.de/archiv-welthunger-index/mediathek/whi-2016-pdf.html?type=6663&tx_rsmmediathek_fe1%5Baction%5D=singleDownload",
    "unit": "%",
    "fixed": 1,
    "domain": [
      0,
      63
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
    "data": require('./4_Wachstumsverzoegerung.csv')
  },
     {
    "key": "worldfoodpro",
    "name": {
      "de": "Welternährungsprogramm",
      "en": ""
    },
    "description": {
      "de": "Anteil der Einzahlung ins Welternährungsprogramm am Bruttoinlandsprodukt (2015) [in Promille]",
      "en": ""
    },
    "quelle": "WHO",
    "link": "http://apps.who.int/gho/data/node.main.MATMORT?lang=en",
    "unit": "‰",
    "fixed": 1,
    "domain": [
      0,
      2.7
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
    "data": require('./5_Welternaehrungsprogramm.csv')
  }
];
