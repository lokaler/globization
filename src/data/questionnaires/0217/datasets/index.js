/* eslint-disable */

export default [
  {
    "key": "calories",
    "name": {
      "de": "Kalorien",
      "en": "Caloric Intake"
    },
    "description": {
      "de": "Anteil der verfügbaren an den benötigten Kalorien (2014-16) [in Prozent]",
      "en": "Share of necessary per-capita caloric intake actually available (2014-2016) [as a percentage]"
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
      "en": "Undernourishmen"
    },
    "description": {
      "de": "Anteil der unterernährten Menschen (2014-16) [in Prozent]",
      "en": "Share of undernourished people (2014-2016) (as a percentage)"
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
      "en": "Food Prices"
    },
    "description": {
      "de": "Lebensmittelpreisindex (USA = 1,0), Lebensmittelpreise relativ zu jeweiligen Verbraucherpreisen (i.d.R. 2014)",
      "en": "Food Price Index (USA = 1.0), food prices relative to respective consumer prices (in most cases 2014)"
    },
    "quelle": "FAO, World Bank, ILO",
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
      "de": "Wachstumsverzögerung",
      "en": "Stunted Growth"
    },
    "description": {
      "de": "Anteil der Kinder unter fünf Jahren mit Wachstumsverzögerung",
      "en": "Share of children under 5 years of age who suffer from stunted growth"
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
      "en": "World Food Program "
    },
    "description": {
      "de": "Anteil der Einzahlung ins Welternährungsprogramm am Bruttoinlandsprodukt (2015) [in Promille]",
      "en": "Share of gross domestic product contributed to the World Food Program as a percentage of GDP"
    },
    "quelle": "WFP, World Bank",
    "link": "http://documents.wfp.org/stellent/groups/public/documents/eb/wfp282360.pdf",
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
