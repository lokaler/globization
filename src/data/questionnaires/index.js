import { validateQuestionnaire } from 'logic/questionnaires/validation';
import { prepareDataset, emptyDataset } from './datasets';

import cards1 from './1/cards/index';
import datasets1 from './1/datasets/index';


let questionnaires = {
  1: {
    title: {
      de: 'Quiz zu Wasser',
      en: 'work'
    },
    options: {
      showBackButton: true,
      lastButtonLabel: 'explore'
    },
    cards: cards1,
    datasets: datasets1
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
