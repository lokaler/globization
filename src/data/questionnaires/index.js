import { validateQuestionnaire } from 'logic/questionnaires/validation';
import { prepareDataset } from './datasets';

import cards0316 from './0316/cards/index';
import datasets0316 from './0316/datasets.json';
import cards0416 from './0416/cards/index';
import datasets0416 from './0416/datasets.json';
import cards0516 from './0516/cards/index';
import datasets0516 from './0516/datasets.json';

const noneDataset = {
  key: 'none',
  data: [],
  translate: [0, 90],
  scale: 1
};

datasets0316.push(noneDataset);
datasets0316.forEach(prepareDataset);
datasets0416.push(noneDataset);
datasets0416.forEach(prepareDataset);
datasets0516.push(noneDataset);
datasets0516.forEach(prepareDataset);

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

export default questionnaires;
