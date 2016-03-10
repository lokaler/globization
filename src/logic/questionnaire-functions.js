import { maxBy, minBy } from 'lodash';

/*
* Helper functions
*/
function getMaxCountryCode(inputValue, state) {
  return maxBy(state.master.dataset.data, d => parseFloat(d.value)).iso;
}

function getMinCountryCode(inputValue, state) {
  return minBy(state.master.dataset.data, d => parseFloat(d.value)).iso;
}

function getGermanNameByCountryCode(countryCode, state) {
  return state.master.master.filter(d => d.alpha3 === countryCode)[0].name_deu;
}

function getEnglishNameByCountryCode(countryCode, state) {
  return state.master.master.filter(d => d.alpha3 === countryCode)[0].name;
}

/*
* Takes an input value and returns the
* country code with the data closest to that value.
*/
export function getCountryCode(inputValue, state) {
  let distance = Number.MAX_VALUE;
  let result = null;

  state.master.dataset.data.forEach((data) => {
    const cDist = Math.abs(data.value - inputValue);
    if (cDist < distance) {
      result = data.iso;
      distance = cDist;
    }
  });

  return result;
}

/*
* Takes an input value and returns the
* German country name that is the closes to that value.
*/
export function getGermanCountryName(inputValue, state) {
  const countryCode = getCountryCode(...arguments);
  const lookup = state.master.master.filter(d => d.alpha3 === countryCode)[0];
  return lookup.name_deu;
}

export function getMaxGermanCountryName(inputValue, state) {
  const countryCode = getMaxCountryCode(inputValue, state);
  return getGermanNameByCountryCode(countryCode, state);
}

export function getMaxEnglishCountryName(inputValue, state) {
  const countryCode = getMaxCountryCode(inputValue, state);
  return getEnglishNameByCountryCode(countryCode, state);
}

export function getMaxValue(inputValue, state) {
  return maxBy(state.master.dataset.data, d => parseFloat(d.value)).value;
}

export function getMinGermanCountryName(inputValue, state) {
  const countryCode = getMinCountryCode(inputValue, state);
  return getGermanNameByCountryCode(countryCode, state);
}

export function getMinEnglishCountryName(inputValue, state) {
  const countryCode = getMinCountryCode(inputValue, state);
  return getEnglishNameByCountryCode(countryCode, state);
}

export function getMinValue(inputValue, state) {
  return minBy(state.master.dataset.data, d => parseFloat(d.value)).value;
}
