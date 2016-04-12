export function validateQuestionnaire(questionnaire) {
  if (__DEV__) {
    const ajv = require('ajv');
    const schema = require('./schema').default;
    const validate = ajv().compile(schema);
    const valid = validate(questionnaire.cards);
    if (!valid) {
      const errors = JSON.stringify(validate.errors, null, 2);
      throw new Error(`Questionnaire is invalid - ${errors}`);
    }
  }
}
