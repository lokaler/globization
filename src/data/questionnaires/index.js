import { validateData } from 'logic/questionnaire';

import _0316 from './0316/index';
import _0416 from './0416/index';

let questionnaires = {
  '0316': {
    title: 'Erster Fragebogen März',
    options: {
      showBackButton: false
    },
    data: _0316
  },
  '0416': {
    title: 'Zweiter Fragebogen April',
    options: {},
    data: _0416
  }
};

for (const questionnaire of Object.values(questionnaires)) {
  try {
    validateData(questionnaire.data);
  } catch (e) {
    questionnaires = {
      error: {
        message: e.message
      }
    };
  }
}

export default questionnaires;
