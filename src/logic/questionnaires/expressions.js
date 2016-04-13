import { isArray } from 'lodash';
import functions from './functions';
import store from '../../store';

export function compileExpression(expr) {
  if (isArray(expr)) {
    expr = expr.join(' '); // eslint-disable-line no-param-reassign
  }
  const funcBody = `return ${expr};`;
  /* eslint-disable */
  const func = new Function('i', 'f', 'state', funcBody);
  /* eslint-enable */
  return function wrappedFunc(inputs) {
    return func(inputs, functions, store.getState());
  };
}

export function compileContext(context, userInput) {
  const compiledContext = {};
  Object.keys(context).forEach((key) => {
    const func = compileExpression(context[key]);
    compiledContext[key] = func(userInput);
  });
  return compiledContext;
}
