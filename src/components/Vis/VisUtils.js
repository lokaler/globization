/* eslint-disable */

export default {
  calculateBla: (params) => {
    const newValue = 123 + params;
    return newValue;
  },
  log: (...theArgs) => {
    const debug = true;
    if (debug) console.log.apply(console, theArgs);
  }
};
