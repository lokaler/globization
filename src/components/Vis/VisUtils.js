/* eslint-disable */

export default {
  calculateBla: (params) => {
    const newValue = 123 + params;
    return newValue;
  },
  log: (...theArgs) => {
    const debug = true;
    if (debug) console.log.apply(console, theArgs);
  },
  pathCircle : (x, y, radius) => {
    return "M" + x + "," + (y + radius)
        + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius
        + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius
        + "z";
  },
  svgStripePattern: `<pattern id="pattern-stripe"
              width="6" height="6"
              patternUnits="userSpaceOnUse"
              patternTransforms="rotate(45)">
              <g transform="rotate(45,2,4)">
               <rect width="2" height="8" transform="translate(0,0)" fill="#eee"></rect>
              </g>
            </pattern>`
};
