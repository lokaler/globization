/* eslint-disable no-shadow */

export function validateQuestionnaire(questionnaire) {
  if (__DEV__) {
    const ajv = require('ajv')();
    const schema = require('./schema');
    const validate = ajv.compile(schema.questionnaire);
    const valid = validate(questionnaire.cards);
    if (!valid) {
      const errors = JSON.stringify(validate.errors, null, 2);
      throw new Error(`Questionnaire is invalid - ${errors}`);
    }
    for (const card of questionnaire.cards) {
      for (const widget of card.content) {
        const type = Object.keys(widget)[0];
        const validate = ajv.compile(schema.widgets[type]);
        const valid = validate(widget);
        if (!valid) {
          const errors = JSON.stringify(validate.errors, null, 2);
          throw new Error(`Widget "${ type }" is invalid - ${errors}`);
        }
      }
    }
  }
}
