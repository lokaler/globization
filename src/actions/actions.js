import * as types from '../constants/ActionTypes';

export function receiveQuestionData(jsonData) {
  return { type: types.RECEIVE_QUESTION_DATA, data: jsonData };
}

export function errorQuestionData(err) {
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
      .then((jsonData) => dispatch(receiveQuestionData(jsonData)))
      .catch((err) => dispatch(errorQuestionData(err)));
  };
}
