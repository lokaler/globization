import ajv from 'ajv';
import schema from '../data/schema';
import { cloneDeep } from 'lodash';
import funcs from './questionnaire-functions';
import store from '../store';

function compileExpression(expr) {
  const funcBody = `return ${expr};`;
  try {
    /* eslint-disable */
    const func = new Function('inputs', 'i', 'funcs', 'f', 'state', funcBody);
    /* eslint-enable */
    return function wrappedFunc(inputs) {
      const inputs_ = {};
      for (const [k, v] of Object.entries(inputs)) {
        inputs_[k] = v.value;
      }
      return func(inputs, inputs_, funcs, funcs, store.getState());
    };
  } catch (e) {
    throw new Error(`Error in expression "${expr}"`, e.toString());
  }
}

function compileExpressionsInData(data) {
  return cloneDeep(data).map(card =>
    card.content.map(part => {
      const answer = part.answer;
      if (answer) {
        const answerKey = answer.answerKey;
        if (answerKey) {
          answer.answerKey = answerKey.map(expr => compileExpression(expr));
        }
      }
      return part;
    })
  );
}

function compileContext(context, userInput) {
  const compiledContext = {};
  Object.keys(context).forEach((key) => {
    const func = compileExpression(context[key]);
    compiledContext[key] = func(userInput);
  });
  return compiledContext;
}

export function validateData(data) {
  if (__DEV__) {
    const validate = ajv().compile(schema);
    const valid = validate(data);

    if (!valid) {
      const errors = JSON.stringify(validate.errors, null, 2);
      throw new Error(`Question data is not valid - errors: ${errors}`);
    }
  }
  compileExpressionsInData(data);
}

export {
  compileExpression,
  compileContext
};
