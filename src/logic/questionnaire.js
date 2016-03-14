import ajv from 'ajv';
import schema from '../data/schema';
import { cloneDeep, isUndefined } from 'lodash';
import * as QFuncs from './questionnaire-functions';


function compileExpression(expr) {
  const funcBody = `return ${expr};`;
  try {
    return (new Function('inputs', funcBody)); // eslint-disable-line no-new-func
  } catch (e) {
    throw new Error(`Error in expression "${expr}"`, e.toString());
  }
}

function compileFunction(functionSignature) {
  let returnFunc;

  // parse function name from signature
  const functionName = functionSignature.split('(')[0].trim();

  // check if function exists...
  if (!isUndefined(QFuncs[functionName])) {
    returnFunc = QFuncs[functionName];
  } else {
    throw new Error(`Function "${functionName}"" is not implemented.`);
  }

  return returnFunc;
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
    compiledContext[key] = context[key];
    const isFunction = /^[a-zA-Z]*\(.*\)$/.test(context[key]);
    if (isFunction) {
      let arg = context[key].match(/\(([^)]+)\)/);
      if (arg) {
        arg = arg[1];
      } else {
        arg = '';
      }
      const compiledArgument = compileExpression(arg)(userInput);
      try {
        compiledContext[key] = compileFunction(context[key])(compiledArgument, this.props);
      } catch (e) {
        // console.log(e);
      }
    } else {
      try {
        compiledContext[key] = compileExpression(context[key])(userInput);
      } catch (e) {
        // console.log(e);
      }
    }
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
  compileFunction,
  compileContext
};
