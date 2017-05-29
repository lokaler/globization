import { validateQuestionnaire } from 'logic/questionnaires/validation';
import { prepareDataset, emptyDataset } from './datasets';

import cards0316 from './0316/cards/index';
import datasets0316 from './0316/datasets/index';
import cards0416 from './0416/cards/index';
import datasets0416 from './0416/datasets/index';
import cards0516 from './0516/cards/index';
import datasets0516 from './0516/datasets/index';
import cards0616 from './0616/cards/index';
import datasets0616 from './0616/datasets/index';
import cards0716 from './0716/cards/index';
import datasets0716 from './0716/datasets/index';
import cards0916 from './0916/cards/index';
import datasets0916 from './0916/datasets/index';
import cards1016 from './1016/cards/index';
import datasets1016 from './1016/datasets/index';
import cards1116 from './1116/cards/index';
import datasets1116 from './1116/datasets/index';
import cards1216 from './1216/cards/index';
import datasets1216 from './1216/datasets/index';
import cards1316 from './1316/cards/index';
import datasets1316 from './1316/datasets/index';
import cards0117 from './0117/cards/index';
import datasets0117 from './0117/datasets/index';
import cards0217 from './0217/cards/index';
import datasets0217 from './0217/datasets/index';


let questionnaires = {
  '0316': {
    title: {
      de: 'Konsum',
      en: 'Consumption'
    },
    options: {
      showBackButton: true
    },
    cards: cards0316,
    datasets: datasets0316
  },
  '0416': {
    title: {
      de: 'Gesundheit',
      en: 'Health'
    },
    options: {
      showBackButton: true
    },
    cards: cards0416,
    datasets: datasets0416
  },
  '0516': {
    title: {
      de: 'Armut',
      en: 'Poverty'
    },
    options: {
      showBackButton: true,
      lastButtonLabel: 'explore'
    },
    cards: cards0516,
    datasets: datasets0516
  },
  '0616': {
    title: {
      de: 'Korruption',
      en: 'Corruption'
    },
    options: {
      showBackButton: true,
      lastButtonLabel: 'explore'
    },
    cards: cards0616,
    datasets: datasets0616
  },
  '0716': {
    title: {
      de: 'Reisen',
      en: 'Travel'
    },
    options: {
      showBackButton: true,
      lastButtonLabel: 'explore'
    },
    cards: cards0716,
    datasets: datasets0716
  },
  '0916': {
    title: {
      de: 'Energie',
      en: 'Energy'
    },
    options: {
      showBackButton: true,
      lastButtonLabel: 'explore'
    },
    cards: cards0916,
    datasets: datasets0916
  },
  1016: {
    title: {
      de: 'Biodiversität',
      en: 'biodiversity'
    },
    options: {
      showBackButton: true,
      lastButtonLabel: 'explore'
    },
    cards: cards1016,
    datasets: datasets1016
  },
  1116: {
    title: {
      de: 'Bildung',
      en: 'education'
    },
    options: {
      showBackButton: true,
      lastButtonLabel: 'explore'
    },
    cards: cards1116,
    datasets: datasets1116
  },
  1216: {
    title: {
      de: 'Arbeit',
      en: 'work'
    },
    options: {
      showBackButton: true,
      lastButtonLabel: 'explore'
    },
    cards: cards1216,
    datasets: datasets1216
  },
  1316: {
    title: {
      de: 'Ungleichheit',
      en: 'inequality'
    },
    options: {
      showBackButton: true,
      lastButtonLabel: 'explore'
    },
    cards: cards1316,
    datasets: datasets1316
  },
  '0117': {
    title: {
      de: 'Frauenrechte',
      en: 'women_rights'
    },
    options: {
      showBackButton: true,
      lastButtonLabel: 'explore'
    },
    cards: cards0117,
    datasets: datasets0117
  },

  '0217': {
    title: {
      de: 'Hunger',
      en: 'hunger'
    },
    options: {
      showBackButton: true,
      lastButtonLabel: 'explore'
    },
    cards: cards0217,
    datasets: datasets0217
  }

};

for (const questionnaire of Object.values(questionnaires)) {
  try {
    validateQuestionnaire(questionnaire);
  } catch (e) {
    if (e.name === 'ValidationError') {
      questionnaires = {
        validationError: {
          message: e.message
        }
      };
    } else {
      throw e;
    }
  }
}

for (const questionnaire of Object.values(questionnaires)) {
  questionnaire.datasets.push(emptyDataset);
  questionnaire.datasets.forEach(prepareDataset);
}

export default questionnaires;
