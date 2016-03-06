export default {
  calculateBla: (params) => {
    const newValue = 123 + params;
    return newValue;
  },
  log: (...theArgs) => {
    if (false) console.log.apply(console, theArgs);
  }
};
