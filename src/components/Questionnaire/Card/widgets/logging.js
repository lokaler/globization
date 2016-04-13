export default class Logger {

  constructor(actions, active) {
    if (!active) {
      for (const func of ['clear', 'log', 'error']) {
        this[func] = () => {}; // eslint-disable-line arrow-body-style
      }
    }
  }

  clear() {
    console.clear(); // eslint-disable-line no-console
  }

  log(...args) {
    console.debug(...args); // eslint-disable-line no-console
  }

  error(...args) {
    console.error(...args); // eslint-disable-line no-console
  }
}
