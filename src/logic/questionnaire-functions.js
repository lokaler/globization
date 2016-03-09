/*eslint-disable*/
import { isUndefined } from 'lodash';


/*
* Takes an input value and returns the 
* country code with the data closest to that value.
*/
export function getCountry(inputValue, state) {
  if(!state.master.dataset) { return 0; };

  let distance = Number.MAX_VALUE;
  let result = null;
  
  state.master.dataset.data.forEach((data) => {
    let cDist = Math.abs(data.value - inputValue);
    if(cDist < distance) {
      result = data.iso;
      distance = cDist;
    }
  });

  return result;
}
