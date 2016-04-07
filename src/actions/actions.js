import * as types from '../constants/ActionTypes';


export function postingQuestionAnswer() {
  return { type: types.POSTING_QUESTION_ANSWER };
}

export function setQuestionnaire(id) {
  return { type: types.SET_QUESTIONNAIRE, id };
}
