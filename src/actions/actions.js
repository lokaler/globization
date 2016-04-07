import * as types from '../constants/ActionTypes';
import querystring from 'querystring';

// question data actions
export function receiveQuestionData(jsonData) {
  return { type: types.SET_QUESTIONNAIRE, data: jsonData };
}

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

export function postQuestionAnswer(payload) {
  const url = `https://uebermorgen-logbuch.lokaler.de?${querystring.stringify(payload)}`;
  // const url = `http://10.0.0.197?${querystring.stringify(payload)}`;
  return dispatch => {
    dispatch(postingQuestionAnswer());
    fetch(url, {
      method: 'POST'
    });
  };
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

// slider and chioces actions
export function updateUserInput(key, value) {
  return {
    type: types.UPDATE_USERINPUT,
    key,
    value
  };
}

export function zoomToCountry(name) {
  return {
    type: types.ZOOM_TO_COUNTRY,
    name
  };
}

export function changeVis(val) {
  return {
    type: types.CHANGE_VIS,
    val
  };
}

export function setCard(index, dataId) {
  return dispatch => {
    if (dataId) {
      dispatch(setDataSet(dataId));
    }
    dispatch(changeVis({ active: null, tooltip: { active: false } }));
    dispatch({ type: types.SET_CARD, index });
  };
}

export function getUrlParameters() {
  return {
    type: types.GET_URL_PARAMETERS
  };
}

export function setWindowSize(sizes) {
  return {
    type: types.SET_WINDOW_SIZE,
    sizes
  };
}
