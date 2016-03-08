/* eslint-disable */

import * as types from '../constants/ActionTypes';
import { validateData } from '../logic/questionnaire';

// question data actions
export function receiveQuestionData(jsonData) {
  return { type: types.RECEIVE_QUESTION_DATA, data: jsonData };
}

export function receiveDataSets(jsonData) {
  return { type: types.RECEIVE_DATASETS, data: jsonData };
}

export function errorQuestionData(err) {
  console.log(err)
  return { type: types.ERROR_QUESTION_DATA, error: err };
}

export function loadingQuestionData() {
  return { type: types.LOADING_QUESTION_DATA };
}

export function requestQuestionData(url) {
  return dispatch => {
    dispatch(loadingQuestionData());
    fetch(url)
      .then(res => res.json())
      .then(jsonData => {
        validateData(jsonData);
        dispatch(receiveQuestionData(jsonData));
      })
      .catch((err) => dispatch(errorQuestionData(err)));
  };
}

export function requestDataSets(url) {
  return dispatch => {
    fetch(url)
      .then(res => res.json())
      .then(jsonData => {
        dispatch(receiveDataSets(jsonData));
      })
      .catch((err) => dispatch(errorQuestionData(err)));
  };
}

export function setCard(index, dataId) {
  return dispatch => {
    dispatch(setDataSet(dataId));
    dispatch({ type: types.SET_CARD, index: index });
  }
}

// slider and chioces actions
export function updateUserInput(key, value) {
  return {
    type: types.UPDATE_USERINPUT,
    key,
    value
  };
}

// master Datareducer
export function setDataSet(name) {
  return {
    type: types.SET_DATASET,
    name
  };
}

// vis actions
export function updatePos(latlng) {
  return {
    type: types.UPDATE_POS,
    latlng
  };
}

export function zoomToCountry(name) {
  return {
    type: types.ZOOM_TO_COUNTRY,
    name
  };
}

export function changeType(val) {
  return {
    type: types.CHANGE_TYPE,
    val
  };
}

export function updatePaths(paths) {
  return {
    type: types.UPDATE_PATH,
    paths
  };
}

export function changeVis(val) {
  return {
    type: types.CHANGE_VIS,
    val
  };
}
