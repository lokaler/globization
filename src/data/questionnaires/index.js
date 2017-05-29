import { validateQuestionnaire } from 'logic/questionnaires/validation';
import { prepareDataset, emptyDataset } from './datasets';

import cards1216 from './1216/cards/index';
import datasets1216 from './1216/datasets/index';


let questionnaires = {
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
