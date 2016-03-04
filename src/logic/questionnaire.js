import ajv from 'ajv';
import schema from '../data/schema';
import { cloneDeep } from 'lodash';


function compileExpression(expr) {
  const funcBody = `return ${expr};`;
  try {
    return (new Function('inputs', funcBody)); // eslint-disable-line no-new-func
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
  compileExpression
};
