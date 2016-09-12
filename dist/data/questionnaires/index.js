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
