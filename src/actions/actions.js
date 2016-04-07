import * as types from '../constants/ActionTypes';


export function receiveDataSets(jsonData) {
  return { type: types.RECEIVE_DATASETS, data: jsonData };
}

export function errorDataSets(err) {
  console.log(err); // eslint-disable-line no-console
  return { type: types.ERROR_DATASETS, error: err };
}

export function postingQuestionAnswer() {
  return { type: types.POSTING_QUESTION_ANSWER };
}

export function setQuestionnaire(id) {
  return { type: types.SET_QUESTIONNAIRE, id };
}

export function requestDataSets(url) {
  return dispatch => {
    fetch(url)
      .then(res => res.json())
      .then(jsonData => {
        dispatch(receiveDataSets(jsonData));
      })
      .catch((err) => dispatch(errorDataSets(err)));
  };
}

// master Datareducer
export function setDataSet(name) {
  return {
    type: types.SET_DATASET,
    name
  };
}
