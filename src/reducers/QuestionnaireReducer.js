import questionnaires from 'data/questionnaires/index';

import {
  SET_QUESTIONNAIRE, UPDATE_USERINPUT, SET_CARD
} from '../constants/ActionTypes';

const initialState = {
  activeChapter: 0,
  activeCard: -1,
  inputValues: {},
  questionData: []
};

export default function questions(state = initialState, action) {
  switch (action.type) {

    case SET_QUESTIONNAIRE: {
      const questionData = questionnaires[action.id].data;
      return {
        ...state,
        questionData,
        inputValues: {}
      };
    }

    case UPDATE_USERINPUT: {
      return {
        ...state,
        inputValues: {
          ...state.inputValues,
          [action.key]: action.value
        }
      };
    }

    case SET_CARD:
      return {
        ...state,
        activeCard: action.index
      };

    default:
      return state;
  }
}
