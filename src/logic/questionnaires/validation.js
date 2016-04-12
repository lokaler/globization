import ajv from 'ajv';
import schema from './schema';

export function validateQuestionnaire(questionnaire) {
  if (__DEV__) {
    const validate = ajv().compile(schema);
    const valid = validate(questionnaire.cards);
    if (!valid) {
      const errors = JSON.stringify(validate.errors, null, 2);
      throw new Error(`Questionnaire is invalid - ${errors}`);
    }
  }
}
