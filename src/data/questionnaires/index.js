import _0316 from './0316/index';
import { validateData } from 'logic/questionnaire';

const questionnaires = {
  '0316': {
    title: 'Erster Fragebogen März',
    options: {
      showBackButton: false
    },
    data: _0316
  }
};

for (const questionnaire of Object.values(questionnaires)) {
  validateData(questionnaire.data);
}

export default questionnaires;
