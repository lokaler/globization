/* eslint-disable no-shadow */

export class ValidationError extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'ValidationError';
  }
}

export function validateQuestionnaire(questionnaire) {
  function fail(message) {
    throw new ValidationError(message);
  }

  if (process.env.NODE_ENV === "development" && false) {
    const ajv = require('ajv')();
    const schema = require('./schema');
    const validate = ajv.compile(schema.questionnaire);
    const valid = validate(questionnaire.cards);
    if (!valid) {
      const errors = JSON.stringify(validate.errors, null, 2);
      fail(
        `Questionnaire "${ questionnaire.title }" is invalid - ${errors}`
      );
    }
    for (const card of questionnaire.cards) {
      for (const obj of card.content) {
        const [type, widget] = Object.entries(obj)[0];
        const widgetSchema = schema.widgets[type];
        if (!widgetSchema) {
          throw new Error(`Schema for widget ${ type } is undefined`);
        }
        const validate = ajv.compile(widgetSchema);
        const valid = validate(widget);
        if (!valid) {
          const errors = JSON.stringify(validate.errors, null, 2);
          fail(
            `Card "${ card.title }" - Widget "${ type }" is invalid - ${errors}`
          );
        }
      }
    }
  }
}
