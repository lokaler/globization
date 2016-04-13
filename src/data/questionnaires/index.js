import { validateQuestionnaire } from 'logic/questionnaires/validation';
import { prepareDataset } from './datasets';

import cards0316 from './0316/cards/index';
import datasets0316 from './0316/datasets.json';
import cards0416 from './0416/cards/index';
import datasets0416 from './0416/datasets.json';

datasets0316.forEach(prepareDataset);
datasets0416.forEach(prepareDataset);

let questionnaires = {
  '0316': {
    title: 'Erster Fragebogen März',
    options: {
      showBackButton: true
    },
    cards: cards0316,
    datasets: datasets0316
  },
  '0416': {
    title: 'Zweiter Fragebogen April',
    options: {
      showBackButton: true
    },
    cards: cards0416,
    datasets: datasets0416
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
